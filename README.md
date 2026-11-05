# DevOps Internship – Task 1
 Automated Code Deployment Using CI/CD Pipeline (GitHub Actions)

## Project Overview
This project demonstrates the automation of building and deploying a Node.js web application using a Continuous Integration and Continuous Deployment (CI/CD) pipeline.

## Objective
To set up a CI/CD pipeline that automatically tests the application, builds a Docker image, and pushes the image to Docker Hub using GitHub Actions.
# Technologies Used: 
- GitHub
- GitHub Actions
- Node.js
- Docker
- Docker Hub

## CI/CD Workflow
The pipeline follows these stages:
1. Source Code: Store the Node.js application in GitHub.
2. Continuous Integration:** Automatically install dependencies and run application tests.
3. Docker Build:** Build a Docker image using the Dockerfile.
4. Docker Hub Authentication:** Securely authenticate using GitHub Actions Secrets.
5. Image Deployment:** Push the Docker image to Docker Hub.

# Workflow Trigger:
The pipeline is configured to execute automatically whenever code is pushed to the `main` branch.

# Project Deliverables:
- Node.js sample application
- Dockerfile
- GitHub Actions workflow (`.github/workflows/main.yml`)
- Automated testing
- Docker image published to Docker Hub
To be updated after successful execution of the CI/CD pipeline.

## Task
Task 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)
DevOps Internship – Elevate Labs
