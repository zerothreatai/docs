---
icon: shield-virus
title: Authenticated Scan
description: Web applications often contain sensitive and critical functionality hidden behind authentication mechanisms. These areas, such as user dashboards, administrative panels, or protected APIs, are common targets for attackers and can harbor significant vulnerabilities. However, traditional web scanners often struggle to access these protected sections, leaving them untested.
---

The **Zero Threat Chrome Recorder extension** bridges this gap by enabling authenticated scans, allowing you to examine the security of these areas comprehensively. This ensures that no part of your application is left untested, providing a deeper level of security assurance.

## Why Perform an Authenticated Scan?

- **Identify Hidden Vulnerabilities:** Detect security flaws in user-specific or admin-only areas that are not accessible without logging in.
- **Ensure Compliance:** Meet industry standards and security best practices by testing all areas of your application, including protected sections.
- **Protect User Data:** Safeguard sensitive information stored or processed in authenticated areas.

## Methods for Authenticated Scans

Zero Threat offers two powerful methods to perform authenticated scans, covering two different authentication mechanisms:

1. **Scan with Login Sequence**
   - Ideal for traditional login flows using usernames and passwords.
   - Captures and replicates the login process, allowing the scanner to navigate authenticated areas.
   - Suitable for applications without advanced authentication techniques like MFA.
2. **Scan MFA App**
   - Designed for applications protected by Multi-Factor Authentication (MFA).
   - Allows users to handle additional security steps, such as SSO's, OTPs, CAPTCHAs, and more ensuring that even these highly secure sections are included in the scan.
3. **Scan Navigation Sequence Only**
   - Perfect for targeting specific sections or functionalities of an authenticated application.
   - Records your navigation through selected pages, limiting the scan to only those areas without crawling the entire site.

---

For detailed guide, refer to:

- [**Scan with Login Sequence**](authenticated-scan/scan-with-login-sequence)
- [**Scan MFA App**](authenticated-scan/scan-mfa-app)
- [**Scan Navigation Sequence Only**]( authenticated-scan/scan-navigation-sequence-only)

With these methods, Zero Threat enables you to achieve a comprehensive security assessment, safeguarding your applications and their users from potential threats.
