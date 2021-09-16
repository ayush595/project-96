var firebaseConfig = {
    apiKey: "AIzaSyBAVEQsk3XrjRX9cAwT-3QojBmwe0sAc2I",
    authDomain: "my-project---94.firebaseapp.com",
    databaseURL: "https://my-project---94-default-rtdb.firebaseio.com",
    projectId: "my-project---94",
    storageBucket: "my-project---94.appspot.com",
    messagingSenderId: "168294242439",
    appId: "1:168294242439:web:239b0402aa5e63751ac022",
    measurementId: "G-66XBRWEB4S"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

getname= localStorage.getItem("username") ;
document.getElementById("welcome-us").innerHTML= "welcome " + getname + "!";
function addroom() {
    roomname= document.getElementById("roomnamein").value ;
    firebase.database().ref("/").child(roomname).update({
     purpose: "adding room name"

    });
    localStorage.setItem("roomname" , roomname);
    window.location= "index.html";
 
}