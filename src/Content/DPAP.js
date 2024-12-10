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

const DPAP = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleQuizClick = () => {
    navigate('/dpap-quiz'); // Navigate to the quiz route
  };
  const courseModules = [
    {
            title: "Course Overview",
            topics: [
              "Objectives: Introduction to data protection, privacy laws, and practices. This course will cover the principles of data protection, the significance of privacy in the digital age, and an exploration of various regulations such as GDPR, CCPA, and HIPAA. Students will learn how to identify risks, mitigate breaches, and understand the legal implications of data misuse.",
              "Target Audience: Legal professionals, data analysts, privacy officers, IT managers, and anyone involved in handling or protecting sensitive information. The course is designed for professionals seeking to understand the complexities of data privacy and security, as well as those responsible for ensuring organizational compliance with privacy regulations.",
              "Basic knowledge of data management is recommended but not required. A foundational understanding of how data is stored, processed, and protected in business environments will be helpful, but the course will start from the basics, allowing those new to the field of data privacy to catch up.",
              "Course Content: The curriculum covers a range of topics, including data breach management, encryption techniques, consent management, cross-border data transfer issues, and compliance with global privacy laws. Learners will also explore case studies highlighting real-world applications of privacy laws and best practices.",
              "Learning Outcomes: Upon completing this course, participants will be able to implement key data protection measures within their organizations, understand the nuances of various privacy laws, conduct risk assessments, and develop a privacy compliance strategy. Students will also gain insights into the ethical considerations related to data handling and privacy.",
              "Format: The course is delivered through a combination of lectures, case studies, and practical assignments. There will be interactive sessions for group discussions and role-playing exercises to help learners apply their knowledge in realistic scenarios. Assessments will be conducted through quizzes and a final exam to evaluate understanding and practical application of the material."
            ]
          
    },
    {
        
            title: "Module 1: Introduction to Data Protection and Privacy",
            topics: [
              "What is Data Protection? - Importance and key concepts: This topic introduces the fundamental principles of data protection, including the importance of safeguarding personal and sensitive information in today's digital age. Data protection refers to the measures and processes used to secure individuals' personal data from unauthorized access, disclosure, alteration, or destruction. Understanding the significance of data protection is essential in the face of rising cyber threats and data breaches.",
              
              "Overview of Privacy Rights and Regulations: This section explores the concept of privacy rights, which protect individuals from the misuse of their personal information. It covers the rights individuals have regarding their data, such as the right to access, rectify, erase, and restrict processing of their personal information. Participants will learn about key regulations that define these rights, including the right to consent, the right to data portability, and the right to object to processing.",
              
              "Global Data Protection Laws - GDPR, CCPA, and others: This topic provides an in-depth look at global data protection laws, focusing on the General Data Protection Regulation (GDPR) in the European Union and the California Consumer Privacy Act (CCPA) in the United States. It examines the similarities and differences between these laws and their impact on organizations worldwide. Additionally, the course will explore other notable data protection laws, such as Brazil's LGPD, Canada's PIPEDA, and Japan's APPI, discussing how these regulations affect businesses that operate internationally.",
              
              "Data Protection Principles: Participants will learn about the core principles of data protection that form the foundation of most data protection laws. These principles include data minimization (collecting only the data necessary for a specific purpose), purpose limitation (ensuring data is used only for legitimate purposes), accuracy (keeping data accurate and up to date), storage limitation (retaining data only as long as necessary), and accountability (ensuring organizations are responsible for their data handling practices). This section will also introduce the concept of data governance and why it's critical for ensuring compliance with data protection laws.",
              
              "Understanding the Role of Data Protection Officers (DPO): This section discusses the role and responsibilities of Data Protection Officers (DPOs) in ensuring an organization's compliance with data protection laws. DPOs are responsible for monitoring data protection practices, conducting audits, and advising on the implementation of privacy policies. The module will explore the skills required to be an effective DPO, including knowledge of data protection laws, risk management, and communication skills.",
              
              "The Impact of Data Breaches: This topic covers the consequences of data breaches, including financial penalties, reputational damage, and legal liabilities. It will explore real-world case studies of high-profile data breaches, highlighting the lessons learned and best practices for preventing breaches. Additionally, participants will learn about the steps organizations should take if a data breach occurs, including notification procedures and remedial actions to mitigate the damage."
            ]
          
          
    },

  {
    title: "Module 2: Data Privacy Laws and Regulations",
    topics: [
      "General Data Protection Regulation (GDPR) Overview: This section delves into the General Data Protection Regulation (GDPR), one of the most comprehensive data protection laws in the world. Introduced by the European Union, GDPR is designed to give individuals control over their personal data while imposing strict obligations on organizations that process it. Participants will learn about the scope of GDPR, its key principles such as transparency, accountability, and the right to access, and its application to both EU and non-EU businesses.",
      
      "California Consumer Privacy Act (CCPA): The California Consumer Privacy Act (CCPA) is a landmark privacy law in the United States that grants California residents rights over their personal information. This topic covers the key aspects of the CCPA, including consumers' rights to know what data is being collected, request deletion, opt-out of sales, and access their information. It also discusses enforcement mechanisms, penalties for non-compliance, and the recent amendments to CCPA, such as the California Privacy Rights Act (CPRA).",
      
      "Other Global Data Privacy Laws - HIPAA, PIPEDA, etc.: This section explores other major data privacy regulations from around the world, including the Health Insurance Portability and Accountability Act (HIPAA) in the United States, which protects health information; the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada; and the Personal Data Protection Act (PDPA) in Singapore. Participants will learn about the specific requirements of each law, the rights they confer on individuals, and how they impact organizations across various industries.",
      
      "Key Requirements of Data Protection Laws: This topic focuses on the core requirements of most data protection laws, including the need for organizations to implement appropriate security measures, conduct regular audits, ensure transparency in data collection, and provide individuals with clear information about their data rights. Key elements such as the obligation to appoint Data Protection Officers (DPOs), conduct Data Protection Impact Assessments (DPIAs), and ensure the lawful basis for processing data will also be discussed. Participants will also explore the role of data controllers and processors and their legal responsibilities."
    ]
  },
  
  {
    title: "Module 3: Data Collection and Processing",
    topics: [
      "Data Collection Methods - Consent, contractual necessity, legitimate interest: This section covers the various lawful bases for collecting personal data, including consent (where the individual gives clear permission), contractual necessity (where data processing is required to fulfill a contract), and legitimate interest (where the organization has a valid business reason to process data). The topic will explore how to obtain valid consent, the conditions under which these legal bases can be relied upon, and the documentation required to demonstrate compliance with these principles.",
      
      "Types of Data - Personal, sensitive, and special categories: This topic introduces the different types of data handled under privacy laws. Personal data refers to any information that can be used to identify an individual, such as names, email addresses, and phone numbers. Sensitive data includes categories like racial or ethnic origin, political opinions, religious beliefs, and health information. Special categories of data, which require additional protection, include biometric data and genetic data. The course will cover the legal requirements for processing these different types of data and the enhanced protections for sensitive data.",
      
      "Data Processing - Legal grounds, purposes, and restrictions: This section explains the concept of data processing and the legal grounds under which it can occur. It covers the various purposes for which data can be processed, including performing contractual obligations, compliance with legal requirements, and for legitimate business interests. Additionally, the module will highlight the restrictions placed on data processing activities, such as the prohibition of processing data for purposes that are not compatible with the original intent or that might infringe on individuals' rights.",
      
      "Data Subject Rights - Access, rectification, erasure, and more: Data subject rights are fundamental to most privacy laws, giving individuals control over their personal information. This topic covers the key rights that individuals have under laws like GDPR and CCPA, including the right to access their personal data, the right to rectify inaccurate information, the right to erasure (the ‘right to be forgotten’), and the right to data portability. Participants will learn how organizations can facilitate these rights, how to manage requests from data subjects, and the timeframes within which responses must be provided. The topic also covers other rights, such as the right to object to processing and the right to restrict processing in certain circumstances."
    ]
  },

  
    {
      title: "Module 4: Data Security Measures",
      topics: [
        "Encryption and Anonymization - Securing personal data: This section discusses two fundamental techniques for securing personal data—encryption and anonymization. Encryption ensures that data is transformed into an unreadable format, requiring a key to decrypt it, thus preventing unauthorized access. Anonymization, on the other hand, involves removing or altering personal identifiers from data sets so that individuals cannot be identified from the data. The topic will cover when and how to use encryption and anonymization to protect sensitive information, including best practices for implementing these techniques effectively.",
        
        "Access Control - Restricting data access based on roles: Access control is a critical aspect of data security, ensuring that only authorized personnel can access sensitive information. This section focuses on role-based access control (RBAC), where data access is granted based on an individual's role within the organization. It also covers other forms of access control, such as discretionary access control (DAC) and mandatory access control (MAC). The course will explore how organizations can implement access control mechanisms, including user authentication, strong password policies, and multi-factor authentication (MFA), to reduce the risk of unauthorized access to personal data.",
        
        "Data Breach Prevention - Monitoring, detection, and response: This topic focuses on the prevention, detection, and response strategies for data breaches. Organizations must establish monitoring systems to detect suspicious activities, such as unauthorized data access or transfers. Additionally, the course will discuss strategies for preventing breaches, including network security measures, firewalls, and intrusion detection systems. Participants will also learn about the steps organizations should take if a breach occurs, including notifying affected individuals, reporting the breach to regulators, and implementing corrective actions to prevent future breaches.",
        
        "Securing Data in Transit and at Rest: This section explores the different ways data is secured both during transmission (data in transit) and when stored (data at rest). Data in transit refers to information being transferred between systems or over networks, and securing this data typically involves encryption protocols like SSL/TLS. Data at rest refers to data stored on devices, servers, or databases, and securing it may involve encryption, tokenization, and other storage security measures. The course will cover the importance of securing both types of data and the various tools and practices that can help mitigate the risks associated with each."
      ]
    },
    
    {
      title: "Module 5: Data Governance and Compliance",
      topics: [
        "Building a Data Governance Framework: This section covers the creation of a robust data governance framework, which ensures that data is properly managed throughout its lifecycle. It includes establishing data management policies, defining roles and responsibilities for data stewards, and ensuring that data is accurate, consistent, and accessible. Participants will learn how to create a framework that aligns with both business objectives and regulatory requirements, including setting up data classification schemes, data retention policies, and procedures for ensuring data quality and integrity.",
        
        "Roles and Responsibilities - Data Protection Officer (DPO), Privacy Officer: This topic defines the roles of key personnel involved in data protection and privacy. The Data Protection Officer (DPO) is responsible for overseeing compliance with data protection laws, providing guidance on best practices, and monitoring data protection activities within the organization. The Privacy Officer (PO) focuses on ensuring the organization complies with privacy laws and regulations, particularly with respect to the handling of personal information. The module will cover the responsibilities, skills, and qualifications required for these roles and discuss how they collaborate to ensure data protection and privacy compliance.",
        
        "Privacy Impact Assessments (PIA): This section introduces Privacy Impact Assessments (PIAs), which are a crucial part of risk management in data governance. A PIA helps organizations assess the potential risks of data processing activities to individuals' privacy and helps identify measures to mitigate these risks. Participants will learn how to conduct a PIA, including identifying privacy risks, evaluating the impact of processing activities, and taking steps to address potential issues. The course will also cover when PIAs are required under laws like the GDPR and how to document and report the results of an assessment.",
        
        "Monitoring and Auditing Data Protection Practices: This topic focuses on the ongoing monitoring and auditing of data protection practices to ensure compliance and identify areas for improvement. Regular audits help organizations assess the effectiveness of their data protection measures, identify potential vulnerabilities, and ensure adherence to legal requirements. Participants will learn how to set up monitoring systems, conduct internal audits, and create action plans for addressing audit findings. The course will also cover the role of third-party audits and certifications in demonstrating compliance with data protection standards and regulations."
      ]
    },
  
    {
        title: "Module 6: Third-party Data Sharing and Contracts",
        topics: [
          "Handling Third-party Contracts - Data Processing Agreements: This section focuses on the importance of establishing Data Processing Agreements (DPAs) with third-party vendors that process personal data on behalf of an organization. A DPA outlines the terms under which data will be processed, ensuring that third parties comply with data protection regulations. Participants will learn the key elements of a DPA, including the rights and obligations of both parties, data security requirements, breach notification procedures, and audit rights. The module will also cover the legal requirements for DPAs under GDPR and other global privacy laws.",
          
          "Data Transfers - Cross-border data flows and safeguards: This topic addresses the complexities of transferring personal data across borders, which is especially important when data is stored or processed in multiple countries. The course will discuss the challenges and risks associated with cross-border data transfers and the legal mechanisms that can be used to ensure data protection. This includes exploring the use of Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), and adequacy decisions from regulatory authorities. Participants will also learn about the concept of 'data localization' and how to balance international data flows with compliance requirements.",
          
          "Outsourcing and Cloud Computing Risks: As organizations increasingly turn to outsourcing and cloud computing services, it is crucial to assess the associated risks in terms of data protection and privacy. This section covers the potential risks of outsourcing data processing tasks and using cloud-based services, such as the lack of control over data security, the risks of data breaches, and the challenges in ensuring compliance with privacy laws. The course will guide participants on how to assess and manage these risks through vendor due diligence, robust contracts, and ensuring that cloud providers implement appropriate technical and organizational measures.",
          
          "Vendor Risk Management: Vendor risk management is essential for ensuring that third-party providers who handle personal data on behalf of an organization follow appropriate security and privacy protocols. This section covers the steps in evaluating and managing vendor risks, including assessing their security posture, data handling practices, and compliance with relevant privacy regulations. Participants will learn how to conduct risk assessments, negotiate data protection clauses in contracts, and monitor ongoing vendor compliance to ensure data privacy risks are mitigated."
        ]
      },
      
      {
        title: "Module 7: Privacy by Design and by Default",
        topics: [
          "Implementing Privacy by Design Principles: Privacy by Design (PbD) is an approach that integrates privacy considerations into the design and operation of systems, processes, and technologies. This section explores the seven foundational principles of Privacy by Design, including proactive measures, privacy as the default setting, data security, and end-to-end privacy. Participants will learn how to embed privacy into the organization's development lifecycle, from initial planning through to execution, ensuring that privacy risks are mitigated at every stage of a project or service.",
          
          "Privacy by Default in Products and Services: Privacy by Default is a critical aspect of data protection, ensuring that only the minimum amount of personal data is collected and processed. This section will guide participants on how to incorporate privacy measures into products and services by default, without the need for users to take extra steps to protect their privacy. The module will cover design strategies for implementing privacy-friendly features, such as data anonymization, limited data retention, and minimizing data sharing, while still providing full functionality of the service or product.",
          
          "Data Minimization and Purpose Limitation: Data Minimization refers to the principle of collecting only the data that is necessary for a specific purpose. Purpose Limitation ensures that data is only used for the purposes for which it was collected. This section will explore how organizations can apply these principles to limit the collection and processing of personal data. Participants will learn how to assess data requirements, identify excess or irrelevant data, and implement processes to ensure data is only used in accordance with the original purpose. The module will also cover practical steps for data deprecation and disposal when data is no longer needed.",
          
          "Privacy Enhancing Technologies (PETs): Privacy Enhancing Technologies (PETs) are tools and technologies designed to protect individuals' privacy while still allowing organizations to process and analyze data. This section introduces participants to the concept of PETs and how they can be implemented in various data processing activities. Topics include the use of encryption, pseudonymization, data masking, and anonymization to enhance privacy. The module will also cover how PETs can be integrated into existing IT infrastructures, ensuring that privacy is maintained without sacrificing operational efficiency."
        ]
      },

    {
    title: "Module 8: Data Breaches and Incident Management",
    topics: [
      "Identifying and Responding to Data Breaches: This topic focuses on how organizations can effectively detect data breaches. Participants will learn the signs of a data breach, the initial steps to take once an incident is suspected, and the tools and technologies that can aid in identifying breaches quickly. The module will cover various types of breaches, such as unauthorized access, data leaks, and system vulnerabilities, and how to respond appropriately to contain the breach. Key elements of breach detection, such as intrusion detection systems (IDS), security audits, and monitoring systems, will also be explored.",
      
      "Notifying Authorities and Affected Individuals: In many jurisdictions, data protection laws require organizations to notify relevant authorities and affected individuals within specific timeframes in the event of a data breach. This section outlines the notification process, including the legal requirements under GDPR, CCPA, and other regulations. Participants will learn how to draft notification letters, what information needs to be included, and the appropriate steps for communicating with regulators and individuals. The course will also cover the potential fines and penalties for failure to notify authorities and individuals within the required time.",
      
      "Incident Response Plans: Having a well-documented and tested incident response plan is essential for minimizing the impact of a data breach. This section covers the key components of an effective incident response plan, including preparation, detection, containment, eradication, and recovery phases. The course will guide participants through the steps to develop, implement, and test an incident response plan tailored to their organization's specific needs. The module will also cover the importance of assigning roles and responsibilities, defining communication protocols, and setting clear escalation procedures.",
      
      "Post-Breach Remediation: Once a data breach has been contained, organizations must take steps to address the root causes and prevent future incidents. This section focuses on post-breach activities such as performing forensic analysis, determining the scope of the breach, identifying affected data, and implementing remediation measures. Participants will learn how to conduct a breach assessment, implement corrective actions, and monitor the effectiveness of these actions to avoid recurrence. The module will also cover how to handle reputational damage, including engaging with the media and offering compensation to affected individuals."
    ]
  },
  
  {
    title: "Final Module: Data Protection and Privacy Projects and Practice",
    topics: [
      "Review of Key Data Protection Concepts and Tools: This final module revisits the essential concepts of data protection, privacy laws, and key tools discussed throughout the course. Participants will consolidate their knowledge of data protection regulations like GDPR, CCPA, and other global laws, understanding the requirements for compliance and best practices for data security. The course will review the key technologies and strategies for safeguarding data, such as encryption, pseudonymization, and access control. This module will provide a comprehensive summary of the entire course content, preparing participants for the final assessment.",
      
      "Hands-on Practice - Data Protection Impact Assessments (DPIA): Participants will engage in a practical session to learn how to conduct a Data Protection Impact Assessment (DPIA). This process is vital for identifying and mitigating privacy risks during new projects or initiatives that involve personal data processing. The module will guide participants through a step-by-step approach to conducting a DPIA, including identifying data processing activities, assessing risks to individuals' privacy, and implementing mitigation measures. Participants will also learn how to document their findings and share the results with relevant stakeholders.",
      
      "Data Protection Tools Review - Encryption, DLP, etc.: In this section, participants will explore various data protection tools used to secure personal information. Topics include encryption methods, Data Loss Prevention (DLP) technologies, firewalls, and intrusion detection systems (IDS). The course will provide a detailed overview of these tools, their capabilities, and how they can be integrated into an organization's data protection strategy. Participants will learn how to assess the right tools for their organization's needs, and how to evaluate the effectiveness of these technologies in preventing data breaches and ensuring compliance.",
      
      "Final Assessment and Certification: The course will conclude with a final assessment that tests participants' understanding of data protection and privacy principles. This assessment will cover a range of topics from the course, including data protection laws, incident management, privacy by design, and the tools and technologies used to protect data. Successful completion of the final assessment will lead to certification, signifying the participant's competence in managing data protection and privacy risks. The final section will also provide guidance on next steps for advancing in the field, including ongoing education and professional certifications in data privacy and security."
    ]
  }
  ];

  return (
    <div className={classes.container}>
      {courseModules.map((module, index) => (
        <div key={index} className={classes.section}>
          <h2 className={classes.title}>{module.title}</h2>
          <ul className={classes.list}>
            {module.topics.map((topic, idx) => (
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

export default DPAP;
