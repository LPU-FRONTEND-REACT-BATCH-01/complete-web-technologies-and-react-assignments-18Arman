let username=prompt("Enter Username:");
let email=prompt("Enter email:");
let password=prompt("Enter password:");
validateUsername(username);
validateEmail(email);
validatePassword(password);
function validateUsername(username){
    console.log(`Original Username:${username}`)
    console.log(`Modified Username:${username.toLowerCase().trim()}`);
}
function validateEmail(email){
    console.log(`Original Email:${email}`)
    let emailContainer=email.toLowerCase().split("@");
    console.log(`Prefix of Email is :${emailContainer[0]}`);
    console.log(`Suffix of Email is :${emailContainer[1]}`);
}
function validatePassword(password){
    console.log(`Original Password:${password}`)
    if(password.length>8 && password.includes("@") && password.includes("*") && password.includes("/")){
        console.log("Password is Valid");
    }
    else{
    console.log("Password is Invalid");
    }
}


