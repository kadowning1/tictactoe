class Model {
    constructor(currentPlayer){
        this.currentPlayer = currentPlayer
    }
    init(){
        console.log("Model.init()")
        this.currentPlayer = 0
    }
}


let newModel = new Model('X')

console.log(newModel)