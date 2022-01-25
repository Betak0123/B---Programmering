let bubble1,bubble2,bubble3,bubble4,bubble5,bubble6

function setup(){
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
    background('black')   
    bubble1 = new Bubble()
    bubble2 = new Bubble()
    bubble3 = new Bubble()
    bubble4 = new Bubble()
    bubble5 = new Bubble()
    bubble6 = new Bubble()
}

function draw(){
    background('black')
    bubble1.move()
    bubble1.show()

    bubble2.move()
    bubble2.show()
    
    bubble3.move()
    bubble3.show()
    
    bubble4.move()
    bubble4.show()
    
    bubble5.move()
    bubble5.show()
    
    bubble6.move()
    bubble6.show()
}

class Bubble{
    constructor(){
        this.x=windowWidth/2
        this.y=windowHeight/2
    }
    move(){
        this.x = this.x + random((mouseX-windowWidth/2)/25,(mouseY-windowHeight/2)/25)
        this.y = this.y + random((mouseX-windowWidth/2)/25,(mouseY-windowHeight/2)/25)
        console.log(this.x)
        if(this.x >  windowWidth || this.x < 0){
            this.x =    windowWidth/2
        }
        if(this.y >  windowHeight || this.y < 0){
            this.y =    windowHeight/2
        }
    }
    show(){
        stroke(random(0,255),random(0,255),random(0,255))
        strokeWeight(100)
        
        ellipse(this.x, this.y, random(10,20))
    }
}