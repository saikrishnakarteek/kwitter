var firebaseConfig = {
      apiKey: "AIzaSyBd6pWS7tmfX1Ve1BND11qUEtiI-z-GROo",
      authDomain: "kwitter-4db72.firebaseapp.com",
      databaseURL: "https://kwitter-4db72-default-rtdb.firebaseio.com",
      projectId: "kwitter-4db72",
      storageBucket: "kwitter-4db72.appspot.com",
      messagingSenderId: "100912722415",
      appId: "1:100912722415:web:2061ddba4553fa6f42c61a",
      measurementId: "G-PQVSTYVQND"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
     
    document.getElementById("user_name").innerHTML="Welcome "+ user_name;

    function addRoom(){
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"addingroomname"
     });

     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
