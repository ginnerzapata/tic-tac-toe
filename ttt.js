//players
const Player = (name, mark) =>{
  let moves = [];
  let play = cell => {
    if(gameBoard.allMoves.includes(cell.id))
      return;
    else {
      cell.textContent = mark
      moves.push(cell.id)
      gameBoard.allMoves.push(cell.id)
      console.log(moves)
      newTurn()
    };
  };

  let newTurn = () => {
    if(gameBoard.playing === player1)
      gameBoard.playing = player2
    else gameBoard.playing = player1
    console.log(gameBoard.playing )
  }
  
  return {name,mark,moves,play, newTurn}
}

const player1 = Player('Ginner','X')
const player2 = Player('Lucito','O')


const displayController = (()=>{

})();



const gameBoard = (()=>{
  let allMoves = [];
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
    player1.moves.length = 0;
    player2.moves.length = 0;
    allMoves.length = 0;
  }
  

  return {cells: $cells, winningCombos, reset, playing,allMoves};

  })();






