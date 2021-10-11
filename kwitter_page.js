//YOUR FIREBASE LINKS
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
 room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_NAME,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
    function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;   
   console.log(firebase_message_id);
   console.log(message_data);
  Name=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
  name_Tag="<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
  msg_Tag="<h4 class='message_h4'>"+message+"</h4>";
  like_btn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='up_like(this.id)'>";
  span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like-"+like+"</span></button>";
  row=name_Tag+msg_Tag+like_btn+span_tag;
  document.getElementById("output").innerHTML+=row;
} }); }); } 
getData();
function up_like(message_id){
    console.log("clicked on like button -"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    update_like=Number(likes)+1;
    console.log(update_like);
    firebase.database().ref(room_name).child(message_id).update({
          like:update_like
    });
}
function leave(){
    localStorage.removeItem("userName");
    localStorage.removeItem("room_name");
    window.location="index.html";
}