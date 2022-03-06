let moon
let helium1,helium2

function preload(){
    moonGif = loadImage('./assets/Moon.gif')
    helium3_1 = loadImage('./assets/1 helium-3.png')
    helium3_2 = loadImage('./assets/2 helium-3.png')
    translate(.50*windowWidth, .50*windowWidth)
    rotate(PI / 2.0*10)
}


function setup(){
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
    background('black')    
}

function draw(){
    background('black')
moon = image(moonGif, .70*windowWidth, .25*windowHeight, .50*windowHeight, .50*windowHeight)
helium1 = image(helium3_1, .50*windowWidth-70+ random(20, 30), .50*windowHeight, 50, 50)
helium2 = image(helium3_2, .50*windowWidth, .50*windowHeight, 50, 50)

}






 //mouseX mouseY frameCount map
// function mousePressed(){
//     select('#info').html('Hovsa! uwu')
// }

// function mouseReleased(){
//     select('#info').html('skriv her!')
// }

// function keyPressed(event){
//     select('#info').html('Du trykkede: ' + event.key)
// }