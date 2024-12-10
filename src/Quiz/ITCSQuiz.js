import React, { useState } from 'react';

const ITCSQuiz = () => {
  const questions = [
    {
      question: "Why is it important for businesses to create a cybersecurity policy?",
      options: [
        "To monitor employee productivity",
        "To outline safe data handling, internet use, and reporting of suspicious activities",
        "To control employee access to social media",
        "To avoid software updates"
      ],
      answer: "To outline safe data handling, internet use, and reporting of suspicious activities"
    },
    {
      question: "What role does encryption play in cybersecurity?",
      options: [
        "It converts sensitive information into public data",
        "It makes data unreadable to unauthorized users by using cryptographic algorithms",
        "It speeds up data processing",
        "It eliminates the need for passwords"
      ],
      answer: "It makes data unreadable to unauthorized users by using cryptographic algorithms"
    },
    {
      question: "What is ransomware?",
      options: [
        "A type of malware that targets specific users",
        "A cyberattack that encrypts files and demands payment for decryption",
        "A form of phishing",
        "A system update for security"
      ],
      answer: "A cyberattack that encrypts files and demands payment for decryption"
    },
    {
      question: "What is a key lesson from the WannaCry ransomware attack?",
      options: [
        "Security updates are unnecessary for ransomware protection",
        "Endpoint security alone can prevent ransomware",
        "Strong backup systems and timely updates are crucial for protection",
        "Encryption alone can stop ransomware"
      ],
      answer: "Strong backup systems and timely updates are crucial for protection"
    },
    {
      question: "What is the primary principle of the Zero Trust Security Model?",
      options: [
        "Trust all internal users",
        "Grant access based on seniority",
        "“Never trust, always verify” approach with strict access controls",
        "Trust all external users if they pass basic security checks"
      ],
      answer: "“Never trust, always verify” approach with strict access controls"
    },
    {
      question: "How does Artificial Intelligence (AI) benefit cybersecurity?",
      options: [
        "By automatically updating all software",
        "By analyzing large amounts of data to detect and predict cyber threats",
        "By replacing traditional security measures",
        "By eliminating the need for human oversight"
      ],
      answer: "By analyzing large amounts of data to detect and predict cyber threats"
    },
    {
      question: "Why is security awareness training important for employees?",
      options: [
        "To reduce productivity during work hours",
        "To educate them on identifying phishing attempts and following security policies",
        "To encourage the use of personal devices for work",
        "To ensure employees share information freely"
      ],
      answer: "To educate them on identifying phishing attempts and following security policies"
    },
    {
      question: "What is a recommended practice for mobile device security in the workplace?",
      options: [
        "Allowing the use of any mobile device without restrictions",
        "Implementing mobile device management (MDM) solutions and enforcing strong password policies",
        "Disabling encryption on mobile devices",
        "Encouraging employees to install any third-party applications"
      ],
      answer: "Implementing mobile device management (MDM) solutions and enforcing strong password policies"
    },
    {
      question: "What is the main goal of cybersecurity?",
      options: [
        "To enhance internet speed",
        "To protect systems and networks from digital attacks",
        "To make all information public",
        "To reduce network traffic"
      ],
      answer: "To protect systems and networks from digital attacks"
    },
    {
      question: "Which of the following is NOT a part of the CIA triad?",
      options: [
        "Confidentiality",
        "Integrity",
        "Authorization",
        "Availability"
      ],
      answer: "Authorization"
    },
    {
      question: "What does 'Confidentiality' in cybersecurity refer to?",
      options: [
        "Allowing access to all data freely",
        "Ensuring data is accessible only to authorized users",
        "Modifying data without restrictions",
        "Encrypting all data on the internet"
      ],
      answer: "Ensuring data is accessible only to authorized users"
    },
    {
      question: "Which concept is used to verify data integrity?",
      options: [
        "Encryption",
        "Digital signatures",
        "Backup storage",
        "Cloud services"
      ],
      answer: "Digital signatures"
    },
    {
      question: "What is a potential risk of advancements in AI for cybersecurity?",
      options: [
        "AI can improve encryption standards",
        "AI can be used to automate sophisticated attacks, like phishing",
        "AI can secure IoT devices automatically",
        "AI helps to prevent all cyberattacks"
      ],
      answer: "AI can be used to automate sophisticated attacks, like phishing"
    },
    {
      question: "Why are IoT devices a growing concern in cybersecurity?",
      options: [
        "They are well-secured against cyber threats",
        "They have no connection to the internet",
        "Many IoT devices are poorly secured, making them vulnerable to attacks",
        "They only operate within isolated networks"
      ],
      answer: "Many IoT devices are poorly secured, making them vulnerable to attacks"
    },
    {
      question: "What potential threat does quantum computing pose to cybersecurity?",
      options: [
        "It can enhance current encryption methods",
        "It may eventually break current encryption standards",
        "It reduces the need for multi-factor authentication",
        "It prevents ransomware attacks"
      ],
      answer: "It may eventually break current encryption standards"
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
      <h2>Cybersecurity Quiz</h2>
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

export default ITCSQuiz;
