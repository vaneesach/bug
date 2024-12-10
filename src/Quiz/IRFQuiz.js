import React, { useState } from 'react';

const IRFQuiz = () => {
  const questions = [
    {
      question: "What is the primary goal of incident response?",
      options: [
        "To prevent cyber-attacks entirely",
        "To mitigate damage and prevent future attacks",
        "To increase the speed of the network",
        "To monitor employee productivity"
      ],
      answer: "To mitigate damage and prevent future attacks"
    },
    {
      question: "Which phase is NOT part of the incident response lifecycle?",
      options: [
        "Preparation",
        "Containment",
        "Eradication",
        "Detection of new devices"
      ],
      answer: "Detection of new devices"
    },
    {
      question: "What is the role of an Incident Response Team (IRT)?",
      options: [
        "To maintain the company's website",
        "To structure and handle security breaches or cyber-attacks",
        "To create marketing campaigns",
        "To monitor employee performance"
      ],
      answer: "To structure and handle security breaches or cyber-attacks"
    },
    {
      question: "What type of tools are typically used in incident response?",
      options: [
        "Social media management tools",
        "Security Information and Event Management (SIEM) systems",
        "Graphic design software",
        "Customer support platforms"
      ],
      answer: "Security Information and Event Management (SIEM) systems"
    },
    {
        question: "What is the primary goal of the Preparation phase in the incident response lifecycle?",
        options: [
          "To identify the cause of an incident",
          "To mitigate damage during an attack",
          "To develop an incident response strategy and train staff",
          "To recover affected systems"
        ],
        answer: "To develop an incident response strategy and train staff"
      },
      {
        question: "What does the Detection phase focus on in the incident response lifecycle?",
        options: [
          "Removing malware from systems",
          "Isolating affected systems",
          "Identifying security incidents quickly using monitoring systems",
          "Restoring affected systems to normal operation"
        ],
        answer: "Identifying security incidents quickly using monitoring systems"
      },
      {
        question: "What should an Incident Response Plan (IRP) include?",
        options: [
          "A marketing strategy",
          "Detailed steps for every possible type of security incident",
          "A social media plan",
          "Customer service procedures"
        ],
        answer: "Detailed steps for every possible type of security incident"
      },
      {
        question: "What is the role of Security Information and Event Management (SIEM) systems in incident detection?",
        options: [
          "To create marketing campaigns",
          "To aggregate and analyze log data from various sources in real-time",
          "To manage customer service interactions",
          "To monitor employee performance"
        ],
        answer: "To aggregate and analyze log data from various sources in real-time"
      },
      {
        question: "What is the primary focus of short-term containment measures during an incident?",
        options: [
          "Patching vulnerabilities",
          "Isolating affected systems or network segments",
          "Restoring normal operations",
          "Removing malware traces"
        ],
        answer: "Isolating affected systems or network segments"
      },
      {
        question: "What is the key goal of the eradication phase in incident response?",
        options: [
          "To restore systems to their normal operating state",
          "To remove malware and mitigate vulnerabilities",
          "To isolate affected systems",
          "To monitor the system post-recovery"
        ],
        answer: "To remove malware and mitigate vulnerabilities"
      },
      {
        question: "What is the purpose of system restoration after an incident?",
        options: [
          "To eliminate malware",
          "To restore systems to a secure state without traces of the attack",
          "To gather evidence for legal proceedings",
          "To prevent future incidents"
        ],
        answer: "To restore systems to a secure state without traces of the attack"
      },
      {
        question: "Why is evidence preservation important during an incident?",
        options: [
          "To help restore systems quickly",
          "To ensure compliance with company policies",
          "To support legal proceedings and understand the nature of the attack",
          "To mitigate the impact of the attack"
        ],
        answer: "To support legal proceedings and understand the nature of the attack"
      },
      {
        question: "What is the purpose of conducting a post-mortem review after an incident?",
        options: [
          "To assess the financial damage caused by the attack",
          "To identify areas for improvement in the incident response process",
          "To restore systems to normal operation",
          "To prepare a public relations statement"
        ],
        answer: "To identify areas for improvement in the incident response process"
      },
      {
        question: "What is the focus of root cause analysis in post-incident analysis?",
        options: [
          "Identifying the attack vector and exploited vulnerabilities",
          "Restoring systems to normal operation",
          "Communicating with external stakeholders",
          "Collecting evidence for legal proceedings"
        ],
        answer: "Identifying the attack vector and exploited vulnerabilities"
      },
      {
        question: "How can lessons learned from an incident be applied to improve future responses?",
        options: [
          "By updating the Incident Response Plan based on the insights gained",
          "By focusing on restoring systems faster",
          "By enhancing network monitoring tools",
          "By implementing stricter security policies without reviewing the incident"
        ],
        answer: "By updating the Incident Response Plan based on the insights gained"
      },
      {
        question: "Why is sharing knowledge with the broader cybersecurity community beneficial after an incident?",
        options: [
          "It helps improve the organization’s reputation",
          "It allows the organization to keep secrets about the attack",
          "It contributes to collective defense and threat intelligence sharing",
          "It prevents further incidents from occurring"
        ],
        answer: "It contributes to collective defense and threat intelligence sharing"
      },
      {
        "question": "What is the legal requirement for incident reporting in most jurisdictions?",
        "options": [
          "To report only if the incident causes financial loss",
          "To report incidents within a specific timeframe to relevant authorities",
          "To report only if sensitive data is exposed",
          "To report incidents after they are fully resolved"
        ],
        "answer": "To report incidents within a specific timeframe to relevant authorities"
      },
      {
        "question": "How do data privacy laws like GDPR and HIPAA impact incident response?",
        "options": [
          "They limit the ability to collect evidence during an incident",
          "They require specific breach notifications and compliance with privacy standards",
          "They prevent the sharing of threat intelligence",
          "They do not apply to cybersecurity incidents"
        ],
        "answer": "They require specific breach notifications and compliance with privacy standards"
      },
      {
        "question": "What is the role of chain of custody in legal cases involving cyber incidents?",
        "options": [
          "To ensure that evidence is handled in a way that maintains its integrity for legal purposes",
          "To collect evidence faster",
          "To prevent external audits from occurring",
          "To discard any irrelevant evidence"
        ],
        "answer": "To ensure that evidence is handled in a way that maintains its integrity for legal purposes"
      },
      {
        "question": "What is the key objective of conducting tabletop exercises during incident response training?",
        "options": [
          "To practice incident response coordination, decision-making, and communication skills",
          "To test the physical security of data centers",
          "To assess financial losses from simulated incidents",
          "To draft legal documentation for court proceedings"
        ],
        "answer": "To practice incident response coordination, decision-making, and communication skills"
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
      <h2>Incident Response Fundamentals Quiz</h2>
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

export default IRFQuiz;
