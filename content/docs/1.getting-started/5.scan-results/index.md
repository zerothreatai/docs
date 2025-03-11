---
icon: square-poll-horizontal
title: Scan Results
description: Having run your first scan, you can now review the findings discovered by your scan. These vulnerabilities are weaknesses in your application that could be exploited by attackers.
---

## Filter Vulnerabilities&#x20;

In a scan report, Navigate to **Vulnerabilities -> Web Application.** Here you can access all the vulnerabilities found in your application. You can filter the vulnerabilities on the basis of severity: **Critical**, **Medium**, **Low** and **Informational**.

## Vulnerability Information

For each vulnerability, we provide comprehensive details to help you understand its context and impact:

1. **General Information:**
    - **Information:** Provides a high-level summary of the vulnerability, including what it means and its potential impact.
    - **Severity:** Indicates the assigned severity level.
    - **CVSS v3.0 base score:** Provides a standardized score based on the Common Vulnerability Scoring System (CVSS), helping you assess the severity and urgency of the issue.
    - **Detailed Information under 'Show more information':** It provides detailed information like Common Consequences, CVEs, CWEs, NIST mapping, ISO mapping, References and more.
2. **Remediation Steps:**
    - We provide customized remediation guidance specific to the context of your application. This ensures that fixes are tailored to address the exact vulnerabilities present.
3. **Affected URIs:**
    - Lists all the impacted endpoints or web resources, making it easier to pinpoint and resolve issues across your application.
4. **Request Details and Evidence:**
    - Includes the HTTP request (method, URL), request headers, response headers, HTTP response body, and evidence of the vulnerability, such as error messages or abnormal behavior, which confirms the presence and impact of the issue.

::fiqure-img{source="/image (130).png" width=563}

<!-- <img src="/image (130).png" alt="" width="563"> -->

::

## Severity Levels

Each vulnerability is categorized based on its potential impact, helping you prioritize actions:

1. **Critical:**
    - Critical vulnerabilities that can result in full control over your application or data. Immediate remediation is required to prevent severe damage, especially as these are often targeted by automated exploits.
2. **Medium:**
    - Vulnerabilities that attackers can exploit with moderate effort. These often involve misconfigurations or logical errors and can still lead to significant security issues.
3. **Low:**
    - Less critical vulnerabilities, often related to reconnaissance. While individually they pose less risk, they could support larger attack vectors if combined with other weaknesses.
4. **Informational:**
    - Insights into application behavior, configurations, or components that do not directly pose a threat but could aid attackers in gathering intelligence.

By leveraging this detailed information and applying tailored remediation, you can effectively address vulnerabilities and enhance your application’s security posture.

## What's next?

Scan completed and want to share the report with team members? See our guide on [**Share Scan Results**](scan-results/share-scan-results 'mention').
