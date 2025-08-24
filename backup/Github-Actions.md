
Artifacts:
----------
If a file generated during build process is called Artifacts.
e.g. : dist folder during build.

Jobs Sequence
needs : test->build-deploy


 - After Building a React Project a /dist folder/atifact will be created
   We will handle it github Actions
   
   - name: Upload Dist Artifacts
     uses: actions/upload-Artifact@v4


   After in deployment
   deployment:
         needs:build
         runs-on: ubuntu-latest
            steps:
            - name: Download Dist Artifacts
                uses: actions/download-artifact@v4
                with:
                  name: dist-files
                  path: dist



  github deployment pages:
  Static page deployments
  jobs:
  # Build job
  build:
    # <Not provided for brevity>
    # At a minimum this job should upload artifacts using actions/upload-pages-artifact

    # Deploy job
      deploy:
       # Add a dependency to the build job
         needs: build

            # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
            permissions:
            pages: write      # to deploy to Pages
            id-token: write   # to verify the deployment originates from an appropriate source

            # Deploy to the github-pages environment
            environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}

            # Specify runner + deployment step
            runs-on: ubuntu-latest
            steps:
            - name: Deploy to GitHub Pages
                id: deployment
                uses: actions/deploy-pages@v4 # or specific "vX.X.X" version tag for this action


# SONAR CLOUD
# ------------
# repository uri : https://sonarcloud.io/component_measures?id=tariqsulehri_vibe-coding-node

# 1. Create Organization
     - Select Plan
     - Select Repository

# 2. Settings

# Step # 1 : Create a GitHub Secret
     - Setting -> Analysis Methods 
       Automatic Analysis (Recommended) -> Keep is From ON to OFF

     -    Click on Github Actions
     -    Create a GitHub at  Settings > Secrets and variables > Actions (your repository)
     -    Name *:  SONAR_TOKEN (Copy and Paste Token Name & Value  from Sonar Cloud)  
     -    Secret * =  (Copy and Pate Value  from Sonar Cloud)


# Step # 2 : Create or update a build file

     - What option best describes your project?
     - Which OS do you run your build on?
 
   # Create or update your ->  .github/workflows/build.yml
     Here is a base configuration to run a SonarQube Cloud analysis on your master branch and Pull Requests. If you already have some GitHub Actions, you might want to just add some of these new steps to an existing one.
     
     Copy or Paste Code from SonarCloud 


# Step # 3 : Create ( sonar-project.properties ) at the root of your project

     - Create a configuration file in the root directory of the project and name it 
sonar-project.properties
     
        Copy or Paste Code from SonarCloud 

        
