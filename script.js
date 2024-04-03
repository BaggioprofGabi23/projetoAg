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
