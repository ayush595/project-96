var firebaseConfig = {
    apiKey: "AIzaSyBAVEQsk3XrjRX9cAwT-3QojBmwe0sAc2I",
    authDomain: "my-project---94.firebaseapp.com",
    databaseURL: "https://my-project---94-default-rtdb.firebaseio.com",
    projectId: "my-project---94",
    storageBucket: "my-project---94.appspot.com",
    messagingSenderId: "168294242439",
    appId: "1:168294242439:web:f831bbcf724441e01ac022",
    measurementId: "G-Y9PPLR4EG0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username= localStorage.getItem("username");
 roomname= localStorage.getItem("roomname");
 function send() {
    msg= document.getElementById("msg").value ;
    firebase.database().ref(roomname).push({
 likes: 0,
 message: msg , 
 name: username

    });
    document.getElementById("msg").value= "";
 }
 function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location= "index.html";
 }