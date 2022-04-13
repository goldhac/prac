// javascript
let email= document.forms['form']['email'];
let pass= document.forms['form']['password'];

let email_error=document.getElementById("email_error");
let pass_error= document.getElementById("pass_error");
let submit_button= document.getElementById("butten")

email.addEventListener('textInput',email_Verify);
pass.addEventListener('textInput',pass_Verify);


 
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

function email_Verify(){
    if(email.value.length >=8){
        email.style.border="1px solid silver";
        email_error.style.display="none"; 
        return true;
    }
    
    
}

function pass_Verify(){
    if(pass.value.length >=8){
        pass.style.border="1px solid silver";
        pass_error.style.display="none"; 
        return true;
    }
}
email_error.onblur()= function(){
    email_error.style.display="none";
}
/*function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}*/