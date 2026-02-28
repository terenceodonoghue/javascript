.PHONY: security-scan

security-scan:
	docker build -t auth-web:scan -f apps/auth-web/Dockerfile .
	trivy image --severity CRITICAL,HIGH --ignore-unfixed --exit-code 1 auth-web:scan
