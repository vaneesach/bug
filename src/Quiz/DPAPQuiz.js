import React, { useState } from 'react';

const DPAPQuiz = () => {   

    const questions = [
        {
            question: "What is the primary purpose of Data Protection?",
            options: [
                "To collect as much data as possible",
                "To safeguard personal and sensitive information from unauthorized access",
                "To share data with third parties",
                "None of the above"
            ],
            answer: "To safeguard personal and sensitive information from unauthorized access"
        },
        {
            question: "Which regulation is known as the General Data Protection Regulation (GDPR)?",
            options: [
                "A law in the United States protecting consumer privacy",
                "A law in the European Union governing data protection",
                "A global treaty on data privacy",
                "None of the above"
            ],
            answer: "A law in the European Union governing data protection"
        },
        {
            question: "Which of the following is a key principle of data protection?",
            options: [
                "Data should be stored indefinitely",
                "Data minimization and purpose limitation",
                "Data should be shared with third parties without consent",
                "None of the above"
            ],
            answer: "Data minimization and purpose limitation"
        },
        {
            question: "What is the role of a Data Protection Officer (DPO)?",
            options: [
                "To monitor and ensure compliance with data protection laws",
                "To collect and store personal data",
                "To create marketing strategies for data collection",
                "None of the above"
            ],
            answer: "To monitor and ensure compliance with data protection laws"
        },
        {
            question: "What is the lawful basis for collecting personal data under data protection laws?",
            options: [
                "Only consent from the individual",
                "Contractual necessity, legitimate interest, and consent",
                "Legal obligation only",
                "None of the above"
            ],
            answer: "Contractual necessity, legitimate interest, and consent"
        },
        {
            question: "What type of data requires enhanced protection under data protection laws?",
            options: [
                "Sensitive data like political opinions and health information",
                "Publicly available data",
                "Non-personal data",
                "None of the above"
            ],
            answer: "Sensitive data like political opinions and health information"
        },
        {
            question: "What is the key purpose of data processing restrictions?",
            options: [
                "To ensure data is processed for incompatible purposes",
                "To prevent organizations from processing data for unauthorized purposes",
                "To allow unrestricted access to personal data",
                "None of the above"
            ],
            answer: "To prevent organizations from processing data for unauthorized purposes"
        },
        {
            question: "Which data subject right allows individuals to access their personal data?",
            options: [
                "Right to rectification",
                "Right to erasure",
                "Right to access",
                "Right to object"
            ],
            answer: "Right to access"
        },
        {
            question: "What is the primary role of a Data Protection Officer (DPO)?",
            options: [
                "To monitor and ensure compliance with data protection laws",
                "To collect and store personal data",
                "To create marketing strategies for data collection",
                "None of the above"
            ],
            answer: "To monitor and ensure compliance with data protection laws"
        },
        {
            question: "What is a Privacy Impact Assessment (PIA) used for?",
            options: [
                "To assess the risks of data processing activities to individuals' privacy",
                "To determine the amount of data an organization can collect",
                "To measure the financial impact of data breaches",
                "None of the above"
            ],
            answer: "To assess the risks of data processing activities to individuals' privacy"
        },
        {
            question: "What is the purpose of a Data Processing Agreement (DPA)?",
            options: [
                "To outline the terms under which third-party vendors process personal data",
                "To share personal data with external parties",
                "To assess the financial costs of data processing",
                "None of the above"
            ],
            answer: "To outline the terms under which third-party vendors process personal data"
        },
        {
            question: "Which of the following is a risk associated with outsourcing data processing to cloud providers?",
            options: [
                "Lack of control over data security and compliance",
                "Reduced data protection measures",
                "Increased physical access to data",
                "None of the above"
            ],
            answer: "Lack of control over data security and compliance"
        },
        {
            question: "What does Privacy by Design emphasize in data processing activities?",
            options: [
                "Incorporating privacy measures into the design of systems and processes",
                "Collecting as much personal data as possible",
                "Processing data without considering privacy risks",
                "None of the above"
            ],
            answer: "Incorporating privacy measures into the design of systems and processes"
        },
        {
            question: "What is the main goal of Data Minimization?",
            options: [
                "Collecting only the necessary amount of personal data for a specific purpose",
                "Collecting as much data as possible",
                "Storing data indefinitely",
                "None of the above"
            ],
            answer: "Collecting only the necessary amount of personal data for a specific purpose"
        },
        {
            question: "What is the purpose of Privacy Enhancing Technologies (PETs)?",
            options: [
                "To protect individuals' privacy while still allowing data processing",
                "To collect more personal data",
                "To increase data storage capabilities",
                "None of the above"
            ],
            answer: "To protect individuals' privacy while still allowing data processing"
        },
        {
            question: "Which of the following is a key principle of Privacy by Default?",
            options: [
                "Only the minimum amount of personal data is collected and processed",
                "All data should be shared with third parties by default",
                "Users must actively opt-out of data collection",
                "None of the above"
            ],
            answer: "Only the minimum amount of personal data is collected and processed"
        },
        {
            question: "What should be done once a data breach has been contained?",
            options: [
                "Perform forensic analysis and implement remediation measures",
                "Ignore the breach and continue processing data",
                "Store the breach data indefinitely for further analysis",
                "None of the above"
            ],
            answer: "Perform forensic analysis and implement remediation measures"
        },
        {
            question: "What is the first step in an effective incident response plan?",
            options: [
                "Preparation and identification of potential risks",
                "Eradication of the breach",
                "Recovery and monitoring",
                "None of the above"
            ],
            answer: "Preparation and identification of potential risks"
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
        <h2>Data Protection and Privacy Quiz</h2>
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
  
  export default DPAPQuiz;
    