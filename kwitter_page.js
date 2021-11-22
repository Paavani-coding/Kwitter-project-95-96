var firebaseConfig = {
    apiKey: "AIzaSyAkTSGD7THOgE326uhFlbQyi_qbSPQViD8",
    authDomain: "kwitter-9d029.firebaseapp.com",
    databaseURL: "https://kwitter-9d029-default-rtdb.firebaseio.com",
    projectId: "kwitter-9d029",
    storageBucket: "kwitter-9d029.appspot.com",
    messagingSenderId: "84630460421",
    appId: "1:84630460421:web:5d81bf03a2598213cde46c",
    measurementId: "G-14N4QPBB5J"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function logout(){
    localStorage.removeItem("user_name");
    window.location="index.html";
}
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
document.getElementById("welcome").innerHTML= "Welcome to "+ room_name + " !";
document.getElementById("name").innerHTML= user_name+ " :";

function send(){
    msg= document.getElementById("msg").value;
    document.getElementById("msg").value= "";
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    
}