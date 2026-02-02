---
icon: shield-virus
title: Authenticated Scan
seo.title: Authenticated Scan – Scan Authenticated Sections of your Web App
description: Authenticated Scans allow you to test areas of your web applications that require user login ensuring deeper and more accurate vulnerability detection. This guide walks you through how to set up an Authenticated Scan using ZeroThreat’s browser extension to capture login sequences or session tokens. <br>With this capability, you can uncover hidden vulnerabilities behind authentication layers and ensure complete application coverage during security testing. Ideal for applications with user-based content or restricted access areas.
seo.description: Use ZeroThreat authenticated scans to test login-required areas, admin panels, and other authenticated sections using ZeroThreat chrome extension for full coverage.
---

The **ZeroThreat Chrome Recorder extension** bridges this gap by enabling authenticated scans, allowing you to examine the security of these areas comprehensively. This ensures that no part of your application is left untested, providing a deeper level of security assurance.

## Why Perform an Authenticated Scan?

- **Identify Hidden Vulnerabilities:** Detect security flaws in authenticated or admin-only areas that aren’t accessible without proper access. 
- **Ensure Full Compliance:** Meet regulatory requirements and security best practices by thoroughly testing every section of your application, including protected areas. 
- **Protect User Data:** Safeguard sensitive information stored or processed in authenticated areas.

## Methods for Authenticated Scans

ZeroThreat provides some powerful methods for performing authenticated scans, each tailored to different authentication mechanisms: 

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

With these methods, ZeroThreat enables you to achieve a comprehensive security assessment, safeguarding your applications and their users from potential threats.
