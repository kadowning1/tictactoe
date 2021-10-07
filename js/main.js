// todo: thursday
// get heading text to update/figure out player turn
// update win conditions/tie conditions and display
// makes tiles clickable once
// get reset game button to work properly

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
    playerTurn() { // need to solve this
        let playerTurn = document.getElementById('playerTurn');
        let firstPlayer = "X's Turn";
        let secondPlayer = "O's Turn";
        if (this.beenClicked == 0) {
            playerTurn = firstPlayer
        } else if (this.beenClicked > 8) {
            playerTurn.innerText = "Game-Over, Reset Game"
        } else if (this.beenClicked % 2 != 0) {
            playerTurn = firstPlayer
        } else if (this.beenClicked % 2 == 0) {
            playerTurn = secondPlayer
        }
    }

    //let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winConditions() { //need to solve this
        for (let index = 0; index < this.wins.length; index++) {
            let winArray = this.wins[index];
            console.log(winArray)
            let winOne = winArray[0];
            console.log(winOne)
            let winTwo = winArray[1];
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

        for (let index = 0; index < 9; index++) { // need to add some time of clickability through here
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
        let resetDiv = this.generateHTML({type: 'div', classes: "text-center"})
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
        this.generateHTML()
    }

    addClick(e) {
        console.log(e.target.id)
        if (this.m.turn % 2 == 0) {
            console.log('x clicked')
            e.target.innerText = "X";
        } else {
            e.target.innerText = "O";
            console.log('o clicked')
            //this.m.tileArray[index].element.innerText = "O";
        }
        this.m.turn++;
        console.log(e);
        console.log('clicked on', e.target.id)
        //was clicked=true
        this.m.winConditions();
    }

    resetGame() {
        console.log('reseting game')
    }
}
//resetButton.addEventListener('click', view.init()) & model.init();

//need to add a check win function
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
        // this.c.init();
        this.v.init();
    }
}
function init() {
    // instantiate and init the Model, View, and Controller
    // 1 - page loads, run init on the app
    let a = new App();
    a.init();
    console.log(a);
}
