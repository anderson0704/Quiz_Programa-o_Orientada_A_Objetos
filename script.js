const questions = [
    {
      question: "O que é um objeto em Programação Orientada a Objetos?",
      choices: [
        "Uma instância de uma classe",
        "Uma função",
        "Um tipo de dado primitivo",
        "Um método de uma classe"
      ],
      answer: "Uma instância de uma classe"
    },
    {
      question: "O que é herança em Programação Orientada a Objetos?",
      choices: [
        "É um conceito que permite uma classe herdar propriedades e métodos de outra classe",
        "É uma técnica para criar objetos",
        "É uma forma de polimorfismo",
        "É uma técnica para encapsular dados e funcionalidades"
      ],
      answer: "É um conceito que permite uma classe herdar propriedades e métodos de outra classe"
    },
    {
      question: "O que é encapsulamento em Programação Orientada a Objetos?",
      choices: [
        "É a capacidade de uma classe de herdar propriedades e métodos de outra classe",
        "É uma técnica para ocultar a implementação interna de um objeto e expor apenas as funcionalidades necessárias",
        "É uma forma de polimorfismo",
        "É uma técnica para criar objetos"
      ],
      answer: "É uma técnica para ocultar a implementação interna de um objeto e expor apenas as funcionalidades necessárias"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const resultElement = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
  
    choicesElement.innerHTML = '';
    q.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => {
        checkAnswer(choice);
      });
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choice) {
    const q = questions[currentQuestion];
    if (choice === q.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = Você acertou ${score} de ${questions.length} perguntas.;
  }
  
  submitButton.addEventListener('click', () => {
    checkAnswer();
  });
  
  showQuestion();