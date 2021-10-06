class Model {
    constructor(){
        this.currentPlayer
    }
    init(){
        console.log("Model.init()")
        this.currentPlayer = 0
    }
    setState(){
        
    }
}

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
    this.c.init();
}
}