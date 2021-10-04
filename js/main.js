function generateHTML(){
    let element = document.createElement(type)
    element.className = 'card-text'
    element.innerText = Text
    return element
}

const app = document.getElementById('app');

let paragraph = document.createElement('p')

paragraph.innerText = "Tacos"
paragraph.className = 'card-text'

let card = document.createElement('div')
card.className = 'card'
app.appendChild(paragraph);

//innerHTML - unsafe
//innerText - safe, turns into actual text