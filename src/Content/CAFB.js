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

const CAFB = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleQuizClick = () => {
    navigate('/cafb-quiz'); // Navigate to the CAFB quiz page
  };
  return (
    <div className={classes.container}>

      {/* Module 1: Understanding Cybersecurity */}
      <div className={classes.section}>

      <h2 className={classes.title}>Cybersecurity Awareness For Beginners</h2>

  <h4 className={classes.title}>Module 1: Understanding Cybersecurity</h4>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Definition of Cybersecurity:</strong> 
      Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These attacks typically aim to access, alter, or destroy sensitive data, extort money from users, or disrupt normal business processes. Cybersecurity encompasses a wide range of activities, from securing personal devices and networks to protecting the data of large organizations and even national security.
    </li>
    <li className={classes.listItem}><strong>Importance of Cybersecurity:</strong> 
      With the rapid expansion of the internet, digital technologies, and the Internet of Things (IoT), our dependency on cyberspace has grown immensely. This has made cybersecurity essential in safeguarding information, protecting financial transactions, and ensuring privacy. As more services and personal data are stored online, the risk of cyber threats like hacking, data breaches, and identity theft increases. Proper cybersecurity protocols help prevent significant damage to individuals, companies, and governments alike, and promote trust in digital services.
    </li>
    <li className={classes.listItem}><strong>Common Cybersecurity Terms:</strong>
      - <strong>Phishing:</strong> A type of cyber attack where attackers impersonate legitimate organizations to steal sensitive information, such as login credentials or financial data. <br />
      - <strong>Malware:</strong> Malicious software designed to disrupt, damage, or gain unauthorized access to computer systems. Common types include viruses, worms, and ransomware. <br />
      - <strong>Firewall:</strong> A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. <br />
      - <strong>Encryption:</strong> A process of converting data into a code to prevent unauthorized access. It’s an essential tool for securing sensitive information.
    </li>
    <li className={classes.listItem}><strong>The CIA Triad:</strong> 
      The CIA Triad is a foundational concept in cybersecurity, representing the three key principles of information security: <br />
      - <strong>Confidentiality:</strong> Ensuring that sensitive information is only accessible to those authorized to view it. Techniques like encryption and access control help maintain confidentiality. <br />
      - <strong>Integrity:</strong> Ensuring that information remains accurate, consistent, and unaltered unless authorized. Data integrity checks, like hashes and digital signatures, are crucial. <br />
      - <strong>Availability:</strong> Ensuring that information and systems are accessible and functional when needed. This is achieved through strategies like system backups, redundancy, and disaster recovery plans.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    In addition to the CIA Triad, modern cybersecurity also emphasizes the importance of risk management, compliance, and threat detection. As cyber threats evolve, it is critical to stay updated with the latest security protocols, use secure coding practices, and implement strong authentication mechanisms to defend against potential vulnerabilities. Cybersecurity is an ongoing process that involves vigilance, preparation, and continuous improvement to combat an ever-growing range of threats.
  </p>
</div>


      {/* Module 2: Recognizing Cyber Threats */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 2: Recognizing Cyber Threats</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Phishing and Email Scams:</strong>
      Phishing is a type of cyber attack where malicious actors attempt to trick individuals into revealing personal information, such as passwords, credit card numbers, or social security numbers. These attacks often come in the form of fake emails that appear to be from legitimate organizations like banks or tech companies. Phishing emails may contain urgent or alarming messages that encourage the recipient to click on malicious links or download attachments, often leading to a compromised system. To recognize phishing attempts, look for suspicious sender addresses, misspelled words, and requests for sensitive information. Always verify the source before responding or clicking on any links.
    </li>
    <li className={classes.listItem}><strong>Understanding Malware:</strong> 
      Malware (malicious software) refers to any program designed to disrupt, damage, or gain unauthorized access to a computer system. Common types of malware include: <br />
      - <strong>Viruses:</strong> Self-replicating programs that attach themselves to clean files and spread to other files and systems, often causing damage. <br />
      - <strong>Ransomware:</strong> A form of malware that encrypts a user’s files and demands a ransom to restore access to the data. It can severely impact businesses and individuals, causing data loss and financial damage. <br />
      - <strong>Spyware:</strong> Software that secretly monitors and collects user data, such as browsing history or keystrokes, without the user’s knowledge. It is often used for identity theft or unauthorized access to personal information. 
      To protect against malware, install reliable antivirus software, keep your operating system updated, and avoid downloading files from untrusted sources.
    </li>
    <li className={classes.listItem}><strong>Social Engineering:</strong> 
      Social engineering is a technique used by cybercriminals to manipulate individuals into divulging confidential information by exploiting human psychology rather than technical vulnerabilities. This can involve impersonation, such as pretending to be someone in authority, or using pressure tactics, such as claiming urgency or an emergency. Common examples include pretexting (where attackers create a fabricated scenario to steal information) and baiting (where victims are enticed to click on malicious links). Social engineering can happen via email, phone calls, or even face-to-face interactions. To protect against social engineering, always be cautious when sharing sensitive information, especially if the request seems suspicious or out of the ordinary.
    </li>
    <li className={classes.listItem}><strong>Insider Threats:</strong> 
      Insider threats refer to risks posed by individuals within an organization who have authorized access to its systems and data. These insiders may intentionally or unintentionally misuse their access, leading to data breaches, theft of intellectual property, or other security compromises. Insider threats can come from employees, contractors, or anyone with privileged access to critical systems. Motivations can vary, ranging from financial gain to personal grievances. To mitigate insider threats, organizations should implement strong access controls, monitor user activities, and ensure regular employee training on security best practices.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    Cyber threats are constantly evolving, with new tactics and techniques emerging regularly. Recognizing the signs of a cyber attack and understanding the various threat vectors is key to defending against them. In addition to the threats listed above, organizations and individuals must stay informed about emerging risks, such as advanced persistent threats (APTs) and zero-day vulnerabilities, which can be difficult to detect. A robust cybersecurity strategy involves not only technical defenses like firewalls and antivirus software but also user awareness and vigilance. By staying informed, recognizing suspicious behavior, and following best security practices, we can better protect ourselves from falling victim to these cyber threats.
  </p>
</div>


     {/* Module 3: Securing Personal Information */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 3: Securing Personal Information</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Creating and Managing Strong Passwords:</strong>
      One of the most fundamental aspects of securing personal information is creating strong, unique passwords for each of your accounts. A strong password typically contains a mix of uppercase and lowercase letters, numbers, and special characters. It should be at least 12-16 characters long and avoid using easily guessable information such as your name, birthdate, or common phrases. A password manager can help you store and organize your passwords securely, allowing you to create and remember complex passwords without the risk of forgetting them. It’s also essential to regularly update your passwords, especially after a security breach or if you suspect your password has been compromised. Additionally, avoid reusing passwords across different accounts, as this increases the risk if one account is breached.
    </li>
    <li className={classes.listItem}><strong>Using Two-Factor Authentication (2FA) Effectively:</strong>
      Two-factor authentication (2FA) adds an extra layer of security to your online accounts by requiring not only your password but also a second form of identification. This second factor could be something you know (like a PIN or password), something you have (such as a smartphone or hardware token), or something you are (like biometric data, including fingerprints or facial recognition). By enabling 2FA on your accounts, even if a cybercriminal manages to obtain your password, they won’t be able to access your account without the second factor. Some popular forms of 2FA include authentication apps (e.g., Google Authenticator, Authy), SMS-based codes, or biometric verification. While SMS is commonly used, it is less secure than app-based methods due to the risk of SIM swapping attacks. To make 2FA even more secure, consider using a hardware token or security key (like a YubiKey) that provides an additional physical layer of protection.
    </li>
    <li className={classes.listItem}><strong>Importance of Device Updates and Patching:</strong>
      Keeping your devices updated is crucial to maintaining their security. Device manufacturers frequently release software updates to patch security vulnerabilities and fix bugs that could be exploited by cybercriminals. Without these updates, your devices may remain vulnerable to attacks, allowing malicious actors to exploit known weaknesses. This applies to all devices—computers, smartphones, routers, and even IoT devices like smart TVs or home assistants. Set your devices to automatically install updates to ensure you never miss important security patches. In addition to operating system updates, make sure all software, including applications, browsers, and plugins, is kept up to date. Cybercriminals often target outdated software because they know users are less likely to install patches in a timely manner. Regular patching is one of the most effective ways to protect your devices and personal information from attacks.
    </li>
    <li className={classes.listItem}><strong>Best Practices for Protecting Personal Data:</strong>
      Protecting your personal data goes beyond passwords and 2FA. Here are several other best practices to follow: <br />
      - <strong>Use encryption:</strong> Encrypt sensitive data stored on your devices and when sending it over the internet. This ensures that even if attackers intercept your data, they won’t be able to read it. Use encrypted messaging apps like Signal or WhatsApp, and enable full-disk encryption on your devices. <br />
      - <strong>Avoid public Wi-Fi for sensitive activities:</strong> Public Wi-Fi networks, such as those in coffee shops or airports, are often unsecured, making it easier for attackers to intercept your internet traffic. If you need to access sensitive accounts or make financial transactions, use a VPN (Virtual Private Network) to secure your connection. <br />
      - <strong>Be cautious with personal information:</strong> Limit the amount of personal information you share online, especially on social media platforms. Avoid oversharing details like your birthdate, address, phone number, and workplace. Cybercriminals often use this information to build a profile of their target, which can help them craft convincing phishing or social engineering attacks. <br />
      - <strong>Monitor your accounts:</strong> Regularly review your bank and credit card statements for unauthorized transactions. Additionally, consider using credit monitoring services to alert you to any suspicious activity related to your financial accounts. <br />
      - <strong>Use a secure backup strategy:</strong> Regularly back up important data to a secure location, such as an encrypted external drive or a trusted cloud service. In the event of a cyber attack, such as ransomware, having an up-to-date backup ensures that you won’t lose valuable information. <br />
      - <strong>Secure your home network:</strong> Change the default username and password for your home router and ensure it’s using a secure Wi-Fi encryption protocol like WPA3. Disable remote management and use a strong password for your network to prevent unauthorized access.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    By adopting these practices, you can significantly reduce your risk of falling victim to cyber threats and ensure that your personal information remains secure. As the digital landscape continues to evolve, so too must our approach to cybersecurity. Always stay informed about the latest security trends and be proactive in taking steps to safeguard your personal data. Cybersecurity is a shared responsibility, and everyone has a role to play in creating a safer online environment.
  </p>
</div>


    {/* Module 4: Internet Safety and Social Media */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 4: Internet Safety and Social Media</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>How to Spot Fake Websites and Phishing Links:</strong>
      Phishing attacks are one of the most common forms of online fraud, where attackers try to trick you into sharing sensitive information such as passwords, credit card numbers, or personal data. Fake websites often resemble legitimate ones, but they have subtle differences that can help you identify them. Some signs to watch for include:
      - URL Differences: Always check the website URL. Fake sites may have slight variations, such as missing letters or extra characters, that mimic a real website. For example, instead of “www.bank.com,” it might be “www.bank-secure.com.” Always ensure that the URL is exactly what you expect.
      - SSL Certificate: Look for a padlock icon next to the URL or "https" instead of "http." This indicates the website is using SSL encryption to protect your data. However, note that while SSL is important, it does not guarantee a site is legitimate, so still be cautious.
      - Unusual Requests: Be wary if a site asks for too much personal information or sensitive data that doesn’t seem necessary for the service. Legitimate sites typically don’t ask for social security numbers, credit card details via email, or over unsecured connections.
      - Poor Design and Typos: Fake websites may have lower-quality design, awkward language, or typos. Professional websites generally have polished, well-written content.
      - Hovering Over Links: Hover over links without clicking them to see where they lead. If the link’s destination seems suspicious or doesn’t match the expected URL, avoid it.
      Always verify the legitimacy of a website, especially if you are prompted to enter personal or financial information.
    </li>
    <li className={classes.listItem}><strong>Privacy Settings for Social Media:</strong>
      Social media platforms can expose you to privacy risks if not properly configured. To protect your personal information, it's crucial to adjust your privacy settings on these platforms. Here are some tips:
      - Profile Visibility: Set your profile to private to limit who can see your personal information, posts, and photos. This ensures that only people you accept as friends or followers can access your content.
      - Limit Personal Information Sharing: Avoid sharing sensitive data like your phone number, address, or place of work on social media profiles. The less personal information available, the less likely cybercriminals will be able to build a profile for phishing attacks or social engineering.
      - Control Who Can Contact You: Most platforms allow you to control who can send you messages, friend requests, or follow you. Limit these features to people you know or approve to prevent unwanted contacts.
      - Third-Party Apps: Regularly review the third-party applications connected to your social media account. Revoke access to apps that you no longer use, as they might access your data without your knowledge.
      - Post and Tagging Restrictions: Be mindful of what you share and tag. Even if your account is set to private, the people you tag may have different privacy settings. Think twice before tagging sensitive information or locations in your posts.
      - Two-Factor Authentication (2FA): Enable 2FA for your social media accounts to add an extra layer of protection. This makes it harder for unauthorized individuals to access your accounts even if they obtain your login credentials.
    </li>
    <li className={classes.listItem}><strong>Recognizing and Avoiding Online Scams:</strong>
      Online scams come in many forms, but they typically share one goal: tricking you into providing personal information or money. Some common online scams include:
      - Phishing Emails: These are fraudulent emails that appear to come from trusted sources, such as banks or government agencies, asking you to click on a link and provide personal information. Always verify the sender’s email address and avoid clicking on suspicious links. If you receive a phishing email from a known institution, contact them directly using their official website or phone number.
      - Fake Job Offers: Some scams involve fake job listings that ask you to submit personal information or pay a fee for a "guaranteed" position. Always research the company and be wary of job offers that ask for money upfront or promise unrealistic salaries.
      - Lottery or Prize Scams: Scammers may send emails or messages claiming you’ve won a large sum of money or a prize, but in order to claim it, you must pay fees or provide personal details. Be skeptical of unsolicited offers that sound too good to be true.
      - Investment Scams: Be cautious of online investment opportunities that promise guaranteed high returns with little or no risk. Scammers often use high-pressure tactics to get you to invest quickly.
      - Tech Support Scams: Attackers impersonate tech support staff, often claiming your computer is infected with malware. They will try to convince you to provide remote access to your system or pay for unnecessary services. Never give remote access to your computer unless you initiated the request.
      - Romance Scams: These scams occur when someone creates a fake romantic persona to establish an online relationship and then manipulates the victim into sending money for emergencies or travel expenses.
      To avoid online scams, never share personal information or send money to unknown individuals or organizations. If you're ever unsure about an offer or request, take the time to verify it through official channels.
    </li>
    <li className={classes.listItem}><strong>Best Practices for Online Shopping Security:</strong>
      Online shopping has become an integral part of everyday life, but it also presents several security risks. To ensure safe transactions, follow these best practices:
      - Shop Only on Secure Websites: When making online purchases, ensure the website is secure by checking for "https" in the URL and a padlock icon. Avoid sites that don't offer SSL encryption, as your payment details may not be protected.
      - Use Trusted Payment Methods: Always use trusted payment methods like credit cards or secure online payment systems such as PayPal. These methods often come with fraud protection, making it easier to dispute unauthorized transactions.
      - Avoid Public Wi-Fi for Transactions: Never make online purchases or enter sensitive information when connected to public Wi-Fi. Use a VPN to secure your connection, or wait until you’re on a trusted, private network.
      - Monitor Bank and Credit Card Statements: After making online purchases, regularly check your bank and credit card statements for any unauthorized charges. Promptly report any suspicious activity to your bank or card issuer.
      - Beware of Too-Good-To-Be-True Deals: Scammers often create fake online stores offering high-demand products at significantly lower prices. If a deal sounds too good to be true, it probably is. Always research the retailer before making a purchase.
      - Avoid Storing Payment Information on Retail Sites: Although many online stores allow you to store payment information for future purchases, it’s safer not to. This minimizes the risk if the site is compromised.
      - Enable Purchase Alerts: Set up alerts with your bank or credit card company to notify you of any purchases. This will help you detect any unauthorized transactions quickly.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    By understanding how to spot fake websites, secure your social media profiles, recognize scams, and practice safe online shopping habits, you can protect your personal information and reduce the risk of falling victim to online threats. Remember that cybersecurity is an ongoing effort—regularly review and update your security practices to stay safe in the constantly evolving digital landscape.
  </p>
</div>

    {/* Module 5: Protecting Personal Data */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 5: Protecting Personal Data</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>What is Personal Data?</strong> - Importance of protection: 
      Personal data refers to any information that can be used to identify an individual, either directly or indirectly. This includes obvious details like names, addresses, and phone numbers, as well as less obvious data such as IP addresses, cookies, and biometric data. In today’s digital age, personal data is often stored online or within databases, making it susceptible to cybercriminals if not adequately protected. 
      Protecting personal data is critical not just to prevent identity theft, but also to safeguard privacy. Unauthorized access to personal data can lead to fraud, scams, and even physical harm in some cases. Therefore, it's important to understand how personal data can be exposed and take steps to protect it through encryption, secure passwords, and mindful sharing practices.
    </li>
    <li className={classes.listItem}><strong>Basics of Data Encryption:</strong> 
      Data encryption is the process of converting readable data into an unreadable format through algorithms, ensuring that only authorized parties can access it. Encryption plays a critical role in securing personal data, both when it is in transit (being sent over the internet) and at rest (stored on a device or server). 
      Common forms of encryption include:
      - **End-to-End Encryption:** This is commonly used in messaging apps (such as WhatsApp or Signal) to ensure that messages remain private between the sender and receiver, preventing any third parties from intercepting and reading the content.
      - **SSL/TLS Encryption:** Websites use SSL (Secure Socket Layer) or its successor, TLS (Transport Layer Security), to encrypt data exchanged between a user’s browser and the website, ensuring secure browsing, especially during transactions.
      - **Disk Encryption:** Encrypting the storage on your devices (such as using BitLocker or FileVault) ensures that, if your device is stolen or lost, the data remains inaccessible without the proper decryption key.
      Proper encryption is a fundamental practice for securing personal data and protecting against unauthorized access, hacking, and data breaches.
    </li>
    <li className={classes.listItem}><strong>Backing Up Data Regularly:</strong> 
      Regularly backing up your data ensures that, in the event of device failure, theft, or ransomware attack, you can recover your important files and information. Backups should be stored in a secure location, either using physical media such as external hard drives or cloud-based services with encryption enabled.
      Some backup best practices include:
      - **Frequency:** Backup your data on a regular basis, whether weekly, monthly, or whenever significant changes are made to files, documents, or photos.
      - **Multiple Backup Methods:** Use both cloud-based storage and physical backups to ensure redundancy. Cloud services like Google Drive, OneDrive, and iCloud offer automatic backups, while physical backups can be made with external hard drives or USB drives.
      - **Encrypted Backups:** When storing backups in the cloud or on external drives, ensure that the data is encrypted to prevent unauthorized access. This adds an extra layer of security in case of theft or data breaches.
      - **Test Backups:** Periodically test your backup system to make sure it is working properly and that you can easily restore your files if necessary.
    </li>
    <li className={classes.listItem}><strong>Managing Privacy Settings on Devices and Applications:</strong> 
      Managing privacy settings on your devices and applications is an essential step in protecting personal data. Many devices and applications collect personal information by default, and unless you adjust the privacy settings, this data may be shared with third parties. 
      Here are some key tips:
      - **Review App Permissions:** When installing applications, review the permissions that the app requests. If an app asks for access to data that isn't necessary for its functionality (such as a weather app asking for access to your contacts or camera), deny these permissions.
      - **Device Privacy Settings:** Both mobile and desktop devices have built-in privacy settings that allow you to control what data is shared. Ensure location services are only enabled when needed, disable microphone or camera access for apps that don’t require them, and turn off tracking features for advertising purposes.
      - **Social Media Privacy:** Each social media platform has privacy settings that allow you to control who can see your posts, who can contact you, and how your data is used. Make sure your profiles are set to private, limit what you share publicly, and regularly check and adjust these settings.
      - **Use Privacy-Focused Tools:** Consider using privacy-focused apps and services such as encrypted messaging apps (Signal or WhatsApp), privacy browsers (Brave or Mozilla Firefox), and VPNs (Virtual Private Networks) to protect your data from being tracked or monitored.
      - **Regularly Update Privacy Settings:** Companies often update their privacy policies, which could affect how your data is used. Make it a habit to regularly review and adjust your privacy settings across all devices and services.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    The protection of personal data is a shared responsibility between individuals and organizations. By understanding the importance of data encryption, maintaining regular backups, and managing privacy settings, you can significantly reduce the risk of exposing your personal information to unauthorized access. Always stay proactive by updating your security practices to stay one step ahead of potential threats. Remember that every bit of personal data you protect today contributes to a safer online experience tomorrow.
  </p>
</div>


 {/* Module 6: Safe Remote Work Practices */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 6: Safe Remote Work Practices</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Securing Home Wi-Fi Networks:</strong> 
      One of the first steps to secure a remote work environment is ensuring that your home Wi-Fi network is safe from unauthorized access. Change the default password of your router to a strong, unique password, and use WPA3 encryption for the most secure connection. Additionally, disable WPS (Wi-Fi Protected Setup) and limit the number of devices that can connect to your network. Regularly check for firmware updates for your router to patch security vulnerabilities, and consider setting up a guest network for visitors, isolating their access from your main devices.
    </li>
    <li className={classes.listItem}><strong>Safety Tips for Remote Work Environments:</strong> 
      Remote workers must set up a secure and organized workspace to ensure both productivity and security. Start by using strong, unique passwords for all work-related accounts and enable two-factor authentication (2FA) wherever possible. Avoid leaving your devices unattended when working, and lock your screen when stepping away from your desk. It’s also important to use encryption tools for sensitive files and avoid using personal devices for work-related tasks to prevent cross-contamination of data. Be mindful of your surroundings, especially during video calls or meetings, as sensitive information might be visible to others in your environment.
    </li>
    <li className={classes.listItem}><strong>Dangers of Public Wi-Fi and Protective Measures:</strong> 
      Public Wi-Fi networks, such as those in cafes, airports, and hotels, are often unsecured and can be an easy target for hackers. On these networks, attackers may attempt to intercept sensitive data, such as passwords and financial information. To protect yourself, avoid accessing sensitive accounts (like online banking) over public Wi-Fi. If you must use public Wi-Fi, make sure to use a VPN (Virtual Private Network) to encrypt your connection and prevent third parties from monitoring your activity. Additionally, consider using mobile hotspots as a safer alternative when public networks are not reliable.
    </li>
    <li className={classes.listItem}><strong>Using a VPN for Secure Connections:</strong> 
      A VPN (Virtual Private Network) is a vital tool for securing your online communications when working remotely. By routing your internet traffic through a secure server, a VPN encrypts your data and masks your IP address, making it difficult for hackers to intercept or track your online activity. Always use a reputable VPN service, especially when accessing work networks or handling sensitive data. Additionally, make sure to connect to trusted and secure VPN servers, and avoid using free VPN services, which may compromise your security or privacy.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    Practicing safe remote work habits is essential for maintaining both security and productivity. By securing your home network, using VPNs, and being cautious on public Wi-Fi, you can help ensure that your work environment remains secure, no matter where you are.
  </p>
</div>

{/* Module 7: Identifying Cyber Incidents */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 7: Identifying Cyber Incidents</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>How to Recognize Signs of a Cyber Attack:</strong> 
      Identifying the early signs of a cyber attack is crucial for minimizing damage and responding effectively. Common signs include unusually slow system performance, frequent system crashes, unexpected pop-up messages, or strange behaviors in applications. Other signs include unexplained changes to your files, such as unexpected deletions or modifications, or an increase in network traffic that could indicate a data exfiltration attempt. Phishing emails, unfamiliar account logins, or unauthorized access to your accounts are also strong indicators that a cyber attack may be underway. Pay attention to warnings from antivirus software or intrusion detection systems, which might flag malicious activities.
    </li>
    <li className={classes.listItem}><strong>What to Do During a Suspected Incident:</strong>
      When you suspect a cyber incident, it’s essential to remain calm and take immediate action. First, disconnect the affected devices from the network to prevent further spread of the attack. Avoid turning off the device or altering system settings, as this could destroy evidence needed for investigation. Document the symptoms of the attack, including any error messages or unusual behaviors. If possible, isolate the compromised systems to prevent them from affecting other devices on the network. Contact your organization's IT or security team immediately to assess the situation and begin containment and mitigation efforts. In the case of a personal device, contact technical support or a cybersecurity professional.
    </li>
    <li className={classes.listItem}><strong>Reporting Incidents - Who to Inform and How:</strong>
      Quick and effective reporting is vital for controlling and mitigating the impact of a cyber incident. If you are part of an organization, inform the internal IT or cybersecurity team immediately. They will have procedures in place for handling incidents and may need to alert other departments or external agencies depending on the severity. In a corporate environment, ensure that you report the incident to the incident response team or designated personnel, such as a Chief Information Security Officer (CISO) or security officer. For personal cyber incidents, such as a phishing attack or personal data breach, contact the relevant authorities, such as your email service provider, financial institution, or local law enforcement. Additionally, you may need to file a report with data protection regulators if sensitive data has been compromised.
    </li>
    <li className={classes.listItem}><strong>Basics of Incident Response:</strong>
      Incident response involves a well-defined series of actions taken to address a cybersecurity incident. The first step in incident response is preparation, which involves creating an incident response plan and training employees to recognize and report incidents. The second phase is identification, where the incident is confirmed and its scope is determined. Afterward, containment strategies are deployed to limit the damage and prevent the attack from spreading further. Following containment, the system is eradicated of any malicious elements, and recovery efforts, such as restoring data from backups or re-imaging devices, are carried out. Finally, lessons learned from the incident are documented and used to update security measures and prevent future occurrences.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    Identifying and responding to cyber incidents swiftly is critical in reducing potential harm. Awareness of the signs of an attack and knowing how to take immediate action can help protect your systems and data. Incident response is an ongoing process that evolves as new threats emerge, so continuous training and preparation are necessary to stay ahead of cybercriminals.
  </p>
</div>


   {/* Module 8: Establishing Good Cyber Habits */}
<div className={classes.section}>
  <h2 className={classes.title}>Module 8: Establishing Good Cyber Habits</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Regular Software Updates:</strong>
      One of the most effective ways to protect your devices from security threats is by regularly updating your software. Updates often include patches for known vulnerabilities that could otherwise be exploited by attackers. Make sure that both your operating system and any installed applications are set to automatically update. This ensures that you're always protected with the latest security fixes. Remember that outdated software can expose you to a variety of threats, including malware, ransomware, and data breaches. Regular updates also ensure compatibility with newer software and improved functionality.
    </li>
    <li className={classes.listItem}><strong>Securing Online Accounts with Strong Passwords and 2FA:</strong>
      Creating strong, unique passwords for each of your online accounts is critical for preventing unauthorized access. Avoid using common words, phrases, or easily guessed information, such as birthdays or names. Instead, use a combination of uppercase and lowercase letters, numbers, and symbols to create complex passwords. Password managers can help you securely store and generate these complex passwords. In addition to strong passwords, enable two-factor authentication (2FA) whenever possible. 2FA adds an extra layer of security by requiring a second verification step (such as a code sent to your phone) in addition to your password. This significantly reduces the risk of unauthorized access, even if your password is compromised.
    </li>
    <li className={classes.listItem}><strong>Using Antivirus and Anti-Malware Software:</strong>
      Protecting your devices with reputable antivirus and anti-malware software is essential for detecting and preventing malicious attacks. These programs scan your devices for viruses, spyware, ransomware, and other types of malicious software. Regular scans help identify potential threats before they can cause significant damage. Make sure your antivirus software is up to date and consider enabling real-time protection for continuous monitoring. Keep in mind that while antivirus software is an important defense tool, it should be used in conjunction with other security practices, such as regular software updates and caution when downloading files or clicking on suspicious links.
    </li>
    <li className={classes.listItem}><strong>Developing a Personal Cybersecurity Plan:</strong>
      Having a personal cybersecurity plan can help you stay proactive and prepared in case of a security incident. This plan should include basic steps for securing your devices, such as using firewalls, setting up 2FA, and regularly backing up your data. It should also cover your response to potential cyber threats, such as knowing how to identify phishing emails or malware attacks. Your cybersecurity plan should outline how to react if your information is compromised, including whom to contact and what steps to take. Regularly reviewing and updating your cybersecurity plan ensures that you're always prepared for the evolving cyber threat landscape.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    Establishing good cyber habits is an ongoing process that requires vigilance and commitment. By adopting these practices, you can greatly reduce your risk of falling victim to cyberattacks and help protect your personal data and online presence. The key to effective cybersecurity is consistency—by making these habits part of your daily routine, you'll create a secure environment that minimizes risks and ensures your digital safety.
  </p>
</div>


  
<div className={classes.section}>
  <h2 className={classes.title}>Final Module: Recap and Practice</h2>
  <ul className={classes.list}>
    <li className={classes.listItem}><strong>Review of Core Cybersecurity Concepts:</strong>
      In this final module, we take a moment to revisit the core concepts you've learned throughout the course. These concepts form the foundation of your cybersecurity knowledge and are crucial for maintaining a secure digital environment. We'll review topics such as the importance of strong passwords, the role of two-factor authentication (2FA), how to recognize phishing attempts, and the best practices for securing personal data. Additionally, we will cover the basics of internet safety, including the significance of safe browsing habits, privacy settings, and protecting sensitive information while using social media. This recap will reinforce the principles that will help you stay vigilant against evolving cybersecurity threats.
    </li>
    <li className={classes.listItem}><strong>Practice Exercises - Recognizing Phishing, Setting Privacy Controls:</strong>
      To solidify your understanding and enhance your practical skills, this section includes hands-on practice exercises. These exercises are designed to help you identify common cybersecurity threats, such as phishing emails, suspicious links, and social engineering tactics. You’ll also practice setting up privacy controls on various platforms, ensuring your online presence is secure. For example, you will walk through configuring two-factor authentication (2FA) on a popular social media site, recognizing and reporting phishing attempts, and reviewing privacy settings for both personal and work-related online accounts. These exercises will help you build confidence in applying what you've learned in real-life scenarios, making cybersecurity practices second nature.
    </li>
    <li className={classes.listItem}><strong>Final Assessment and Completion Certificate:</strong>
      To test your knowledge and skills, this module includes a final assessment. The assessment covers a range of topics from the course, such as recognizing cyber threats, applying security measures, and understanding key cybersecurity principles. Upon successful completion of the assessment, you'll receive a completion certificate, validating your newfound expertise in cybersecurity. This certificate can be a valuable addition to your professional credentials, demonstrating your commitment to understanding and practicing cybersecurity. We encourage you to take your time with the final assessment to ensure that you have absorbed the key concepts and are confident in your ability to secure your digital world.
    </li>
  </ul>
  <p  className={classes.paragraph}>
    As you complete the final module, remember that cybersecurity is an ongoing journey. The skills and knowledge you’ve acquired throughout this course should be regularly revisited and updated as new threats emerge. By staying proactive and informed, you'll be able to better protect yourself and your personal data, contributing to a safer and more secure digital environment for everyone.
  </p>
</div>
<button className={classes.button} onClick={handleQuizClick}>
  Take the Quiz
</button>

</div>
  );
};

export default CAFB;
