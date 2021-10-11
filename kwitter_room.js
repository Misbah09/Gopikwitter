const firebaseConfig = {
  apiKey: "AIzaSyBHZb--5oE6Jdh8pxpuRXsCpnzXp3lA8IA",
  authDomain: "kwit-3761b.firebaseapp.com",
  databaseURL: "https://kwit-3761b-default-rtdb.firebaseio.com",
  projectId: "kwit-3761b",
  storageBucket: "kwit-3761b.appspot.com",
  messagingSenderId: "470604336878",
  appId: "1:470604336878:web:3a43b959c74c71f62cedff"
};
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_NAME=localStorage.getItem("userName");
document.getElementById("wel").innerHTML=" Welcome "+user_NAME+" !";
function addRoom(){
room_name=document.getElementById("room").value;
firebase.database().ref("/").child(room_name).update({
    purpose:"Add"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
      console.log("room name-"+Room_names);
    
      row="<div class='room_name' id="+Room_names+" onclick='navigate(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });
  });
}
getData();
function leave(){
    localStorage.removeItem("userName");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function navigate(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}