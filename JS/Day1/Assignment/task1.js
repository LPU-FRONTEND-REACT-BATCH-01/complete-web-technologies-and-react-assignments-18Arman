let users=[
        {
            id:1,
            username:"Arpit",
            password:"Ishu"
        },
        {
            id:2,
            username:"Yashwant",
            password:"sushant"
        },
        {
            id:3,
            username:"Sanat",
            password:"Saurabh"
        }
];
let inputData={
}
inputData.username=prompt("Enter Username:")
let result=users.some(el=>el.username===inputData.username);
if(result){
    let username_Objects=users.find(ele=>ele.username===inputData.username);
    console.log("UserName is Present");
    inputData.password=prompt("Enter password:");
    if(username_Objects.password===inputData.password){
        console.log("Password is correct! Logging in:)");
    }
    else{
        console.log("Error: Invalid Password");
        
    }
}
else{
    console.log("Username is not present in database");
}