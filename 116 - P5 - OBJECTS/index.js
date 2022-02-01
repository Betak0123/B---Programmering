

students = ['mie','bjarke','sofus','marius','bjørn','viktor','theis','frederik']
let balls = []


function setup(){ 
    createCanvas(windowWidth, 400)
    background('hotpink')
    students.map( (item,index) =>{
        let c = color(random(255), random(255), random(255))
        let b = new Bold(random(10,40), index*45+10 , 200 , c,random(0.3,2),item)
        balls.push(b)
    })

}

function draw(){
    background('hotpink')
    balls.map( item =>{
        item.show()
        item.update()
    })
    
}

