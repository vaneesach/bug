import React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '100px auto',
    padding: '20px',
    maxWidth: '1200px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: 'white',
  },
  section: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: 'white',
  },
  list: {
    marginLeft: '20px',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'white',
  },
  listItem: {
    marginBottom: '15px',
  },
  highlight: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50', // Green background
    color: 'white',             // White text
    padding: '10px 20px',       // Padding for the button
    fontSize: '16px',           // Font size for readability
    border: 'none',             // No border
    borderRadius: '5px',        // Rounded corners
    cursor: 'pointer',          // Pointer cursor on hover
  },
}));

const EHB = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Initialize useNavigate hook

const handleQuizClick = () => {
  navigate('/quiz'); // Navigate to the quiz route
};

  return (
    <div className={classes.container}>
      {/* Course Overview */}
      <div className={classes.section}>
  <h2 className={classes.title}>Course Overview</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Objectives:</strong> Introduction to ethical hacking principles and practices, including network scanning, vulnerability analysis, and penetration testing techniques. Learn to identify, exploit, and secure vulnerabilities in various systems.</li>
    <li className={classes.listItem}><strong>Target Audience:</strong> Beginners, IT professionals, and aspiring cybersecurity analysts looking to build foundational skills in ethical hacking. The course is designed to equip participants with hands-on knowledge of cybersecurity principles and practical tools used in real-world scenarios.</li>
    <li className={classes.listItem}><strong>Basic Knowledge:</strong> Basic knowledge of IT systems, networking, and security concepts is recommended but not required. The course will cover introductory material to ensure all participants have the foundational understanding needed to proceed with the lessons.</li>
    <li className={classes.listItem}><strong>Course Structure:</strong> The course is divided into modules focusing on key aspects of ethical hacking, including reconnaissance, exploitation, maintaining access, and covering tracks. It includes theoretical lessons and hands-on exercises, with practical labs to help solidify the concepts.</li>
    <li className={classes.listItem}><strong>Prerequisites:</strong> No advanced technical background is required. However, having a basic understanding of computer networks, operating systems, and security protocols will be beneficial for the participants to maximize learning.</li>
  </ul>
</div>


      {/* Module 1 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 1: Fundamentals of Ethical Hacking</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>What is Ethical Hacking?</strong> - Definition and purpose. Ethical hacking, also known as penetration testing or white-hat hacking, is the process of testing and evaluating the security of systems, networks, and applications by mimicking the tactics of malicious hackers in a legal and authorized manner. The primary objective is to identify and fix vulnerabilities before they can be exploited by cybercriminals.</li>
    <li className={classes.listItem}><strong>Differences between Ethical and Malicious Hacking</strong> - Ethical hackers perform authorized penetration tests, aiming to strengthen security, while malicious hackers, also known as black-hat hackers, exploit vulnerabilities for personal gain, causing damage to organizations. Ethical hackers follow strict guidelines, such as obtaining permission from the target organization, adhering to legal standards, and providing detailed reports on findings. Malicious hackers, on the other hand, operate outside the law, often compromising sensitive data, damaging systems, and disrupting business operations.</li>
    <li className={classes.listItem}><strong>Key Concepts:</strong> Vulnerabilities, Threats, and Exploits. Vulnerabilities are weaknesses in a system or network that can be exploited by attackers to gain unauthorized access or cause harm. Threats are potential dangers that exploit these vulnerabilities, such as cyberattacks, data breaches, or malware infections. Exploits are tools or techniques used by attackers to take advantage of vulnerabilities. Ethical hackers focus on identifying these vulnerabilities before malicious actors can exploit them, helping organizations mitigate risks and improve their defenses.</li>
    <li className={classes.listItem}><strong>The Ethical Hacker’s Code of Conduct</strong> - Ethical hackers follow a strict code of conduct to ensure their actions remain legal and responsible. This includes obtaining explicit permission before testing any systems, maintaining confidentiality, and acting in the best interest of the organization. Ethical hackers must also avoid causing any harm during their testing, such as disrupting services or stealing sensitive data. They are committed to improving security by providing actionable reports and recommendations to the organization.</li>
    <li className={classes.listItem}><strong>Tools and Techniques Used in Ethical Hacking</strong> - Ethical hackers use a wide range of tools to carry out penetration tests, such as network scanning tools, vulnerability scanners, and exploit frameworks. Common tools include Nmap for network discovery, Metasploit for exploitation, and Wireshark for packet analysis. Ethical hackers also rely on techniques like social engineering, password cracking, and wireless network attacks to assess vulnerabilities in real-world environments. Understanding these tools and techniques is essential for conducting thorough and effective security assessments.</li>
    <li className={classes.listItem}><strong>Legal and Ethical Considerations</strong> - Ethical hacking is conducted within the boundaries of the law, ensuring that hackers operate with authorization from the target organization. Ethical hackers must also be aware of legal frameworks such as the Computer Fraud and Abuse Act (CFAA) in the United States, the General Data Protection Regulation (GDPR) in the European Union, and other regional regulations that govern cybersecurity practices. Ethical hackers should always prioritize compliance and transparency, ensuring that all actions are legally sanctioned and documented.</li>
    <li className={classes.listItem}><strong>Real-World Applications of Ethical Hacking</strong> - Ethical hacking plays a crucial role in securing networks, applications, and data. It is used to conduct regular security assessments, simulate cyberattacks, and ensure compliance with industry standards. By identifying vulnerabilities before malicious hackers can exploit them, ethical hackers help organizations avoid costly data breaches, downtime, and reputational damage. Ethical hacking is also used in industries such as banking, healthcare, and government, where protecting sensitive data is paramount.</li>
  </ul>
</div>
{/* Module 2 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 2: Reconnaissance and Information Gathering</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Understanding Reconnaissance:</strong> Reconnaissance is the initial phase in ethical hacking where the attacker gathers as much information as possible about the target. This phase is critical as it allows hackers to identify potential vulnerabilities and attack vectors before proceeding with further exploitation. Reconnaissance can be divided into two types: active and passive. Active reconnaissance involves directly interacting with the target system, such as scanning a network to identify live hosts or open ports. Passive reconnaissance, in contrast, involves gathering information without directly engaging with the target. This can include researching publicly available information, social media, and domain registrations. A combination of both techniques provides a comprehensive understanding of the target and is essential for a successful attack.</li>
    <li className={classes.listItem}><strong>Common Tools for Reconnaissance:</strong> Several tools are essential for gathering information during the reconnaissance phase. Nmap (Network Mapper) is one of the most widely used network scanning tools. It allows attackers to identify live hosts, services, open ports, and security configurations on a network. Whois is another common tool, used to gather information about domain names, IP addresses, and ownership details. By querying the Whois database, hackers can obtain crucial contact information, registration details, and sometimes even internal network configurations. Google Dorks, or advanced Google search operators, help attackers uncover sensitive data that may be unintentionally exposed online. This technique can reveal hidden files, sensitive directories, and other data that might not be intended for public view.</li>
    <li className={classes.listItem}><strong>Social Engineering Techniques:</strong> Social engineering is a technique used by hackers to manipulate individuals into divulging confidential information, often through deception or psychological manipulation. This technique can be especially effective in the reconnaissance phase as it relies on human vulnerabilities rather than technological ones. Phishing, pretexting, baiting, and tailgating are common social engineering tactics. Phishing involves sending fraudulent emails or messages that appear legitimate to trick individuals into revealing passwords or financial details. Pretexting is where the attacker creates a fabricated scenario to obtain information, while baiting involves offering something attractive (like free software) to entice individuals into giving away personal information or downloading malicious files.</li>
    <li className={classes.listItem}><strong>Network Scanning and Footprinting Basics:</strong> Network scanning is a key technique in reconnaissance that helps attackers map out the target network. By scanning a network, attackers can identify active devices, open ports, and available services that could be exploited. Tools such as Nmap, Angry IP Scanner, and Netcat are frequently used for network scanning. Footprinting is a method of gathering detailed information about the target's infrastructure, including domain names, IP addresses, subdomains, and more. Footprinting helps attackers understand the overall structure of the target's network and identify potential weaknesses that could be exploited during later stages of an attack. Tools like Dig, Nslookup, and Netcraft are used for footprinting, helping attackers gather detailed information about a target’s DNS records, network infrastructure, and more.</li>
    <li className={classes.listItem}><strong>DNS Interrogation and WHOIS Queries:</strong> DNS interrogation is an important reconnaissance technique that involves querying the domain name system (DNS) to gather information about a target’s network and services. Tools like Dig or Nslookup allow attackers to retrieve DNS records such as A records (IP address mappings), MX records (mail servers), and CNAME records (aliases), which can reveal the target’s network structure. WHOIS queries provide additional information about domain registrations, including details about domain ownership, registration dates, and contact information. These records can help attackers identify domain owners, uncover potentially valuable contacts, and gain insight into the target’s internal network.</li>
    <li className={classes.listItem}><strong>Fingerprinting Web Servers and Applications:</strong> Fingerprinting involves identifying specific details about the technologies being used by a target’s web server or application. By analyzing HTTP headers, error messages, and metadata, attackers can determine the software and versions running on the server. This process helps them uncover potential vulnerabilities associated with specific software versions. Tools like WhatWeb, Wappalyzer, and Netcraft can automate the fingerprinting process by scanning web servers and providing detailed information about the technologies in use. Identifying outdated or vulnerable versions of software gives attackers potential entry points to exploit, making fingerprinting an essential part of the reconnaissance phase.</li>
    <li className={classes.listItem}><strong>Open-Source Intelligence (OSINT):</strong> Open-Source Intelligence (OSINT) is the practice of gathering publicly available information to support the reconnaissance phase of an attack. OSINT tools like Maltego, Shodan, and Google search techniques can help attackers gather information from websites, social media, news articles, and public databases. By collecting OSINT data, attackers can learn about an organization's structure, employee details, technologies in use, and even security policies. The data gathered during the OSINT phase can be extremely useful for launching targeted attacks or phishing campaigns.</li>
  </ul>
</div>


 {/* Module 3 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 3: Scanning and Enumeration</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Network Scanning:</strong> Network scanning is a critical step in the ethical hacking process that helps attackers identify live hosts, open ports, and active services within a target network. Tools like Nmap (Network Mapper) are used for scanning a network and discovering which devices are connected to the network. Nmap allows penetration testers to map the target network, identify open ports, and determine the services running on those ports. By conducting network scans, ethical hackers can gather information about the target system’s structure and vulnerabilities, which can be useful for further exploitation or defense hardening. Additionally, network scanning can uncover hidden devices and services that might not be visible through passive reconnaissance, allowing attackers to gain a deeper understanding of the attack surface.</li>
    <li className={classes.listItem}><strong>Vulnerability Scanning Tools:</strong> Vulnerability scanning is the process of identifying security weaknesses in a system or network that can be exploited by attackers. Tools like Nessus and OpenVAS are widely used for vulnerability scanning. Nessus is a comprehensive vulnerability scanner that checks systems for known vulnerabilities and misconfigurations by comparing them against a vast database of security issues. OpenVAS (Open Vulnerability Assessment System) is another open-source tool that performs vulnerability scanning, providing detailed reports about the vulnerabilities it discovers. Both Nessus and OpenVAS can automate the process of scanning large networks, identifying vulnerabilities like unpatched software, weak passwords, and incorrect system configurations. These tools generate reports that can be used by security professionals to prioritize patches and mitigate risks before attackers exploit the vulnerabilities.</li>
    <li className={classes.listItem}><strong>Enumeration Techniques:</strong> Enumeration is the process of extracting valuable system and network information from a target system. Unlike network scanning, which identifies open ports and services, enumeration focuses on gathering detailed information about the system’s configuration, user accounts, and network structure. Enumeration techniques include querying services, such as LDAP (Lightweight Directory Access Protocol), SMB (Server Message Block), and NetBIOS, to gather information about the target. Attackers may enumerate user accounts, shares, and security policies, looking for weak points or unprotected data that could be exploited. Tools like Enum4Linux, SNMPwalk, and SMBclient are often used to automate the enumeration process. These tools help gather detailed information about the system that is often necessary for conducting deeper penetration tests or launching attacks.</li>
    <li className={classes.listItem}><strong>Understanding and Interpreting Scan Results:</strong> Once network scanning and vulnerability assessments have been completed, interpreting the results is crucial to identifying exploitable vulnerabilities. Scanning tools like Nmap and Nessus provide detailed reports that list open ports, services, and any vulnerabilities that have been detected. These reports also often contain a risk assessment or severity score, which helps security professionals prioritize which issues should be addressed first. It is important to understand the context of the scan results. For example, some open ports may be critical to business operations, and others may be non-critical or even part of the network’s defense mechanisms. Vulnerabilities may range from minor misconfigurations to critical security flaws that could lead to full system compromise. Ethical hackers need to assess the severity of each finding, investigate whether it could be exploited, and recommend appropriate countermeasures, such as patching software, hardening services, or eliminating unnecessary services.</li>
    <li className={classes.listItem}><strong>Port Scanning Techniques:</strong> Port scanning is a fundamental technique used to identify open ports and services on a target system. By scanning ports, attackers can identify which services are running and which of them might be vulnerable. Nmap is one of the most common tools used for port scanning, offering various scanning techniques, including SYN scanning (Stealth scanning), TCP connect scanning, and UDP scanning. SYN scanning is particularly stealthy as it doesn’t complete the TCP handshake, which helps attackers avoid detection by intrusion detection systems (IDS). UDP scanning is more difficult as it doesn’t establish a reliable connection, but it is still essential for identifying UDP-based services that may be vulnerable.</li>
    <li className={classes.listItem}><strong>Service Version Detection:</strong> After identifying open ports, ethical hackers often use service version detection to determine the specific versions of services running on the target system. Nmap’s version detection feature allows attackers to fingerprint services and applications by analyzing responses from open ports. Identifying the exact versions of services is crucial for determining whether there are any known vulnerabilities associated with those versions. For example, if an outdated version of Apache or an older version of SSH is detected, attackers can search for known exploits that affect those versions. This helps ethical hackers identify attack vectors more precisely and recommend patches or updates to secure vulnerable services.</li>
    <li className={classes.listItem}><strong>OS Fingerprinting:</strong> OS fingerprinting is the technique used to identify the operating system of a remote device based on its network behavior and characteristics. Tools like Nmap can be used to perform OS fingerprinting by analyzing responses from a target system’s open ports. By identifying the operating system, ethical hackers can narrow down potential vulnerabilities associated with that OS. For instance, Windows systems may be more vulnerable to certain exploits, while Linux systems may have different attack vectors. OS fingerprinting is valuable for understanding the target environment and customizing the attack strategy accordingly.</li>
    <li className={classes.listItem}><strong>Exploitability and Risk Assessment:</strong> After scanning and enumeration, it’s essential to assess the exploitability of the vulnerabilities identified. Ethical hackers must evaluate whether a vulnerability can be easily exploited by an attacker and whether it poses a significant risk to the target system. Some vulnerabilities, such as weak passwords or open ports, might be easy to exploit but pose a low risk, while others, such as unpatched critical software, might be difficult to exploit but have a high impact. This assessment is crucial for prioritizing remediation actions and protecting critical systems. Exploitability can also be affected by the attacker’s skill level, making it important to consider the target environment, the attacker’s capabilities, and the potential impact of an exploit.</li>
  </ul>
</div>


  {/* Module 4 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 4: System Hacking and Gaining Access</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Techniques for Gaining System Access:</strong> Gaining unauthorized access to systems is a crucial phase in ethical hacking. Ethical hackers use various techniques to exploit vulnerabilities, such as weak authentication methods or software flaws, to gain access to target systems. One common approach is exploiting unpatched vulnerabilities in applications, operating systems, or network services. Additionally, attackers may use social engineering tactics, such as phishing, to trick users into revealing their login credentials. Once access is gained, ethical hackers document the process and attempt to identify the system’s weaknesses, which can be mitigated to prevent real-world attacks. Common tools used during this phase include Metasploit, a framework that automates the exploitation of vulnerabilities, and Hydra, a popular password cracking tool.</li>
    <li className={classes.listItem}><strong>Password Cracking:</strong> One of the primary techniques for gaining system access is cracking passwords. Attackers often use a combination of methods to crack passwords, such as dictionary attacks, brute force attacks, and rainbow tables. In a dictionary attack, the hacker attempts to break the password by using a list of commonly used passwords. A brute force attack is a more exhaustive approach where all possible combinations of characters are tried until the correct password is found. Brute force attacks can be slow, especially for long passwords, but they are effective for weaker passwords. Rainbow tables are precomputed sets of password hashes and their corresponding plaintext values. They can speed up the cracking process by providing a fast lookup for known password hashes. Tools like John the Ripper, Hashcat, and Cain and Abel are frequently used for password cracking in penetration tests. Ethical hackers aim to find weak passwords, which can be corrected by enforcing stronger password policies in real-world applications.</li>
    <li className={classes.listItem}><strong>Privilege Escalation:</strong> After gaining initial access to a system, attackers may attempt privilege escalation, which involves increasing their level of access to perform actions beyond what was originally allowed. Privilege escalation can be either vertical or horizontal. Vertical escalation occurs when a user with limited permissions gains higher-level access, such as gaining administrative or root privileges. Horizontal escalation occurs when a user gains access to other users' accounts with similar privileges. Techniques for privilege escalation include exploiting vulnerabilities in the operating system, misconfigured permissions, and leveraging flaws in running applications or services. Tools like the Linux Exploit Suggester, PowerUp, and Metasploit can automate the process of finding and exploiting privilege escalation vulnerabilities. Once privilege escalation is achieved, ethical hackers can take full control of the system, allowing them to audit the system for sensitive data and further vulnerabilities.</li>
    <li className={classes.listItem}><strong>Covering Tracks and Maintaining Access:</strong> Once an attacker gains system access, they often attempt to cover their tracks to avoid detection. This includes clearing logs, hiding malicious files, and using rootkits to maintain access undetected. Ethical hackers need to understand these techniques to identify and prevent them during security audits. Some common methods of covering tracks include deleting or modifying system logs to erase evidence of unauthorized access, using steganography to hide files within other files, and installing backdoors to allow persistent access even if the system is patched or passwords are changed. Maintaining access is another critical step, especially in long-term penetration testing engagements. Techniques for maintaining access include creating new user accounts with elevated privileges, installing reverse shells that connect back to the attacker's machine, and setting up persistent remote access tools like Remote Access Trojans (RATs). Ethical hackers utilize these techniques to determine how easily access can be retained and recommend countermeasures like endpoint detection and response (EDR) systems, multi-factor authentication (MFA), and log monitoring to detect malicious activity and prevent unauthorized access.</li>
    <li className={classes.listItem}><strong>Exploiting Misconfigurations:</strong> Another method for gaining access is exploiting misconfigurations in software and hardware. Systems that are improperly configured can present an easy target for attackers. Misconfigurations can include default usernames and passwords, open ports, unnecessary services running on a system, and unsecured file permissions. For example, default administrative passwords in networking devices or databases are often overlooked and provide an easy way for attackers to gain control. Additionally, poorly configured firewalls and security protocols can allow unauthorized traffic to pass into a network. Ethical hackers check for common misconfigurations using tools like Nexpose and Burp Suite and report them to system administrators so they can be corrected. Hardening the system against these misconfigurations is a critical step in improving security and protecting against unauthorized access.</li>
    <li className={classes.listItem}><strong>Bypassing Security Controls:</strong> Many systems have security measures in place to prevent unauthorized access, such as firewalls, intrusion detection systems (IDS), and antivirus software. However, skilled attackers can often bypass these controls. One common method for bypassing firewalls is tunneling traffic through other protocols, such as HTTP or HTTPS, to evade detection. For intrusion detection systems, attackers may use encryption or obfuscation techniques to disguise malicious activity. Ethical hackers use tools like Netcat, socat, and proxies to bypass security controls and test how well the system can withstand advanced attack techniques. The goal is to evaluate whether security controls are robust and whether they effectively block unauthorized access.</li>
    <li className={classes.listItem}><strong>Post-Exploitation:</strong> After gaining access and escalating privileges, ethical hackers move into the post-exploitation phase. This phase involves gathering information about the system, extracting valuable data, and further compromising the system. Tools like Mimikatz (for Windows systems) are used to dump credentials and extract information such as user account details, passwords, and hashes. At this point, the ethical hacker's goal is to map out the entire network, locate sensitive data, and test whether any further escalation is possible. Post-exploitation can also involve creating persistence mechanisms, such as backdoors, to ensure ongoing access in case the system is rebooted or patched. It is important that ethical hackers document every step and ensure that all actions are authorized in the scope of their engagement.</li>
  </ul>
</div>

  {/* Module 5 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 5: Malware and Exploits</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Types of Malware:</strong> Malware is a general term for malicious software designed to infiltrate, damage, or steal information from systems without the user’s consent. Common types of malware include:</li>
    <ul>
      <li><strong>Viruses:</strong> Self-replicating programs that attach themselves to legitimate software or files. Viruses spread when infected files are executed, causing damage to data or systems. They often require user interaction to propagate.</li>
      <li><strong>Trojans:</strong> Malware disguised as legitimate software. Trojans typically trick users into downloading or running them by masquerading as harmless programs or files. Once activated, they can steal data, create backdoors, or give attackers remote access to the infected system.</li>
      <li><strong>Ransomware:</strong> A type of malware that encrypts a victim's files and demands a ransom payment in exchange for the decryption key. Ransomware attacks can cripple businesses by making critical files and systems inaccessible until the ransom is paid.</li>
      <li><strong>Rootkits:</strong> A form of malware designed to hide its presence or the presence of other malicious software on a system. Rootkits often allow attackers to maintain privileged access to a system without being detected by traditional security measures.</li>
    </ul>
    <li className={classes.listItem}><strong>How Exploits Work:</strong> Exploits take advantage of vulnerabilities in software or hardware to perform unauthorized actions. Several types of exploits include:</li>
    <ul>
      <li><strong>Buffer Overflows:</strong> A common vulnerability where a program writes more data to a buffer than it can hold, causing the overflowed data to overwrite adjacent memory. This can allow an attacker to execute arbitrary code or crash the system. Attackers can use buffer overflows to gain control of a system or escalate privileges.</li>
      <li><strong>SQL Injection (SQLi):</strong> A technique where malicious SQL queries are inserted into input fields, allowing attackers to manipulate a database. SQLi can be used to extract sensitive data, alter database records, or bypass authentication controls. Attackers exploit poorly sanitized inputs to execute unauthorized SQL commands.</li>
      <li><strong>Cross-Site Scripting (XSS):</strong> A type of attack where malicious scripts are injected into web pages viewed by other users. The scripts can steal session cookies, deface websites, or redirect users to malicious websites. XSS attacks are categorized into three types: reflected, stored, and DOM-based, depending on how the malicious script is executed.</li>
    </ul>
    <li className={classes.listItem}><strong>Malware Analysis:</strong> Analyzing malware is essential for understanding how it operates, how it spreads, and how to defend against it. Basic malware analysis techniques include:</li>
    <ul>
      <li><strong>Static Analysis:</strong> Examining the malware's code without executing it. This can be done by disassembling the malware with tools like IDA Pro, Ghidra, or Binary Ninja. Static analysis helps identify patterns, API calls, and suspicious code segments.</li>
      <li><strong>Dynamic Analysis:</strong> Running the malware in a controlled environment, such as a sandbox, to observe its behavior. This can help analysts detect system changes, network connections, and malicious actions, such as file encryption or data exfiltration.</li>
      <li><strong>Behavioral Analysis:</strong> Observing how the malware interacts with the system during execution. This can include file and registry modifications, network activity, and attempts to contact command and control servers.</li>
      <li><strong>Forensic Analysis:</strong> Involves examining the aftermath of an attack to trace the origins and methods used by malware. It can help identify the attacker’s infrastructure, the attack vector, and any exfiltrated data.</li>
    </ul>
    <li className={classes.listItem}><strong>Popular Exploit Frameworks:</strong> Exploit frameworks are tools used by penetration testers and ethical hackers to automate the discovery, testing, and exploitation of vulnerabilities. Some popular exploit frameworks include:</li>
    <ul>
      <li><strong>Metasploit:</strong> One of the most widely used frameworks for developing and executing exploit code against remote targets. It provides a vast collection of exploits, payloads, and auxiliary modules that allow attackers to gain access, escalate privileges, or gather information about a target. Ethical hackers use Metasploit to perform penetration testing and assess the effectiveness of security defenses.</li>
      <li><strong>BeEF (Browser Exploitation Framework):</strong> A framework that focuses on exploiting vulnerabilities in web browsers. BeEF allows attackers to control a victim’s browser, enabling attacks like phishing, keylogging, and credential theft. It helps ethical hackers identify browser-based vulnerabilities.</li>
      <li><strong>Canvas:</strong> An exploit development framework that provides a range of penetration testing tools. It includes modules for network exploitation, social engineering, and post-exploitation, allowing ethical hackers to test security defenses comprehensively.</li>
      <li><strong>Core Impact:</strong> A commercial penetration testing tool that automates exploit generation and execution. Core Impact allows security professionals to conduct end-to-end penetration tests, assess vulnerabilities, and validate security measures across multiple systems.</li>
    </ul>
    <li className={classes.listItem}><strong>Defending Against Malware and Exploits:</strong> Understanding how malware and exploits work is crucial for developing effective defenses. Common strategies to defend against these threats include:</li>
    <ul>
      <li><strong>Regular Software Patching:</strong> Keeping systems up to date with the latest security patches to fix vulnerabilities that could be exploited by malware or attackers.</li>
      <li><strong>Endpoint Protection:</strong> Using antivirus software, anti-malware tools, and firewalls to detect and block known malware and suspicious behavior on endpoints.</li>
      <li><strong>Input Validation and Sanitization:</strong> Ensuring that all user inputs are validated and sanitized to prevent injection attacks like SQLi and XSS.</li>
      <li><strong>Network Segmentation and Firewalls:</strong> Isolating critical systems from the rest of the network and using firewalls to monitor and restrict network traffic can reduce the impact of malware outbreaks.</li>
      <li><strong>Security Awareness Training:</strong> Educating employees about the dangers of malware, phishing, and social engineering attacks, and providing guidelines for safe online practices.</li>
    </ul>
  </ul>
</div>


   {/* Module 6 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 6: Web Application Hacking</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Introduction to Web Application Security:</strong> Web applications are one of the most common targets for cyberattacks. Ensuring the security of web applications is crucial because they interact with users and store sensitive data. Web application security involves measures to protect websites and online services from various threats, including data breaches, malware, and unauthorized access. Common vulnerabilities in web applications are exploited by attackers to gain unauthorized access, steal information, or compromise the integrity of the application.</li>

    <li className={classes.listItem}><strong>Common Web Vulnerabilities:</strong> Web applications are frequently targeted because of vulnerabilities in their design, configuration, and implementation. Some of the most common vulnerabilities include:</li>
    <ul>
      <li><strong>SQL Injection (SQLi):</strong> SQL injection is one of the most common attack vectors for web applications. It occurs when an attacker is able to inject malicious SQL code into a query, which then gets executed by the database. This allows the attacker to manipulate or steal sensitive data, bypass authentication, or even delete records.</li>
      <li><strong>Cross-Site Scripting (XSS):</strong> XSS is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. This script is executed in the victim’s browser, which can lead to data theft, session hijacking, and defacement of web pages. XSS can be classified into three types: reflected, stored, and DOM-based XSS.</li>
      <li><strong>Cross-Site Request Forgery (CSRF):</strong> CSRF exploits the trust that a web application has in the user’s browser. An attacker tricks the user into performing unintended actions on a web application where the user is already authenticated. This can result in actions like changing account settings or transferring money from a victim’s account.</li>
    </ul>

    <li className={classes.listItem}><strong>Tools for Web Application Testing:</strong> Security professionals use various tools to detect, exploit, and mitigate vulnerabilities in web applications. Some popular tools for web application testing include:</li>
    <ul>
      <li><strong>Burp Suite:</strong> Burp Suite is an integrated platform for performing security testing of web applications. It provides features like an intercepting proxy, web vulnerability scanner, and various testing tools for finding and exploiting vulnerabilities such as SQL injection, XSS, and CSRF. Burp Suite is widely used by penetration testers to test the security of web applications.</li>
      <li><strong>OWASP ZAP (Zed Attack Proxy):</strong> OWASP ZAP is an open-source web application security scanner designed to find security vulnerabilities in web applications. ZAP provides automated scanners as well as various tools for manual testing, including intercepting proxies, fuzzing tools, and reporting capabilities. It is useful for testing web applications for common vulnerabilities like XSS and SQL injection.</li>
    </ul>

    <li className={classes.listItem}><strong>Mitigating Web Application Vulnerabilities:</strong> Mitigating vulnerabilities in web applications requires a multi-layered approach that includes secure coding practices, proper input validation, and using security tools. Some common mitigation strategies include:</li>
    <ul>
      <li><strong>Input Validation and Sanitization:</strong> One of the most effective ways to prevent vulnerabilities like SQL injection and XSS is to properly validate and sanitize user inputs. This involves checking and cleaning user input before it is processed by the web application, ensuring that no malicious code can be executed.</li>
      <li><strong>Using Prepared Statements:</strong> To prevent SQL injection, developers should use prepared statements and parameterized queries. These techniques ensure that user input is treated as data and not executable code, which prevents attackers from injecting malicious SQL code.</li>
      <li><strong>Cross-Site Request Forgery (CSRF) Tokens:</strong> Implementing anti-CSRF tokens ensures that requests made to web applications are valid and come from the intended user. This can be done by embedding a token in each request and validating it on the server side.</li>
      <li><strong>Content Security Policy (CSP):</strong> A Content Security Policy can help mitigate XSS attacks by restricting the sources from which content (scripts, styles, etc.) can be loaded. This can prevent attackers from executing malicious scripts in a user's browser.</li>
      <li><strong>Secure HTTP Headers:</strong> Using HTTP headers like `X-Content-Type-Options`, `X-Frame-Options`, and `Strict-Transport-Security` helps enhance security by enforcing proper content handling, protecting against clickjacking, and ensuring secure connections (HTTPS).</li>
    </ul>

    <li className={classes.listItem}><strong>Best Practices for Web Application Security:</strong> In addition to the technical measures listed above, organizations should adopt a set of best practices for secure web application development:</li>
    <ul>
      <li><strong>Regular Security Audits:</strong> Regular security audits and code reviews help identify vulnerabilities early in the development process. It's important to test both the front-end and back-end of web applications for security flaws.</li>
      <li><strong>Secure Authentication and Authorization:</strong> Implementing strong authentication mechanisms such as multi-factor authentication (MFA) and ensuring proper role-based access control (RBAC) is crucial in protecting web applications from unauthorized access.</li>
      <li><strong>Encryption:</strong> Ensuring that sensitive data is encrypted both in transit (using HTTPS) and at rest (using encryption techniques like AES) is important for maintaining the confidentiality and integrity of user data.</li>
      <li><strong>Security Awareness and Training:</strong> Security awareness training for developers is essential for ensuring that they are familiar with secure coding practices and the latest security threats and vulnerabilities. This reduces the chances of vulnerabilities being introduced into the application code.</li>
    </ul>
  </ul>
</div>
{/* Module 7 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 7: Wireless Network Hacking</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Basics of Wireless Security:</strong> Wireless networks are more susceptible to various types of attacks compared to wired networks. Understanding the fundamental security principles is key to protecting wireless communication. The primary goal of wireless security is to protect data confidentiality, integrity, and availability while preventing unauthorized access to the network. Wireless networks often rely on encryption standards such as WEP, WPA, and WPA2 to secure data transmission, but each has varying levels of strength and vulnerabilities.</li>

    <li className={classes.listItem}><strong>Attacks on Wireless Networks:</strong> Wireless networks are particularly vulnerable to certain types of attacks that exploit weaknesses in the encryption protocols or the network's physical security. Some of the most common attacks include:</li>
    <ul>
      <li><strong>WEP Cracking:</strong> Wired Equivalent Privacy (WEP) is one of the earliest encryption methods used to secure wireless networks. It has several inherent weaknesses, including weak initialization vectors (IVs) and poor key management. Attackers can exploit these weaknesses to gain unauthorized access to a network and potentially intercept sensitive data.</li>
      <li><strong>WPA and WPA2 Cracking:</strong> Wi-Fi Protected Access (WPA) and WPA2 are more secure encryption protocols that replaced WEP. WPA2, in particular, uses AES (Advanced Encryption Standard) for encryption. However, WPA2 networks can still be vulnerable to attacks like dictionary attacks, where attackers guess passphrases, or the KRACK (Key Reinstallation Attack) attack, which exploits vulnerabilities in the handshake process of WPA2.</li>
      <li><strong>Evil Twin Attacks:</strong> In this attack, an attacker sets up a rogue wireless access point that mimics the legitimate one, often with the same name (SSID). When users connect to the fake access point, the attacker can intercept their traffic, capture sensitive data, or launch man-in-the-middle attacks.</li>
      <li><strong>Packet Sniffing:</strong> This attack involves capturing and analyzing the data packets that are transmitted over a wireless network. Tools like Wireshark are commonly used for packet sniffing, which can lead to the discovery of unencrypted data, such as passwords, usernames, and other sensitive information.</li>
    </ul>

    <li className={classes.listItem}><strong>Tools for Wireless Hacking:</strong> Wireless network hacking often involves using specialized tools to exploit vulnerabilities in wireless networks. Some common tools include:</li>
    <ul>
      <li><strong>Aircrack-ng:</strong> Aircrack-ng is one of the most popular and comprehensive tools for wireless network auditing and cracking WEP/WPA/WPA2 passwords. It works by capturing data packets and performing a brute-force or dictionary attack to crack the encryption key.</li>
      <li><strong>Wireshark:</strong> Wireshark is a widely-used network protocol analyzer that allows attackers and security professionals to capture and analyze network traffic. It can be used to inspect wireless network traffic in real-time and identify vulnerabilities or sensitive data being transmitted without proper encryption.</li>
      <li><strong>Reaver:</strong> Reaver is a tool used to perform offline attacks on WPA/WPA2-protected networks by exploiting vulnerabilities in the WPS (Wi-Fi Protected Setup) protocol. It allows attackers to recover the WPA/WPA2 passphrase using brute-force techniques.</li>
    </ul>

    <li className={classes.listItem}><strong>Protecting and Securing Wireless Networks:</strong> Protecting wireless networks requires a combination of secure configuration, encryption, and monitoring. Some essential practices include:</li>
    <ul>
      <li><strong>Using Strong Encryption:</strong> WPA2 with AES encryption should always be used instead of older, weaker encryption protocols like WEP and WPA. Additionally, using strong passphrases and regularly changing them can help protect against brute-force attacks.</li>
      <li><strong>Disabling WPS:</strong> Wi-Fi Protected Setup (WPS) is a convenience feature that makes it easier to connect devices to a wireless network. However, it has several vulnerabilities, and it is recommended to disable WPS to prevent attacks like Reaver.</li>
      <li><strong>MAC Address Filtering:</strong> This technique allows network administrators to specify which devices are allowed to connect to the wireless network based on their unique MAC addresses. While not foolproof, it adds an additional layer of security.</li>
      <li><strong>Network Segmentation:</strong> Creating separate networks for different devices (e.g., guest networks) helps limit exposure and reduces the risk of unauthorized access to sensitive data or systems.</li>
    </ul>
  </ul>
</div>

{/* Module 8 */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 8: Social Engineering Attacks</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Understanding Social Engineering:</strong> Social engineering is the art of manipulating people into divulging confidential information or performing actions that benefit the attacker. Unlike technical hacking, social engineering exploits human psychology rather than system vulnerabilities. It relies on psychological manipulation, exploiting trust, fear, or urgency, and tricking individuals into giving up sensitive information or access.</li>

    <li className={classes.listItem}><strong>Phishing Attacks:</strong> Phishing is one of the most common forms of social engineering. It involves sending fraudulent emails or messages that appear to be from legitimate sources (e.g., banks, companies, or government agencies) to trick individuals into revealing personal information such as usernames, passwords, or credit card numbers. Phishing attacks can also be carried out via SMS (smishing) or phone calls (vishing). Defending against phishing requires awareness, careful scrutiny of messages, and the use of multi-factor authentication (MFA) to prevent unauthorized access.</li>

    <li className={classes.listItem}><strong>Pretexting, Baiting, and Impersonation Techniques:</strong> Social engineers use various techniques to deceive targets into providing sensitive information:</li>
    <ul>
      <li><strong>Pretexting:</strong> Pretexting involves creating a fabricated scenario to obtain information from a victim. The attacker may pose as a bank representative or an IT support person, for example, to gain trust and acquire sensitive data like passwords or account details.</li>
      <li><strong>Baiting:</strong> Baiting involves offering something enticing to lure a victim into disclosing sensitive information or downloading malicious software. For example, an attacker might leave infected USB drives in public places, hoping that someone will plug them into their computer and unknowingly give the attacker access to their system.</li>
      <li><strong>Impersonation:</strong> Impersonation is when an attacker pretends to be someone the victim knows and trusts, such as a colleague or a customer service representative, to manipulate them into revealing sensitive information or performing certain actions, like transferring funds or changing security settings.</li>
    </ul>

    <li className={classes.listItem}><strong>Building Resilience Against Social Engineering:</strong> Organizations and individuals can take steps to reduce the risk of falling victim to social engineering attacks. Some key practices include:</li>
    <ul>
      <li><strong>Security Awareness Training:</strong> Providing employees with regular security awareness training helps them recognize common social engineering tactics. It also educates them on how to respond to suspicious communications and report potential threats to security teams.</li>
      <li><strong>Verification Procedures:</strong> Verifying the identity of individuals before sharing sensitive information is critical. For example, always contacting a person through a known phone number or email address, rather than relying on the contact details provided in a potentially fraudulent message.</li>
      <li><strong>Multi-Factor Authentication (MFA):</strong> Implementing MFA adds an extra layer of security, making it harder for attackers to gain access to sensitive accounts, even if they manage to steal login credentials.</li>
      <li><strong>Incident Response Plan:</strong> Organizations should have a clear incident response plan in place to quickly address any social engineering attacks that occur. This includes steps for reporting incidents, investigating breaches, and notifying affected individuals.</li>
    </ul>
  </ul>
</div>

      {/* Final Module */}
      <div className={classes.section}>
  <h2 className={classes.title}>Final Module: Ethical Hacking Projects and Practice</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Review of Core Ethical Hacking Techniques:</strong> This final module begins with a comprehensive review of the core ethical hacking techniques that students have learned throughout the course. This includes a recap of topics such as footprinting, scanning, enumeration, vulnerability assessment, and penetration testing. Ethical hacking is an iterative process, and understanding how each technique builds upon the other is essential for success. We'll go over how to properly assess and identify vulnerabilities in a system and how to exploit them ethically to identify risks and weaknesses in a network or application. The review will also cover how to document findings professionally and responsibly, as well as how to ensure that all tests are conducted with proper authorization and in compliance with legal and ethical guidelines.</li>
    
    <li className={classes.listItem}><strong>Hands-on Practice:</strong> <strong>Vulnerability Assessment and Penetration Testing:</strong> Practical experience is key in ethical hacking. During this section, students will have the opportunity to work on real-world scenarios in a controlled environment, utilizing the tools and techniques they have learned. The hands-on exercises will include vulnerability scanning and exploitation of test systems. Students will perform penetration testing on systems to identify and exploit vulnerabilities while adhering to ethical guidelines. The goal is not to cause harm but to help strengthen the security posture of the target system. They will gain experience using tools like Nmap for network scanning, Nessus for vulnerability assessment, and Metasploit for exploitation, among others. After completing the exercises, students will document their findings, detailing vulnerabilities found, the exploitation process, and suggested mitigations.</li>
    
    <li className={classes.listItem}><strong>Ethical Hacking Tools Review:</strong> Throughout the course, students have been introduced to various ethical hacking tools that are widely used in the cybersecurity industry. In this section, we will conduct a detailed review of these tools to refresh students’ understanding and ensure they are comfortable using them in real-world scenarios. These tools include, but are not limited to:</li>
    <ul>
      <li><strong>Nmap:</strong> A powerful network scanner that allows users to discover hosts and services on a computer network. Nmap is essential for mapping out the attack surface of a system.</li>
      <li><strong>Wireshark:</strong> A network protocol analyzer used for capturing and inspecting the data packets that travel across a network. It is used to identify vulnerabilities such as unencrypted data or improper network configuration.</li>
      <li><strong>Burp Suite:</strong> A comprehensive tool for web application security testing. It includes tools for scanning web applications for vulnerabilities like SQL Injection and Cross-Site Scripting (XSS).</li>
      <li><strong>Metasploit:</strong> A framework for penetration testing that allows security professionals to test vulnerabilities, exploit them, and assess the impact. It is widely used in penetration testing engagements.</li>
      <li><strong>Aircrack-ng:</strong> A suite of tools used for auditing wireless networks. It is used for cracking WEP and WPA-PSK keys and testing the security of wireless communication.</li>
    </ul>
    <li className={classes.listItem}><strong>Final Assessment and Certification:</strong> The final portion of the course will be dedicated to a comprehensive assessment that covers all topics discussed throughout the modules. The assessment will include both theoretical and practical tests to evaluate the students' understanding of ethical hacking principles and their ability to apply them in real-world scenarios. Students will be asked to complete a final penetration testing project, where they must identify vulnerabilities, exploit them, and provide a detailed report on their findings and recommendations. The final certification exam will cover topics such as network security, web application security, ethical hacking methodology, and legal/ethical considerations. Upon successful completion of the assessment, students will receive a certification of completion, validating their proficiency in ethical hacking techniques and tools.</li>
  </ul>
</div>
<button className={classes.button} onClick={handleQuizClick}>
  Take the Quiz
</button>


</div>
  );
};

export default EHB;
