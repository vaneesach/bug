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
    marginBottom: '40px', // Increased margin between sections
  },
  title: {
    fontSize: '2.5rem', // Increased title font size
    fontWeight: 'bold',
    marginBottom: '20px', // Increased margin for better spacing
    color: 'white',  
  },
  paragraph: {
    fontSize: '1.2rem', // Increased paragraph font size
    lineHeight: '1.8', // Increased line height for better readability
    marginBottom: '20px', // Increased margin for spacing
    color: 'white',  
  },
  list: {
    marginLeft: '20px',
    fontSize: '1.1rem', // Slightly increased list font size
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

const ITCS = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleQuizClick = () => {
    navigate('/itcs-quiz'); // Navigate to the ITCS quiz page
  };
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <h2 className={classes.title}>Introduction to Cyber Security</h2>
        <p className={classes.paragraph}>
          Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. As the digital world grows, the risk of cyberattacks also increases, making cybersecurity a critical area of concern for individuals, businesses, and governments.
        </p>
        <p className={classes.paragraph}>
          In today’s digital era, cybersecurity is not just about defending against external threats but also protecting from internal risks. The number of connected devices, the growth of the Internet of Things (IoT), and the increasing dependence on cloud services all contribute to a more complex and dynamic threat landscape. In this guide, we’ll explore fundamental cybersecurity concepts, delve into common cyber threats, and examine best practices to safeguard information and technology.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Key Concepts in Cybersecurity</h3>
        <p className={classes.paragraph}>
          Understanding the basic concepts in cybersecurity is the first step in building a secure environment. The core principles of cybersecurity can be summarized as the <span className={classes.highlight}>CIA triad</span>: Confidentiality, Integrity, and Availability. Let’s dive deeper into each:
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>Confidentiality:</strong> Ensuring that sensitive information is accessible only to those who are authorized to view it. This can be achieved through encryption, access controls, and data classification. For example, sensitive data like social security numbers or personal health information should only be accessible by those with the proper permissions.
          </li>
          <li className={classes.listItem}>
            <strong>Integrity:</strong> Protecting data from unauthorized modification. Integrity ensures that the information you are using has not been altered or tampered with during storage or transmission. Digital signatures, hashing, and checksums are common methods used to verify data integrity.
          </li>
          <li className={classes.listItem}>
            <strong>Availability:</strong> Ensuring that information and systems are available and accessible when needed by authorized users. This involves creating redundancies, protecting against network failures, and implementing strategies like disaster recovery and business continuity planning to ensure minimal downtime.
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Common Cybersecurity Threats</h3>
        <p className={classes.paragraph}>
          Cyber attacks can take many forms. It is important to understand the different types of threats to better prepare defenses. Here are some of the most prevalent cyber threats today:
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>Phishing:</strong> Phishing attacks trick users into providing sensitive information, typically through fake emails or websites that mimic legitimate sources. Attackers may impersonate trusted entities such as banks, social media platforms, or government organizations.
          </li>
          <li className={classes.listItem}>
            <strong>Malware:</strong> Malware (malicious software) is designed to infiltrate, damage, or steal data from a system. Types of malware include viruses, worms, ransomware, and spyware. Ransomware, for example, encrypts a victim’s data and demands payment for its release.
          </li>
          <li className={classes.listItem}>
            <strong>Denial of Service (DoS):</strong> A DoS attack overwhelms a server, website, or network with traffic, causing it to become unavailable to legitimate users. Distributed Denial of Service (DDoS) attacks, in which the traffic is distributed across many sources, are even more difficult to mitigate.
          </li>
          <li className={classes.listItem}>
            <strong>Man-in-the-Middle (MitM):</strong> In this type of attack, an attacker intercepts and potentially alters the communication between two parties. For example, attackers could intercept data sent between a user and a website, modifying it to steal credentials or inject malicious code.
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Best Practices for Cybersecurity</h3>
        <p className={classes.paragraph}>
          While cybersecurity threats continue to evolve, there are several best practices that individuals and organizations can follow to reduce the risk of attacks:
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>Use Strong Passwords:</strong> Passwords are the first line of defense against unauthorized access. Use complex passwords that include a mix of uppercase and lowercase letters, numbers, and special characters. Avoid using easily guessable passwords like "12345" or "password."
          </li>
          <li className={classes.listItem}>
            <strong>Enable Multi-Factor Authentication (MFA):</strong> MFA adds an extra layer of security by requiring users to provide two or more forms of verification before gaining access. This could be a combination of a password and a fingerprint, or a password and a time-sensitive code sent to a phone.
          </li>
          <li className={classes.listItem}>
            <strong>Keep Software Up-to-Date:</strong> Software vendors frequently release updates to patch known vulnerabilities. By keeping operating systems, applications, and hardware firmware updated, you reduce the chances of attackers exploiting these vulnerabilities.
          </li>
          <li className={classes.listItem}>
            <strong>Implement Regular Backups:</strong> Backing up your data ensures that even in the event of a ransomware attack or system failure, you can recover your important files and systems.
          </li>
          <li className={classes.listItem}>
            <strong>Educate Employees:</strong> Many cyberattacks target individuals through social engineering. Regularly training employees to recognize suspicious emails, websites, and messages can significantly reduce the risk of a successful attack.
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Emerging Threats in Cybersecurity</h3>
        <p className={classes.paragraph}>
          As technology advances, new cybersecurity threats emerge. Some of the most notable emerging threats include:
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>AI-Powered Attacks:</strong> As artificial intelligence and machine learning evolve, cybercriminals are beginning to use AI to launch more sophisticated attacks. For instance, AI could be used to automate phishing attacks, creating personalized messages that are more likely to deceive victims.
          </li>
          <li className={classes.listItem}>
            <strong>IoT Vulnerabilities:</strong> With the proliferation of Internet of Things (IoT) devices, new vulnerabilities are created in personal and business environments. Many IoT devices are poorly secured, making them easy targets for attackers to exploit.
          </li>
          <li className={classes.listItem}>
            <strong>Quantum Computing:</strong> While still in its early stages, quantum computing could eventually break current encryption standards, posing a significant risk to sensitive data. Cybersecurity experts are working to develop quantum-resistant encryption methods.
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Case Study: The WannaCry Ransomware Attack</h3>
        <p className={classes.paragraph}>
          The WannaCry ransomware attack in May 2017 is one of the most well-known cybersecurity incidents in recent history. It spread quickly across the globe, affecting hundreds of thousands of systems in over 150 countries. The attack exploited a vulnerability in Microsoft Windows systems, particularly those that hadn’t been updated with the latest security patches.
        </p>
        <p className={classes.paragraph}>
          The WannaCry attack encrypted data on infected machines and demanded a ransom payment in Bitcoin. However, many organizations, including the UK’s National Health Service (NHS), faced significant disruptions, and some paid the ransom. The WannaCry incident highlighted the critical importance of patch management and timely software updates.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Social Engineering Attacks</h3>
        <p className={classes.paragraph}>
          Social engineering attacks involve manipulating individuals into revealing confidential information. These attacks exploit human psychology rather than technical vulnerabilities. Common techniques include phishing, pretexting, baiting, and tailgating. Awareness and training are key to defending against these types of attacks.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Cloud Security</h3>
        <p className={classes.paragraph}>
          As more organizations move to cloud-based infrastructure, cloud security has become a critical concern. It involves securing data, applications, and services hosted on cloud platforms. Key strategies include encryption, access control, and multi-factor authentication. Regular audits and monitoring are essential to ensure the integrity and confidentiality of cloud resources.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Cybersecurity in the Workplace</h3>
        <p className={classes.paragraph}>
          Employees play a significant role in an organization's cybersecurity posture. Businesses must create a cybersecurity policy that includes guidelines for safe data handling, internet use, and reporting suspicious activities. Workplaces should also implement endpoint security solutions to protect devices used by employees.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>The Role of Encryption in Cybersecurity</h3>
        <p className={classes.paragraph}>
          Encryption is one of the most effective ways to protect data in transit and at rest. It converts sensitive information into unreadable text using cryptographic algorithms, which can only be decrypted with the appropriate key. Encryption is crucial for maintaining confidentiality and integrity, especially in industries that handle sensitive data like healthcare, finance, and government.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Ransomware Attacks: A Growing Threat</h3>
        <p className={classes.paragraph}>
          Ransomware continues to be one of the most dangerous forms of cyberattack. Attackers use ransomware to encrypt a victim's files and demand payment for decryption. These attacks often target critical industries such as healthcare, finance, and government, causing severe disruptions. One of the largest ransomware attacks occurred in 2017, with the WannaCry attack infecting hundreds of thousands of computers globally. To protect against ransomware, businesses should have strong backup systems, deploy advanced security measures, and ensure that all software is up to date.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Zero Trust Security Model</h3>
        <p className={classes.paragraph}>
          The Zero Trust model operates on the principle of "never trust, always verify." It assumes that every user, device, and network is untrusted, regardless of whether they are inside or outside the corporate perimeter. Access to resources is granted based on strict verification processes, such as multi-factor authentication and least-privilege access. The Zero Trust approach helps to mitigate the risk of insider threats and minimizes the impact of a security breach.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Cybersecurity and Artificial Intelligence</h3>
        <p className={classes.paragraph}>
          Artificial Intelligence (AI) is transforming cybersecurity by providing tools to detect and mitigate cyber threats in real time. AI-powered systems can analyze vast amounts of data, identify patterns, and predict potential security breaches. AI is being used to automate threat detection, improve incident response times, and strengthen overall security posture. However, as AI becomes more integrated into security systems, it also creates new challenges, such as adversarial attacks that aim to manipulate AI algorithms.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>The Importance of Security Awareness Training</h3>
        <p className={classes.paragraph}>
          Human error remains one of the leading causes of cybersecurity breaches. Employees who are unaware of security best practices may inadvertently click on malicious links, share sensitive information, or fall victim to social engineering attacks. Security awareness training teaches employees how to recognize phishing attempts, handle sensitive data securely, and follow company security policies. Regular training and simulated phishing exercises help to reduce the likelihood of successful cyberattacks.
        </p>
      </div>

      <div className={classes.section}>
        <h3 className={classes.title}>Mobile Device Security</h3>
        <p className={classes.paragraph}>
          With the increasing use of mobile devices for business operations, mobile device security has become a critical concern. Mobile devices are vulnerable to various security threats, including malware, data leakage, and theft. Organizations should implement mobile device management (MDM) solutions, enforce strong password policies, and ensure that mobile devices are encrypted. Additionally, employees should be trained to avoid using unsecured public Wi-Fi and to be cautious when installing third-party applications.
        </p>
      </div>


      <div className={classes.section}>
        <h3 className={classes.title}>Conclusion</h3>
        <p className={classes.paragraph}>
          Cybersecurity is an ongoing challenge that requires vigilance, proactive planning, and a commitment to security best practices. By understanding the key concepts, threats, and mitigation strategies outlined in this guide, you can help safeguard your data, systems, and networks from the growing number of cyberattacks.
        </p>
      </div>

      <div className={classes.section}>
  <h3 className={classes.title}>A Sample Code: Basic Encryption</h3>
  <p className={classes.paragraph}>
    Here is an example of basic encryption using the JavaScript `crypto` module. This simple encryption technique can be used to secure sensitive data like passwords:
  </p>
  <pre className={classes.codeBlock}>
    <code>
      {`// Example of basic encryption using crypto module
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const password = 'my-secure-password'; // Secret key for encryption

// Function to encrypt data
function encrypt(text) {
  const cipher = crypto.createCipher(algorithm, password);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Encrypt a sample text
const sampleText = 'This is a secret message!';
const encryptedText = encrypt(sampleText);
console.log('Encrypted:', encryptedText);
`}
    </code>
  </pre>
  <p className={classes.paragraph}>
    In this code, we use the AES-256-CBC encryption algorithm to encrypt a sample message. It is essential to securely store the encryption key (password) and use strong algorithms in real-world scenarios.
  </p>
</div>

      <div className={classes.section}>
        <h3 className={classes.title}>A Sample Code: Basic Encryption</h3>
        <p className={classes.paragraph}>
          One fundamental approach to protecting data is encryption. Encryption ensures that even if data is intercepted, it cannot be read without the correct decryption key. Here is an example of a simple encryption method in JavaScript that shifts the ASCII value of characters:
        </p>
        <div className={classes.codeBlock}>
          <pre>
            {`function encrypt(text, key) {
  let encrypted = '';
  for (let i = 0; i < text.length; i++) {
    encrypted += String.fromCharCode(text.charCodeAt(i) + key);
  }
  return encrypted;
}

let text = "Hello, Cybersecurity!";
let key = 5;
console.log(encrypt(text, key));`}
          </pre>
        </div>
      </div>
      <button className={classes.button} onClick={handleQuizClick}>
      Take the Quiz
    </button>
    </div>
  );
};

export default ITCS;
