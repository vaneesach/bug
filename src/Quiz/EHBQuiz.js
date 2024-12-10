import React, { useState } from 'react';

const EHBQuiz = () => {
    const questions = [
        {
          question: "What is Ethical Hacking?",
          options: [
            "Hacking with the intent of causing damage",
            "Testing the security of systems with authorization",
            "Stealing sensitive information from organizations",
            "None of the above"
          ],
          answer: "Testing the security of systems with authorization"
        },
        {
          question: "What is the key difference between ethical and malicious hacking?",
          options: [
            "Ethical hackers do not use tools like Nmap",
            "Malicious hackers operate with legal permissions",
            "Ethical hackers follow legal guidelines and work with consent",
            "Malicious hackers provide reports to organizations"
          ],
          answer: "Ethical hackers follow legal guidelines and work with consent"
        },
        {
          question: "What does reconnaissance in ethical hacking involve?",
          options: [
            "Attacking the system directly",
            "Gathering information about the target system",
            "Installing malware on the target system",
            "None of the above"
          ],
          answer: "Gathering information about the target system"
        },
        {
          question: "Which of the following is a common social engineering tactic?",
          options: [
            "Phishing",
            "DNS interrogation",
            "Network scanning",
            "Firewall testing"
          ],
          answer: "Phishing"
        },
        {
            question: "What is the primary purpose of network scanning in ethical hacking?",
            options: [
              "Identifying live hosts and open ports",
              "Exploiting vulnerabilities in services",
              "Gathering passwords from the system",
              "Disrupting network traffic"
            ],
            answer: "Identifying live hosts and open ports"
          },
          {
            question: "Which tool is commonly used for vulnerability scanning?",
            options: [
              "Wireshark",
              "Metasploit",
              "Nessus",
              "Burp Suite"
            ],
            answer: "Nessus"
          },
          {
            question: "What is privilege escalation in ethical hacking?",
            options: [
              "Escaping from a compromised system",
              "Gaining higher-level privileges after initial access",
              "Bypassing firewalls and IDS systems",
              "Accessing a network without permission"
            ],
            answer: "Gaining higher-level privileges after initial access"
          },
          {
            question: "What is the purpose of OS fingerprinting in ethical hacking?",
            options: [
              "To identify open ports on a target system",
              "To determine the specific operating system of a target system",
              "To check for misconfigurations in network devices",
              "To capture traffic between systems"
            ],
            answer: "To determine the specific operating system of a target system"
          },
          {
            question: "Which of the following tools can be used for password cracking?",
            options: [
              "Nmap",
              "Metasploit",
              "John the Ripper",
              "Wireshark"
            ],
            answer: "John the Ripper"
          },
          {
            question: "What does post-exploitation involve in ethical hacking?",
            options: [
              "Gaining unauthorized access to systems",
              "Exploiting a vulnerability to gain control",
              "Gathering information and extracting sensitive data after access",
              "Bypassing security systems"
            ],
            answer: "Gathering information and extracting sensitive data after access"
          },
          {
            question: "Which of the following is a type of malware that demands a ransom payment?",
            options: [
              "Viruses",
              "Trojans",
              "Ransomware",
              "Rootkits"
            ],
            answer: "Ransomware"
          },
          {
            question: "What is a buffer overflow vulnerability?",
            options: [
              "A form of SQL injection",
              "A memory error that allows an attacker to execute arbitrary code",
              "A vulnerability in browser scripts",
              "A technique for hiding malware on a system"
            ],
            answer: "A memory error that allows an attacker to execute arbitrary code"
          },
          {
            question: "Which of the following tools is used for web application security testing?",
            options: [
              "Burp Suite",
              "Wireshark",
              "Metasploit",
              "Core Impact"
            ],
            answer: "Burp Suite"
          },
          {
            question: "What is a common strategy to defend against SQL injection attacks?",
            options: [
              "Input validation and sanitization",
              "Using firewalls only",
              "Encrypting user passwords",
              "Disabling cookies"
            ],
            answer: "Input validation and sanitization"
          },
          {
            question: "Which encryption protocol is considered more secure for wireless networks?",
            options: [
              "WEP",
              "WPA",
              "WPA2",
              "None of the above"
            ],
            answer: "WPA2"
          },
          {
            question: "What is the main vulnerability of WEP encryption?",
            options: [
              "Weak initialization vectors (IVs)",
              "Strong passphrase protection",
              "AES encryption",
              "None of the above"
            ],
            answer: "Weak initialization vectors (IVs)"
          },
          {
            question: "Which attack involves an attacker setting up a fake access point to intercept traffic?",
            options: [
              "WEP Cracking",
              "Evil Twin Attack",
              "Dictionary Attack",
              "Packet Sniffing"
            ],
            answer: "Evil Twin Attack"
          },
          {
            question: "What is the primary goal of social engineering attacks?",
            options: [
              "To exploit system vulnerabilities",
              "To manipulate individuals into disclosing sensitive information",
              "To hack into computer networks",
              "To gain unauthorized access to physical systems"
            ],
            answer: "To manipulate individuals into disclosing sensitive information"
          },
          {
            question: "Which technique involves creating a fabricated scenario to obtain information from a victim?",
            options: [
              "Baiting",
              "Pretexting",
              "Phishing",
              "Impersonation"
            ],
            answer: "Pretexting"
          },
          {
            question: "What is the purpose of multi-factor authentication (MFA) in defending against social engineering attacks?",
            options: [
              "To make it easier to access sensitive accounts",
              "To provide an extra layer of security by requiring more than one form of verification",
              "To eliminate the need for passwords",
              "To track user behavior across platforms"
            ],
            answer: "To provide an extra layer of security by requiring more than one form of verification"
          }
      ];
      
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [showScore, setShowScore] = useState(false);
        const [userAnswers, setUserAnswers] = useState([]); // Store user answers
        
        const handleAnswerOptionClick = (selectedOption) => {
          // Save the user's answer to the userAnswers array
          const updatedAnswers = [...userAnswers];
          updatedAnswers[currentQuestion] = selectedOption;
          setUserAnswers(updatedAnswers);
      
          // Check if the selected answer is correct
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
          setUserAnswers([]); // Reset user answers when quiz is reset
        };
      
        return (
          <div style={{ textAlign: 'center', margin: '20px', paddingTop: '100px', color: 'white' }}>
            <h2>Ethical Hacking Basics Quiz</h2>
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
                        checked={userAnswers[currentQuestion] === option} // Check if the current option is selected
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
      
      export default EHBQuiz;
      