//payment task
type paymentOptions="UPI" | "Card" | "COD" | "Netbanking";
type purchase={
    mode:paymentOptions,
    amount:number
}
function payment(Order:purchase): number | string{
    let mode:string=Order.mode;
    let amount:number=Order.amount;
    console.log("Payment Mode is:"+mode+"\nAmount:"+amount);
    if(mode==="UPI"){
        return amount-amount*0.1;
    }
    else if(mode==="Card"){
        return amount-amount*0.5;
    }
    else if(mode==="COD"){
        return amount+50;
    }
    else{
        return "Netbanking chooses: Not sufficient balance"+amount;
    }
}
payment({mode:"UPI",amount:80000})