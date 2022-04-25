const firebaseConfig = {
    apiKey: "AIzaSyDHkYgXwSo32qoVy5dfFdf1OGuZ-Vc1acU",
    authDomain: "local-storage-ca576.firebaseapp.com",
    databaseURL: "https://local-storage-ca576-default-rtdb.firebaseio.com",
    projectId: "local-storage-ca576",
    storageBucket: "local-storage-ca576.appspot.com",
    messagingSenderId: "200077301398",
    appId: "1:200077301398:web:745eedc9877283a70354b7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding_room_name"
    });

    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}