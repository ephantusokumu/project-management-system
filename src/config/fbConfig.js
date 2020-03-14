import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-X6ntX6Epl5VopwS1VUTkEPgtT_X15CY",
    authDomain: "projectms-45792.firebaseapp.com",
    databaseURL: "https://projectms-45792.firebaseio.com",
    projectId: "projectms-45792",
    storageBucket: "projectms-45792.appspot.com",
    messagingSenderId: "1039847850243",
    appId: "1:1039847850243:web:03f1e911f2877b73716936",
    measurementId: "G-LFV3V57FYT"
  };
  //initialize
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase