let price=Number(prompt("Enter the price:"));
let discountType=0;
function calculate_Price(price){
    let totalPrice=0;
    if(price>2000 && price<=6000){
        totalPrice=price-(price*(0.15));
        discountType=15;
    }
    else if(price>6000){
        totalPrice=price-(price*(0.25));
        discountType=25;
    }
    else{
        discountType=0;
        totalPrice=price;
    }
    return totalPrice;
}
let totalPrice=calculate_Price(price);
if(discountType===0){
    console.log("No discount, price is "+price);
}
else{
    console.log("You got discount: "+discountType+"% price is:"+totalPrice);    
}