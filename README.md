<<<<<<< HEAD
# Node.js Demo App – GitHub Actions CI/CD

## Project objective
This project demonstrates a CI/CD pipeline that tests a Node.js application, builds a Docker image, and pushes the image to Docker Hub using GitHub Actions.

## Tools
- GitHub and GitHub Actions
- Node.js 22
- Docker
- Docker Hub

## Application endpoints
- `GET /` – returns a welcome message.
- `GET /health` – returns the application health status.
- Any other path – returns HTTP 404.

## CI/CD workflow
The workflow is stored at `.github/workflows/main.yml`.

1. GitHub Actions checks out the repository.
2. It sets up Node.js and installs dependencies with `npm ci`.
3. It runs automated tests with `npm test`.
4. For pushes to `main` (and manual runs), it configures Docker Buildx.
5. It authenticates to Docker Hub using GitHub Actions secrets.
6. It builds the Docker image and pushes `latest` and the commit-SHA tag.

Pull requests run the tests but do not publish an image. This prevents untrusted pull-request code from using publishing credentials.

## Run locally

Requirements: Node.js 20 or newer and Docker (only needed for the container steps).

```bash
npm ci
npm test
npm start
```

Open `http://localhost:3000` and `http://localhost:3000/health`.

## Build and run with Docker

```bash
docker build -t nodejs-demo-app:local .
docker run --rm -p 3000:3000 nodejs-demo-app:local
```

Open `http://localhost:3000`.

## GitHub and Docker Hub setup

1. Create a public GitHub repository, for example `devops-task-1-cicd`.
2. Create a Docker Hub repository named `nodejs-demo-app`.
3. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**.
4. Add:
   - `DOCKERHUB_USERNAME`: your Docker Hub username.
   - `DOCKERHUB_TOKEN`: a Docker Hub access token with permission to push to the repository. Do not use or commit your Docker Hub password.
5. Push this project to the `main` branch.
6. Open the repository's **Actions** tab and confirm the workflow succeeds.
7. Open Docker Hub and confirm the `latest` and commit-SHA image tags exist.

## Security notes
Credentials are stored as GitHub Actions secrets and are not hard-coded in the workflow. Pull-request runs do not log in to Docker Hub or push images.

## Evidence to include in the submission
Capture screenshots of:
1. The repository file list showing the application, Dockerfile, README, and `.github/workflows/main.yml`.
2. The successful GitHub Actions workflow run with green check marks.
3. The Docker Hub repository showing the pushed image tags.
4. (Optional) The application response at `http://localhost:3000/health`.

## Troubleshooting
- If the workflow reports missing Docker Hub credentials, check that both repository secrets are spelled exactly as shown.
- If Docker Hub reports access denied, verify the token has write/push permission and the repository exists.
- If `npm ci` fails, ensure `package-lock.json` is committed with `package.json`.
- If the workflow does not start, verify the default branch is `main` and the workflow file path is `.github/workflows/main.yml`.
=======
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
>>>>>>> b820ff84a448f4f112c263acebf9aa9686a4a4b9
