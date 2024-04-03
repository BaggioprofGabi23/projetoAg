const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

const chart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['Reciclagem', 'Desmatamento', 'Poluição'],
    datasets: [{
      label: 'Impactos Ambientais',
      data: [25, 50, 25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    legend: {
      position: 'bottom'
    }
  }
});

const chart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Ártico', 'Antártica', 'Outros'],
    datasets: [{
      label: 'Derretimento de Iceberg',
      data: [20, 30, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
const questions = [
    { question: 'Qual é a principal causa do aquecimento global?', answer: 'greenhouse' },
    { question: 'Qual das seguintes atividades contribui mais para a poluição do ar: transporte de veículos a combustão, queima de resíduos sólidos ou desmatamento?', answer: 'transport' },
    { question: 'Qual é o principal objetivo do Acordo de Paris?', answer: 'paris' },
    { question: 'Qual é a importância das florestas na regulação do clima global?', answer: 'forests' },
    { question: 'Quais são os principais gases do efeito estufa?', answer: 'gases' },
    { question: 'Qual é o impacto do aumento do nível do mar nas comunidades costeiras?', answer: 'sea_level' },
    { question: 'Como a acidificação dos oceanos afeta os ecossistemas marinhos?', answer: 'acidification' },
    { question: 'Quais são os efeitos do desmatamento na biodiversidade?', answer: 'biodiversity' },
    { question: 'Quais são as fontes de energia consideradas renováveis?', answer: 'renewable_energy' },
    { question: 'Como as mudanças climáticas estão afetando os padrões de precipitação em diferentes regiões do mundo?', answer: 'precipitation' }
  ];
  
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
  
  // Mostra a primeira pergunta quando a página é carregada
  showNextQuestion();
  
  