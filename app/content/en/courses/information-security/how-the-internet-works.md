# How the Internet Works

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand what the Internet is.
- Explain how devices communicate over the Internet.
- Describe the roles of clients, servers, and Internet Service Providers (ISPs).
- Understand the basics of IP addresses, domain names, DNS, and routing.
- Explain how a website loads in a web browser.

---

# What Is the Internet?

The Internet is a **global network of interconnected computers and devices** that communicate using standardized protocols.

Rather than being a single computer or service, the Internet is a collection of millions of private and public networks connected together.

These networks allow people and organizations to:

- Browse websites
- Send emails
- Stream videos
- Play online games
- Make video calls
- Access cloud services

Think of the Internet as a massive highway system.

- Devices are like cars.
- Data is the passengers.
- Routers are the intersections.
- Cables and wireless connections are the roads.

---

# How Devices Communicate

Every device connected to the Internet must be able to identify itself and exchange information.

Communication happens by sending **data packets**.

Instead of transmitting an entire file at once, the information is divided into many small packets.

Each packet contains:

- The sender's address
- The destination address
- Part of the data
- Information used to verify integrity

Packets may travel through different routes before reaching their destination.

Once they arrive, they are reassembled into the original data.

---

# Clients and Servers

Internet communication usually follows the **client-server model**.

## Client

A client is a device or application that requests information.

Examples:

- Web browser
- Mobile app
- Email client

## Server

A server provides resources or services requested by clients.

Examples:

- Web servers
- Database servers
- Email servers
- File servers

Example:

1. You type a website address.
2. Your browser sends a request.
3. The server processes the request.
4. The server sends the webpage back.

---

# Internet Service Providers (ISPs)

An Internet Service Provider (ISP) connects users to the Internet.

Examples include companies that provide:

- Fiber Internet
- Cable Internet
- Mobile Internet
- Satellite Internet

Without an ISP, your device would not be able to reach other networks on the Internet.

---

# IP Addresses

Every device connected to the Internet has an **IP (Internet Protocol) address**.

An IP address works like a postal address.

It tells other devices where information should be delivered.

Example IPv4 address:

```
192.168.1.10
```

Example IPv6 address:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

IPv4 addresses are becoming scarce, so IPv6 was created to provide a much larger address space.

---

# Domain Names

Humans remember names better than numbers.

Instead of typing:

```
142.250.190.78
```

we type:

```
google.com
```

A **domain name** is simply a human-friendly name that points to an IP address.

---

# DNS (Domain Name System)

DNS is often called the **phonebook of the Internet**.

Its job is to translate domain names into IP addresses.

Example:

```
example.com
        ↓
93.184.216.34
```

Without DNS, users would have to memorize IP addresses for every website.

---

# Routers

Routers connect different networks together.

Their job is to determine the best path for packets to travel.

Each router forwards packets toward their destination.

This process is known as **routing**.

---

# Protocols

A protocol is a set of rules that devices follow when communicating.

Some common Internet protocols include:

| Protocol | Purpose                  |
| -------- | ------------------------ |
| IP       | Addressing and routing   |
| TCP      | Reliable communication   |
| UDP      | Fast communication       |
| HTTP     | Transfer web pages       |
| HTTPS    | Secure web communication |
| DNS      | Domain name resolution   |

---

# TCP vs UDP

### TCP

TCP prioritizes reliability.

Features:

- Error checking
- Packet ordering
- Guaranteed delivery

Common uses:

- Web browsing
- Email
- File downloads

---

### UDP

UDP prioritizes speed.

Features:

- Lower latency
- No delivery guarantee
- Less overhead

Common uses:

- Video streaming
- Voice calls
- Online gaming

---

# HTTP and HTTPS

HTTP stands for **Hypertext Transfer Protocol**.

It defines how browsers and web servers exchange information.

HTTPS is the secure version of HTTP.

HTTPS uses encryption to protect:

- Passwords
- Payment information
- Personal data

Whenever possible, websites should use HTTPS.

---

# How a Website Loads

When you visit a website, several steps happen behind the scenes.

1. You type a domain name.
2. DNS finds the server's IP address.
3. Your browser connects to the server.
4. The browser sends an HTTP or HTTPS request.
5. The server processes the request.
6. The server returns the webpage.
7. The browser downloads HTML, CSS, JavaScript, images, and other resources.
8. The browser renders the page on your screen.

Although this seems instantaneous, all these steps usually happen in less than a second.

---

# Why This Matters for Security

Understanding how the Internet works helps explain many security concepts.

Attackers may target:

- DNS services
- Web servers
- Routers
- Network traffic
- Protocol weaknesses

Security professionals use this knowledge to:

- Secure communications
- Detect attacks
- Configure firewalls
- Troubleshoot network problems
- Protect sensitive information

---

# Key Takeaways

- The Internet is a global network of interconnected devices.
- Devices communicate by exchanging data packets.
- Clients request services, while servers provide them.
- ISPs connect users to the Internet.
- IP addresses uniquely identify devices.
- Domain names are translated into IP addresses using DNS.
- Routers determine the best path for network traffic.
- Protocols define how communication occurs.
- HTTPS encrypts web communications.
- Understanding Internet fundamentals is essential for information security.
