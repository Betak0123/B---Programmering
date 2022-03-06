

// students = ['Mie','Bjarke','Sofus','Marius','Bjørn','Viktor','Theis','Frederik']
students = ['']
let balls = []
let cumcontainer, cumcolor, img
let cockblock = false
let dick1, dick2

function setup(){ 
    createCanvas(windowWidth, 500)
    background('hotpink')
    frameRate(60)
    students.map( (item,index) =>{
        let c = color(random(255), random(255), random(255))
        let b = new Bold(random(10,40), index*45+15 , 200 , c,random(0.001,2),item,random(-50,50))
        // balls.push(b)
        students.push(index)
        img = loadImage('./assets/kiks.png')
        dick1 = loadImage('./assets/dick.png')
        dick2 = loadImage('./assets/dick.png')
    })
    
}

function draw(){
    background('hotpink')
    image(dick1, windowWidth/2-windowWidth/4-50, 170, 100, 150)
    image(dick2, windowWidth/2+windowWidth/4-50, 170, 100, 150)
    image(img, windowWidth/2-100, 350, 200, 200)
    
    if(cockblock==false){
        if(frameCount%6 == 0){
            let b = new Bold(random(10,40), windowWidth/2-windowWidth/4 , 200 , 250,random(0.001,2),'cum  ',random(-50,50))
            let c = new Bold(random(10,40), windowWidth/2+windowWidth/4 , 200 , 250,random(0.001,2),'cum  ',random(-50,50))

            balls.push(b,c)
        }
        
    }
    if(frameCount%2 == 0){
        
        balls.map( item =>{
            item.update()  
        })
    }
    balls.map( item =>{
        item.show()
    })

    select('#counter').html('Antal cum:' + balls.length)
    cumcontainer = map(balls.length, 0, 100, 10, windowWidth-20, true)
    greencum = map(balls.length, 0, 100, 255, 0, true)
    redcum = map(balls.length, 0, 100, 0, 255, true)
    fill(redcum,greencum,0)
    rect(10, 10 , cumcontainer, 40)
    // console.log(cumcontainer)
    
    if(balls.length>98){
    select('#cumOverload').html('!!!CUM OVERLOAD!!!')
    console
    cockblock = true
}
}
