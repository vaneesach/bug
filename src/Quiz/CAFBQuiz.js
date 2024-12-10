import React, { useState } from 'react';

const CAFBQuiz = () => {
  const questions = [
    {
        question: "Cybersecurity aims to protect which of the following?",
        options: [
          "Physical assets",
          "Digital systems, networks, and programs",
          "Financial institutions only",
          "Only personal devices"
        ],
        answer: "Digital systems, networks, and programs"
      },
      {
        question: "Which of the following is a common type of malware?",
        options: [
          "Firewall",
          "Spyware",
          "Encryption",
          "Antivirus"
        ],
        answer: "Spyware"
      },
      {
        question: "What are the three key principles of the CIA Triad in cybersecurity?",
        options: [
          "Communication, Integrity, Authentication",
          "Confidentiality, Integrity, Availability",
          "Compliance, Integrity, Access Control",
          "Confidentiality, Authentication, Access Control"
        ],
        answer: "Confidentiality, Integrity, Availability"
      },
      {
        question: "Which of the following is an example of social engineering?",
        options: [
          "Phishing",
          "Firewall blocking malicious traffic",
          "Encryption of sensitive data",
          "Use of antivirus software"
        ],
        answer: "Phishing"
      },
      // New questions
      {
        question: "Which of the following is a sign of a fake website?",
        options: [
          "The website has an SSL certificate",
          "The website URL has slight variations",
          "The website has a well-designed layout",
          "The website asks for minimal personal information"
        ],
        answer: "The website URL has slight variations"
      },
      {
        question: "What is the best way to secure your social media profile?",
        options: [
          "Set your profile to public",
          "Share all your personal information to build trust",
          "Set your profile to private and limit personal data sharing",
          "Avoid using any privacy settings"
        ],
        answer: "Set your profile to private and limit personal data sharing"
      },
      {
        question: "What is two-factor authentication (2FA)?",
        options: [
          "A second password to access accounts",
          "A backup code sent by email",
          "A second form of identification, such as a phone or biometric data",
          "An encryption method for data"
        ],
        answer: "A second form of identification, such as a phone or biometric data"
      },
      {
        question: "Which of the following is a common phishing scam?",
        options: [
          "Receiving a legitimate email from your bank asking for personal details",
          "A fake job offer asking for money upfront",
          "A website with a secure SSL certificate",
          "A reputable tech company offering free software updates"
        ],
        answer: "A fake job offer asking for money upfront"
      },
      {
        question: "Which of the following is an effective method for protecting sensitive data?",
        options: [
          "Use encryption",
          "Share it on social media for backup",
          "Store it in an unprotected cloud storage",
          "Send it via unsecured email"
        ],
        answer: "Use encryption"
      },
      {
        question: "What is the primary purpose of device updates and patching?",
        options: [
          "To add new features",
          "To fix bugs and security vulnerabilities",
          "To slow down your device",
          "To increase the device's memory capacity"
        ],
        answer: "To fix bugs and security vulnerabilities"
      },
      // Additional questions from Modules 5 and 6
      {
        question: "What is the best practice for protecting personal data?",
        options: [
          "Share it freely online for convenience",
          "Use weak passwords to avoid forgetting them",
          "Encrypt personal data and store it securely",
          "Use the same password for multiple accounts"
        ],
        answer: "Encrypt personal data and store it securely"
      },
      {
        question: "What is the most secure method for backing up your data?",
        options: [
          "Backup data on a regular basis with encryption",
          "Only back up data when it's needed",
          "Store backups on an unsecured cloud service",
          "Use a public Wi-Fi network for backup"
        ],
        answer: "Backup data on a regular basis with encryption"
      },
      {
        question: "What is the recommended action to secure your home Wi-Fi network?",
        options: [
          "Change the default password and use WPA3 encryption",
          "Leave the default password unchanged for convenience",
          "Disable all security features to increase speed",
          "Share your Wi-Fi password publicly for easy access"
        ],
        answer: "Change the default password and use WPA3 encryption"
      },
      {
        question: "What is the main risk of using public Wi-Fi networks?",
        options: [
          "Increased internet speed",
          "Increased exposure to cyberattacks and data theft",
          "Enhanced security due to encryption",
          "Access to free internet services"
        ],
        answer: "Increased exposure to cyberattacks and data theft"
      },
      {
        question: "What is the first step to take if you suspect a cyber incident?",
        options: [
          "Report it to law enforcement",
          "Disconnect affected devices from the network",
          "Turn off the device immediately",
          "Delete all suspicious files"
        ],
        answer: "Disconnect affected devices from the network"
      },
      {
        question: "Which of the following is a sign of a phishing email?",
        options: [
          "The email comes from an official company domain",
          "The email asks for sensitive information like passwords or bank details",
          "The email has no grammar or spelling errors",
          "The email has a professional layout with no red flags"
        ],
        answer: "The email asks for sensitive information like passwords or bank details"
      },
      {
        question: "What should you do if your social media account has been hacked?",
        options: [
          "Ignore it and continue using the account",
          "Contact the social media provider and change your password immediately",
          "Post a public message about the breach",
          "Open a new account and leave the old one inactive"
        ],
        answer: "Contact the social media provider and change your password immediately"
      },
      {
        question: "What is one way to protect your data from being stolen on a public Wi-Fi network?",
        options: [
          "Use a virtual private network (VPN)",
          "Access sensitive information without caution",
          "Use public Wi-Fi for all internet activities",
          "Share your passwords with trusted individuals"
        ],
        answer: "Use a virtual private network (VPN)"
      },
      {
        question: "What is the purpose of using antivirus software?",
        options: [
          "To enhance your device's performance",
          "To protect your device from viruses and malware",
          "To make your device run faster",
          "To monitor your device’s storage capacity"
        ],
        answer: "To protect your device from viruses and malware"
      },
      {
        question: "What is a recommended practice for managing your online passwords?",
        options: [
          "Use the same password for multiple accounts",
          "Share your passwords with trusted friends and family",
          "Use complex, unique passwords for each account and a password manager",
          "Write passwords down in a notebook for easy access"
        ],
        answer: "Use complex, unique passwords for each account and a password manager"
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
      <h2>Cybersecurity Awareness For Beginners Quiz</h2>
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

export default CAFBQuiz;
