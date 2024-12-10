// list.js
import React from 'react';
import { Container } from 'react-bootstrap';

const styles = {
  coursesPage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#000',
  },
  courseList: {
    listStyleType: 'none', // Removes default bullet points
    paddingLeft: '0', // Removes left padding
  },
  courseItem: {
    padding: '20px',
    color: '#fff',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '20px', // Adds space between each list item
    opacity: 0, // Start with hidden elements for animation
    animation: 'fadeIn 0.5s ease-in-out forwards', // Animation for fade-in effect
    transition: 'transform 0.3s ease', // Animation for moving to the right on hover
  },
  courseItemHover: {
    transform: 'translateX(10px)', // Moves item slightly to the right on hover
  },
};

// CSS for the fade-in animation
const animationStyles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CoursesPage = () => {
  const courses = [
    "Network Security Essentials",
    "Advanced Penetration Testing Techniques",
    "Cybersecurity for Beginners",
    "Certified Information Systems Security Professional (CISSP) Prep",
    "Cyber Threat Intelligence Analysis",
    "Securing Cloud Infrastructure",
    "Cybersecurity Risk Management",
    "Malware Analysis and Reverse Engineering",
    "Social Engineering and Phishing Attacks",
    "Security Operations Center (SOC) Fundamentals",
    "Network Defense and Intrusion Prevention",
    "Cryptography and Data Protection",
    "Wireless Network Security",
    "Advanced Cybersecurity Auditing and Compliance",
    "Security for Internet of Things (IoT) Devices",
    "Blockchain Security",
    "Cybersecurity in the Healthcare Industry"
  ];
  
  return (
    <div style={styles.coursesPage}>
      {/* Add the animation styles to the document head */}
      <style>{animationStyles}</style>
      
      <Container className="mt-5">
        <h2 className="text-center mb-4" style={{ color: '#fff' }}>Cybersecurity Courses</h2>
        <ul style={styles.courseList}>
          {courses.map((course, index) => (
            <li
              key={index}
              style={{
                ...styles.courseItem,
                animationDelay: `${index * 0.2}s`,
                ':hover': styles.courseItemHover, // Apply hover effect
              }}
            >
              {course}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
