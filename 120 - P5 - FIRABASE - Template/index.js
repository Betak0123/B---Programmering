
// model


// view
let htmlWords

let modelDays
let model

// html element
let saveButton

function setup(){
    // opret reference til html view
    htmlWords = select('#words')
    // opret reference til andre html elementer 
    saveButton = select('#save-button')
    // Vi vil ikke have noget P5-Canvas
    noCanvas() 
    // controller
    db.collection('diary-model').doc('diary-id') 
        .onSnapshot( doc => {
            console.log('modtog data: ', doc.id)
            // doc.id henter dokumentets id. (doc-id)
            console.log('og data er: ', doc.data().days     )
            // doc.data() giver det data der er inde i dokumentet. 
            // opdater model
            model = doc.data()
            // opdater view 
            htmlWords.html('')
            model.days.map( (day, index) => updateView(day, index))
            // Når der kommer input fra slutbrugeren (den der sidder og ser ens view), gemmer vi det i modellen. Ikke databasen!
        })
        
    function updateView (day, index){
        let newDay = createDiv()
            .addClass('day')
        let newDate = createElement('h3', day.date)
            .addClass('date')
        let newInput = createElement('textArea', day.words)
            .addClass('words')
            // update model with view
            .input( ()=> model.days[index].words = newInput.value() )
        newDay.child(newDate)
        newDay.child(newInput)
        htmlWords.child(newDay)
    }

    // update database with model when pressing save
    saveButton.mousePressed(()=>{
        console.log('det virker bro du er den bedste!')
        db.collection('diary-model').doc('diary-id').update(model)
    })
}
