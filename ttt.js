//players
const Player = (name, mark) =>{
  let moves = [];
  let wins = 0;
  let newWin = () => ++wins
  let getWin = () => wins
  let resetCounter = () => wins = 0;
  return {name,mark,moves,newWin,getWin, resetCounter}
}

const player1 = Player('Ginner','X')
const player2 = Player('Lucito','O')


const displayController = (()=>{
  const $player1Points = document.querySelector('.one')
  const $player2Points = document.querySelector('.two')
  return {
    $player1Points,$player2Points
  }
})();



const gameBoard = (()=>{
  let allMoves = [];  
  let player = player1;
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
    player1.resetCounter()
    player2.resetCounter()
    updateMarker()
  }
  const next = () => {
    $cells.forEach(cell => cell.textContent = '');
    player1.moves.length = 0;
    player2.moves.length = 0;
    allMoves.length = 0;
  }
  let play = cell => {
    if(allMoves.includes(+cell.id))
      return;
    else {
      player.moves.push(+cell.id)
      cell.textContent = player.mark
      allMoves.push(+cell.id)
      if(checkWin()) {
        player.newWin()
        alert(`${player.name} won!`)
        updateMarker();
        next()
      }
      nextTurn();
    
    }
  };
  
  let nextTurn = () => {
    if(player === player1)
      player = player2
    else player = player1
  };

  let checkWin = () => {

    for(let i = 0; i < winningCombos.length;i++) {
      if(winningCombos[i].every(n => player.moves.includes(n)))
        return true
    }
    // for(let combo of winningCombos) {
    //   if (combo.every(n => player.moves.includes(n)))
    //     return true;
    //   else return false
    // }

  }

  let updateMarker = () => {
    displayController.$player1Points.textContent = `Player1: ${player1.getWin()}`;
    displayController.$player2Points.textContent = `Player2: ${player2.getWin()}`;
  }
  

  return {$cells, winningCombos, reset,
    player,allMoves,play};
  
})(); 






