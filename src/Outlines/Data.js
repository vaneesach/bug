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

const DataProtectionAndPrivacyIntroduction = () => {
  const courseModules = [
    {
      title: "Course Overview",
      topics: [
        "Objectives: Introduction to data protection, privacy laws, and practices",
        "Target Audience: Legal professionals, data analysts, and privacy officers",
        "Basic knowledge of data management is recommended but not required"
      ]
    },
    {
      title: "Module 1: Introduction to Data Protection and Privacy",
      topics: [
        "What is Data Protection? - Importance and key concepts",
        "Overview of Privacy Rights and Regulations",
        "Global Data Protection Laws - GDPR, CCPA, and others",
        "Data Protection Principles"
      ]
    },
    {
      title: "Module 2: Data Privacy Laws and Regulations",
      topics: [
        "General Data Protection Regulation (GDPR) Overview",
        "California Consumer Privacy Act (CCPA)",
        "Other Global Data Privacy Laws - HIPAA, PIPEDA, etc.",
        "Key Requirements of Data Protection Laws"
      ]
    },
    {
      title: "Module 3: Data Collection and Processing",
      topics: [
        "Data Collection Methods - Consent, contractual necessity, legitimate interest",
        "Types of Data - Personal, sensitive, and special categories",
        "Data Processing - Legal grounds, purposes, and restrictions",
        "Data Subject Rights - Access, rectification, erasure, and more"
      ]
    },
    {
      title: "Module 4: Data Security Measures",
      topics: [
        "Encryption and Anonymization - Securing personal data",
        "Access Control - Restricting data access based on roles",
        "Data Breach Prevention - Monitoring, detection, and response",
        "Securing Data in Transit and at Rest"
      ]
    },
    {
      title: "Module 5: Data Governance and Compliance",
      topics: [
        "Building a Data Governance Framework",
        "Roles and Responsibilities - Data Protection Officer (DPO), Privacy Officer",
        "Privacy Impact Assessments (PIA)",
        "Monitoring and Auditing Data Protection Practices"
      ]
    },
    {
      title: "Module 6: Third-party Data Sharing and Contracts",
      topics: [
        "Handling Third-party Contracts - Data Processing Agreements",
        "Data Transfers - Cross-border data flows and safeguards",
        "Outsourcing and Cloud Computing Risks",
        "Vendor Risk Management"
      ]
    },
    {
      title: "Module 7: Privacy by Design and by Default",
      topics: [
        "Implementing Privacy by Design Principles",
        "Privacy by Default in Products and Services",
        "Data Minimization and Purpose Limitation",
        "Privacy Enhancing Technologies (PETs)"
      ]
    },
    {
      title: "Module 8: Data Breaches and Incident Management",
      topics: [
        "Identifying and Responding to Data Breaches",
        "Notifying Authorities and Affected Individuals",
        "Incident Response Plans",
        "Post-Breach Remediation"
      ]
    },
    {
      title: "Final Module: Data Protection and Privacy Projects and Practice",
      topics: [
        "Review of Key Data Protection Concepts and Tools",
        "Hands-on Practice - Data Protection Impact Assessments (DPIA)",
        "Data Protection Tools Review - Encryption, DLP, etc.",
        "Final Assessment and Certification"
      ]
    }
  ];

  return (
    <Container sx={{ paddingTop: '100px', paddingBottom: '20px', position: 'relative' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Data Protection and Privacy - Course Outline
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

export default DataProtectionAndPrivacyIntroduction;
