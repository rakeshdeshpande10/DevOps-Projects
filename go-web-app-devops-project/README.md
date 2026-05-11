# Go Web App DevOps Project

## Overview

This project demonstrates an end-to-end DevOps workflow for deploying a Go-based web application on an AWS EKS cluster using modern CI/CD and GitOps practices.

The main objective of this project was to implement automated build, packaging, and deployment pipelines using tools commonly used in modern DevOps environments.

---

# Architecture

## Deployment Flow

GitHub Repository → GitHub Actions (CI) → Docker Hub → Helm Chart Update → ArgoCD → AWS EKS Cluster

---

# Tools & Technologies Used

| Category                | Tools                |
| ----------------------- | -------------------- |
| Source Control          | GitHub               |
| CI Pipeline             | GitHub Actions       |
| Containerization        | Docker               |
| Container Registry      | Docker Hub           |
| Container Orchestration | Kubernetes (AWS EKS) |
| Deployment Strategy     | GitOps               |
| CD Tool                 | ArgoCD               |
| Kubernetes Packaging    | Helm                 |
| Application Language    | Go                   |

---

# Project Objectives

* Automate build and deployment workflow
* Implement CI/CD pipeline using GitHub Actions
* Containerize a Go web application using Docker
* Deploy application to Kubernetes cluster on AWS EKS
* Implement GitOps-based deployment using ArgoCD
* Use Helm charts for Kubernetes deployment management

---

# CI/CD Workflow

## Continuous Integration (CI)

The CI pipeline is implemented using GitHub Actions.

### CI Steps

1. Checkout source code from GitHub repository
2. Build the Go application
3. Run application tests
4. Build Docker image
5. Push Docker image to Docker Hub
6. Update Helm chart with latest image version

---

## Continuous Deployment (CD)

The CD workflow is implemented using ArgoCD.

### CD Steps

1. ArgoCD continuously monitors Helm chart changes
2. Auto-sync detects updated image version
3. Deployment is triggered automatically
4. Application gets deployed to AWS EKS cluster

---

# Kubernetes Components Used

The following Kubernetes resources were used:

* Deployment
* Service
* Ingress

---

# Helm Implementation

Helm was used to package and manage Kubernetes deployment manifests.

Benefits of using Helm in this project:

* Simplified deployment management
* Easier configuration handling
* Reusable deployment templates
* Version-controlled application releases

---

# ArgoCD GitOps Implementation

ArgoCD was configured to automatically sync Kubernetes deployments whenever Helm chart updates were pushed to the repository.

This enabled:

* Automated deployments
* GitOps workflow implementation
* Improved deployment consistency
* Declarative infrastructure management

---

# Challenges Faced

## Go Version Mismatch in CI Pipeline

### Issue

The GitHub Actions pipeline failed during test execution due to mismatch in Go versions between local environment and CI environment.

### Resolution

Updated the GitHub Actions workflow to use the correct Go version to ensure consistency across environments.

### Learning

This helped in understanding the importance of environment consistency in CI/CD pipelines.

---

# Key Learnings

* Building end-to-end CI/CD workflows
* GitHub Actions pipeline implementation
* Docker image creation and registry integration
* Kubernetes deployment concepts
* Helm-based deployment management
* GitOps workflow using ArgoCD
* AWS EKS deployment process
* CI troubleshooting and debugging

---

# Conclusion

This project helped in understanding how modern DevOps tools integrate together to enable automated, scalable, and reliable application deployment workflows.

It also provided hands-on exposure to Kubernetes, GitOps, CI/CD automation, and cloud-native deployment practices.
