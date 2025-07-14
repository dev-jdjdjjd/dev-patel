const allQuestions = [
    {
      question: "What does SRS stand for in software engineering?",
      options: ["Software Requirements Specification", "System Resource Scheduler", "Structured Requirement Sheet", "Software Review Summary"],
      answer: "Software Requirements Specification"
    },
    {
      question: "Which of the following is a part of an SRS document?",
      options: ["Software Code", "Design Diagrams", "Functional Requirements", "Test Cases"],
      answer: "Functional Requirements"
    },
    {
      question: "Who primarily uses the SRS document?",
      options: ["End users", "Project managers", "Testers and Developers", "Marketing team"],
      answer: "Testers and Developers"
    },
    {
      question: "Which characteristic is NOT essential for a good SRS?",
      options: ["Ambiguity", "Completeness", "Verifiability", "Consistency"],
      answer: "Ambiguity"
    },
    {
      question: "What is the main purpose of an SRS?",
      options: ["Design the system", "Define system requirements", "Testing the system", "Deploy the system"],
      answer: "Define system requirements"
    },
    {
      question: "An SRS should be:",
      options: ["Ambiguous", "Complete and consistent", "Inconsistent", "Unverifiable"],
      answer: "Complete and consistent"
    },
    {
      question: "Which is NOT a section of an SRS?",
      options: ["Introduction", "Functional Requirements", "User Manual", "Non-functional Requirements"],
      answer: "User Manual"
    },
    {
      question: "Who typically prepares the SRS?",
      options: ["Software testers", "System analysts", "End users", "Marketing team"],
      answer: "System analysts"
    },
    {
      question: "SRS helps to avoid:",
      options: ["Misunderstandings", "Design", "Programming", "Testing"],
      answer: "Misunderstandings"
    },
    {
      question: "Non-functional requirements describe:",
      options: ["System features", "System performance and quality", "Functionalities", "User interfaces"],
      answer: "System performance and quality"
    },
    {
      question: "SRS document is a contract between:",
      options: ["Customer and developer", "Tester and developer", "User and tester", "Marketing and customer"],
      answer: "Customer and developer"
    }
  ];
  
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const scoreElement = document.getElementById("score");
  
  function initQuiz() {
    questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = "";
    restartButton.style.display = "none";
    nextButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = `Q${currentQuestion + 1}. ${q.question}`;
    optionsElement.innerHTML = "";
  
    const shuffledOptions = q.options.sort(() => Math.random() - 0.5);
  
    shuffledOptions.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(button, q.answer);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(button, correctAnswer) {
    const allButtons = optionsElement.querySelectorAll("button");
    allButtons.forEach(btn => btn.disabled = true);
  
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
      allButtons.forEach(btn => {
        if (btn.textContent === correctAnswer) btn.classList.add("correct");
      });
    }
  
    nextButton.style.display = "inline-block";
  }
  
  nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      nextButton.style.display = "none";
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionElement.textContent = "Quiz Finished!";
    optionsElement.innerHTML = "";
    scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    nextButton.style.display = "none";
    restartButton.style.display = "inline-block";
  }
  
  restartButton.onclick = () => {
    initQuiz();
  };
  
  // Start quiz when page loads
  initQuiz();
  