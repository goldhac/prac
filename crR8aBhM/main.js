 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBqPkwSyXCvh5UK67N8cgiSseiAQr-hogs",
    authDomain: "arravo-login.firebaseapp.com",
    projectId: "arravo-login",
    storageBucket: "arravo-login.appspot.com",
    messagingSenderId: "699022145991",
    appId: "1:699022145991:web:6e757438b4e381f93201e2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import{
  	getDatabase,ref,set,child,get}
  	from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"

  const db =getDatabase();
//----------------------------------------------Reference//


  const fname= document.getElementById('Fname')
   const lname= document.getElementById('Lname')
    const phoneN= document.getElementById('phoneN')
     const eemail= document.getElementById('email')
      const pass= document.getElementById('password')
      const submit= document.getElementById('butten')

//password validation



// validation
function Validation(){

let nameregex = /^[a-zA-Z]+$/;
let  emailt = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
let  numberregex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

if (!nameregex.test(fname.value)) {
  alert("the first name should only be alphabets")
  return false;
}
if (!nameregex.test(lname.value)) {
  alert("the last name should only be alphabets")
  return false;
}
if(!emailt.test(eemail.value)){
  alert("Please put a real email")
return false;
}
  if (!numberregex.test(phoneN.value)) {
  alert("input only numbers please")
  return false;
}
 
 return true;
}

//register user

function RegisterUser(){

  if (!Validation()) {

    return;
  }
  const dbRef = ref(db);


  get(child(dbref,"UserList/"+ email.value)).then((snapshot)=>{

if (snapshot.exists()){
  alert("Account Already Exists!")
}
else()
{ 

set(ref(db,"UserList/"+email.value),
   {

    firstname:fname.value,
    lastname:lname.value,
    phonenum:phoneN.value, 
    passwrd :pass.value,
    
  })
.then(()=>{
  alert("user added successfully")
})

.catch((error)=>{
  alert("error"+ error);
})





}



  })

}
//Assign events

submit.addEventListener('click', RegisterUser);