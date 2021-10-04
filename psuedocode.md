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

