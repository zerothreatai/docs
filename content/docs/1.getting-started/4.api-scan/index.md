---
imageSrc: /Images/api-scan-icon.svg
title: API Scan
cards:
    - icon: file-circle-plus
      title: Create a collection
      path: /docs/getting-started/api-scan/creating-a-collection
      description: A Collection represents the source of your API endpoints and acts as the starting point for both unauthenticated and authenticated API scans.
    - icon: radar
      title: Unauthenticated API Scan
      path: /docs/getting-started/api-scan/unauthenticated-api-scan
      description: Provides a high-level overview of the security posture of the entire scanned application
    - icon: file-magnifying-glass
      title: Authenticated API Scan
      path: /docs/getting-started/api-scan/authenticated-api-scan
      description: Lists detected security issues in web applications, categorized by severity, with detailed remediation steps 
---

Modern applications rely heavily on APIs, and scanning them for vulnerabilities like broken authentication, insecure endpoints, injection attacks and data exposure risks is essential for maintaining a strong security posture.

With ZeroThreat, you can run both **unauthenticated** and **authenticated** API scans to ensure complete coverage of your API surface.

## How API Scans Work in ZeroThreat

Running an API scan typically involves the following stages:

1. **Create a Target:** Define your API’s base URL and select API Scan as the scan type.
2. **Build a Collection:** Import your API definitions (Swagger, OpenAPI, Postman, or HAR) into ZeroThreat.
3. **Configure Authentication (if needed):** For protected APIs, set up an API Authentication Configuration.
4. **Run the Scan:** Choose between **Unauthenticated** or **Authenticated** scan modes, based on your target and collection setup.

ZeroThreat uses your **API Collection** as the source for endpoint discovery and scanning.\
For APIs with authentication, ZeroThreat handles login, cookies and token capture for protected endpoints.

## Quick Overview of Key Concepts and terms

| Feature                   | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| **Collections**           | Your source of API definitions. Required for all API scans.                       |
| **Unauthenticated Scans** | Test publicly accessible API endpoints.                                           |
| **Authenticated Scans**   | Configure login flows or headers to scan private endpoints.                       |
| **Custom Payloads**       | Provide sample request bodies for endpoints with missing definitions.             |
| **Dynamic Token Mapping** | Automatically extract tokens from login responses for use in subsequent requests. |
*** 

## Jump Right In

Select the guide you want to explore next:

<JumpRightInCard>


