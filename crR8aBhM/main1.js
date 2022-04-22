document.getElementById('signupform').addEventListener('submit',submitForm);

function submitForm(e){
e.preventDefault(); 


//get values

let fname = getInputVal('Fname');
let lname = getInputVal('Lname');
let number= getInputVal('number');
let email = getInputVal('email');
let pass = getInputVal('password');

console.log(fname);
console.log(lname);
console.log(number);
console.log(fname);
console.log(fname);
con
} 

//function to get forms values

function getInputVal(id){
    return document.getElementById(id).value;

}