const rows = 7;
const columns = 7;
let playerPosition = { x: 0, y: 0 }; // Posição inicial do jogador
let icebergPosition = { x: columns - 1, y: rows - 1 }; // Posição do iceberg

function createGameBoard() {
  const gameSection = document.getElementById('game');

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      if (i === playerPosition.y && j === playerPosition.x) {
        cell.classList.add('player');
      } else if (i === icebergPosition.y && j === icebergPosition.x) {
        cell.classList.add('iceberg');
      }

      row.appendChild(cell);
    }

    gameSection.appendChild(row);
  }
}

function movePlayer(event) {
  let newPlayerPosition = { x: playerPosition.x, y: playerPosition.y };

  switch (event.key) {
    case 'ArrowUp':
      if (playerPosition.y > 0) {
        newPlayerPosition.y--;
      }
      break;
    case 'ArrowDown':
      if (playerPosition.y < rows - 1) {
        newPlayerPosition.y++;
      }
      break;
    case 'ArrowLeft':
      if (playerPosition.x > 0) {
        newPlayerPosition.x--;
      }
      break;
    case 'ArrowRight':
      if (playerPosition.x < columns - 1) {
        newPlayerPosition.x++;
      }
      break;
    default:
      return;
  }

  if (isMoveValid(newPlayerPosition)) {
    updatePlayerPosition(newPlayerPosition);
  }
}

function isMoveValid(position) {
  return !(position.x === icebergPosition.x && position.y === icebergPosition.y);
}

function updatePlayerPosition(newPosition) {
  const playerCell = document.querySelector('.player');
  playerCell.classList.remove('player');

  const newPlayerCell = document.querySelector(`.row:nth-child(${newPosition.y + 1}) .cell:nth-child(${newPosition.x + 1})`);
  newPlayerCell.classList.add('player');

  playerPosition = newPosition;

  if (playerPosition.x === icebergPosition.x && playerPosition.y === icebergPosition.y) {
    alert('Parabéns! Você levou o urso polar até o iceberg!');
    resetGame();
  }
}

function resetGame() {
  const gameSection = document.getElementById('game');
  gameSection.innerHTML = '';
  playerPosition = { x: 0, y: 0 };
  icebergPosition = { x: columns - 1, y: rows - 1 };
  createGameBoard();
}

document.addEventListener('DOMContentLoaded', () => {
  createGameBoard();
  document.addEventListener('keydown', movePlayer);
});
