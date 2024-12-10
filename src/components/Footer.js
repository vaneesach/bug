import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg"; // Consider using cybersecurity-related icons
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* Replace logo image with text */}
            <h2 className="bug-sluth-text">Bug Sluth</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="GitHub" />
              </a>
            </div>
            <p>Stay secure. Stay informed. Follow us for the latest cybersecurity updates.</p>
            <p>© {new Date().getFullYear()} Cybersecurity Solutions. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
