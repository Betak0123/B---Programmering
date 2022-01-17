let x, y, diameter
let F_res
let F_t = 9.82
let F_luft = 0
let velocity = 0
let dt =    0.01
let kLuft = 1
let nyFrame = 0
let R1, R2, R3
let colorcounter = 0
let partytime = false
let img

function setup(){
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
    background('black') 
    x = windowWidth/2
    y = 40
    diameter = 60
    y = diameter/2
    show()
    fill('hotpink')
    stroke('white')
    R1 = random(255)
    R2 = random(255)
    R3 = random(255)
    img = loadImage('./assets/Red-Ball.png')
}


function show (){
    // ellipse(x, y, diameter)
}
function update (){
    F_luft = -0.04 * kLuft * velocity  

    F_res = F_t + F_luft
    velocity = velocity + F_res
    velocity = velocity 
    y += velocity
        if(y>windowHeight-diameter/2-20){
            y=windowHeight-diameter/2-20
            velocity = -velocity
            colorcounter += 1
            if(colorcounter <20 && partytime==true){
                R1 = random(255)
                R2 = random(255)
                R3 = random(255)
            }
        }
    select('#info1').html('velocity:'+ round(velocity,1))
    select('#info2').html(' F_res:' + round(F_res,1))
    select('#info3').html(' F_luft: ' + round(F_luft, 2))
}

function restart(){
    y = 40
    F_t = 9.82
    F_luft = 0
    velocity = 0
    colorcounter = 0
}

function restartLuft(){
    kLuft = document.querySelector('#inputLuft').value
    select('#infoTop').html('Luftmodstand sat til: ' +document.querySelector('#inputLuft').value )
    if(document.querySelector('#inputLuft').value == 0){
        select('#infoTop').html('Luftmodstand sat til: 0')
        setTimeout(() => {
            document.querySelector('#infoTop').classList.add('gone')
            
            setTimeout(() => {
                document.querySelector('#infoTop').classList.remove('gone')
                select('#infoTop').html('')

        
            }, 1000);
        }, 1500);
    }
}
function restartFrames(){
    frameRate(document.querySelector('#inputFrames').value / 100 * 60)
    select('#infoTop').html('Framerate sat til: ' + document.querySelector('#inputFrames').value / 100 * 60)
    setTimeout(() => {
        document.querySelector('#infoTop').classList.add('gone')
        // console.log('Det virkede')
        setTimeout(() => {
            document.querySelector('#infoTop').classList.remove('gone')
            select('#infoTop').html('')
            // console.log('Det virkede super!')
    
        }, 1000);
    }, 1500);
}

function party(){
    if(partytime == true){
        partytime = false
        select('#infoTop').html('Så er festen slut :(')
        setTimeout(() => {
            document.querySelector('#infoTop').classList.add('gone')
            
            setTimeout(() => {
                document.querySelector('#infoTop').classList.remove('gone')
                select('#infoTop').html('')

        
            }, 1000);
        }, 1500);
    }else{
        partytime = true
        select('#infoTop').html('Så er det party time! (Håber ikke du har epilepsi)')
        setTimeout(() => {
            document.querySelector('#infoTop').classList.add('gone')
            
            setTimeout(() => {
                document.querySelector('#infoTop').classList.remove('gone')
                select('#infoTop').html('')

        
            }, 1000);
        }, 1500);
    }
    // console.log(partytime)
}

function draw(){
    if(partytime==true){
        background(R1,R2,R3)
    }else{
        background('black')
    }

    show()
    update()
    rect(.04*windowWidth, .9 * windowHeight, 17, -1 * Math.abs(-20*F_res))
    rect(.71*windowWidth, .9 * windowHeight, 17, -1 * Math.abs(20*F_luft) )
    rect(.93*windowWidth, .9 * windowHeight, 17, -1 * Math.abs(3*velocity))

    image(img, x-diameter/2, y-diameter/2, diameter*1.5, diameter*1.5)

}

