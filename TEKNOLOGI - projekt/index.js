let side1 = document.querySelector('#side1')
let v = 1

side1.style.backgroundImage = 'url("./assets/stemning6.jpg")'
const skiftBG = () =>{
    if(v == 1){
        side1.style.backgroundImage = 'url("./assets/stemning2.jpg")'
        v = 2
    }
    else if(v == 2){
        side1.style.backgroundImage = 'url("./assets/stemning3.jpg")'
        v = 3
    }
    else if(v == 3){
        side1.style.backgroundImage = 'url("./assets/stemning4.jpg")'
        v = 4
    }
    else if(v == 4){
        side1.style.backgroundImage = 'url("./assets/stemning5.jpg")'
        v = 5
    }
    else{
        side1.style.backgroundImage = 'url("./assets/stemning6.jpg")'
        v = 1
    }
    
}

setInterval(skiftBG,3000)