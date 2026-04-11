let num=0;
if(num===0){
    console.log("equal to 0");
}
else if(num>0){
    console.log("greater than 0");
}
else{
    console.log("less than 0");
}

if(num<8){
    for(let i=0;i<num;i++){
        console.log(num);
    }
}
else{
    for(let i=0;i<num*num;i++){
        console.log(num);
    }
}

let fun= g=>"hello"+g;
console.log(fun("asdef"));

let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>a*b;
let div=(a,b)=>a/b;
function calculator(a,b,operation){
    return operation(a,b);
}
