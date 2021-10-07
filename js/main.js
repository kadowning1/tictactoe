// todo: thursday
// get heading text to update/figure out player turn
// update win conditions/tie conditions and display
// makes tiles clickable once and not clickable if game is over
// get reset game button to work properly - convert to singleton

//---------Model----------//
//create Model
class Model {
    constructor(beenClicked, gameOver, turn, tileArray) {
        this.beenClicked = 0;
        this.gameOver = false;
        this.turn = 0;
        this.board = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];
        this.tileArray = [];
        this.c = null;
        this.wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    }
    setController(controller) {
        this.c = controller;
    }
    init() {
        console.log("Model.init()")
        this.beenClicked = 0;
        this.gameOver = false;
    }

    //let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winConditions() { //need to solve this
        for (let index = 0; index < this.wins.length; index++) {
            let winArray = this.wins[index];
            console.log(winArray)
            let winOne = winArray[0];
            let winTwo = winArray[1];
            console.log(winTwo)
            let winThree = winArray[2];
            if (this.c.addClick(e)[winOne] == 'X' && this.c.addClick(e)[winTwo] == 'X' && this.c.addClick(e)[winThree] == 'X') {
                this.gameOver = true
                playerTurn.innerText = 'X wins'
            }
            if (this.c.addClick(e)[winOne] == 'O' && this.c.addClick(e)[winTwo] == 'O' && this.c.addClick(e)[winThree] == 'O') {
                this.gameOver = true
                playerTurn.innerText = 'O wins'
            }
        }
    }
}


// determine winScenario
// determine tieScenario
// if there are greater than 8 moves == tie
// playerTurn.innerText = 'Tie Game, Reset Game'

//---------View----------//
class View {
    constructor() {
        this.m = null;
    }
    setModel(model) {
        this.m = model;
    }
    init() {
        const app = document.getElementById('app');
        console.log(app)

        let headingTwo = this.generateHTML({ type: 'h2', classes: "text-center", htmlText: 'Tic-Tac-Toe' });
        console.log(headingTwo);
        let headingFour = this.generateHTML({ type: 'h4', classes: 'text-center', id: "playerTurn", htmlText: 'Player X Turn' })

        app.appendChild(headingTwo);
        app.appendChild(headingFour);

        let container = this.generateHTML({ type: 'div', classes: 'container' })
        let rowBoard = this.generateHTML({ type: 'div', classes: 'row p-4' })

        for (let index = 0; index < 9; index++) {
            //console.log(this)
            let columnBoard = this.generateHTML({
                type: 'div',
                classes: 'col-4 border border-secondary p-5 text-center fs-1',
                onclick: this.m.c.addClick.bind(this.m.c)
            });
            rowBoard.appendChild(columnBoard);
            container.appendChild(rowBoard);
            app.appendChild(container);
        }
        let resetDiv = this.generateHTML({ type: 'div', classes: "text-center" })
        let resetButton = this.generateHTML({
            type: 'btn',
            classes: 'btn btn-outline-secondary text-center',
            htmlText: 'Reset Game',
            onclick: this.m.c.resetGame.bind(this.m.c)
        });
        resetDiv.appendChild(resetButton);
        app.appendChild(resetDiv);

    }
    generateHTML({ type, classes = '', id = '', htmlText = '', onclick = '' }) {
        let element = document.createElement(type);
        element.className = classes;
        element.id = id;
        element.innerText = htmlText;
        element.onclick = onclick;
        return element;

    }

}


//---------Controller----------//

class Controller {
    constructor(view, model) {
        this.v = view;
        this.m = model;
    }
    init() {
        this.v.generateHTML()
    }

    /* notClicked(e){
        if (e.target.id === true && this.m.gameOver === true)
    } */
    // if it has been clicked
    // if game hasnt been over

    addClick(e) {
        console.log(e.target.id)
        let player;
        if (this.m.turn % 2 == 0) {
            console.log('x clicked')
            e.target.innerText = "X";
            player = 'X';
        } else {
            e.target.innerText = "O";
            console.log('o clicked')
            player = 'O';

        }
        this.m.turn++;
        console.log(e);
        console.log('clicked on', e.target.id)
        //was clicked=true
        //this.m.winConditions();
        this.playerTurn(player);
    }

    playerTurn(player) { // need to solve this
        let playerTurn = document.getElementById('playerTurn');
        let firstPlayer = "X's Turn";
        let secondPlayer = "O's Turn";
        if (player == 'X') {
            playerTurn.innerText = secondPlayer;
        }
        else if (player == 'O') {
            playerTurn.innerText = firstPlayer;
        }
        /* else (this.m.beenClicked > 8) {
            playerTurn.innerText = "Game Over"
        } */
    }
    resetGame() {
        //init(); // need to fix this
        this.init;
        this.v.generateHTML(htmlText = '');
        console.log('reseting game')
    }
}
//resetButton.addEventListener('click', view.init()) & model.init();

//---------------App---------------//

class App {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.setModel(this.m);
        this.c = new Controller(this.v, this.m);
        this.m.setController(this.c);
    }

    init() {
        console.log("starting the app");
        this.m.init();
        this.v.init();
        this.c.init(); // figure out why this clears out

    }
}
function init() {
    // instantiate and init the Model, View, and Controller
    // 1 - page loads, run init on the app
    let a = new App();
    a.init();
    console.log(a);
}
