let username=prompt("Enter Username:");
let email=prompt("Enter email:");
let password=prompt("Enter password:");
let construct_Object= (username,email,password) => {
    return {
        username:`${username}`,
        email:`${email}`,
        password:`${password}`
    };
};
console.log(construct_Object(username,email,password));

