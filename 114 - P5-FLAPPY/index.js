let x, y, diameter
let gravity = 1
let friction = .97   
let velocity = 0
let updrift = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0
let bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8
const animRate = 40 


function preload(){
    bird1 = loadImage('assets/bird1.png')
    bird2 = loadImage('assets/bird2.png')
    bird3 = loadImage('assets/bird3.png')
    bird4 = loadImage('assets/bird4.png')
    bird5 = loadImage('assets/bird5.png')
    bird6 = loadImage('assets/bird6.png')
    bird7 = loadImage('assets/bird7.png')
    bird8 = loadImage('assets/bird8.png')
}


function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background('green')
    x = windowWidth/2
    diameter = 200 
    y = diameter/2
    rectW = 20
    rectH = 100
    rectX = windowWidth
    rectY = windowHeight - rectH
}

function showRect(){
    rect(rectX, rectY, rectW, rectH)
    rect(rectX, 0, rectW, rectH)
}

function updateRect(){
    rectX -= rectSpeed 
    if(rectX <= 0){
        rectX = windowWidth
        rectH = random(100, 300)
        rectY = windowHeight - rectH  
    }
}

function show(){
    ellipseMode(CENTER)
    ellipse(x, y, diameter)
    imageMode(CENTER)
    let anim = frameCount % animRate /10
    if (anim <= 0.5)image(bird1,x,y)
    if (anim >= 0.5 && anim < 1)image(bird2,x,y)
    if (anim >= 1 && anim < 1.5)image(bird3,x,y)
    if (anim >= 1.5 && anim < 2)image(bird4,x,y)
    if (anim >= 2 && anim < 2.5)image(bird5,x,y)
    if (anim >= 2.5 && anim < 3)image(bird6,x,y)
    if (anim >= 3 && anim < 3.5)image(bird7,x,y)
    if (anim >= 3.5) image(bird8,x,y)

    
}

function update(){
    velocity += gravity
    velocity *= friction
    y += velocity 

    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    }
    else if(y < 0 + diameter/2){
        y = diameter/2
        velocity = 0
        score += 4
    }
}

function collision(){
    // cirklens nederste punkt er x, y + diameter/2
    // cirklens øverste punkt er x, y - diameter/2
    // let d = dist(x,y , rectX, rectY)
    if (x>rectX && x < rectX + rectW){
        if(y<rectH || y > windowHeight - rectH){
            score -= 1
        }
    }
    
}

function draw(){
    background('green')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
}

function keyPressed(key){
    if(key.key == ' '){
        velocity -= updrift
    }
}
