### Pre-Psuedocode Notes

Steps to play TTT
- The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as X and the second is O. Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled. X always goes first, and in the event that no one has three in a row, the stalemate is called a cat game.

User Story
- Board is created.  First user clicks a square (X).  Second user clicks a square(O).  Each user goes back and forth until a win condition is met.  User can restart game at anytime.  If no user wins, the game is tied. Board can reset after wins/losses and ties (all conditions).

Tile Constructor
Board Constructor

Board 3x3x3 [0,1,2,3,4,5,6,7,8]
Ways to win [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]

```
function generateBoard
l
    constructor
}
```

Tile information - What data does it hold?
- beenClicked

###### Requirements
- To complete the assignment, you must complete the following:

1. The HTML for the tic-tac-toe grid should be dynamically rendered in JS.
2. Your code should incorporate the use of at least one Class (For most design patterns, you typically use more than one class at a time. For example, in the Composite design pattern, you would need to create at least one Parent class and one Child class)
3. The entire project must be Object Oriented and should at least use one of the following design patterns (any additional design patterns are up to you, including State, Singleton, and more [see Additional Resources at the bottom of the page])
Model View Controller
Composite
4. The game should let the players know who's turn it is.
5. Game tiles should only be clickable once after they have been clicked, and if the game is over they should not be clickable at all.
6. The game should display who wins the game if someone wins, otherwise say that the game resulted in a tie.
7. There should be a Restart Game button that does not refresh the page (set state).
8. During Demo, you should be able to explain what pilars of OOP you used (see Additional Resources), as well as what specific design patterns you incorporated, how you did so, and where they appear in the code.


### Morning Session 10/4

- Used to run top to bottom with init function

1. Inheritence - ball class - create football, soccer ball with this class
2. Encapsulation - Car object with other methods and objects
3. Polymorphism - Similar to inheritence - collision
4. Abstraction - create state from class and only using certain pieces/functions

Rules to follow:

- Single responsiblity principle - any change can cause many ripples
- Open-closed principle - can only access within class, open for extension, closed for use
- Liskov substitution principle - reference another class to use as sub-object
- Interface segregation - depend on different interfaces for different needs (ex. different ships do different damage - different interfaces)
- Dependency inversion principle - two objects know of each other (ex. game with game piece, tree with leaves)

##### MVC Demo Notes

- Putting objects in their place

- Model (Updates) View (Sees) User (Uses) Controller (Manipulates) Model

- Controller is click handler.  It listens to event triggered by the view.
- Model updates counter/board & only includes pure application data.  Updates state.
- Uses (Button)
- View presents data to user.  In charge of rendering

- Buttons and counter text are a part of the view - DOM updates

 INIT
 Create instance of board
 Set up storage of clicks
 Create a controller to capture the button clicks
 click handler in controller to update state
 Create instance of view/tile
 Tell view/tile to show the UI

 Start
```
Will not work

class Model {
    constructor(){
        // state
        this.counter = 0;
    }
    init(){
        console.log("Model.init()")
        this.counter = 0;
    }
    updateView(){
        //change counter text
        //DOM updates
        var counterText = document.getElemenetById("counter_txt");
        counterText.innerHTML = this.counter.toString();
    }
    addClick(){
        var s = this.counter
        this.setState(s+1);
    }
    subtractClick(){
        var s = this.counter
        this.setState(s-1);
    }
    setState(s){
        this.counter = s;
    }
}

function init(){
    let m = new Model();
}
```

INIT

Create instance of MVC

Model, View, Controller

Model 
- set state and maintain number of clicks
- tell view to update

```
class Model {
    constructor()
    {
        this.counter;
    }
    init () {
        this.counter = 0;
    }
    setState(s){
        this.counter = s;
    }
}
```

Controller
- capture the clicks the user makes
- takes in user input and changes

View
- update UI based on what is in the Model (state) - DOM updates

START
- capture users activity

INIT

```
class Controller {
    constructor(){

    }
    init(){
        
    }
    handleClick(e) {

    }
}
```

```
class View {
    constructor(){
        win condition
        clicks
    }
    init(){
        set up event listener
    }
    updateUI(){
        update counter text
    }
}
```
```
function init (){
    let m = new Model();
    m.init();
    let v = new View();
    v.init();
}

function runUnitTest1(){
    let m = new Model();
    m.init();
    m.setState(5);
    }
```


- update view for the user
END


### Afternoon Session 10/4

- Generating HTML in Javascript

- div id='app'

- Procedural rendering
- Dynamic rendering - can change on the fly

- Entirely all View code

#### Psuedocode Process

Model
- Board
- Tile
- Array
View
- Update DOM
Controller
- 

### Psuedocode Session with Ian 10/4
- Psuedocode of a Class

- Use a couple of classes for this project

- State be an object with multiple parameters

- init function to restart game/state

- put win conditions in global

- use for loop to go through two indexs

###### State/Model Logic Board - Parent
- placement of x & o 
- could be actual coordinates variables
    - array
    - empty array
    - index array
    - update array on state update

    0 = nothing
    1 = "x"
    2 = "0"

- need atleast 5 clicks to win to run check win function

- number of turns = num = 0;
    - checking if we should win
    - whos turn it is? "x", "o" onclick
    - game ended/tie

```
num = 0;
if(num % 2 == 0){
    it x turn
}
else {
    its o turn
}
```

- last person who entered value into array wins
- restart game function
    - boolean
    - run init
    - on click event
###### View
- generateHTML() - could be global or passed down to children
- createGrid()
- createBoard()
    - container
    - 3 rows
    - 3 columns (col-4) ('div')
- createTile()
    - onTileClick()
- show win()
- show currentPlayer()
- showScore()

###### Controller
- init function
- check win function
- restart method
- onTileClick()
- updateClickArray
    - checkTieorWinner
    - showWinorTie
        - else 
    - showCurrentPlayer 
        
- updateCoordGrid 

#### Tile Class/ - Child
- M
    - constructor
    - store who clicked - empty string
    - if it has been clicked
        - true/false or whoclicked.length
    - does not need to know win condition 
- V
    - storing methods
    - create tile method
    - could inherit the generateHTML method
    - update view rendering X,O,""
- C
    - storing methods
    - onClick
        - decides who clicked
    - runs view method
    - runs method from parent


### Trying to psuedocode

1. Start

- Create const to use one div to render page
```
const app = document.getElementById('app');
```

###### Model

- Set state and maintain clicks
    - tileArray = []
    - numberClicks = 0
- Tell view to update

```
class Model {
    constructor()
    {
        this.currentPlayer = null
        this.whosTurn = 0
        this.gameOver = false
        this.tieGame = false
    }
}
```

- determine whos turn it is

```
currentPlayer = 0/null;
 playerTurn() {
        if (this.currentPlayer % 2 === 'O') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
```

- Determine a win scenario
    - greater than 5 clicks
    - Board 3x3x3 [0,1,2,3,4,5,6,7,8]
    - Ways to win [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    - win scenario = true

- Determine a tie scenario
    - greater than 5 clicks
    - clicks equal to 9
    - no win scenario reached = false
    - do not allow more clicks

###### View

- Show UI

- Create function to generateHTML - View
    - element
    - id
    - class
    - text?
```
function generateHTML({ type, class, text = '', href = '', parent = null})
    let element = document.getElement(type)
    element.className = classes
    element.innerText = text
    if (href.length > 0) {
        element.href = href
    }

    if (parent) {
        parent.appendChild(element)
    }
    return element
}
```

- Create function to createBoard and generate html from above function
    - Create gameboard with nested for loops through generateHTML function

```
for (i=0; i < 3, i++) {
    build row generateHTML
    for(j=0; j < 3, j++)
    build columns generateHTML
}
```

###### Controller
```
function init (){
    let m = new Model();
        - create array
        - clear board
    m.init();
    let v = new View();
        - create new rows
        - create new columns
    v.init();
}
```

```
function runUnitTest1(){
    let m = new Model();
    let v = new View();
    m.init();
    m.setState(5);
    }
```
- Create onclick events to add startGame - update state
    - Create startGame function - init function

- Create function to restart game and init board
    - create button in HTML
    - innerText = Reset Button
    - event Listener on click to reset and alert new game
        - new Model and View

2. End