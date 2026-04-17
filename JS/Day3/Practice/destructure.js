let users={
    id:1,
    username:"Nick",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    },
    phone:"23y2142341",
    skills:{
        frontend:["react","HTML","CSS"],
        backend:["Java","Springboot"]
    }
};
let {id,username,userLocation:{city,state},phone,skills:{frontend:[interac,web,style],backend:[program,backend]}}=users;
console.log(id);
console.log(username);
console.log(city);
console.log(state);
console.log(phone);
console.log(interac);
console.log(web);
console.log(style);
console.log(program);
console.log(backend);

export const Name=username;
export const eId=id;