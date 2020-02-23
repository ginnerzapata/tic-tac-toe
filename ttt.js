//players
const Player = (name, mark) =>{
  let moves = [];
  let play = cell => moves.push(cell.id);
  
  return {name,mark,moves,play}
}

const player1 = Player('Ginner','X')
const player2 = ('Lucito', 'O')


const displayController = (()=>{

})();



const gameBoard = (()=>{
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
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.addEventListener('click',() => {
    player1.play(cell)
  }));
  

  return {cells, winningCombos};

  })();






