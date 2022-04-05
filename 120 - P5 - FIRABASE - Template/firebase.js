const firebaseConfig = {
    apiKey: "AIzaSyDiLe30Mn0LrawntaVf-SldzsGJWFaKtzQ",
    authDomain: "p5-diary-bjarke.firebaseapp.com",
    projectId: "p5-diary-bjarke",
    storageBucket: "p5-diary-bjarke.appspot.com",
    messagingSenderId: "268706578234",
    appId: "1:268706578234:web:c59dd680b07683134d1a03"
  };
  
// start firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

