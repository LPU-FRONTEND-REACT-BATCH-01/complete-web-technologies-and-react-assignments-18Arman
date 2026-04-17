let a:Number=21;
let b:symbol=Symbol("id")
let c:symbol=Symbol("id");
let x:String="id";
let y:String="id";
console.log("Hello"+x===y);
console.log(b==c);
let arr=[]

// Task Time
let input:unknown="input";
console.log("Original Input:"+input);
console.log("hello");  
if(typeof input==="string"){
    console.log(input.charAt(0).toUpperCase()+input.substring(1));
}
else if(typeof input==="number"){
    console.log(input+1);
}
else if(typeof input==="boolean"){
    console.log(!input);
}
