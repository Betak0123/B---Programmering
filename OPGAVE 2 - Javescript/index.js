
let main = document.querySelector('main')
let button = document.querySelector('#button')

// Af en eller anden grund virker det kun når jeg sætter baggrunden herude. Derudover er den transition der er mellem billederne lidt funky wonky, men det virker!


const skiftBaggrund = () => {
    
if(main.style.backgroundImage=='url("./Assets/bg4.jpg")'){
    main.style.backgroundImage = 'url("./Assets/bg3.jpg")'
}else if(main.style.backgroundImage == 'url("./Assets/bg3.jpg")'){
    main.style.backgroundImage = 'url("./Assets/bg2.jpg")'  
}else if(main.style.backgroundImage == 'url("./Assets/bg2.jpg")'){
    main.style.backgroundImage = 'url("./Assets/bg1.jpg")'  
}else{
    main.style.backgroundImage = 'url("./Assets/bg4.jpg")'
} 

}

button.addEventListener('click',skiftBaggrund)
