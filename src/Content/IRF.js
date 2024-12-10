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

const IRF = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleQuizClick = () => {
    navigate('/irf-quiz'); // Navigate to the ITCS quiz page
  };
  const courseContent = [
    {
        title: "Course Overview",
        topics: [
          "Objectives: Introduction to incident response, security threats, and response strategies. The course aims to provide foundational knowledge in identifying, managing, and mitigating cybersecurity incidents. Participants will gain practical skills to respond effectively to various security threats, from minor breaches to full-scale cyber-attacks.",
          "Target Audience: Security professionals, IT staff, incident response teams, and anyone interested in understanding incident response processes. This course is suitable for those involved in the day-to-day handling of security incidents, including network administrators, security analysts, and IT managers. It's also ideal for professionals seeking to transition into the field of cybersecurity incident management.",
          "Basic knowledge of cybersecurity is recommended but not required. While this course is designed to be accessible to beginners, familiarity with basic cybersecurity concepts such as network protocols, encryption, and malware types will be beneficial. The course structure ensures that participants can follow along even with minimal prior knowledge, but an eagerness to learn is crucial."
        ]
      },
      {
        title: "Module 1: Introduction to Incident Response",
        topics: [
          "What is Incident Response? - The Importance and key concepts. Incident response is a structured approach to handling security breaches or cyber-attacks, aiming to mitigate damage and prevent future attacks. This topic explores why having a formalized response plan is crucial to any organization's security posture and how it helps in reducing downtime, protecting data, and maintaining trust with clients and stakeholders.",
          "Overview of the Incident Response Lifecycle - Incident response follows a defined lifecycle that includes preparation, detection, containment, eradication, recovery, and lessons learned. Participants will learn how each phase functions within the broader framework of cybersecurity defense and the role of incident responders in ensuring quick and effective responses to threats.",
          "Incident Classification - Types of incidents and severity. Not all incidents are created equal. Understanding how to classify incidents based on their severity helps responders prioritize their actions effectively. This section covers different types of incidents, such as malware infections, data breaches, and insider threats, as well as how to assess their impact on an organization’s operations, reputation, and finances.",
          "Incident Response Teams (IRT) - Roles and responsibilities. Incident Response Teams (IRTs) are critical to the success of any incident management process. In this section, we'll dive into the structure of an IRT, the key roles within it (such as Incident Manager, Forensic Analyst, and Communications Officer), and the responsibilities each member holds during an incident. We'll also examine how effective collaboration within the team and with external partners like law enforcement or vendors can enhance the response efforts.",
          "Tools and Resources - Introduction to the essential tools used in incident response, including security information and event management (SIEM) systems, intrusion detection systems (IDS), and forensic software. The course will cover the benefits of using these tools for monitoring, detecting, and investigating security incidents, and participants will get hands-on experience with some of these tools during practical exercises.",
          "Legal and Ethical Considerations - The importance of understanding the legal frameworks surrounding incident response, including data protection laws, regulatory requirements, and the ethical challenges that can arise during an incident investigation. This section emphasizes the necessity of maintaining proper documentation, reporting incidents to relevant authorities, and ensuring the organization remains compliant throughout the response process."
        ]
      },
      {
        title: "Module 2: Threat Detection and Analysis",
        topics: [
          "Understanding Cyber Threats - This section will provide an overview of the most common types of cyber threats, including phishing, ransomware, denial-of-service attacks, and advanced persistent threats (APTs). By recognizing early warning signs, incident responders can take proactive measures to prevent threats from escalating into full-blown incidents.",
          "Analyzing Security Events - A deep dive into event analysis, focusing on how to identify indicators of compromise (IOCs) from system logs, network traffic, and other data sources. This module teaches participants how to look for suspicious activity patterns and how to correlate these findings to identify the nature of the threat.",
          "Malware Analysis and Forensics - This section explores the process of analyzing malicious software (malware) used in an attack, including techniques for reverse engineering, static and dynamic analysis, and malware attribution. Participants will learn how forensic analysis can help determine the origin of the attack, the tools used, and the overall impact on the organization.",
          "Incident Detection Tools and Techniques - An overview of the key tools used for threat detection, including intrusion detection/prevention systems (IDS/IPS), endpoint detection and response (EDR) solutions, and network monitoring tools. The session will provide insight into how to effectively use these tools to identify and analyze potential incidents in real-time.",
          "Case Studies - Real-world case studies will be used to demonstrate successful and unsuccessful incident detection efforts. Participants will gain practical insights into the challenges faced by incident responders, including false positives, the need for cross-department collaboration, and the impact of delayed detection on an organization's security posture."
        ]
      },
      
      {
        title: "Module 3: Incident Response Lifecycle",
        topics: [
          "Phases of Incident Response - Preparation, Detection, Containment, Eradication, Recovery. The incident response lifecycle is a critical framework for managing security incidents in an organized and efficient manner. In this module, participants will dive deeper into each phase. The **Preparation** phase involves developing and implementing an incident response strategy, training staff, and setting up the necessary tools. **Detection** focuses on identifying security incidents quickly using monitoring systems and threat intelligence. **Containment** involves isolating affected systems to prevent further damage. **Eradication** includes removing the cause of the incident, such as malware or unauthorized access. **Recovery** deals with restoring affected systems to normal operation and ensuring no traces of the incident remain.",
          "Incident Response Plan - Developing and implementing an IR plan. A robust incident response plan (IRP) is the backbone of an effective incident response strategy. This section covers how to develop an IRP that outlines procedures, roles, and responsibilities during an incident. The plan should include detailed steps for every possible type of security incident and be tailored to the organization's specific environment. We'll explore how to ensure the plan is comprehensive, scalable, and regularly tested to guarantee its effectiveness when a real incident occurs.",
          "Incident Handling and Documentation. Proper documentation is essential during an incident for both legal and operational reasons. In this section, we'll discuss best practices for handling incidents and the importance of maintaining accurate, detailed records throughout the process. Documentation helps track the incident's progress, decisions made, and the resources used. It also serves as a vital tool for post-incident reviews, lessons learned, and future planning.",
          "Communication during an Incident - Internal and external communication. Effective communication is essential during an incident to ensure all stakeholders are informed, decisions are made promptly, and the response team works cohesively. This section covers strategies for internal communication within the incident response team, IT staff, and executive leadership. Additionally, it will touch on external communication with customers, regulators, and law enforcement. Ensuring a clear and consistent message is key to maintaining organizational trust during a crisis. We’ll explore how to draft incident reports and press releases, manage social media messaging, and handle sensitive data communications."
        ]
      },
      {
        title: "Module 4: Detection and Identification of Incidents",
        topics: [
          "Monitoring Systems - Network, endpoint, and server monitoring. Detection begins with continuous monitoring of an organization's network, endpoints, and servers. This section introduces the various monitoring techniques used to identify potential security incidents in real-time. We'll discuss the importance of implementing a layered monitoring approach, including network traffic analysis, endpoint protection, and server monitoring tools, and how these systems work together to spot suspicious activity. Additionally, the session covers how to set up effective monitoring strategies that align with an organization's security policies and threat landscape.",
          "Indicators of Compromise (IoCs) - What to look for in a security event. IoCs are forensic data that provide evidence of a potential security breach. This section focuses on the types of IoCs that responders should look for, including unusual network traffic patterns, unexpected file changes, unauthorized access attempts, and abnormal system behaviors. Participants will learn how to analyze IoCs, correlate them with known attack patterns, and assess the severity of incidents based on these indicators. We will also cover the tools and techniques used to collect and interpret IoCs effectively.",
          "Analyzing Security Alerts and Logs. Security events often generate alerts that require careful analysis to determine their significance. This section teaches participants how to review and analyze security logs from various sources, such as firewalls, intrusion detection systems (IDS), antivirus software, and application logs. We’ll discuss how to prioritize alerts, filter out false positives, and identify patterns indicative of a real security threat. Participants will learn how to correlate alerts across multiple sources to gain a complete picture of an incident and determine the appropriate response actions.",
          "Role of Security Information and Event Management (SIEM) Systems. SIEM systems play a crucial role in modern security operations by aggregating and analyzing log data from various sources in real-time. This session will explain how SIEM systems help detect, monitor, and respond to security incidents. Participants will learn how SIEM systems can be configured to automatically generate alerts based on specific thresholds and how they assist in detecting trends and anomalies within large volumes of data. We’ll also cover the integration of SIEM systems with other security tools to streamline incident detection and response."
        ]
      },
      
      {
        title: "Module 5: Containment, Eradication, and Recovery",
        topics: [
          "Containment Strategies - Short-term and long-term containment measures. Containment is a critical phase in incident response that involves limiting the damage caused by an ongoing security incident. In this section, we explore both short-term and long-term containment strategies. **Short-term containment** involves immediate actions, such as isolating affected systems or network segments to prevent further spread of the attack. **Long-term containment** focuses on implementing more durable solutions, such as patching vulnerabilities, strengthening firewalls, or disabling compromised accounts, to ensure the attack cannot reoccur. The course will provide real-world examples of how organizations have successfully implemented containment measures during incidents.",
          "Eradication of Threats - Removing malware and mitigating vulnerabilities. Once an incident has been contained, the next step is eradication—removing the threat from all systems. This includes identifying and eliminating malware, closing security gaps, and addressing any exploited vulnerabilities. Participants will learn how to thoroughly clean infected systems, remove malware traces, and perform vulnerability assessments to ensure that the threat has been completely neutralized. The session will also discuss how to use tools like antivirus software, malware removal tools, and vulnerability scanners to assist in this process.",
          "System Restoration - Recovering systems to a secure state. After the threat has been eradicated, it's essential to restore systems to their normal operating state. This involves ensuring that backups are intact and that all systems are functioning properly without any lingering traces of the attack. The recovery process includes reinstalling clean versions of affected software, validating configurations, and applying security patches. Participants will be guided on best practices for system restoration, including how to verify that systems are secure and how to monitor them post-recovery to prevent recurrence.",
          "Forensics and Evidence Preservation. During and after an incident, it's crucial to preserve evidence for further analysis and possible legal proceedings. This session covers the importance of digital forensics, which involves collecting, analyzing, and preserving data related to the incident. Participants will learn about tools and techniques for evidence gathering, how to document the chain of custody, and how to ensure the integrity of the evidence during the investigation. Forensics plays a vital role in understanding the nature of the attack and identifying the threat actor, and it's essential for building a case for legal or regulatory action."
        ]
      },
      {
        title: "Module 6: Communication and Coordination",
        topics: [
          "Internal Communication - Incident response team and management. Effective internal communication is essential for coordinating efforts during a security incident. In this section, participants will learn how to establish clear lines of communication within the incident response team (IRT) and with management. We'll cover how to keep key stakeholders informed, how to ensure that all team members have the information they need to respond effectively, and how to handle communication with the broader organization to ensure everyone understands their roles. This also includes setting up incident reporting mechanisms, daily status updates, and ensuring all teams are aligned.",
          "External Communication - Legal, media, and affected parties. External communication during an incident is just as crucial as internal communication. This section will focus on how to communicate with external stakeholders, including customers, vendors, regulatory bodies, and the media. Effective communication can help manage the incident’s impact on an organization’s reputation and legal standing. Participants will learn the importance of timely and transparent communication with affected parties, how to prepare legal notices for data breaches, and how to manage media inquiries. We'll discuss how to craft messaging to maintain trust and avoid further damage to the organization's reputation.",
          "Coordination with Law Enforcement and Regulators. In some cases, an incident may require the involvement of law enforcement or regulators, especially if the attack involves criminal activity or data breaches affecting sensitive information. This section will guide participants through the process of coordinating with these external bodies. The course will discuss when and how to report incidents to the appropriate authorities, the types of incidents that require law enforcement involvement, and the importance of maintaining compliance with legal and regulatory frameworks, such as GDPR or HIPAA. Effective coordination with law enforcement is crucial for gathering evidence, identifying perpetrators, and taking appropriate legal action.",
          "Managing Public Relations during an Incident. Public relations (PR) management during an incident is a delicate and high-stakes task. This section will discuss the importance of having a crisis communication plan in place and how to manage public perceptions of an incident. Participants will learn how to address the media, respond to public inquiries, and develop key messages that align with the organization’s values and goals. We will also cover how to prepare for press conferences, create FAQs, and manage social media communication during a crisis. Ensuring that the organization is transparent, empathetic, and proactive in addressing the incident can help rebuild public trust and minimize damage to the brand."
        ]
      },
      
      {
        title: "Module 7: Post-Incident Analysis and Lessons Learned",
        topics: [
          "Incident Debrief - Conducting a post-mortem review. Once the incident is fully resolved, it's critical to conduct a post-mortem review, also known as an incident debrief. This session focuses on how to conduct a thorough analysis of the entire incident, from detection to recovery. Participants will learn how to review the timeline of events, assess the actions taken by the incident response team, and identify areas where the response could have been improved. The goal is to gain a comprehensive understanding of what happened, how well the team responded, and what could be done better in the future. This process will help organizations improve their incident response capabilities.",
          "Identifying Root Causes - Analyzing the attack vector and impact. Identifying the root cause of an incident is a crucial part of post-incident analysis. This topic will delve into how to analyze the attack vector, the methods used by attackers to gain access, and the vulnerabilities exploited. We'll also cover how to assess the broader impact of the incident on the organization, including financial losses, reputational damage, and operational disruptions. Understanding the attack's root cause helps in developing strategies to prevent future incidents. The course will also discuss how to prioritize vulnerabilities and how to ensure the proper steps are taken to close security gaps.",
          "Updating Incident Response Plan - Improving based on lessons learned. The post-incident analysis provides valuable insights that can be used to update and improve the organization's Incident Response Plan (IRP). This section will focus on how to take the lessons learned from the incident and incorporate them into the IRP. We’ll cover best practices for reviewing and updating IRPs, ensuring they are based on real-world scenarios, and aligning them with the latest security standards and regulatory requirements. Participants will also learn how to refine their IRP’s processes, procedures, and communication plans to make future responses more effective and efficient.",
          "Sharing Knowledge - Sharing lessons with the broader community. In the aftermath of an incident, organizations can contribute to the broader cybersecurity community by sharing knowledge and insights. This section will explore how organizations can contribute to threat intelligence sharing, collaborate with industry groups, and engage in information exchange programs. Participants will learn the benefits of participating in Information Sharing and Analysis Centers (ISACs) and other cybersecurity forums, as well as the role of public reports and case studies in enhancing collective defense."
        ]
      },
      {
        title: "Module 8: Tools and Technologies for Incident Response",
        topics: [
          "Incident Response Tools - Forensics, malware analysis, network monitoring tools. This section will cover a wide range of incident response tools that are essential for investigating and responding to security incidents. Participants will be introduced to digital forensics tools that help collect and preserve evidence, malware analysis tools that assist in identifying and analyzing malicious software, and network monitoring tools that provide insights into network traffic and suspicious activity. We’ll explore the features of some of the leading tools used by cybersecurity professionals and discuss how they can be integrated into the incident response workflow. This section also includes hands-on demonstrations of how these tools can be applied in real-world scenarios.",
          "Automated Response Tools - EDR, SIEM integration. The increasing volume of incidents has led to the development of automated response tools. This module will focus on **Endpoint Detection and Response (EDR)** tools and their integration with **Security Information and Event Management (SIEM)** systems. Participants will learn how EDR tools can help detect and respond to threats in real-time by monitoring endpoints and triggering automated responses. We’ll also discuss the role of SIEM systems in aggregating and analyzing data from various sources to provide a centralized view of security events. By integrating EDR with SIEM, organizations can improve their ability to detect, investigate, and respond to incidents swiftly and efficiently.",
          "Threat Intelligence Platforms. This section covers the role of **Threat Intelligence Platforms (TIPs)** in incident response. TIPs collect, analyze, and disseminate information about emerging threats, allowing organizations to stay ahead of attackers. Participants will learn how TIPs help organizations identify attack trends, track threat actor behavior, and enhance their detection capabilities. The module will discuss the different types of threat intelligence, such as tactical, operational, and strategic, and how to use TIPs to integrate threat intelligence into the organization’s incident response plan. Additionally, we will explore how TIPs can be used to share intelligence with external partners and communities.",
          "Using Cloud Security Tools for Incident Management. With the increasing adoption of cloud services, it is important to integrate cloud security tools into the incident response process. This module will focus on the tools available for managing incidents in cloud environments, including monitoring, detection, and response tools offered by major cloud service providers. Participants will learn about tools such as **Amazon GuardDuty**, **Microsoft Sentinel**, and **Google Chronicle**, and how they can be used to secure cloud environments. The course will also discuss best practices for cloud incident response, including ensuring that cloud-native tools are properly configured and integrated with on-premise tools to maintain a unified security posture across hybrid environments."
        ]
      },

   {
  title: "Module 9: Legal and Regulatory Considerations",
  topics: [
    "Legal Requirements for Incident Reporting - This section covers the legal aspects of incident reporting, including the requirements imposed by various jurisdictions. Participants will learn about the need for prompt reporting of security incidents to regulatory bodies, including government agencies, law enforcement, and industry-specific regulators. The course will cover the potential legal consequences of failing to report incidents in a timely and accurate manner. We’ll also explore the different types of incidents that require reporting and the timelines for reporting depending on the region or industry.",
    "Data Privacy Laws and Compliance - GDPR, HIPAA, etc. - Data privacy laws play a crucial role in incident response, especially in industries dealing with sensitive data. This module will provide an in-depth understanding of key data privacy laws, such as the **General Data Protection Regulation (GDPR)**, **Health Insurance Portability and Accountability Act (HIPAA)**, and other relevant laws. Participants will learn about the specific compliance requirements for protecting personally identifiable information (PII) during an incident. The course will also address the implications of a data breach under these laws, including the need for breach notifications, the penalties for non-compliance, and the role of data controllers and processors.",
    "Notification Obligations to Authorities and Affected Parties - In the event of a security incident, organizations must notify both authorities and affected individuals. This section will cover the obligations organizations have to notify relevant authorities, such as data protection authorities or law enforcement, within the required timeframes. Additionally, the course will explore the importance of informing affected parties about breaches of personal data and providing them with guidance on how to protect themselves. We’ll discuss the contents of a breach notification and the steps organizations should take to ensure that notifications comply with applicable laws.",
    "Chain of Custody and Evidence Handling in Legal Cases - Handling evidence properly is critical for legal proceedings. This topic will cover the importance of maintaining the **chain of custody** during an incident, ensuring that evidence is collected, preserved, and documented in a way that maintains its integrity for legal purposes. Participants will learn about the best practices for evidence handling, including securing physical and digital evidence, proper documentation, and the role of incident responders and forensic experts in preserving evidence. The section will also discuss how improper evidence handling can lead to the inadmissibility of evidence in court."
  ]
},
{
  title: "Final Module: Incident Response Practice and Simulation",
  topics: [
    "Tabletop Exercises - Simulated incident response scenarios. This module will introduce participants to **tabletop exercises**, which are simulated, discussion-based sessions designed to practice incident response in a controlled environment. These exercises allow the incident response team to walk through hypothetical security incidents and test their coordination, decision-making, and communication skills. The course will provide guidance on designing and conducting tabletop exercises, ensuring that they reflect realistic threats and challenges. Participants will also learn how to assess the effectiveness of their response during these exercises and use the results to improve their preparedness.",
    "Hands-on Practice - Conducting a mock incident response. In addition to tabletop exercises, participants will engage in **hands-on practice** where they simulate real-world incidents and practice their response actions. This section will focus on providing participants with practical experience in incident response activities, such as identifying threats, containing incidents, collecting evidence, and communicating with stakeholders. The course will use mock scenarios based on actual cybersecurity incidents to create a realistic training environment. Participants will also receive feedback on their actions, helping them refine their skills and improve their performance during real incidents.",
    "Final Assessment and Certification - After completing the training modules, participants will undergo a final assessment to evaluate their understanding of the concepts covered throughout the course. The assessment will test their knowledge of incident response processes, tools, legal requirements, and best practices. Participants who successfully pass the assessment will receive a **certificate of completion**. This certification will demonstrate their competence in handling security incidents and show their readiness to apply the knowledge gained during the course in real-world situations.",
    "Building an Incident Response Plan for Your Organization - The final section of the course will focus on the development of an **Incident Response Plan (IRP)** for the participants' own organizations. Participants will learn how to tailor an IRP to their specific needs, considering the size of their organization, the types of data they handle, and the regulatory requirements they must comply with. This section will guide participants through the process of drafting an IRP, including defining roles and responsibilities, creating communication protocols, and establishing procedures for detection, containment, eradication, and recovery. By the end of this section, participants will have the knowledge and tools to build a robust incident response plan that can be implemented in their organization."
  ]
}

  ];

  return (
    <div className={classes.container}>
      {courseContent.map((section, index) => (
        <div className={classes.section} key={index}>
          <h2 className={classes.title}>{section.title}</h2>
          <ul className={classes.list}>
            {section.topics.map((topic, idx) => (
              <li key={idx} className={classes.listItem}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
      <button className={classes.button} onClick={handleQuizClick}>
      Take the Quiz
    </button>
    </div>
  );
};

export default IRF;
