#!/bin/bash

# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website with email integration"

# Add remote repository
git remote add origin https://github.com/Aradhana-Rawat/Portfolio.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main

echo "Deployment script completed. Please check the GitHub repository."
