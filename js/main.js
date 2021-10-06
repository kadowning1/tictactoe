//connect javascript to one div
const app = document.getElementById('app');
console.log(app)

//---------Model----------//
//create Model
class Model {
    constructor(currentPlayer){
        this.currentPlayer = currentPlayer
    }
    init(){
        console.log("Model.init()")
        this.currentPlayer = 0
    }
}


//---------View----------//
//createHTML
function generateHTML(type, classes, id, htmlText){
    let element = document.createElement(type);
    element.className = classes;
    element.id = id;
    element.innerText = htmlText;
    return element;
}

let headingTwo = generateHTML('h2', "text-center", "", 'Tic-Tac-Toe');
console.log(headingTwo);
let headingFour = generateHTML('h4', 'text-center', '', 'Players Turn')

app.appendChild(headingTwo);
app.appendChild(headingFour);

let container = generateHTML('div', 'container', '', '')
let rowBoard = generateHTML('div', 'row p-4', '', '')

for (let index = 0; index < 9; index++){ // need to add some time of clickability through here
let columnBoard = generateHTML('div', 'col-4 border border-secondary p-5 text-center fs-1', '', ''); 
rowBoard.appendChild(columnBoard);
container.appendChild(rowBoard);
app.appendChild(container);
}

let centerButton = generateHTML('div', 'text-center', '', '')
let resetButton = generateHTML('btn', 'btn btn-outline-secondary justify-content-center', '', 'Reset Game');


//{
    //};
    
    let card = document.createElement('div')
    card.className = 'card'
    
    app.appendChild(resetButton);
    
    //---------Controller----------//
    
    
    resetButton.addEventListener('click', resetGame);
    
    function resetGame() {
        let gameOver = createBoard()
        console.log(gameOver)
        //  alert("Game Over, Please Restart")
        gameOver.generateHTML();
}