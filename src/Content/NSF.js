import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
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
          marginBottom: '50px', // Increased margin between sections
        },
        title: {
          fontSize: '1.8rem', // Decreased title font size
          fontWeight: 'bold',
          marginBottom: '20px', // Increased margin for better spacing
          color: 'white',
          lineHeight: '1.6', // Ensuring consistent line height
        },
        paragraph: {
          fontSize: '1.2rem', // Decreased paragraph font size
          lineHeight: '1.6', // Increased line height for better readability
          marginBottom: '20px', // Increased margin for spacing
          color: 'white',
        },
        list: {
          marginLeft: '20px',
          fontSize: '1.2rem', // Decreased list font size
          lineHeight: '1.8', // Increased line height
          color: 'white',
        },
        listItem: {
          marginBottom: '15px', // Increased margin between list items
        },
        highlight: {
          color: '#fff', // Changed from #white to #fff for proper color
          fontWeight: 'bold',
        },
        codeBlock: {
          backgroundColor: '#f4f4f4',
          padding: '15px', // Increased padding for the code block
          borderRadius: '5px',
          fontFamily: 'monospace',
          overflowX: 'auto',
          color: 'black',
          marginTop: '20px', // Added space above code block
          fontSize: '1rem', // Decreased code block font size
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
      

const NSF = () => {
  const classes = useStyles();
  const navigate = useNavigate(); 

  const handleQuizButtonClick = () => {
    navigate('/nsf-quiz');

  };
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <h2 className={classes.title}>Introduction to Network Security</h2>
        <p className={classes.paragraph}>
          Network security refers to the process of protecting computer networks from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure. It involves measures to protect the confidentiality, integrity, and availability of data during its transmission across or within a network. Network security is essential in today’s interconnected world, where network vulnerabilities can compromise entire organizations, making it a critical focus for both individuals and businesses.
        </p>
        <p className={classes.paragraph}>
          As networks become more complex and interconnected, the threats and vulnerabilities faced by these networks also increase. Cybercriminals and hackers are continuously evolving new techniques to exploit these vulnerabilities. Therefore, understanding the fundamentals of network security and implementing proper defense mechanisms is crucial to ensure a safe and secure environment.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Key Concepts in Network Security</h3>
        <p className={classes.paragraph}>
          To build a secure network, it is important to first understand the key concepts in network security. These concepts are designed to protect systems and data from attacks, including the <span className={classes.highlight}>Confidentiality, Integrity, and Availability (CIA)</span> principles. Let’s explore each of them:
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>Confidentiality:</strong> Ensuring that network traffic and data are only accessible to authorized users or systems. Encryption, access control policies, and firewalls play an important role in ensuring confidentiality.
          </li>
          <li className={classes.listItem}>
            <strong>Integrity:</strong> Ensuring that data sent across the network is not tampered with. Integrity is maintained through hashing, checksums, and data validation protocols, which ensure that no unauthorized modification occurs during data transmission.
          </li>
          <li className={classes.listItem}>
            <strong>Availability:</strong> Ensuring that network resources, data, and systems are available to authorized users when needed. Availability is achieved through redundancy, load balancing, and disaster recovery solutions.
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h2 className={classes.title}>Network Security Course</h2>

        <section>
          <h2 className={classes.title}>Module 1: Introduction to Network Security</h2>
          <p className={classes.paragraph}>
            <strong>What is Network Security?</strong>
            <br />
            Network security is a set of practices, policies, and technologies designed to protect the integrity and usability of networks and data. With the ever-growing use of the internet and the increasing sophistication of cyber threats, network security is a critical consideration for any organization.
          </p>
          <p className={classes.paragraph}>
            <strong>Importance and Impact on Organizations</strong>
            <br />
            The impact of poor network security can be devastating, including data breaches, financial loss, reputational damage, and loss of customer trust. A strong network security strategy helps protect confidential data, reduce downtime, and ensure compliance with legal and regulatory requirements.
          </p>
          <p className={classes.paragraph}>
            <strong>Common Threats in Network Security</strong>
            <br />
            Network security faces various threats, including:
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}>Malware: Software designed to cause harm, such as viruses, worms, and ransomware.</li>
            <li className={classes.listItem}>Phishing: Fraudulent attempts to obtain sensitive information by pretending to be a trustworthy entity.</li>
            <li className={classes.listItem}>Man-in-the-Middle (MITM) Attacks: Intercepting and altering communications between two parties without their knowledge.</li>
            <li className={classes.listItem}>Denial of Service (DoS) Attacks: Overloading systems with traffic to make them unavailable to users.</li>
          </ul>
          <p className={classes.paragraph}>
            <strong>Basic Network Security Terminology</strong>
          </p>
          <ul className={classes.list}>
            <li className={classes.listItem}><strong>Firewalls:</strong> Network security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules.</li>
            <li className={classes.listItem}><strong>IDS (Intrusion Detection Systems):</strong> Tools that monitor network traffic for suspicious activity and potential threats.</li>
            <li className={classes.listItem}><strong>IPS (Intrusion Prevention Systems):</strong> Devices that not only detect but also prevent potential security breaches.</li>
            <li className={classes.listItem}><strong>CIA Triad:</strong> The core principles of network security:
              <ul className={classes.list}>
                <li className={classes.listItem}>Confidentiality: Ensuring that sensitive information is accessible only to authorized individuals.</li>
                <li className={classes.listItem}>Integrity: Ensuring that data is accurate and unaltered during storage or transmission.</li>
                <li className={classes.listItem}>Availability: Ensuring that systems and data are available to authorized users when needed.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
  <h2 className={classes.title}>Module 2: Network Security Devices and Technologies</h2>
  <p className={classes.paragraph}><strong>Firewalls</strong> are essential devices in network security, acting as a barrier between an internal network and external threats. There are different types of firewalls:</p>
  <ul className={classes.list}>
    <li className={classes.listItem}>Packet Filtering Firewalls: Examine packets of data and allow or block them based on predefined rules.</li>
    <li className={classes.listItem}>Stateful Inspection Firewalls: Track the state of active connections and make decisions based on the context of traffic.</li>
    <li className={classes.listItem}>Next-Generation Firewalls (NGFW): Combine traditional firewall capabilities with advanced features such as deep packet inspection, application awareness, and intrusion prevention.</li>
  </ul>
  <p className={classes.paragraph}><strong>Intrusion Detection and Prevention Systems (IDS/IPS)</strong></p>
  <ul className={classes.list}>
    <li className={classes.listItem}>IDS: Monitors network traffic for signs of potential threats or attacks. It generates alerts but does not take any action to stop the threat.</li>
    <li className={classes.listItem}>IPS: Similar to IDS but can take action to block or mitigate detected threats, such as dropping malicious traffic or reconfiguring network devices.</li>
  </ul>
  <p className={classes.paragraph}>Understanding and implementing these network security devices is vital to protecting data and ensuring the smooth operation of a network.</p>
</section>

<section>
  <h2 className={classes.title}>Module 3: Secure Network Design</h2>
  <p className={classes.paragraph}><strong>Network Segmentation and Isolation</strong> divides a network into smaller, isolated segments, reducing the impact of a potential security breach.</p>
  <p className={classes.paragraph}><strong>DMZ and Secure Architecture Design</strong>: A Demilitarized Zone (DMZ) is a network segment that sits between the internal network and the internet, providing an extra layer of security for services that need to be accessed externally (e.g., web servers, mail servers).</p>
  <p className={classes.paragraph}><strong>Zero Trust Architecture Basics</strong>: The Zero Trust model assumes that threats exist both inside and outside the network. It requires that every user and device is authenticated and authorized before gaining access to any network resource.</p>
</section>

<section>
  <h2 className={classes.title}>Module 4: Network Access Control (NAC)</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Role of NAC in Network Security:</strong> NAC helps enforce security policies on devices attempting to connect to a network.</li>
    <li className={classes.listItem}><strong>Authentication Protocols - RADIUS, TACACS+:</strong>
      <ul>
        <li className={classes.listItem}>RADIUS: A protocol for authenticating users trying to access the network.</li>
        <li className={classes.listItem}>TACACS+: A more advanced protocol providing greater flexibility and security for network device authentication.</li>
      </ul>
    </li>
    <li className={classes.listItem}><strong>Implementing Network Access Policies:</strong> Network access policies define the rules for device access based on user roles, device types, or other criteria.</li>
    <li className={classes.listItem}><strong>Managing Device Access and Compliance:</strong> Continuously monitor and manage device access to ensure compliance with security policies.</li>
  </ul>
</section>

<section>
  <h2 className={classes.title}>Module 5: VPNs and Remote Access Security</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Introduction to VPNs - Types and Benefits:</strong> VPNs allow secure connections to private networks over the internet, often used for remote access by employees.</li>
    <li className={classes.listItem}><strong>Configuring Secure VPN Tunnels:</strong> VPN tunnels encrypt data between the client and server, ensuring that sensitive information is protected from interception.</li>
    <li className={classes.listItem}><strong>SSL/TLS vs. IPsec VPNs:</strong> SSL/TLS VPNs are typically easier to configure, while IPsec VPNs are more robust and provide secure communication for all types of traffic.</li>
  </ul>
</section>

<section>
  <h2 className={classes.title}>Module 6: Wireless Network Security</h2>
  <p className={classes.paragraph}><strong>Wireless Security Protocols - WPA2, WPA3:</strong> WPA2 and WPA3 are security protocols used to secure wireless networks, with WPA3 providing enhanced security over WPA2.</p>
  <p className={classes.paragraph}><strong>Securing Wi-Fi Networks:</strong> Change default credentials, use strong encryption, and disable WPS to protect your wireless network.</p>
  <p className={classes.paragraph}><strong>Rogue Access Points and Threat Mitigation:</strong> Rogue access points can provide unauthorized access, and wireless intrusion detection systems (WIDS) help monitor for such devices.</p>
</section>

<div className={classes.section}>
  <h3 className={classes.title}>Common Network Security Threats</h3>
  <p className={classes.paragraph}>
    The cybersecurity landscape includes various threats that pose risks to networks. Understanding these threats is vital for building effective defenses. Below are some of the most common network security threats:
  </p>
  <ul className={classes.list}>
    <li className={classes.listItem}>
      <strong>Denial of Service (DoS) Attacks:</strong> DoS attacks aim to make a network service unavailable to its intended users by overwhelming the network with excessive traffic. Distributed Denial of Service (DDoS) attacks are even more challenging as they involve multiple sources to generate traffic.
    </li>
    <li className={classes.listItem}>
      <strong>Man-in-the-Middle (MitM) Attacks:</strong> In a MitM attack, attackers intercept communication between two parties to steal or alter data. Common methods include session hijacking or eavesdropping on unencrypted communications.
    </li>
    <li className={classes.listItem}>
      <strong>Malware:</strong> Malware refers to malicious software like viruses, worms, trojans, and ransomware that infects systems through the network. These threats often result in the theft of sensitive data, system corruption, or unauthorized access.
    </li>
    <li className={classes.listItem}>
      <strong>Phishing:</strong> Phishing attacks are designed to deceive users into providing sensitive information such as passwords or account details, often by posing as trusted sources in email or web-based communications.
    </li>
  </ul>
</div>

<div className={classes.section}>
  <h3 className={classes.title}>Best Practices for Network Security</h3>
  <p className={classes.paragraph}>
    To mitigate the risk of network attacks, various best practices can be implemented to enhance security. These strategies help organizations and individuals protect their networks and data:
  </p>
  <ul className={classes.list}>
    <li className={classes.listItem}>
      <strong>Implement Strong Authentication Mechanisms:</strong> Use multi-factor authentication (MFA) to add an extra layer of protection. It requires users to provide two or more forms of identification, such as passwords and security tokens.
    </li>
    <li className={classes.listItem}>
      <strong>Use Firewalls and Intrusion Detection Systems (IDS):</strong> Firewalls filter incoming and outgoing traffic based on security rules, while IDS monitor network traffic for signs of malicious activity or policy violations.
    </li>
    <li className={classes.listItem}>
      <strong>Regularly Update and Patch Systems:</strong> Ensure that all network devices and software are up-to-date with the latest security patches. Vulnerabilities in outdated systems are common targets for cybercriminals.
    </li>
    <li className={classes.listItem}>
      <strong>Network Segmentation:</strong> Divide the network into segments to reduce the attack surface. This practice limits access to sensitive information, minimizing the impact of a potential attack.
    </li>
    <li className={classes.listItem}>
      <strong>Encrypt Sensitive Data:</strong> Use encryption protocols such as SSL/TLS for data transmission over the network. This ensures that even if data is intercepted, it cannot be read without the appropriate decryption key.
    </li>
  </ul>
</div>

<div className={classes.section}>
  <h3 className={classes.title}>Emerging Threats in Network Security</h3>
  <p className={classes.paragraph}>
    As technology advances, new network security challenges emerge. Some notable emerging threats include:
  </p>
  <ul className={classes.list}>
    <li className={classes.listItem}>
      <strong>Advanced Persistent Threats (APT):</strong> APTs are prolonged and targeted attacks aimed at stealing information or compromising critical infrastructure. Attackers use stealthy methods to maintain undetected access over an extended period.
    </li>
    <li className={classes.listItem}>
      <strong>IoT Vulnerabilities:</strong> As more devices become connected to the internet, the IoT (Internet of Things) presents new security risks. Many IoT devices have weak security features, making them vulnerable to attacks.
    </li>
    <li className={classes.listItem}>
      <strong>Ransomware Attacks:</strong> Ransomware is a type of malware that encrypts data on a device or network, holding it hostage until a ransom is paid. These attacks can cripple organizations and cause massive financial and reputational damage.
    </li>
  </ul>
</div>

<div className={classes.section}>
  <h3 className={classes.title}>Case Study: The SolarWinds Cyberattack</h3>
  <p className={classes.paragraph}>
    The SolarWinds cyberattack, which occurred in late 2020, is one of the most significant and sophisticated cyberattacks in recent years. Hackers infiltrated the SolarWinds software supply chain, affecting its Orion software, which is used by thousands of organizations worldwide, including government agencies, corporations, and security firms.
  </p>
  <p className={classes.paragraph}>
    The attackers were able to remain undetected for months, and their activities were only discovered after the breach had already occurred. This case underscores the importance of securing the entire supply chain and implementing robust security measures to detect and respond to intrusions at every level.
  </p>
  <div className={classes.codeBlock}>
    <pre>
      {/* Example of how a security breach might look in a log file */}
      {"[INFO] Intrusion Detected: Unauthorized Access Attempt to Server XYZ at 02:33 AM"}
      {"[ERROR] Multiple Failed Login Attempts: User admin from IP 192.168.1.105"}
      {"[ALERT] Possible Malware Detected in Network Traffic to/from Server ABC"}
    </pre>
  </div>
</div>

<footer className={classes.section}>
  <h3 className={classes.title}>Conclusion</h3>
  <p className={classes.paragraph}>
    By completing this course, participants will have gained a strong foundation in network security principles and practices. They will be equipped to protect their organization’s network infrastructure from a wide range of cyber threats, implement secure network designs, and use essential network security technologies like firewalls, VPNs, and IDS/IPS systems.
  </p>
  <h3 className={classes.title}>Final Assessment and Certification</h3>
  <p className={classes.paragraph}>
    At the end of this course, participants will be assessed on their understanding of network security principles, with a focus on practical applications and real-world scenarios. Upon successful completion, participants will receive a certificate validating their expertise in network security fundamentals.
  </p>
</footer>
</div>
<Button className={classes.button} onClick={handleQuizButtonClick}>
          Take the Quiz
        </Button>
    </div>
  );
};

export default NSF;
