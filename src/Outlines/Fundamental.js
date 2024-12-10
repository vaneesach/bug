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
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const NetworkSecurityFundamentals = () => {
  const courseModules = [
    {
      title: "Course Overview",
      topics: [
        "Course Objectives: Understanding core network security principles and practices",
        "Target Audience: IT professionals, network administrators, and security enthusiasts",
        "Pre-requisites: Basic knowledge of networking and IT concepts"
      ]
    },
    {
      title: "Module 1: Introduction to Network Security",
      topics: [
        "What is Network Security? - Importance and impact on organizations",
        "Common Threats in Network Security",
        "Basic Network Security Terminology - Firewalls, IDS, IPS, and more",
        "The CIA Triad in Network Security"
      ]
    },
    {
      title: "Module 2: Network Security Devices and Technologies",
      topics: [
        "Firewalls - Types, functions, and configurations",
        "Intrusion Detection and Prevention Systems (IDS/IPS)",
        "Routers, Switches, and Access Control",
        "Unified Threat Management (UTM) Solutions"
      ]
    },
    {
      title: "Module 3: Secure Network Design",
      topics: [
        "Network Segmentation and Isolation",
        "DMZ and Secure Architecture Design",
        "Zero Trust Architecture Basics",
        "Best Practices for Network Design Security"
      ]
    },
    {
      title: "Module 4: Network Access Control (NAC)",
      topics: [
        "Role of NAC in Network Security",
        "Authentication Protocols - RADIUS, TACACS+",
        "Implementing Network Access Policies",
        "Managing Device Access and Compliance"
      ]
    },
    {
      title: "Module 5: VPNs and Remote Access Security",
      topics: [
        "Introduction to VPNs - Types and benefits",
        "Configuring Secure VPN Tunnels",
        "SSL/TLS vs. IPsec VPNs",
        "Remote Access Best Practices"
      ]
    },
    {
      title: "Module 6: Wireless Network Security",
      topics: [
        "Wireless Security Protocols - WPA2, WPA3",
        "Securing Wi-Fi Networks",
        "Rogue Access Points and Threat Mitigation",
        "Wireless Network Monitoring and Management"
      ]
    },
    {
      title: "Module 7: Network Monitoring and Logging",
      topics: [
        "Importance of Network Monitoring in Security",
        "Common Monitoring Tools - SNMP, SIEM",
        "Analyzing Logs and Detecting Anomalies",
        "Creating Effective Logging Policies"
      ]
    },
    {
      title: "Module 8: Cryptography and Network Security",
      topics: [
        "Overview of Cryptography in Network Security",
        "Symmetric vs. Asymmetric Encryption",
        "Public Key Infrastructure (PKI) and Certificates",
        "SSL/TLS and Secure Data Transmission"
      ]
    },
    {
      title: "Module 9: Incident Response for Network Security",
      topics: [
        "Introduction to Network Incident Response",
        "Detecting and Analyzing Network Incidents",
        "Containment, Eradication, and Recovery",
        "Post-Incident Review and Improvement"
      ]
    },
    {
      title: "Module 10: Network Security Policies and Compliance",
      topics: [
        "Developing and Enforcing Security Policies",
        "Compliance Standards - NIST, ISO 27001, PCI-DSS",
        "Aligning Policies with Business Goals",
        "Auditing and Regular Compliance Checks"
      ]
    },
    {
      title: "Final Module: Course Review and Practical Labs",
      topics: [
        "Review Key Concepts - Recap of core network security concepts",
        "Hands-On Lab Exercises - Firewall configuration, VPN setup, intrusion detection",
        "Final Assessment and Course Completion"
      ]
    }
  ];



  return (
    <Container sx={{ paddingTop: '100px', paddingBottom: '20px', position: 'relative' }}>
  

      <Typography variant="h4" align="center" gutterBottom>
        Network Security Fundamentals - Course Outline
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

export default NetworkSecurityFundamentals;
