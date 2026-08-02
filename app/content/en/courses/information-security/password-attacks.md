# Password Attacks

Passwords are the most common method of authentication, protecting everything from email accounts to banking systems and corporate networks.

Unfortunately, passwords are also one of the most frequently targeted aspects of cybersecurity. Attackers use a variety of techniques to steal, guess, or crack passwords in an attempt to gain unauthorized access.

Understanding how password attacks work is the first step toward defending against them.

---

## Why Attack Passwords?

A compromised password can give an attacker access to valuable resources, including:

- Email accounts
- Corporate networks
- Cloud services
- Financial accounts
- Customer data
- Personal information

Instead of exploiting technical vulnerabilities, attackers often find it easier to obtain a user's password.

---

## Brute Force Attack

A **brute force attack** systematically tries every possible password combination until the correct one is found.

Although this method is simple, it can be effective against short or weak passwords.

### Characteristics

- Tries every possible combination.
- Can be automated.
- Time required increases with password complexity.
- Ineffective against long, strong passwords.

### Example

An attacker repeatedly attempts different password combinations until successfully logging into an account.

---

## Dictionary Attack

A **dictionary attack** tries passwords from a predefined list of commonly used words and phrases.

Because many users choose predictable passwords, dictionary attacks can be surprisingly effective.

### Common examples

- password
- 123456
- qwerty
- letmein
- admin

Using common passwords significantly increases the risk of compromise.

---

## Credential Stuffing

**Credential stuffing** uses usernames and passwords stolen from previous data breaches.

Since many people reuse passwords across multiple websites, attackers can automatically test the same credentials on different services.

### Example

A password leaked from an old shopping website is successfully used to access the victim's email account because the same password was reused.

---

## Password Spraying

Unlike brute force attacks that target one account with many passwords, **password spraying** targets many accounts using a small number of commonly used passwords.

This approach reduces the chance of triggering account lockout policies.

### Example

An attacker attempts the password:

> Welcome123

against hundreds of employee accounts.

Even if only one account uses that password, the attacker gains access.

---

## Rainbow Table Attack

A **rainbow table attack** uses precomputed tables of password hashes to recover plaintext passwords.

Instead of calculating hashes repeatedly, attackers compare stolen password hashes against large databases of previously generated hashes.

Modern systems reduce this risk by using **salted password hashes**, making rainbow tables far less effective.

---

## Keylogging

A **keylogger** records every keystroke typed by a user.

Once installed, it can capture:

- Passwords
- Credit card numbers
- Personal messages
- Banking credentials

Keyloggers may be:

- Software-based
- Hardware-based

Unlike password guessing attacks, keyloggers steal passwords directly from users.

---

## Phishing

Many passwords are stolen through **phishing** rather than technical attacks.

Victims are tricked into entering their credentials on fake login pages that closely resemble legitimate websites.

Because the user willingly provides the password, even the strongest password becomes ineffective.

---

## Shoulder Surfing

**Shoulder surfing** is a physical attack where someone observes another person entering a password.

This can occur in:

- Offices
- Coffee shops
- Airports
- Public transportation

Simple awareness of your surroundings can prevent this attack.

---

## Credential Theft Through Malware

Some malware is specifically designed to steal saved passwords from web browsers, password managers, or operating systems.

Modern information-stealing malware often searches for:

- Browser password databases
- Session cookies
- Authentication tokens
- Cryptocurrency wallets

---

## Offline Password Cracking

When attackers steal a password database, they often attempt to crack passwords **offline**.

Because these attacks occur without interacting with the authentication server, there are no login attempts to detect or block.

Organizations protect against offline cracking by:

- Hashing passwords.
- Using unique salts.
- Choosing slow password hashing algorithms such as **bcrypt**, **scrypt**, or **Argon2**.

---

## How to Defend Against Password Attacks

Strong authentication practices significantly reduce the risk of password compromise.

### Use Strong Passwords

A strong password should be:

- Long (at least 12–16 characters).
- Unique for every account.
- Difficult to guess.
- Free of personal information.

Long passphrases are often easier to remember and more secure than short, complex passwords.

---

### Never Reuse Passwords

Password reuse allows a breach on one website to compromise accounts on many others.

Each account should have its own unique password.

---

### Use a Password Manager

Password managers can:

- Generate strong passwords.
- Store passwords securely.
- Automatically fill login forms.
- Reduce password reuse.

Because users no longer need to memorize dozens of passwords, they are more likely to use strong, unique credentials.

---

### Enable Multi-Factor Authentication (MFA)

Even if a password is stolen, **Multi-Factor Authentication (MFA)** provides an additional layer of protection.

MFA combines two or more authentication factors, such as:

- Something you know (password)
- Something you have (security key or mobile device)
- Something you are (fingerprint or facial recognition)

MFA is one of the most effective defenses against account compromise.

---

### Monitor for Data Breaches

Organizations should monitor for leaked credentials and require password changes if employee accounts appear in known data breaches.

Users should also change passwords immediately if they learn that an account has been compromised.

---

## Comparing Password Attacks

| Attack              | Requires User Interaction | Uses Stolen Passwords           | Guesses Passwords   |
| ------------------- | ------------------------- | ------------------------------- | ------------------- |
| Brute Force         | ❌                        | ❌                              | ✅                  |
| Dictionary Attack   | ❌                        | ❌                              | ✅                  |
| Password Spraying   | ❌                        | ❌                              | ✅                  |
| Credential Stuffing | ❌                        | ✅                              | ❌                  |
| Phishing            | ✅                        | ❌                              | ❌                  |
| Keylogging          | ❌                        | ❌                              | ❌ _(records them)_ |
| Shoulder Surfing    | ✅                        | ❌                              | ❌                  |
| Offline Cracking    | ❌                        | Requires stolen password hashes | ✅                  |

---

## Key Takeaways

- Passwords remain a primary target for cybercriminals.
- Weak or reused passwords greatly increase the risk of compromise.
- Common password attacks include brute force, dictionary attacks, credential stuffing, password spraying, phishing, and keylogging.
- Password managers help users create and store strong, unique passwords.
- Multi-Factor Authentication (MFA) provides one of the strongest protections against password-related attacks.
- Strong password hashing algorithms protect stored passwords if a database is compromised.
