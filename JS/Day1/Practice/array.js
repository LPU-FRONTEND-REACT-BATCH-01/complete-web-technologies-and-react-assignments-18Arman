let arr=[12,"hello",true,undefined]
for(let i=0;i<arr.length;i++){
    console.log(arr.at(i));
}
arr.push(21);
for(let i=0;i<arr.length;i++){
    console.log(arr.at(i));
}
arr.pop();
console.log('pop');

for(let i=0;i<arr.length;i++){
    console.log(arr.at(i));
}
console.log('shift');
arr.shift();
for(let i=0;i<arr.length;i++){
    console.log(arr.at(i));
}
console.log('unshift');
arr.unshift(100);
for(let i=0;i<arr.length;i++){
    console.log(arr.at(i));
}
console.log(arr.join("-"));

let ar2=[1,2,3];
let ar3=["Hello","bye"];
console.log(ar2.concat(ar3,arr));
arr.map((value,index)=>{
    console.log(value+"->"+index);
});
console.log('Reduce');
let arr4=[1,2,3,4,5]
arr4.reduce((prev,value)=>{
    console.log(`current Value:${value} and sum till now: ${prev+value}`);
    return prev+value;
},0);
console.log(arr4.filter((ele)=>ele%2==0));

let obj1  = [
    {
        id:1,
        name:"Watch",
        price:"2999",
        quantity:2
    },
    {
        id:2,
        name: "shoes",
        price: 199,
        quantity:3
    },
    {
        id:3,
        name:"ak47",
        price:99999999,
        quantity:3
    }
]
console.log("Sorting based on prices")
// let new_obj=obj1.sort((a,b)=>b.price-a.price);
// console.log(new_obj);
console.log("Sorting by name");
console.log((obj1.sort((a,b)=>{ return a.name.localeCompare(b.name);
})));
console.log("Filter based on ");
console.log(obj1.filter((el)=>el.price>2000));