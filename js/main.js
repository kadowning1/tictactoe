// todo: friday

//work on display
//text at top is not flipping
//beenClicked is not reseting after game is complete or reset button is clicks
//game can be won at 9 clicks and not a tie



//---------Model----------//
//create Model
class Model {
    constructor(beenClicked, gameOver, tileArray) {
        this.beenClicked = 0;
        this.gameOver = false; // possible switch to true so switched to false after first click
        this.tileArray = [];
        this.firstPlayer = 'X';
        this.secondPlayer = 'O';
        this.c = null;
        this.wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    }
    setController(controller) {
        this.c = controller;
    }
    init() {
        console.log("Model.init()")
        this.beenClicked = 0;
        this.gameOver = false;
    }

    // get X & O into array when clicked

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
            this.m.tileArray.push(columnBoard)
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

        let gameFinished = this.generateHTML({
            type: 'h1',
            classes: 'text-center',
            id: 'hopefullyDone',
            htmlText: '',
        })
        app.appendChild(gameFinished);
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

//console.log(app.childNodes.length)

//---------Controller----------//

class Controller {
    constructor(view, model) {
        this.v = view;
        this.m = model;

    }
    init() {
        this.v.generateHTML()
        //console.log(app.childNodes.length)
    }

    checkWin() { //need to solve this
        for (let index = 0; index < this.m.wins.length; index++) {
            let currentWinCondition = this.m.wins[index];
            // console.log(currentWinCondition)
            let winOne = currentWinCondition[0];
            let winTwo = currentWinCondition[1];
            let winThree = currentWinCondition[2];
            // console.log(this.m.tileArray)

            // console.log(this.m.tileArray[winOne].textContent)

            let gameFinished = document.getElementById('hopefullyDone');

            if (this.m.tileArray[winOne].textContent == 'X'
                && this.m.tileArray[winTwo].textContent == 'X'
                && this.m.tileArray[winThree].textContent == 'X') {
                this.gameOver = true
                gameFinished.innerText = 'X wins'
                console.log('x won')
            }
            if (this.m.tileArray[winOne].textContent == 'O'
                && this.m.tileArray[winTwo].textContent == 'O'
                && this.m.tileArray[winThree].textContent == 'O') {
                this.gameOver = true
                gameFinished.innerText = 'O wins'
                console.log('o won')
            }

            if (this.m.beenClicked == 9 && this.m.gameOver == false) {
                this.m.gameOver = true
            gameFinished.innerText = 'TIE'
            }
        }

    }


    // if it has been clicked
    // if game hasnt been over

    addClick(e) {
        // console.log(this.m.beenClicked)
        let player;
        if (e.target.innerText == "") {
            if (!this.m.gameOver) {
                //if tiled has been clicked or not
                if (this.m.beenClicked % 2 == 0) {
                    // console.log('x clicked')
                    e.target.innerText = "X";
                    player = this.m.firstPlayer;
                } else {
                    e.target.innerText = "O";
                    //console.log('o clicked')
                    player = this.m.secondPlayer;
                }

                this.m.beenClicked++;
                // console.log(e);
                // console.log('clicked on', e.target.id)
                //was clicked=true
                if (this.m.beenClicked > 4) {
                    this.checkWin();
                }
                this.playerTurn(player);

            }
        }
    }

    playerTurn(player) { // need to solve this
        let playerTurn = document.getElementById('playerTurn');
        let firstPlayer = "X's Turn";
        let secondPlayer = "O's Turn";
        if (player == this.m.firstPlayer && this.m.beenClicked % 2 == 0) {
            playerTurn.innerText = secondPlayer;
        }
        if (this.m.beenClicked === 9) {
            playerTurn.innerText = "Game Over, Reset Game";
        }
        else {
            playerTurn.innerText = firstPlayer;
        }

    }
    resetGame() {
        let app = document.getElementById('app');
        app.innerText = "";
        //init(); // need to fix this
        this.v.init();
        //this.playerTurn();
        // console.log('reseting game')
    }
}


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
        // console.log("starting the app");
        this.m.init();
        this.v.init();
        this.c.init(); // figure out why this clears out
        this.m.beenClicked = 0;// this needs checked

    }
}
function init() {
    // instantiate and init the Model, View, and Controller
    // 1 - page loads, run init on the app
    let a = new App();
    a.init();
    //console.log(a);
}
