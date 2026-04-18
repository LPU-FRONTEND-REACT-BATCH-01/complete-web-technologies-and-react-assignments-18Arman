"use strict";
function payment(Order) {
    let mode = Order.mode;
    let amount = Order.amount;
    console.log("Payment Mode is:" + mode + "\nAmount:" + amount);
    if (mode === "UPI") {
        return amount - amount * 0.1;
    }
    else if (mode === "Card") {
        return amount - amount * 0.5;
    }
    else if (mode === "COD") {
        return amount + 50;
    }
    else {
        return "Netbanking chooses: Not sufficient balance" + amount;
    }
}
payment({ mode: "UPI", amount: 80000 });
