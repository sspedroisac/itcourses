# Firewalls

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand what a firewall is.
- Explain how firewalls protect networks and devices.
- Differentiate between network-based and host-based firewalls.
- Understand common firewall filtering methods.
- Recognize the limitations of firewalls and why they are only one layer of security.

---

# What Is a Firewall?

A **firewall** is a security system that monitors and controls network traffic based on predefined security rules.

Its primary purpose is to allow legitimate traffic while blocking unauthorized or potentially malicious connections.

Think of a firewall as a security guard at the entrance of a building.

- People with permission are allowed in.
- Unauthorized visitors are denied access.
- Suspicious activity can be inspected more closely.

Similarly, a firewall decides which network traffic is permitted to enter or leave a device or network.

---

# Why Firewalls Are Important

Every device connected to a network is exposed to potential threats.

Without a firewall, attackers may attempt to:

- Access open services
- Exploit vulnerable applications
- Scan for weaknesses
- Spread malware
- Steal sensitive information

A properly configured firewall significantly reduces the attack surface.

---

# How Firewalls Work

Whenever data enters or leaves a network, it is divided into packets.

A firewall examines these packets and decides whether they should be:

- Allowed
- Blocked
- Logged for analysis

Its decisions are based on predefined security rules.

Example rules:

- Allow web traffic (HTTPS)
- Block unknown inbound connections
- Allow DNS traffic
- Deny traffic from suspicious IP addresses

---

# Inbound vs Outbound Traffic

Firewalls can inspect traffic moving in both directions.

## Inbound Traffic

Inbound traffic originates outside your network and attempts to reach your device.

Examples:

- Someone visiting your website
- A remote desktop connection
- An attacker scanning your network

Inbound traffic is often restricted by default.

---

## Outbound Traffic

Outbound traffic originates from your device and travels to external systems.

Examples:

- Browsing a website
- Sending an email
- Downloading software

Monitoring outbound traffic can help detect malware communicating with attackers.

---

# Types of Firewalls

## Network Firewall

A network firewall protects an entire network.

It is commonly placed between:

- The Internet
- An organization's internal network

It filters traffic for all connected devices.

---

## Host-Based Firewall

A host-based firewall runs directly on an individual computer or server.

Examples include:

- Windows Defender Firewall
- Linux nftables
- macOS Application Firewall

Each device can enforce its own security policies.

---

# Packet Filtering Firewalls

The simplest type of firewall examines individual packets.

It evaluates information such as:

- Source IP address
- Destination IP address
- Source port
- Destination port
- Protocol (TCP, UDP, ICMP)

If the packet matches an allowed rule, it passes.

Otherwise, it is blocked.

---

# Stateful Firewalls

A **stateful firewall** keeps track of active network connections.

Instead of evaluating every packet independently, it understands whether a packet belongs to an existing connection.

Benefits include:

- Better security
- Improved efficiency
- Reduced false positives

Most modern firewalls are stateful.

---

# Next-Generation Firewalls (NGFW)

A **Next-Generation Firewall (NGFW)** provides advanced security features beyond traditional packet filtering.

Common capabilities include:

- Deep Packet Inspection (DPI)
- Application awareness
- Intrusion Prevention System (IPS)
- Malware detection
- User identity awareness
- SSL/TLS traffic inspection

NGFWs are widely used in enterprise environments.

---

# Firewall Rules

Firewall behavior is controlled through rules.

A rule may specify:

- Source address
- Destination address
- Port number
- Protocol
- Action (Allow or Deny)

Example:

| Source           | Destination     | Port    | Action |
| ---------------- | --------------- | ------- | ------ |
| Any              | Web Server      | 443     | Allow  |
| Any              | Database Server | 3306    | Deny   |
| Internal Network | Internet        | 80, 443 | Allow  |

The order of rules is often important, as the firewall evaluates them sequentially.

---

# Default Policies

Many firewalls follow one of two default approaches.

## Default Allow

Everything is allowed unless explicitly blocked.

Advantages:

- Easier to configure

Disadvantages:

- Higher security risk

---

## Default Deny

Everything is blocked unless explicitly allowed.

Advantages:

- Stronger security
- Smaller attack surface

Disadvantages:

- Requires more careful configuration

Security professionals generally recommend a **default deny** approach whenever practical.

---

# Firewalls and Ports

Applications communicate using network ports.

Common examples include:

| Port | Service |
| ---- | ------- |
| 22   | SSH     |
| 25   | SMTP    |
| 53   | DNS     |
| 80   | HTTP    |
| 443  | HTTPS   |

Firewalls frequently use port numbers when deciding whether traffic should be permitted.

---

# What Firewalls Cannot Do

Firewalls are powerful, but they are not a complete security solution.

A firewall cannot reliably:

- Prevent phishing attacks
- Stop users from creating weak passwords
- Remove malware already running on a device
- Fix software vulnerabilities
- Prevent insider threats

Firewalls should always be combined with other security controls.

---

# Firewalls in a Defense-in-Depth Strategy

Firewalls are one layer of a **Defense-in-Depth** strategy.

Other important layers include:

- Antivirus and endpoint protection
- Multi-Factor Authentication (MFA)
- Encryption
- Security awareness training
- Vulnerability management
- Intrusion Detection and Prevention Systems (IDS/IPS)
- Regular software updates

Using multiple security layers greatly improves overall protection.

---

# Best Practices

To maximize firewall effectiveness:

- Use a default deny policy whenever possible.
- Allow only necessary services and ports.
- Review firewall rules regularly.
- Remove outdated or unused rules.
- Keep firewall software updated.
- Monitor firewall logs for suspicious activity.
- Combine firewalls with other security controls.

---

# Key Takeaways

- A firewall monitors and controls network traffic.
- Firewalls allow authorized traffic and block unauthorized connections.
- Network firewalls protect entire networks, while host-based firewalls protect individual devices.
- Stateful firewalls track active connections for improved security.
- Next-Generation Firewalls provide advanced inspection and threat prevention.
- Firewall rules determine which traffic is allowed or blocked.
- A default deny policy offers stronger security than a default allow policy.
- Firewalls are an essential security layer but should be used alongside other defensive measures.
