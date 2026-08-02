# Cross-Site Scripting (XSS)

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand what Cross-Site Scripting (XSS) is.
- Explain how XSS attacks occur.
- Identify the main types of XSS.
- Recognize the potential impact of XSS attacks.
- Learn best practices for preventing XSS vulnerabilities.

---

# What Is Cross-Site Scripting?

**Cross-Site Scripting (XSS)** is a web application vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users.

Instead of attacking the web server directly, XSS targets the users of a vulnerable application.

When a victim visits a compromised page, the malicious script executes inside their web browser with the same permissions as the legitimate website.

XSS is one of the most common web application vulnerabilities and is included in the **OWASP Top 10** under the **Injection** category (2021).

---

# How XSS Works

Web applications often display information provided by users.

Examples include:

- Comments
- User profiles
- Search results
- Forum posts
- Product reviews
- Chat messages

If the application displays user input without properly handling it, an attacker may inject malicious JavaScript or HTML.

When another user views the affected page, their browser executes the attacker's script.

The browser trusts the script because it appears to originate from the legitimate website.

---

# Why XSS Is Dangerous

Successful XSS attacks may allow attackers to:

- Steal session cookies.
- Hijack user accounts.
- Capture sensitive information.
- Redirect users to malicious websites.
- Display fake login forms.
- Modify webpage content.
- Perform actions on behalf of the victim.

The exact impact depends on the application's functionality and the victim's permissions.

---

# Example Scenario

Imagine a discussion forum where users can post comments.

If the application stores and displays comments without safely handling user input, an attacker could submit a comment containing malicious JavaScript.

Every user who views the comment would unknowingly execute the script in their browser.

This could allow the attacker to steal session information or manipulate the webpage.

---

# Types of XSS

There are three primary types of Cross-Site Scripting.

---

## Stored XSS

**Stored XSS** occurs when malicious input is permanently saved by the application.

Examples include:

- Forum posts
- Blog comments
- User profiles
- Product reviews

Whenever another user views the stored content, the malicious script executes.

Stored XSS is often the most severe type because it can affect many users automatically.

---

## Reflected XSS

**Reflected XSS** occurs when malicious input is immediately returned by the application without being stored.

Attackers often send victims specially crafted links.

When the victim opens the link, the malicious script is reflected in the server's response and executed by the browser.

Reflected XSS commonly targets:

- Search pages
- Error messages
- URL parameters

---

## DOM-Based XSS

**DOM-Based XSS** occurs entirely within the user's browser.

Instead of the server generating the vulnerable response, client-side JavaScript modifies the webpage using untrusted data.

The vulnerability exists in the application's front-end code rather than on the server.

Modern single-page applications (SPAs) must carefully handle dynamic content to avoid DOM-based XSS.

---

# Root Cause

XSS occurs when an application treats untrusted user input as executable webpage content instead of plain text.

Rather than displaying the input safely, the browser interprets it as HTML or JavaScript.

The vulnerability exists because the application fails to distinguish between:

- Data
- Executable code

---

# Preventing XSS

Preventing XSS requires securely handling all untrusted input and output.

Multiple security controls should be combined for effective protection.

---

# Output Encoding

The primary defense against XSS is **output encoding** (also called **output escaping**).

Before displaying user input, the application converts special characters into safe representations.

As a result, browsers display the content as text instead of executing it as code.

Output encoding should be applied based on the context in which data is displayed, such as:

- HTML
- HTML attributes
- JavaScript
- CSS
- URLs

---

# Input Validation

Applications should validate user input to ensure it matches expected formats.

Examples include:

- Length limits
- Allowed characters
- Expected data types

Input validation improves security but should not be considered a complete defense against XSS.

---

# Content Security Policy (CSP)

A **Content Security Policy (CSP)** is a browser security feature that restricts which scripts and resources a webpage is allowed to load.

A properly configured CSP can:

- Block unauthorized scripts.
- Reduce the impact of successful XSS attacks.
- Prevent execution of inline scripts in many cases.

CSP is an additional layer of protection, not a replacement for secure coding.

---

# Safe DOM Manipulation

Developers should avoid inserting untrusted data directly into the webpage using unsafe browser APIs.

Instead, use APIs that treat user input as plain text rather than HTML whenever possible.

Modern frameworks often provide safer methods for updating page content.

---

# Secure Cookies

Session cookies should use security attributes such as:

- **HttpOnly**
- **Secure**
- **SameSite**

These attributes help reduce the impact of certain XSS attacks by making cookies harder to steal or misuse.

---

# Common Misconceptions

## XSS Does Not Attack the Server

Many people assume XSS compromises the web server.

In reality, XSS primarily targets **users' browsers**.

The server becomes the delivery mechanism for malicious content, but the attack executes on the client side.

---

## Input Validation Alone Does Not Prevent XSS

Although input validation is useful, it is not sufficient.

Applications must also perform proper output encoding before displaying untrusted content.

---

# Best Practices

To prevent Cross-Site Scripting:

- Encode all untrusted output.
- Validate user input.
- Use a Content Security Policy (CSP).
- Avoid unsafe DOM manipulation.
- Use modern web frameworks securely.
- Protect session cookies with security attributes.
- Keep frameworks and libraries updated.
- Perform regular security testing and code reviews.

---

# Why XSS Matters

Cross-Site Scripting remains one of the most common web application vulnerabilities.

A single XSS vulnerability may allow attackers to compromise user accounts, steal sensitive information, or manipulate trusted websites.

Preventing XSS is a fundamental responsibility of secure web application development.

---

# Key Takeaways

- Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into webpages viewed by other users.
- XSS primarily targets users' browsers rather than web servers.
- The three main types are Stored XSS, Reflected XSS, and DOM-Based XSS.
- Output encoding is the primary defense against XSS.
- Content Security Policy (CSP) and secure cookie settings provide additional protection.
- Input validation complements—but does not replace—proper output encoding.
- Secure coding and regular security testing are essential for preventing XSS vulnerabilities.
