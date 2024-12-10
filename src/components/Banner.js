import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 50); // Increased speed
  const period = 1500; // Decreased pause duration

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const fullText = "Highlight the goal of enhancing cybersecurity knowledge";
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300); // Increased speed when starting again
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline animate__animated animate__bounceIn">Welcome to  Cybersecurity E-Learning Website</span>
                  <h1>
                    <span className="txt-rotate" data-period={period}>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>Your security is our priority.</p>
                   </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
              <div 
              className={isVisible ? "animate__animated animate__zoomIn" : ""}
              style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10px', marginTop: '30px' }} // Adjust the marginTop value as needed
            >
              <img 
                src={headerImg} 
                alt="Cybersecurity Header Img"  
                style={{ width: '70%', height: 'auto', borderRadius: '150px' }} 
              />
              <br></br> <br></br><br></br>
            </div>
              
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
  
};

