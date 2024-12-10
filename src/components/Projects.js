import { Container, Row, Col, Tab, Nav, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp.png";
import Img from "../assets/img/Introduction.png";
import NetworkImg from "../assets/img/network.png";
import AwarnessImg from "../assets/img/Awarness.png";
import EthicalImg from "../assets/img/Ethical.png";
import ResponseImg from "../assets/img/Response.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { CoursesPage } from "./list";
import NetworkAudit from "../Details/Networkauditoption"; 
import Introduction from "../Details/Introductionoptions";
import CyberAwareness from "../Details/Cyberawareness";  
import EthicalBasics from "../Details/EthicalBasics";  
import DataProtection from "../Details/Dataprotection"; 
import IncidentResponse from "../Details/IncidentResponse";
import RegistrationPage from "./RegistrationPage";

export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalType, setModalType] = useState(null); // To track which type of modal (Network Audit, Introduction, CyberAwareness, EthicalBasics, DataProtection or Courses)

  const projects = [
    {
      title: "Introduction to Cybersecurity",
      description: "Overview of cybersecurity principles, including threats and risk management.",
      imgUrl: Img,
      content: <Introduction /> // Content for Introduction to Cybersecurity modal
    },
    {
      title: "Network Security Fundamentals",
      description: "Securing network infrastructures with firewalls, VPNs, and intrusion prevention systems.",
      imgUrl:   NetworkImg,
      content: <NetworkAudit />  // Content for NetworkAudit modal
    },
    {
      title: "Cybersecurity Awareness for Beginners",
      description: "Training on recognizing and avoiding common cyber threats like phishing and malware.",
      imgUrl: AwarnessImg,
      content: <CyberAwareness />  // Content for CyberAwareness modal
    },
    {
      title: "Ethical Hacking Basics",
      description: "Introduction to ethical hacking and identifying vulnerabilities in web applications.",
      imgUrl: EthicalImg,
      content: <EthicalBasics />  // Content for EthicalBasics modal
    },
    {
      title: "Data Protection and Privacy",
      description: "Protecting data through encryption and compliance with privacy regulations.",
      imgUrl: projImg2,
      content: <DataProtection />  // Content for DataProtection modal
    },
    {
      title: "Incident Response Fundamentals",
      description: "Strategies for responding to and minimizing damage from cybersecurity incidents.",
      imgUrl: ResponseImg,
      content: <IncidentResponse />  // Content for IncidentResponse modal
    },
  ];

  const handleModalOpen = (projectContent, type) => {
    setSelectedProject(projectContent);
    setModalType(type); // Set which type of content to display in the modal
    setModalShow(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Cybersecurity Projects</h2>
                  <p>Explore our projects focused on enhancing cybersecurity measures and protecting sensitive data. From network audits to employee training, we cover all aspects of cyber safety.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Courses</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Ongoing Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future Initiatives</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleModalOpen(project.content, project.title === "Network Security Fundamentals" ? 'networkAudit' : project.title === "Introduction to Cybersecurity" ? 'introduction' : project.title === "Cybersecurity Awareness for Beginners" ? 'cyberAwareness' : project.title === "Ethical Hacking Basics" ? 'ethicalBasics' : project.title === "Data Protection and Privacy" ? 'dataProtection' : project.title === "Incident Response Fundamentals" ? 'incidentResponse' : '')}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Our completed projects demonstrate our commitment to improving cybersecurity practices and providing comprehensive security solutions.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>For our future initiatives in cybersecurity e-learning, we aim to create an interactive and immersive platform that equips learners with essential skills to protect digital assets. Our courses will focus on practical knowledge, real-world scenarios, and hands-on labs to ensure learners are prepared for the evolving cyber landscape. Through expert-led modules, certifications, and continuous support, we aspire to build a community of skilled professionals ready to tackle cybersecurity challenges with confidence.</p>

                        {/* Container for both buttons in one line */}
                        <div className="enroll-buttons-container">
                          <Button
                            className="custom-button"
                            variant="none"
                            size="lg"
                            onClick={() => handleModalOpen(null, 'courses')}
                          >
                            List Of Courses
                          </Button>

                          <Button
                            className="custom-button"
                            variant="none"
                            size="lg"
                            onClick={() => handleModalOpen(null, 'registration')}
                          >
                            Enroll in Courses
                          </Button>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />

      {/* Modal for Network Audit, Introduction, CyberAwareness, EthicalBasics, DataProtection, IncidentResponse, Courses, RegistrationPage */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#333', color: 'white' }}>
          <Modal.Title>{modalType === 'networkAudit' ? "Network Security Fundamentals" : modalType === 'introduction' ? "Introduction to Cybersecurity" : modalType === 'cyberAwareness' ? "Cybersecurity Awareness for Beginners" : modalType === 'ethicalBasics' ? "Ethical Hacking Basics" : modalType === 'dataProtection' ? "Data Protection and Privacy" : modalType === 'incidentResponse' ? "Incident Response Fundamentals" : modalType === 'registration' ? "Register for Courses" : "List of Courses"}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#333', color: 'white' }}>
          {modalType === 'networkAudit' ? selectedProject : modalType === 'introduction' ? selectedProject : modalType === 'cyberAwareness' ? selectedProject : modalType === 'ethicalBasics' ? selectedProject : modalType === 'dataProtection' ? selectedProject : modalType === 'incidentResponse' ? selectedProject : modalType === 'registration' ? <RegistrationPage /> : <CoursesPage />}
        </Modal.Body>
      </Modal>

      {/* Custom Button Styles for Courses section only */}
      <style>
        {`
          .custom-button {
            background-color: black;
            color: white;
            border: 2px solid white;
            border-radius: 0;
            transition: all 0.3s ease;
            padding: 10px 20px;
            font-weight: bold;
          }

          .custom-button:hover {
            background-color: white;
            color: black;
            border: 2px solid black;
          }

          /* Container for both buttons */
          .enroll-buttons-container {
            display: flex;
            justify-content: space-between; /* Space between the buttons */
            margin-top: 20px;
          }

          .enroll-buttons-container .custom-button {
            margin: 0 10px;
          }
        `}
      </style>
    </section>
  );
};
