
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDA5Yoj2kohnaNBMwGX7IbHUPjuCbDtooo",
      authDomain: "classtest-77691.firebaseapp.com",
      projectId: "classtest-77691",
      storageBucket: "classtest-77691.appspot.com",
      messagingSenderId: "134547817487",
      appId: "1:134547817487:web:07f4236818195244a5cf7a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

function addRoom()
      {
            var room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update ({purpose:"adding room name"});

            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
            }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
 {
        console.log(name);
         localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
       }

       function logout()
        {
               localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                 window.location = "kwitter.html"; }