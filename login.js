function addUser(){
    var userName=document.getElementById("name").value;
    localStorage.setItem("userName",userName);
    window.location="kwitter_room.html";
    }