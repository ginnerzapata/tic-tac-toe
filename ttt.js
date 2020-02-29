//players
const Player = (name, mark) =>{
  let moves = [];
  let play = cell => {
    if(moves.includes(cell.id))
      return;
    else {
      cell.textContent = mark
      moves.push(cell.id)
      console.log(moves)
      newTurn()
    };
  };

  let newTurn = () => {
    if(gameBoard.playing === player1)
      gameBoard.playing = player2
    else gameBoard.playing = player1
  }
  
  return {name,mark,moves,play, newTurn}
}

const player1 = Player('Ginner','X')
const player2 = ('Lucito', 'O')


const displayController = (()=>{

})();



const gameBoard = (()=>{
  let playing = player1;
  const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  const $resetbtn = document.querySelector('.reset')
  $resetbtn.onclick = () => reset()
  const $cells = document.querySelectorAll('.cell');
  $cells.forEach(cell => cell.addEventListener('click',() => {
    playing.play(cell);
  }));

  const reset = () => {
    $cells.forEach(cell => cell.textContent = '');
    playing.moves.length = 0;
  }
  

  return {cells: $cells, winningCombos, reset, playing};

  })();






