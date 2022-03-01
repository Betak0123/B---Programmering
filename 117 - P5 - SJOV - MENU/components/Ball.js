
class Ball{
    constructor(radius, xpos, ypos, col, obj){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        // this.name = obj
        this.obj = obj

        this.gravity = .5
        this.friction = 1 - this.radius / 1000
        this.velocity = 0
        this.updrift = 25
        this.button = createButton(this.name)
        console.log(this.button.height)
    }

    show(){
        // textSize(24)
        // text(this.name, this.xpos, this.ypos - (this.radius + 2))
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            let sDiv = select('.student')
            sDiv.addClass('show')
            console.log('hie')

            setTimeout(()=>sDiv.removeClass('show'), 5000)
        })
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
    }

    update(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity 

        if(this.ypos > window.innerHeight - this.radius){
            this.ypos = window.innerHeight - this.radius
            this.velocity = -this.velocity
        }
    }
    up(howMuch){
        howMuch = howMuch ? howMuch : this.updrift

        // Dette ville være det samme som:
        // if(howMuch==true){
        //     howMuch = howMuch
        // }else{
        //     howMuch = this.updrift
        // }        
        this.velocity -= howMuch
    }
}