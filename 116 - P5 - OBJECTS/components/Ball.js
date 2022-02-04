console.log('suck a dick')

class Bold{
    constructor(radius, xpos, ypos, col, kLuft, name, xvelocity){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        this.xvelocity = xvelocity

        this.reset = ypos

        this.name = name

        this.F_res = 0
        this.F_t = 9.82
        this.F_luft = 0
        this.velocity = random(-50,0)
        this.dt =    0.01
        this.kLuft = kLuft
    }
    show(){
        textSize(20)
        text(this.name,this.xpos-this.radius/2, this.ypos - this.radius)
        fill(this.col)
        stroke('white')
        ellipse(this.xpos, this.ypos, this.radius)

        // this.button.position(this.xpos,this.ypos)
        // this.button.mousePressed(()=>{
        //     if(confirm('vil du hoppe med' + this.name))
        // })
        
    }
    update(){
        this.F_luft = -0.04 * this.kLuft * this.velocity  

        this.F_res = this.F_t + this.F_luft
        this.velocity = this.velocity + this.F_res
        this.xvelocity = this.xvelocity*0.99     
        this.ypos += this.velocity
        this.xpos += this.xvelocity
        // console.log(this.xpos)
            if(this.ypos>height-this.radius/2){
                this.ypos=height-this.radius/2
                this.velocity = this.velocity*-1
            }
            if(this.xpos>width-this.radius/2){
                // console.log('over')
                this.xvelocity = this.xvelocity*-1
            }
            if(this.xpos<this.radius/2){
                // console.log('under')
                this.xvelocity = this.xvelocity*-1
            }
            // console.log(this.F_res)

            if(mouseIsPressed == true){
                this.ypos = this.reset
                this.F_t = 9.82
                this.F_luft = 0
                this.velocity = 0
                this.radius = random(10,40)
                this.col = color(random(255), random(255), random(255))
                this.kLuft = random(0.001,2)
                this.xvelocity = random(-30,30)

            // console.log('duck')
            }
    }
}