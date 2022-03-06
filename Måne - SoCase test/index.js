let bubble1,bubble2,bubble3,bubble4,bubble5,bubble6
let helium1,helium2
let bubbles = []
let x,y,score
let headline

let KgHelium3_HelDag = 1.6264
let kgHelium3_1_fusion = 3.0160293*1.6600539*Math.pow(10,-27)
let Fusioner_HelDag = KgHelium3_HelDag/kgHelium3_1_fusion

let Energi_1_fusion = 5.969804192*Math.pow(10,-12)
let TilStrøm = 0.65




function preload(){
    pic1 = loadImage('./assets/1 helium-3.png')
    pic2 = loadImage('./assets/2 helium-3.png')
    bgPic = loadImage('./assets/MoonSurface.PNG')
}

function setup(){
    frameRate(20)
    createCanvas(windowWidth, windowHeight)
    // background('black')
    score=0   
    
    for (let i = 0; i < 20; i++){
        x = windowWidth/2 + random(-300,300)
        y = windowHeight/2 + random(-300,300)
        bubbles.push(new Bubble(x, y) )
    }
}

function draw(){
    image(bgPic,0, 0, windowWidth, windowHeight)
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].move()
        bubbles[i].show()
    }
    stroke('red')
    strokeWeight(5)
    noFill()
    rect(windowWidth*.85, windowHeight*.8, 100, -windowHeight*.6)

    select('#GramShow').html(
        'Gram helium-3 indsamlet: ' + Math.floor(1626/20*score))
        select('#JouleShow').html(    
        ' Mulig energi til at udvinde: ' + 
        round(Fusioner_HelDag*Energi_1_fusion*TilStrøm
        /Math.pow(10,15)/20*score,3) +' Petajoule'

    )
    længde = map(score, 0, 20, 0, windowHeight*.6, true)
    gray = map(score, 0, 20, 50, 155, true)
    opacity = map(score, 0, 20, 100, 255, true)
    fill(gray,opacity)
    strokeWeight(0)
    rect(windowWidth*.85, windowHeight*.8, 100, -længde)

}

function mousePressed(){
    console.log('score: ' + score)
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].clicked()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }



class Bubble{
    constructor(x, y){
        this.x=windowWidth/4 + random(-500,500)
        this.y=windowHeight/4 + random(-500,500)
        this.different = random(0,2)
        this.movedif = random(5,20)
        this.pictureSize = 70
        this.clicked = function(){
            // console.log('super')
            let d = dist(mouseX, mouseY, this.x+50, this.y+50)
            if (d < this.pictureSize/2){
                this.pictureSize = 1
                score = score+1
            }
        }
 
    }
    move(){
        this.x = this.x + random(-this.movedif,this.movedif)
        this.y = this.y + random(-this.movedif,this.movedif)
        // console.log(this.x)
        if(this.x + 100 > windowWidth*.8 || this.x < windowWidth*.3){
            this.x =    windowWidth/2
        }
        if(this.y + 100 >  windowHeight || this.y < 100){
            this.y =    windowHeight/2
        }
    }
    show(){
        if(this.different < 1){
            helium1 = image(pic1,this.x, this.y, this.pictureSize, this.pictureSize)
        }else{
            helium2 = image(pic2,this.x, this.y, this.pictureSize, this.pictureSize)
        }
        // ellipse(this.x+50, this.y+50, 10)
    }

}