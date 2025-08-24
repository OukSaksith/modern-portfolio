# Vercel Deployment Setup

This repository includes GitHub workflows for automated deployment to Vercel. There are two approaches you can use:

## Option 1: Vercel GitHub Integration (Recommended - Easier)

This is the simplest approach and uses Vercel's built-in GitHub integration.

### Setup Steps:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
   - Click "New Project" and import this repository
   - Vercel will automatically detect it's a Next.js project
   - Deploy the project

2. **Automatic Deployments:**
   - Once connected, Vercel will automatically deploy:
     - Production deployments on pushes to `main` branch
     - Preview deployments on pull requests
   - The `ci.yml` workflow will run tests and build checks in parallel

### What happens:
- The `ci.yml` workflow runs type checking, linting, and builds
- Vercel handles the deployment automatically when CI passes

## Option 2: Manual Vercel CLI Deployment (Advanced)

This approach uses the Vercel CLI through GitHub Actions for more control.

### Setup Steps:

1. **Get Vercel Tokens:**
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   ```

2. **Get Required Information:**
   ```bash
   # Get your Vercel token
   vercel --help # Follow instructions to create a token
   
   # Get your project details
   cat .vercel/project.json
   ```

3. **Add GitHub Secrets:**
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add these secrets:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your team/organization ID from `.vercel/project.json`
   - `VERCEL_PROJECT_ID`: Your project ID from `.vercel/project.json`

4. **Enable the Workflow:**
   - Rename `deploy.yml.disabled` to `deploy.yml` if you want to use this approach
   - Delete or disable the Vercel GitHub integration to avoid conflicts

## Environment Variables

If your project uses environment variables, add them in:
- **Vercel Dashboard:** Project Settings → Environment Variables
- **GitHub Secrets:** For any secrets needed during build

## Workflow Details

### CI Pipeline (`ci.yml`)
- Runs on every push and pull request
- Performs type checking with TypeScript
- Runs ESLint for code quality
- Builds the project to ensure it compiles correctly

### Deployment Pipeline (`deploy.yml`)
- Runs the full CI pipeline
- Deploys to Vercel using CLI commands
- Only deploys on successful builds

## Troubleshooting

### Build Failures
- Check the GitHub Actions logs for specific error messages
- Ensure all dependencies are properly listed in `package.json`
- Verify TypeScript types are correct (`npm run typecheck`)
- Check for linting errors (`npm run lint`)

### Deployment Issues
- Verify Vercel secrets are correctly set in GitHub
- Ensure your Vercel project is properly linked
- Check Vercel dashboard for deployment logs

### Environment Variables
- Production variables should be set in Vercel dashboard
- Build-time variables may need to be added to GitHub secrets
