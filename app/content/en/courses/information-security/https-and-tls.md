# HTTPS and TLS

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand what HTTPS is.
- Explain the role of TLS in securing communications.
- Describe how encryption protects data in transit.
- Understand digital certificates and Certificate Authorities (CAs).
- Recognize why HTTPS is essential for modern websites.

---

# What Is HTTPS?

HTTPS stands for **Hypertext Transfer Protocol Secure**.

It is the secure version of HTTP, the protocol used by web browsers and web servers to exchange information.

The key difference is that HTTPS uses **TLS (Transport Layer Security)** to encrypt data transmitted between the client and the server.

Without HTTPS, anyone who intercepts the network traffic may be able to read or modify the transmitted information.

---

# Why HTTPS Is Important

Every time you access a website, sensitive information may be transmitted, including:

- Usernames
- Passwords
- Personal information
- Credit card numbers
- Authentication tokens
- Private messages

HTTPS helps protect this data from attackers while it travels across the Internet.

Today, HTTPS is considered the standard for virtually all websites.

---

# What Is TLS?

**Transport Layer Security (TLS)** is the cryptographic protocol that secures Internet communications.

TLS provides three essential security properties:

| Property        | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| Confidentiality | Prevents unauthorized parties from reading the data.        |
| Integrity       | Detects whether data has been modified during transmission. |
| Authentication  | Confirms the identity of the server.                        |

TLS replaced the older **Secure Sockets Layer (SSL)** protocol.

Although people often say "SSL certificate," modern websites actually use TLS.

---

# How Encryption Works

Encryption transforms readable information (plaintext) into unreadable data (ciphertext).

Only someone with the correct cryptographic key can decrypt the information.

Example:

Plaintext:

```
Password123
```

Encrypted:

```
8A7F91C20E4D8B...
```

Even if an attacker captures the encrypted data, it is practically useless without the decryption key.

---

# Symmetric and Asymmetric Encryption

TLS uses both symmetric and asymmetric encryption.

## Symmetric Encryption

The same key is used for encryption and decryption.

Advantages:

- Very fast
- Efficient for large amounts of data

Disadvantage:

- Both parties must securely share the secret key.

Examples:

- AES
- ChaCha20

---

## Asymmetric Encryption

Two different keys are used:

- Public key
- Private key

The public key can be shared with anyone.

The private key must remain secret.

Advantages:

- Enables secure key exchange.
- Supports digital signatures.

Disadvantages:

- Slower than symmetric encryption.

Examples:

- RSA
- Elliptic Curve Cryptography (ECC)

TLS combines both methods to achieve strong security with good performance.

---

# Digital Certificates

A website must prove that it is really who it claims to be.

This is done using a **digital certificate**.

A certificate contains information such as:

- Domain name
- Public key
- Certificate owner
- Validity period
- Issuing Certificate Authority (CA)

Your browser checks the certificate before establishing a secure connection.

---

# Certificate Authorities (CAs)

A **Certificate Authority (CA)** is a trusted organization that issues digital certificates.

Examples include:

- DigiCert
- Sectigo
- GlobalSign
- Let's Encrypt

Browsers include lists of trusted Certificate Authorities.

If a certificate is signed by a trusted CA, the browser accepts it.

Otherwise, the browser displays a security warning.

---

# The TLS Handshake

Before encrypted communication begins, the client and server perform a process called the **TLS handshake**.

A simplified sequence is:

1. The browser connects to the server.
2. The server sends its digital certificate.
3. The browser validates the certificate.
4. Both sides securely agree on encryption keys.
5. An encrypted session is established.
6. Secure communication begins.

This entire process usually takes only a fraction of a second.

---

# Authentication

TLS helps ensure that users are communicating with the intended server.

Without authentication, attackers could impersonate legitimate websites.

Authentication helps prevent attacks such as:

- Fake banking websites
- Impersonation attacks
- Man-in-the-Middle (MitM) attacks

---

# Integrity Protection

TLS also verifies that transmitted data has not been altered.

If a packet is modified during transmission, the integrity verification fails, and the connection is rejected.

This prevents attackers from silently changing the contents of messages.

---

# HTTPS in the Browser

Modern browsers provide visual indicators of secure connections.

Common indicators include:

- HTTPS in the address bar
- A padlock icon
- No browser security warnings

If a certificate is invalid or expired, browsers typically display a warning before allowing access.

---

# Common Misconceptions

## HTTPS Does Not Make a Website Safe

HTTPS only protects the communication between the client and the server.

A website can still:

- Contain malware
- Be used for phishing
- Have software vulnerabilities
- Store passwords insecurely

HTTPS does **not** guarantee that a website is trustworthy.

---

## HTTPS Does Not Hide Everything

Although HTTPS encrypts most communication, some information remains visible, including:

- The destination IP address
- The domain name (in many situations)
- The amount of transmitted data
- Timing information

Encryption protects the contents of the communication, not all metadata.

---

# Best Practices

To maximize communication security:

- Always use HTTPS websites.
- Avoid entering passwords on HTTP pages.
- Keep browsers updated.
- Verify browser security warnings.
- Never ignore certificate errors.
- Use strong authentication methods such as Multi-Factor Authentication (MFA).

---

# Why HTTPS Matters for Information Security

HTTPS protects users against many common network attacks.

Without TLS, attackers connected to the same network could potentially:

- Read sensitive information
- Capture login credentials
- Modify downloaded content
- Inject malicious code into webpages

TLS significantly reduces these risks by encrypting communications and verifying server identity.

---

# Key Takeaways

- HTTPS is the secure version of HTTP.
- HTTPS uses TLS to encrypt Internet communications.
- TLS provides confidentiality, integrity, and authentication.
- Digital certificates verify a server's identity.
- Certificate Authorities issue trusted certificates.
- The TLS handshake establishes secure encrypted sessions.
- HTTPS protects data in transit but does not guarantee that a website itself is safe.
- Modern web security relies on HTTPS for protecting user communications.
