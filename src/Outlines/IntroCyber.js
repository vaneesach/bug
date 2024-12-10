import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const Introcyber = () => {
  const courseModules = [
    {
      title: "Course Overview",
      topics: [
        "Course Objectives: What students will learn and achieve",
        "Target Audience: Beginners, IT professionals, or anyone interested in cybersecurity basics",
        "Pre-requisites: None or basic computer knowledge"
      ]
    },
    {
      title: "Module 1: Introduction to Cybersecurity",
      topics: [
        "What is Cybersecurity? - Definition and importance in the modern world",
        "Common misconceptions about cybersecurity",
        "Cybersecurity Terminology - Basic terms: Threats, vulnerabilities, risks, and attacks",
        "The Goals of Cybersecurity - The CIA Triad (Confidentiality, Integrity, Availability)",
        "Examples and real-world applications",
        "History and Evolution of Cybersecurity - Significant events and attacks, how the field has evolved"
      ]
    },
    {
      title: "Module 2: Types of Cyber Threats",
      topics: [
        "Malware: Types (viruses, worms, ransomware, spyware)",
        "Phishing and Social Engineering: Tactics and how they work",
        "Man-in-the-Middle (MitM) Attacks",
        "Denial of Service (DoS) and Distributed Denial of Service (DDoS) Attacks",
        "SQL Injection and Other Code Injection Attacks",
        "Advanced Persistent Threats (APTs)",
        "Real-World Examples of Cyber Threats"
      ]
    },
    {
      title: "Module 3: Cybersecurity Best Practices",
      topics: [
        "Personal Security Hygiene - Password management, two-factor authentication, safe browsing habits",
        "Secure System Configuration - OS and software updates, managing permissions and access control",
        "Data Protection Techniques - Data encryption, backup, and recovery strategies",
        "Physical Security Measures"
      ]
    },
    {
      title: "Module 4: Network Security Basics",
      topics: [
        "Network Components and Topology - Firewalls, routers, switches, and their roles in security",
        "Types of Network Security Controls - Firewalls, IDS, IPS",
        "Securing Wi-Fi Networks and VPNs",
        "Introduction to Public Key Infrastructure (PKI)"
      ]
    },
    {
      title: "Module 5: Identity and Access Management (IAM)",
      topics: [
        "Fundamentals of IAM - Importance of managing user identities",
        "Role-based access control (RBAC) and least privilege principle",
        "Authentication Methods - MFA, biometrics, and single sign-on (SSO)",
        "Access Control Models"
      ]
    },
    {
      title: "Module 6: Application Security",
      topics: [
        "Common Application Vulnerabilities - OWASP Top 10 vulnerabilities",
        "Secure Software Development Lifecycle (SDLC) - Coding best practices",
        "Code review and vulnerability assessment",
        "Web Application Security Basics - Input validation, secure session management"
      ]
    },
    {
      title: "Module 7: Cryptography Basics",
      topics: [
        "Principles of Cryptography - Symmetric vs. asymmetric encryption",
        "Common Cryptographic Algorithms - AES, RSA, SHA-256",
        "Digital Certificates and PKI",
        "Applications of Cryptography in Cybersecurity"
      ]
    },
    {
      title: "Module 8: Incident Response and Management",
      topics: [
        "What is Incident Response? - Purpose and phases of incident response",
        "Incident Detection and Analysis - Monitoring, alerting, and logging practices",
        "Containment, Eradication, and Recovery",
        "Post-Incident Activities - Lessons learned and continuous improvement"
      ]
    },
    {
      title: "Module 9: Cybersecurity Frameworks and Compliance",
      topics: [
        "Common Cybersecurity Frameworks - NIST, ISO 27001, and CIS Controls",
        "Regulatory Compliance in Cybersecurity - GDPR, HIPAA, and PCI-DSS basics",
        "Aligning Security Policies with Business Goals"
      ]
    },
    {
      title: "Module 10: Careers in Cybersecurity",
      topics: [
        "Overview of Cybersecurity Roles - Security Analyst, Ethical Hacker, SOC Analyst, etc.",
        "Cybersecurity Certifications - CompTIA Security+, CISSP, CEH",
        "Building a Career Path in Cybersecurity - Tips for networking, resources, and career growth"
      ]
    },
    {
      title: "Final Module: Course Review and Hands-On Labs",
      topics: [
        "Review Key Concepts - Recap of core lessons and takeaways",
        "Hands-On Lab Exercises - Basic penetration testing, malware analysis, password cracking",
        "Final Assessment and Course Completion"
      ]
    }
  ];

  const navigate = useNavigate(); // Corrected hook

  // Function to handle the back button click
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate to the previous page
    } else {
      navigate('/'); // Fallback to homepage if no history
    }
  };

  return (
    <Container sx={{ paddingTop: '100px', paddingBottom: '20px', position: 'relative' }}>
      
      <Typography variant="h4" align="center" gutterBottom>
        Introduction to Cybersecurity - Course Outline
      </Typography>

      {courseModules.map((module, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{module.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {module.topics.map((topic, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

     
    </Container>
  );
};

export default Introcyber;
