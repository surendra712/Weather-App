@echo off
echo Pushing Weather App to GitHub...
echo.
echo You will be prompted for your GitHub username and password/token
echo.
set /p username=Enter your GitHub username: 
echo.
echo For password, use a Personal Access Token (PAT) from GitHub
echo Create one at: https://github.com/settings/tokens
echo Select "repo" scope when creating the token
echo.
set /p token=Enter your GitHub Personal Access Token: 
echo.
git remote set-url origin https://%username%:%token%@github.com/surendra712/Weather-App.git
git push -u origin main
echo.
echo If successful, your code is now on GitHub!
echo Visit: https://github.com/surendra712/Weather-App
pause