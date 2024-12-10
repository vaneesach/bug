import React, { useState } from 'react';

const NSFQuiz = () => {
  const questions = [
    {
        question: "What is the primary purpose of network security?",
        options: [
          "To increase network speed",
          "To protect against unauthorized access and misuse",
          "To reduce storage space",
          "To ensure systems never require updates"
        ],
        answer: "To protect against unauthorized access and misuse"
      },
      {
        question: "What does the 'Confidentiality' principle in the CIA triad refer to?",
        options: [
          "Ensuring only authorized users have access to data",
          "Ensuring data is publicly available",
          "Ensuring network speed is high",
          "Ensuring data is encrypted with a public key"
        ],
        answer: "Ensuring only authorized users have access to data"
      },
      {
        question: "Which of the following is an example of malware?",
        options: [
          "Firewall",
          "Encryption",
          "Virus",
          "Load balancer"
        ],
        answer: "Virus"
      },
      {
        question: "What is a common goal of a DoS (Denial of Service) attack?",
        options: [
          "To improve network availability",
          "To make systems unavailable to users",
          "To increase data integrity",
          "To provide secure access to users"
        ],
        answer: "To make systems unavailable to users"
      },
      {
        question: "Which type of firewall examines packets of data and blocks or allows them based on predefined rules?",
        options: [
          "Stateful Inspection Firewalls",
          "Packet Filtering Firewalls",
          "Next-Generation Firewalls",
          "Intrusion Detection Systems"
        ],
        answer: "Packet Filtering Firewalls"
      },
      {
        question: "What is the main difference between an IDS (Intrusion Detection System) and an IPS (Intrusion Prevention System)?",
        options: [
          "IDS can take action to stop threats, but IPS cannot",
          "IPS can take action to stop threats, but IDS only alerts",
          "Both IDS and IPS can prevent attacks",
          "There is no difference"
        ],
        answer: "IPS can take action to stop threats, but IDS only alerts"
      },
      {
        question: "What is the purpose of a Demilitarized Zone (DMZ) in network design?",
        options: [
          "To isolate critical internal systems from external access",
          "To increase network speed",
          "To protect data integrity",
          "To ensure constant availability of resources"
        ],
        answer: "To isolate critical internal systems from external access"
      },
      {
        question: "What is the main principle of Zero Trust Architecture?",
        options: [
          "Assume trust for all internal users",
          "No one should be trusted, whether inside or outside the network",
          "Only external users need to be authenticated",
          "There is no need to authenticate devices"
        ],
        answer: "No one should be trusted, whether inside or outside the network"
      },
      {
        question: "What does the role of NAC (Network Access Control) help with in network security?",
        options: [
          "It manages network speed",
          "It enforces security policies on devices attempting to connect to a network",
          "It monitors email traffic",
          "It helps with system updates"
        ],
        answer: "It enforces security policies on devices attempting to connect to a network"
      },
      {
        question: "Which authentication protocol is known for greater flexibility and security for network device authentication?",
        options: [
          "RADIUS",
          "TACACS+",
          "SSL",
          "IPsec"
        ],
        answer: "TACACS+"
      },
      {
        question: "What is the primary benefit of using a VPN (Virtual Private Network)?",
        options: [
          "It increases network speed",
          "It secures data communication over the internet",
          "It disables security protocols",
          "It improves device compatibility"
        ],
        answer: "It secures data communication over the internet"
      },
      {
        question: "Which of the following is a more robust VPN protocol that provides secure communication for all types of traffic?",
        options: [
          "SSL/TLS VPN",
          "IPsec VPN",
          "PPTP VPN",
          "L2TP VPN"
        ],
        answer: "IPsec VPN"
      },
      {
        question: "What security protocol is used to secure Wi-Fi networks and provides enhanced security over WPA2?",
        options: [
          "WPA1",
          "WPA2",
          "WPA3",
          "WEP"
        ],
        answer: "WPA3"
      },
      {
        question: "What is the main purpose of Rogue Access Points in wireless network security?",
        options: [
          "They provide legitimate access to the network",
          "They allow unauthorized access to the network",
          "They increase wireless network speed",
          "They reduce network traffic"
        ],
        answer: "They allow unauthorized access to the network"
      },
      // New Questions
      {
        question: "What is an Advanced Persistent Threat (APT)?",
        options: [
          "A type of firewall",
          "A prolonged and targeted attack aimed at stealing information",
          "A method of securing Wi-Fi networks",
          "A form of malware"
        ],
        answer: "A prolonged and targeted attack aimed at stealing information"
      },
      {
        question: "What is a key vulnerability of IoT (Internet of Things) devices?",
        options: [
          "Weak security features",
          "High bandwidth requirements",
          "Increased energy consumption",
          "Limited connectivity"
        ],
        answer: "Weak security features"
      },
      {
        question: "What is ransomware?",
        options: [
          "A type of firewall",
          "Malware that encrypts data and demands a ransom for decryption",
          "A security protocol",
          "A tool for secure data backup"
        ],
        answer: "Malware that encrypts data and demands a ransom for decryption"
      },
      {
        question: "What does the term 'network segmentation' refer to?",
        options: [
          "Dividing the network into smaller, isolated segments to improve security",
          "Increasing the size of the network to improve speed",
          "Combining different networks into a single unified system",
          "A method of reducing network traffic"
        ],
        answer: "Dividing the network into smaller, isolated segments to improve security"
      }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); 
  
  const handleAnswerOptionClick = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmitClick = () => {
    setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]); 
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', paddingTop: '100px', color: 'white' }}>
      <h2>Network Security Fundamental Quiz</h2>
      <br />
      {showScore ? (
        <div>
          <h3>Your Score: {score} out of {questions.length}</h3>
          <br />
          <button
            onClick={resetQuiz}
            style={{
              color: 'white',
              backgroundColor: '#333',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
            }}
          >
            Try Again
          </button>
          <div style={{ marginTop: '20px' }}>
            <h3>Review Your Answers:</h3>
            {questions.map((question, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '15px',
                  textAlign: 'left',
                  backgroundColor: '#444',
                  padding: '10px',
                  borderRadius: '5px',
                }}
              >
                <p><strong>Question {index + 1}:</strong> {question.question}</p>
                <p><strong>Your Answer:</strong> {userAnswers[index]}</p>
                <p><strong>Correct Answer:</strong> {question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h4>Question {currentQuestion + 1} of {questions.length}</h4>
          <br />
          <p>{questions[currentQuestion].question}</p>
          <div style={{ display: 'inline-block', textAlign: 'left' }}>
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '10px 0',
                  cursor: 'pointer',
                  padding: '10px',
                  backgroundColor: '#333',
                  borderRadius: '5px',
                }}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  checked={userAnswers[currentQuestion] === option} 
                  style={{ marginRight: '10px' }}
                />
                {option}
              </label>
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNextClick}
                style={{
                  color: 'white',
                  backgroundColor: '#333',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  marginRight: '10px',
                }}
                disabled={!userAnswers[currentQuestion]} 
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmitClick}
                style={{
                  color: 'white',
                  backgroundColor: '#333',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                }}
                disabled={!userAnswers[currentQuestion]} 
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>

  );
};

export default NSFQuiz;
