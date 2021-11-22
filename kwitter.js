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
function addUser(){
    user_name=document.getElementById("user_name").value;
    console.log(user_name);
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}