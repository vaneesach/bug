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

const EthicalHackingIntroduction = () => {
  const courseModules = [
    {
      title: "Course Overview",
      topics: [
        "Objectives: Introduction to ethical hacking principles and practices",
        "Target Audience: Beginners, IT professionals, and aspiring cybersecurity analysts",
        "Basic knowledge of IT systems is recommended but not required"
      ]
    },
    {
      title: "Module 1: Fundamentals of Ethical Hacking",
      topics: [
        "What is Ethical Hacking? - Definition and purpose",
        "Differences between Ethical and Malicious Hacking",
        "Key Concepts: Vulnerabilities, Threats, and Exploits",
        "The Ethical Hacker’s Code of Conduct"
      ]
    },
    {
      title: "Module 2: Reconnaissance and Information Gathering",
      topics: [
        "Understanding Reconnaissance - Active and Passive Information Gathering",
        "Common Tools for Reconnaissance - Nmap, Whois, and Google Dorks",
        "Social Engineering Techniques for Information Gathering",
        "Network Scanning and Footprinting Basics"
      ]
    },
    {
      title: "Module 3: Scanning and Enumeration",
      topics: [
        "Network Scanning - Discovering live hosts and open ports",
        "Vulnerability Scanning Tools - Nessus, OpenVAS",
        "Enumeration Techniques - Extracting system and network information",
        "Understanding and Interpreting Scan Results"
      ]
    },
    {
      title: "Module 4: System Hacking and Gaining Access",
      topics: [
        "Techniques for Gaining System Access",
        "Password Cracking - Dictionary, Brute Force, and Rainbow Tables",
        "Privilege Escalation - Gaining elevated access",
        "Covering Tracks and Maintaining Access"
      ]
    },
    {
      title: "Module 5: Malware and Exploits",
      topics: [
        "Types of Malware - Viruses, Trojans, Ransomware, and Rootkits",
        "How Exploits Work - Buffer Overflows, SQL Injection, and XSS",
        "Malware Analysis - Basic techniques for understanding malware behavior",
        "Popular Exploit Frameworks - Metasploit Basics"
      ]
    },
    {
      title: "Module 6: Web Application Hacking",
      topics: [
        "Introduction to Web Application Security",
        "Common Web Vulnerabilities - SQL Injection, XSS, CSRF",
        "Tools for Web Application Testing - Burp Suite, OWASP ZAP",
        "Mitigating Web Application Vulnerabilities"
      ]
    },
    {
      title: "Module 7: Wireless Network Hacking",
      topics: [
        "Basics of Wireless Security",
        "Attacks on Wireless Networks - WEP, WPA, WPA2 cracking",
        "Tools for Wireless Hacking - Aircrack-ng, Wireshark",
        "Protecting and Securing Wireless Networks"
      ]
    },
    {
      title: "Module 8: Social Engineering Attacks",
      topics: [
        "Understanding Social Engineering - Manipulating human psychology",
        "Phishing Attacks - Recognizing and defending against them",
        "Pretexting, Baiting, and Impersonation Techniques",
        "Building Resilience Against Social Engineering"
      ]
    },
    {
      title: "Final Module: Ethical Hacking Projects and Practice",
      topics: [
        "Review of Core Ethical Hacking Techniques",
        "Hands-on Practice - Vulnerability Assessment and Penetration Testing",
        "Ethical Hacking Tools Review",
        "Final Assessment and Certification"
      ]
    }
  ];

  return (
    <Container sx={{ paddingTop: '100px', paddingBottom: '20px', position: 'relative' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Ethical Hacking - Course Outline
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

export default EthicalHackingIntroduction;
