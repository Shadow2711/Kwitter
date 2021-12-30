
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAL8UAhUHRMs6xata7Dz2fhZO50fcaAPgU",
      authDomain: "kwitter-3b212.firebaseapp.com",
      databaseURL: "https://kwitter-3b212-default-rtdb.firebaseio.com",
      projectId: "kwitter-3b212",
      storageBucket: "kwitter-3b212.appspot.com",
      messagingSenderId: "423951155069",
      appId: "1:423951155069:web:4e19a3c66339d1a3579614"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          localStorage.setItem("room_name" , room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_names = childKey;
      console.log("Room_names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}