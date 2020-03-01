//players
const Player = (name, mark) =>{
  let moves = [];
  return {name,mark,moves}
}

const player1 = Player('Ginner','X')
const player2 = Player('Lucito','O')


const displayController = (()=>{

})();



const gameBoard = (()=>{
  let allMoves = [];  
  let player = player2;
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
    play(cell);
  }));

  const reset = () => {
    $cells.forEach(cell => cell.textContent = '');
    player1.moves.length = 0;
    player2.moves.length = 0;
    allMoves.length = 0;
  }
  
  let play = cell => {
    if(allMoves.includes(+cell.id))
      return;
    else {
      nextTurn().moves.push(+cell.id)
      cell.textContent = player.mark
      allMoves.push(+cell.id)
  };

  let nextTurn = () => {
    if(player === player1){
      player = player2
      return player2}
    else {player = player1
      return player1
    }
  }

  return {$cells, winningCombos, reset,
    player,allMoves,play,nextTurn, checkWin};

  }
})(); 






