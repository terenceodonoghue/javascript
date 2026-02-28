.PHONY: setup security-scan

setup:
	brew bundle
	bun install

security-scan:
	docker build -t auth-web:scan -f apps/auth-web/Dockerfile .
	trivy image --severity CRITICAL,HIGH --ignore-unfixed --exit-code 1 auth-web:scan
