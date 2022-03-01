
// model
let model = {}

// view
let htmlWords

// html element
let saveButton

function setup(){
    // opret reference til html view
    htmlWords = select('#words')
    // opret reference til andre html elemtner 
    saveButton = select('#save-button')
    noCanvas() 
    // controller
    db.collection('my-diary').doc('diary') 
        .onSnapshot( doc => {
            console.log('modtog data: ', doc.id)
            console.log('og data er: ', doc.data())
            // opdater model
            model = doc.data()
            // opdater view 
            htmlWords.html(model.words)
            htmlWords.input(()=>{
                // console.log(htmlWords.html())
                model.words = htmlWords.html()
            })
        })
    // update database with model
    saveButton.mouseClicked(()=>{
        db.collection('my-diary').doc('diary').update(model)
        console.log('det virker bro du er den bedste!')
    })
}
