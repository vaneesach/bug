import meter1 from "../assets/img/meter1.svg"; // Consider using relevant cybersecurity images
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"; // Background image remains the same

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Cybersecurity Skills</h2>
              <p>Explore the essential skills required to protect systems and data from cyber threats.<br /> These skills are vital in today’s digital landscape.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Web Security" />
                  <h5>Web Security</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Network Security" />
                  <h5>Network Security</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Risk Assessment" />
                  <h5>Risk Assessment</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Incident Response" />
                  <h5>Incident Response</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Threat Analysis" />
                  <h5>Threat Analysis</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
