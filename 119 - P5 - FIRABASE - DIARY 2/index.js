
// model
let model = {}

// view
let htmlWords

// html element
let saveButton

function setup(){
    // opret reference til html view
    // opret reference til andre html elementer 
    // Vi vil ikke have noget P5-Canvas
    noCanvas() 
    // controller
    db.collection('collection-name').doc('doc-id') 
        .onSnapshot( doc => {
            console.log('modtog data: ', doc.id)
            // doc.id henter dokumentets id. (doc-id)
            console.log('og data er: ', doc.data())
            // doc.data() giver det data der er inde i dokumentet. 
            // opdater model
            // opdater view 
            // Når der kommer input fra slutbrugeren (den der sidder og ser ens view), gemmer vi det i modellen. Ikke databasen!
        })
        
    // update database with model
    saveButton.mouseClicked(()=>{
        db.collection('my-diary').doc('diary').update(model)
        console.log('det virker bro du er den bedste!')
    })
}
