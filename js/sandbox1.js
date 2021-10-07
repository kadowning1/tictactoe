class Model {
    constructor(currentPlayer, author){
        this.currentPlayer = currentPlayer;
        this.author = author
   
    
}
}

const book1 = new Model("George", "Jim Joe");
console.log(book1)
class View {

}

class Controller {

}

class App {
    constructor(){
        this.m = new Model();
        this.v = new View();
    }

init (){
    this.App.constructor();
}
}