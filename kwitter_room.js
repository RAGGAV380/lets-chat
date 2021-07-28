
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAWBDgXf_Qn9VvjPjOnxnhr4b_tmIPX3SA",
    authDomain: "scocal-22927.firebaseapp.com",
    databaseURL: "https://scocal-22927-default-rtdb.firebaseio.com",
    projectId: "scocal-22927",
    storageBucket: "scocal-22927.appspot.com",
    messagingSenderId: "281350414042",
    appId: "1:281350414042:web:eb9bbb770c638ba17a4fe3",
    measurementId: "G-F8X00WZ0VT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
