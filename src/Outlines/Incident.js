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

const IncidentResponseFundamentals = () => {
  const courseModules = [
    {
      title: "Course Overview",
      topics: [
        "Objectives: Introduction to incident response, security threats, and response strategies",
        "Target Audience: Security professionals, IT staff, incident response teams",
        "Basic knowledge of cybersecurity is recommended but not required"
      ]
    },
    {
      title: "Module 1: Introduction to Incident Response",
      topics: [
        "What is Incident Response? - Importance and key concepts",
        "Overview of Incident Response Lifecycle",
        "Incident Classification - Types of incidents and severity",
        "Incident Response Teams (IRT) - Roles and responsibilities"
      ]
    },
    {
      title: "Module 2: Incident Response Lifecycle",
      topics: [
        "Phases of Incident Response - Preparation, Detection, Containment, Eradication, Recovery",
        "Incident Response Plan - Developing and implementing an IR plan",
        "Incident Handling and Documentation",
        "Communication during an Incident - Internal and external communication"
      ]
    },
    {
      title: "Module 3: Detection and Identification of Incidents",
      topics: [
        "Monitoring Systems - Network, endpoint, and server monitoring",
        "Indicators of Compromise (IoCs) - What to look for in a security event",
        "Analyzing Security Alerts and Logs",
        "Role of Security Information and Event Management (SIEM) Systems"
      ]
    },
    {
      title: "Module 4: Containment, Eradication, and Recovery",
      topics: [
        "Containment Strategies - Short-term and long-term containment measures",
        "Eradication of Threats - Removing malware and mitigating vulnerabilities",
        "System Restoration - Recovering systems to a secure state",
        "Forensics and Evidence Preservation"
      ]
    },
    {
      title: "Module 5: Communication and Coordination",
      topics: [
        "Internal Communication - Incident response team and management",
        "External Communication - Legal, media, and affected parties",
        "Coordination with Law Enforcement and Regulators",
        "Managing Public Relations during an Incident"
      ]
    },
    {
      title: "Module 6: Post-Incident Analysis and Lessons Learned",
      topics: [
        "Incident Debrief - Conducting a post-mortem review",
        "Identifying Root Causes - Analyzing the attack vector and impact",
        "Updating Incident Response Plan - Improving based on lessons learned",
        "Sharing Knowledge - Sharing lessons with the broader community"
      ]
    },
    {
      title: "Module 7: Tools and Technologies for Incident Response",
      topics: [
        "Incident Response Tools - Forensics, malware analysis, network monitoring tools",
        "Automated Response Tools - EDR, SIEM integration",
        "Threat Intelligence Platforms",
        "Using Cloud Security Tools for Incident Management"
      ]
    },
    {
      title: "Module 8: Legal and Regulatory Considerations",
      topics: [
        "Legal Requirements for Incident Reporting",
        "Data Privacy Laws and Compliance - GDPR, HIPAA, etc.",
        "Notification Obligations to Authorities and Affected Parties",
        "Chain of Custody and Evidence Handling in Legal Cases"
      ]
    },
    {
      title: "Final Module: Incident Response Practice and Simulation",
      topics: [
        "Tabletop Exercises - Simulated incident response scenarios",
        "Hands-on Practice - Conducting a mock incident response",
        "Final Assessment and Certification",
        "Building an Incident Response Plan for Your Organization"
      ]
    }
  ];

  return (
    <Container sx={{ paddingTop: '100px', paddingBottom: '20px', position: 'relative' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Incident Response Fundamentals - Course Outline
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

export default IncidentResponseFundamentals;
