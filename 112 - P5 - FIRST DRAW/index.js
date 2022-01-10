console.log('script loaded')

function setup(){
    console.log('Hello world!')
    frameRate(120)
    createCanvas(windowWidth, windowHeight)
    background('black')
    d = 0
}

function draw(){
    //mouseX mouseY frameCount mao
    select('#info').html('Press mouse button, space or scrole the mousewheel! Framecount:' + frameCount)
    
    let xColor = map(mouseX, 0, windowWidth, 0, 255)
    
    a = frameCount % 100
    b = frameCount % 150
    c = frameCount % 200
    
    fill(a+100, c-50, b)
    stroke('white')
    // golden ratio: 1.61803398875
    
    translate(windowWidth/2, windowHeight/2);
    rotate(frameCount)
    if (mouseIsPressed) {
        console.log('hello world')
        ellipse(frameCount, frameCount, 17 + d)
        select('#info').html('Nice! (Said circly)')
    }else if(keyIsPressed){
        triangle(frameCount, frameCount,frameCount+20+d, frameCount,frameCount, frameCount+20+d);
        select('#info').html('Nice! (Said squarely)')
    }
    else{
        square(frameCount+1, frameCount+1, 17+d)
    }
    
}   

const restart = () => {
    frameCount = 0
    background('black')
}


function mouseWheel(event){
    if(event.delta < 0){
        d = d+5;
    }else if(event.delta > 0){
        d = d-5
    }
  console.log(event.delta)

}
