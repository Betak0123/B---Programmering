let lukas, viktor

// let students = ['mie', 'bjarke', 'bjørn', 'marius', 'lukas','frederik', 'sofus', 'theis', 'viktor', 'andreas']
let balls = []

function setup(){
    noCanvas()
    background('purple')
    for(student in students){
        let b = new Ball(50, random(window.innerWidth), random(window.innerWidth), 'red', student)
        balls.push(b)
    }

}

function draw(){
    balls.map( student => {
        student.show()
        student.update()
        if(frameCount%20==0){
            student.up(random(15))
        }
    })
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(student => student.up())
    }
}
