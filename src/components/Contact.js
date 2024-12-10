import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"; // Your image path
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Save form data to local storage
    localStorage.setItem("contactForm", JSON.stringify(formDetails));

    // Clear form fields immediately
    setFormDetails(formInitialDetails);

    // Simulate a successful response
    setTimeout(() => {
      // Show success message
      alert("Message sent successfully!");
      setButtonText("Sent");
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col size={12} md={6} className="form">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get in touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                          placeholder="First Name"
                          required
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                          placeholder="Last Name"
                          required
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                          placeholder="Email"
                          required
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                          placeholder="Phone"
                        />
                      </Col>
                      <Col>
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          placeholder="Message"
                          required
                        ></textarea>
                        <button type="submit">{buttonText}</button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
