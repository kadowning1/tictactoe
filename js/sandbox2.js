class Model {
    constructor(numberClicks){
        this.numberClicks = this.numberClicks
    }
    init(){
        console.log("Model.init()")
        this.numberClicks = 0
    }
}


let newModel = new Model('X')

console.log(newModel)