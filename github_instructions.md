# GitHub Push Instructions

Follow these steps to push your Weather App to GitHub:

## Option 1: Using GitHub Desktop (Recommended)

1. **Download and Install GitHub Desktop**
   - Go to: https://desktop.github.com/
   - Download and install the application

2. **Open GitHub Desktop and Sign In**
   - Launch GitHub Desktop
   - Sign in with your GitHub account

3. **Add Your Local Repository**
   - Click on "File" > "Add local repository"
   - Browse to: `d:/Projects/weather-notification`
   - Click "Add Repository"

4. **Publish to GitHub**
   - Click the "Publish repository" button
   - Make sure the repository name is set to "Weather-App"
   - Click "Publish repository"

## Option 2: Using Git Command Line with Personal Access Token

1. **Create a Personal Access Token on GitHub**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" > "Generate new token (classic)"
   - Give it a name like "Weather App Push"
   - Select the "repo" scope
   - Click "Generate token"
   - **IMPORTANT**: Copy the token immediately

2. **Configure Git with Your Token**
   - Open Command Prompt or PowerShell
   - Run these commands (replace with your information):

```
cd d:/Projects/weather-notification
git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/surendra712/Weather-App.git
git push -u origin main
```

## Option 3: Manual Upload on GitHub.com

1. **Create the Repository on GitHub**
   - Go to: https://github.com/new
   - Name it "Weather-App"
   - Click "Create repository"

2. **Upload Files Manually**
   - Click "uploading an existing file"
   - Drag and drop all your HTML files and README.md
   - Add a commit message
   - Click "Commit changes"

## Files to Include

Make sure these files are included in your repository:
- enhanced-weather-app.html
- simple-weather.html
- index.html
- README.md

## After Pushing

Once your code is on GitHub, you can enable GitHub Pages to make your weather app accessible online:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be published at: https://surendra712.github.io/Weather-App/