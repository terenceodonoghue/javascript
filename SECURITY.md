# Security

## Scanning

This repository uses a three-layer security scanning approach:

1. **Pre-commit** — [Gitleaks](https://github.com/gitleaks/gitleaks) runs on every commit via Lefthook to detect secrets in staged changes.
2. **CI** — [Dependabot](https://docs.github.com/en/code-security/dependabot) monitors npm and Docker base image dependencies for known vulnerabilities. [CodeQL](https://codeql.github.com/) performs static analysis on every push and pull request.
3. **Container images** — [Trivy](https://trivy.dev/) scans built Docker images for CRITICAL and HIGH severity vulnerabilities before they are pushed to GHCR.

## Reporting a vulnerability

If you discover a security vulnerability in this project, please report it through [GitHub's private vulnerability reporting](https://github.com/terenceodonoghue/javascript/security/advisories/new). Do not open a public issue.
