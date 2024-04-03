const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

darkModeBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

const quizForm = document.getElementById('quizForm');
const resultDisplay = document.getElementById('result');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    if (answerValue === 'greenhouse') {
      resultDisplay.textContent = 'Resposta correta! Emissão de gases de efeito estufa é a principal causa do aquecimento global.';
    } else {
      resultDisplay.textContent = 'Resposta incorreta. Tente novamente.';
    }
  } else {
    resultDisplay.textContent = 'Por favor, selecione uma resposta.';
  }
});


const questions = [
    { question: 'Qual é a principal causa do aquecimento global?', answer: 'greenhouse' },
    { question: 'Qual das seguintes atividades contribui para a poluição do ar?', answer: 'deforestation' },
    { question: 'Qual é a fonte mais comum de poluição plástica nos oceanos?', answer: 'plastic' }
  ];
  
  const questionContainer = document.getElementById('questionContainer');
  const quizForm = document.getElementById('quizForm');
  const scoreContainer = document.getElementById('scoreContainer');
  const scoreDisplay = document.getElementById('score');
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Função para exibir a próxima pergunta
  function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      document.getElementById('question').textContent = currentQuestion.question;
      currentQuestionIndex++;
    } else {
      // Exibe a pontuação final quando não houver mais perguntas
      questionContainer.style.display = 'none';
      scoreContainer.style.display = 'block';
      scoreDisplay.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    }
  }
  
  // Função para verificar a resposta e avançar para a próxima pergunta
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      const answerValue = selectedAnswer.value;
      const currentQuestion = questions[currentQuestionIndex - 1];
      if (answerValue === currentQuestion.answer) {
        score++;
      }
      selectedAnswer.checked = false;
      showNextQuestion();
    }
  }
  
  // Event listener para o formulário de quiz
  quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswer();
  });
  
  // Mostra a primeira pergunta quando a página é carregada
  showNextQuestion();
  
