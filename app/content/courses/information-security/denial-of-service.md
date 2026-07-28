# Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS)

One of the primary goals of cybersecurity is ensuring that systems and services remain **available** to legitimate users.

A **Denial-of-Service (DoS)** attack attempts to make a system, website, or network unavailable by overwhelming it with requests or consuming its resources.

When the attack is launched from many compromised devices simultaneously, it is called a **Distributed Denial-of-Service (DDoS)** attack.

---

## What Is a DoS Attack?

A **Denial-of-Service (DoS)** attack is an attempt to disrupt the normal operation of a service by exhausting its available resources.

These resources may include:

- Network bandwidth
- CPU processing power
- Memory
- Storage
- Application resources

When resources are exhausted, legitimate users may experience slow performance or lose access entirely.

---

## What Is a DDoS Attack?

A **Distributed Denial-of-Service (DDoS)** attack works similarly to a DoS attack but originates from **multiple devices** instead of a single source.

These devices are often part of a **botnet**—a network of computers, servers, or Internet of Things (IoT) devices that have been infected with malware and are remotely controlled by an attacker.

Because the attack traffic comes from many different locations, DDoS attacks are much more difficult to stop.

---

## DoS vs. DDoS

| DoS                               | DDoS                                        |
| --------------------------------- | ------------------------------------------- |
| Single attacking device           | Multiple attacking devices                  |
| Easier to identify and block      | More difficult to identify and mitigate     |
| Smaller attack volume             | Much larger attack volume                   |
| Limited by one system's resources | Uses the combined resources of many systems |

---

## How DoS Attacks Work

A typical attack follows these steps:

1. The attacker selects a target.
2. Large volumes of malicious traffic are sent to the target.
3. The server's resources become overwhelmed.
4. Legitimate users can no longer access the service.

Importantly, the attacker does **not** usually need to break into the system. Instead, they simply prevent others from using it.

---

## Common Types of DoS and DDoS Attacks

### Volume-Based Attacks

These attacks overwhelm the target's internet connection with enormous amounts of traffic.

Examples include:

- UDP Floods
- ICMP (Ping) Floods

The goal is to consume all available bandwidth.

---

### Protocol Attacks

Protocol attacks exploit weaknesses in network protocols or consume networking resources.

Examples include:

- SYN Flood
- Ping of Death
- Fragmentation attacks

These attacks can exhaust firewalls, load balancers, or servers before application traffic even reaches them.

---

### Application Layer Attacks

Application layer attacks target specific services or web applications rather than network infrastructure.

One common example is an **HTTP Flood**, where attackers repeatedly request web pages or API endpoints until the server becomes overloaded.

Because the requests often appear legitimate, these attacks can be difficult to detect.

---

## Botnets

Large DDoS attacks often rely on **botnets**.

A botnet consists of thousands—or even millions—of infected devices under the attacker's control.

Common botnet devices include:

- Personal computers
- Servers
- Security cameras
- Smart TVs
- Routers
- Other IoT devices

Many IoT devices become part of botnets because they use weak default passwords or outdated software.

---

## Real-World Example

Imagine an online shopping website that normally receives 5,000 visitors per hour.

During a DDoS attack, attackers generate millions of fake requests every minute.

The web servers become overwhelmed trying to respond to the malicious traffic, causing:

- Slow page loading
- Failed purchases
- Website outages
- Financial losses
- Customer frustration

Legitimate customers are unable to use the service even though the servers themselves may not have been compromised.

---

## Business Impact

DoS and DDoS attacks can have serious consequences, including:

- Service outages
- Lost revenue
- Damage to reputation
- Reduced customer trust
- Increased operational costs
- Disruption of critical services

For organizations that provide online services, even a short outage can have significant financial and reputational impacts.

---

## Defending Against DoS and DDoS Attacks

There is no single solution that completely prevents these attacks, but organizations use multiple layers of defense.

Common mitigation strategies include:

- Firewalls
- Web Application Firewalls (WAFs)
- Intrusion Detection and Prevention Systems (IDS/IPS)
- Rate limiting
- Traffic filtering
- Load balancing
- Content Delivery Networks (CDNs)
- Cloud-based DDoS protection services
- Redundant network infrastructure

These controls help absorb, filter, or distribute malicious traffic before it reaches critical systems.

---

## Best Practices

Organizations should also:

- Monitor network traffic continuously.
- Keep systems updated.
- Develop an incident response plan.
- Test DDoS mitigation procedures regularly.
- Eliminate unnecessary exposed services.
- Work with internet service providers (ISPs) and cloud providers that offer DDoS protection.

Preparation is essential because large attacks often begin without warning.

---

## Key Takeaways

- A **DoS attack** attempts to make a service unavailable by exhausting its resources.
- A **DDoS attack** uses many compromised devices to generate much larger volumes of malicious traffic.
- DDoS attacks commonly rely on botnets composed of infected computers and IoT devices.
- The primary goal is to disrupt **availability**, one of the three principles of the CIA Triad.
- Layered defenses such as WAFs, CDNs, rate limiting, and cloud-based DDoS protection help reduce the impact of these attacks.
