"use strict";
console.log("This is the script file");
//Objects
let obj1 = {
    id: 1,
    name: "Arman"
};
console.log(obj1.id);
let obj2 = {
    id: 2,
    name: "Arman"
};
console.log(obj2);
//Array of objects
let obj3 = [
    { id: 1, name: "Arman" },
    {
        id: "arman",
        name: 2
    }
];
let user1 = [
    {
        id: 1,
        name: "Arman"
    },
    {
        id: "Armrna",
        name: 2
    }
];
let products = [
    {
        id: 1,
        title: "Console",
        price: 57000
    },
    {
        id: 2,
        title: "Joystick",
        price: 83000
    }
];
products.push({
    id: 3,
    title: "Detergent",
    price: 8000
});
// products.push({
//     id:"Arman",
//     title:"Human",
//     price:0
// });
console.log(products);
