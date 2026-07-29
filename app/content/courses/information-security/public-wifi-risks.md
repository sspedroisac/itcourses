# Public Wi-Fi Risks

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand the security risks associated with public Wi-Fi.
- Identify common attacks performed on public wireless networks.
- Explain how attackers exploit unsecured connections.
- Learn best practices for using public Wi-Fi safely.
- Recognize how VPNs and HTTPS help protect your data.

---

# What Is Public Wi-Fi?

Public Wi-Fi refers to wireless networks that are available for public use.

Common locations include:

- Airports
- Hotels
- Cafés
- Restaurants
- Libraries
- Shopping malls
- Public transportation

These networks provide convenient Internet access, but they often offer less security than private home or business networks.

---

# Why Public Wi-Fi Can Be Dangerous

When connected to a public network, multiple unknown users share the same infrastructure.

If the network is poorly secured, attackers may attempt to:

- Intercept network traffic
- Steal sensitive information
- Impersonate legitimate networks
- Distribute malware
- Launch phishing attacks

Although many websites now use HTTPS, public Wi-Fi still presents several security risks.

---

# Unencrypted Traffic

If an application or website does not use encryption, anyone with the appropriate tools on the same network may be able to view the transmitted data.

Examples of exposed information include:

- Usernames
- Messages
- Emails
- Downloaded files
- Other sensitive information

Using encrypted protocols such as HTTPS greatly reduces this risk.

---

# Man-in-the-Middle (MitM) Attacks

A **Man-in-the-Middle (MitM)** attack occurs when an attacker secretly intercepts communications between two parties.

Instead of communicating directly with the intended server, the victim's traffic passes through the attacker.

Possible consequences include:

- Data interception
- Session hijacking
- Content modification
- Credential theft

Encryption provided by HTTPS and VPNs helps defend against many MitM attacks.

---

# Rogue Wi-Fi Networks

Attackers sometimes create fake wireless networks that appear legitimate.

Examples:

- Airport_Free_WiFi
- Hotel Guest WiFi
- CoffeeShop_Free

These networks are known as **rogue access points** or **evil twin networks**.

Victims unknowingly connect to the attacker's equipment instead of the legitimate network.

Once connected, attackers may monitor traffic or present phishing pages designed to steal credentials.

---

# Packet Sniffing

**Packet sniffing** is the process of capturing network packets as they travel across a network.

Network administrators use packet analyzers for legitimate troubleshooting.

However, attackers may use similar tools to capture unencrypted traffic on insecure networks.

Encrypted communications remain protected even if packets are captured.

---

# Session Hijacking

Many websites keep users signed in using **session cookies**.

If attackers obtain valid session tokens, they may gain unauthorized access without needing the user's password.

Modern websites reduce this risk by using:

- HTTPS
- Secure cookies
- Short session lifetimes
- Multi-Factor Authentication (MFA)

---

# Malware Distribution

Attackers may attempt to distribute malicious software through compromised public networks.

Examples include:

- Fake software updates
- Malicious downloads
- Phishing pages
- Exploit attempts against vulnerable devices

Keeping software updated helps reduce the risk of compromise.

---

# Automatic Connections

Many devices automatically reconnect to previously used Wi-Fi networks.

Attackers can exploit this behavior by creating fake networks with familiar names.

To reduce this risk:

- Disable automatic Wi-Fi connections when possible.
- Forget networks you no longer use.
- Verify the correct network name before connecting.

---

# How HTTPS Helps

HTTPS encrypts communication between your browser and the website.

Benefits include:

- Protecting login credentials
- Preventing data interception
- Detecting content modification
- Authenticating the website

Always verify that websites use HTTPS before entering sensitive information.

---

# How VPNs Help

A VPN creates an encrypted tunnel between your device and a trusted VPN server.

Even if someone captures your wireless traffic, the encrypted data is extremely difficult to read.

VPNs are especially valuable when using:

- Airport Wi-Fi
- Hotel Wi-Fi
- Coffee shop Wi-Fi
- Conference networks

VPNs provide an additional layer of protection but do not eliminate every security risk.

---

# Best Practices for Using Public Wi-Fi

To stay safer when using public wireless networks:

- Verify the correct network name before connecting.
- Avoid connecting to unknown or suspicious networks.
- Prefer websites that use HTTPS.
- Use a trusted VPN whenever possible.
- Disable automatic Wi-Fi connections.
- Keep your operating system and applications updated.
- Turn off file sharing when using public networks.
- Enable your device's firewall.
- Use Multi-Factor Authentication (MFA) on important accounts.
- Avoid accessing highly sensitive services if a trusted connection is available instead.

---

# Common Misconceptions

## Public Wi-Fi Is Not Always Dangerous

Not every public Wi-Fi network is malicious.

Many organizations properly secure their wireless infrastructure.

However, because you generally do not control the network, you should always treat public Wi-Fi as **untrusted**.

---

## HTTPS Is Still Necessary When Using a VPN

Some users believe a VPN replaces HTTPS.

This is incorrect.

HTTPS protects communication between your browser and the website.

A VPN protects the connection between your device and the VPN server.

Using both provides stronger security.

---

# Why Public Wi-Fi Matters for Information Security

Public wireless networks are common targets for attackers because many users assume they are safe.

Understanding these risks helps users:

- Protect sensitive information.
- Avoid common wireless attacks.
- Recognize suspicious networks.
- Use encryption effectively.
- Reduce the likelihood of credential theft.

Security begins with recognizing that convenience should never come at the expense of protecting your data.

---

# Key Takeaways

- Public Wi-Fi networks should always be treated as untrusted.
- Attackers may intercept traffic, impersonate networks, or distribute malware.
- Man-in-the-Middle attacks can capture or modify communications.
- Rogue Wi-Fi networks imitate legitimate access points to deceive users.
- HTTPS encrypts web traffic and helps prevent interception.
- VPNs add an additional layer of protection by encrypting network traffic.
- Keeping devices updated and following security best practices significantly reduces the risks of using public Wi-Fi.
