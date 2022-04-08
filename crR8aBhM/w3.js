// javascript
   let username= document.getElementById("email");
    let  myInput = document.getElementById("password");
    let letter = document.getElementById("letter");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length= document.getElementById("length");
    let message_box= document.getElementById("message");

//Assignment of all variables
/*let email= document.forms['form']['email'];
let pass= document.forms['form']['password'];

let email_error=document.getElementById("email_error");
let pass_error= document.getElementById("pass_error");
let submit_button= document.getElementById("butten")

email.addEventListener('textInput',email_Verify);
pass.addEventListener('textInput',pass_Verify);


 //initial validation
function validated(){
	if(email.value.length < 9 ||pass.value.length < 6){
      email.style.border= "1px solid red";
      email_error.style.display= "block";
      email.focus();
    

      
      pass.style.border= "1px solid red";
      pass_error.style.display= "block";
      pass.focus();
      
      email.value= "";
      pass.value="";
      
      return false;
    } 
    
    
}
// emaill verify
function email_Verify(){
    if(email.value.length >=8){
        email.style.border="1px solid silver";
        email_error.style.display="none"; 
        return true;
    }
    
    
}
//password verify
function pass_Verify(){
    if(pass.value.length >=8){
        pass.style.border="1px solid silver";
        pass_error.style.display="none"; 
        return true;
    }
}
/*function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}*/
    
    
 
    
    
    //myInput.addEventListener('textInput',function(){ message_box.style.display = "block"; });
 
    
    // when the user clcks the password
 
  
  
    myInput.onfocus = function() {
                  message_box.style.display = "block";
        }
        
        // when user clicks outside that area
    myInput.onblur= function(){
         message_box.style.display = "none";
         
    }
    
    myInput.onkeyup= function(){
    let lowerCaseletters = /[a-z]/g;
    if(myInput.value.match(lowerCaseletters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
    
    let upperCaseletters = /[A-Z]/g;
    if(myInput.value.match(upperCaseletters)){
       capital.classList.remove("invalid");
    capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    
    
    
    let number_check=  /[0-9]/g;
    if(myInput.value.match(number_check)){
           number.classList.remove("invalid");
        number.classList.add("valid");
    }
    
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    
    
    if(myInput.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
        
    }
    
    else{
         length.classList.remove("valid");
        length.classList.add("invalid");
        
    }
    
    }
    
    

 
    