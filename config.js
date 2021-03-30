import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB2yHfrK_rFcoH-HRNyGeMXVsRPB4TsRA8",
    authDomain: "schoolattendence-8f97e.firebaseapp.com",
    projectId: "schoolattendence-8f97e",
    storageBucket: "schoolattendence-8f97e.appspot.com",
    messagingSenderId: "530596447196",
    appId: "1:530596447196:web:289eb45fc5eb93a0500519"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);

   export default app.database()

 

console.log(firebase.name);
console.log(firebase.database());
 
 

  