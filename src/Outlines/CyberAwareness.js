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

const CybersecurityAwarenessIntroduction = () => {
  const courseModules = [
    {
      title: "Course Overview",
      topics: [
        "Objectives: Introduction to basic cybersecurity principles and personal safety online",
        "Target Audience: Individuals new to cybersecurity and general internet users",
        "No prior knowledge required"
      ]
    },
    {
      title: "Module 1: Understanding Cybersecurity",
      topics: [
        "Definition of Cybersecurity - Protecting digital information",
        "Importance of Cybersecurity in today's world",
        "Common Cybersecurity terms",
        "The CIA Triad - Confidentiality, Integrity, and Availability"
      ]
    },
    {
      title: "Module 2: Recognizing Cyber Threats",
      topics: [
        "Phishing and Email Scams - What to look for",
        "Understanding Malware - Viruses, Ransomware, and Spyware",
        "Social Engineering - How attackers manipulate people",
        "Insider Threats - Risks from within an organization or group"
      ]
    },
    {
      title: "Module 3: Securing Personal Information",
      topics: [
        "Creating and Managing Strong Passwords",
        "Using Two-Factor Authentication (2FA) effectively",
        "Importance of Device Updates and Patching",
        "Best practices for protecting personal data"
      ]
    },
    {
      title: "Module 4: Internet Safety and Social Media",
      topics: [
        "How to spot fake websites and phishing links",
        "Privacy settings for social media",
        "Recognizing and avoiding online scams",
        "Best practices for online shopping security"
      ]
    },
    {
      title: "Module 5: Protecting Personal Data",
      topics: [
        "What is Personal Data? - Importance of protection",
        "Basics of Data Encryption",
        "Backing up data regularly",
        "Managing privacy settings on devices and applications"
      ]
    },
    {
      title: "Module 6: Safe Remote Work Practices",
      topics: [
        "Securing Home Wi-Fi networks",
        "Safety tips for remote work environments",
        "Dangers of Public Wi-Fi and protective measures",
        "Using a VPN for secure connections"
      ]
    },
    {
      title: "Module 7: Identifying Cyber Incidents",
      topics: [
        "How to recognize signs of a cyber attack",
        "What to do during a suspected incident",
        "Reporting incidents - Who to inform and how",
        "Basics of Incident Response"
      ]
    },
    {
      title: "Module 8: Establishing Good Cyber Habits",
      topics: [
        "Regular software updates",
        "Securing online accounts with strong passwords and 2FA",
        "Using Antivirus and Anti-Malware",
        "Developing a personal cybersecurity plan"
      ]
    },
    {
      title: "Final Module: Recap and Practice",
      topics: [
        "Review of core cybersecurity concepts",
        "Practice exercises - Recognizing phishing, setting privacy controls",
        "Final assessment and completion certificate"
      ]
    }
  ];

  return (
    <Container sx={{ paddingTop: '100px', paddingBottom: '20px', position: 'relative' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cybersecurity Awareness Introduction - Course Outline
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

export default CybersecurityAwarenessIntroduction;
