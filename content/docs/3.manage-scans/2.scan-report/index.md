---
icon: file-lines
title: Scan Report
description: The <strong>Scan Report</strong> provides a comprehensive analysis of the security posture of your application based on the latest scan results. It highlights vulnerabilities, misconfigurations, and security risks detected across various components, allowing you to assess and prioritize fixes efficiently.
cards:
    - icon: file-lines
      title: Scanner
      path: /docs/manage-scans/scan-report/scanner
      description: Displays real-time scan progress, including authenticated and unauthenticated crawling, along with OWASP Top
    - icon: file-lines
      title: Scan Summary
      path: /docs/manage-scans/scan-report/scan-summary
      description: Provides a high-level overview of the security posture of the entire scanned application
    - icon: file-lines
      title: Web App Vulnerabilities
      path: /docs/manage-scans/scan-report/web-app-vulnerabilities
      description: Lists detected security issues in web applications, categorized by severity, with detailed remediation steps
    - icon: file-lines
      title: Detected API's vulnerabilities
      path: /docs/manage-scans/scan-report/detected-apis-vulnerabilities
      description: Identifies all the security flaws found in a particular API endpoint, showing affected requests
    - icon: file-lines
      title: Information Exposure
      path: /docs/manage-scans/scan-report/information-exposure
      description: Highlights sensitive data leaks like PII, secret data leaks like credentials, and cloud misconfigurations.
    - icon: file-lines
      title: SSL Certificate
      path: /docs/manage-scans/scan-report/ssl-certificate
      description: Analyzes SSL/TLS configurations, checking for vulnerabilities, expiration status, and compliance issues.
    - icon: file-lines
      title: Vulnerable Version detection
      path: /docs/manage-scans/scan-report/vulnerable-version-detection
      description: Detects outdated JavaScript libraries and server-side technologies with known security risks.
    - icon: file-lines
      title: Server Ports Scan
      path: /docs/manage-scans/scan-report/server-ports-scan
      description: Scans open ports on the server, assessing potential risks and providing mitigation strategies.
    - icon: file-lines
      title: Mail Configuration
      path: scan-report/mail-configuration
      description: Evaluates the mail server for misconfigurations like open relays and reverse DNS mismatches
---

This report is structured into different sections, each focusing on a specific security aspect. It covers web application and API vulnerabilities, offering insights into detected weaknesses and their severity. The report also evaluates SSL configurations, server security, and mail server settings to identify potential risks in encryption and communication channels. Additionally, it examines the technology stack, detecting outdated JavaScript packages and server-side frameworks that might introduce security gaps.

Beyond application security, the Scan Report highlights information exposure risks, including leaked sensitive data, API keys, and cloud misconfigurations. Each finding is categorized based on severity, enabling you to focus on critical threats first. You also have the flexibility to review reported findings, mark them as critical, or ignore those that are not relevant to your environment.

By analyzing the Scan Report, security teams and developers can gain a clear understanding of their security risks and take proactive measures to strengthen their defenses.

### Jump Right In

<!-- <table data-view="cards"><thead><tr><th></th></tr></thead><tbody><tr><td><a href="scan-report/scanner"><strong>Scanner</strong></a></td></tr><tr><td><a href="scan-report/scan-summary"><strong>Scan Summary</strong></a></td></tr><tr><td><a href="scan-report/web-app-vulnerabilities"><strong>Web App Vulnerbailities</strong></a></td></tr><tr><td><a href="scan-report/detected-apis-vulnerabilities"><strong>Detected API's vulnerabilities</strong></a></td></tr><tr><td><a href="scan-report/information-exposure"><strong>Information Exposure</strong></a></td></tr><tr><td><a href="scan-report/ssl-certificate"><strong>SSL Certificate</strong></a></td></tr><tr><td><a href="scan-report/vulnerable-version-detection"><strong>Vulnerable Version detection</strong></a></td></tr><tr><td><a href="scan-report/server-ports-scan"><strong>Server Ports Scan</strong></a></td></tr><tr><td><a href="scan-report/mail-configuration"><strong>Mail Configuration</strong></a></td></tr></tbody></table> -->

<JumpRightInCard />
