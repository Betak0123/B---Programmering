function setup(){
    console.log('Hello world!')
    frameRate(3600)
    createCanvas(windowWidth, windowHeight)
    background('black')    
    select('#info').html('skriv her!')
}

function draw(){
    //mouseX mouseY frameCount map
}

function mousePressed(){
    select('#info').html('Hovsa! uwu')
}

function mouseReleased(){
    select('#info').html('skriv her!')
}

function keyPressed(event){
    select('#info').html('Du trykkede: ' + event.key)
}