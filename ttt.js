const displayController = (()=>{

})();

const gameBoard = (()=>{
    const cells = document.querySelectorAll('.cell')
    return{cells}
})();

const Player = (name, mark) =>{
    let moves = [];
    return {name,mark,moves}
};

const player1 = Player('Ginner','X')
const player2 = ('Lucito', 'O')