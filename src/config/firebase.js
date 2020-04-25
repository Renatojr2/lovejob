  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmI71aeRRCfpGJmafyLmtTnCcr7SzW0_k",
    authDomain: "lovejob-64c3b.firebaseapp.com",
    databaseURL: "https://lovejob-64c3b.firebaseio.com",
    projectId: "lovejob-64c3b",
    storageBucket: "lovejob-64c3b.appspot.com",
    messagingSenderId: "539897891270",
    appId: "1:539897891270:web:a7cd0432dffc3559908ac7",
    measurementId: "G-463HBNVBWT"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
  firebase.analytics();