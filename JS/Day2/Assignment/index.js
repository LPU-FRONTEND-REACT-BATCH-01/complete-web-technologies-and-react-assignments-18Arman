let account={
    balance:0,
    transactions:[]
};
function deposit(amount){
    if(amount<=0){
        console.log("Transaction Failed: Amount must be greater than 0");
        return;
    }
    account.balance+=amount;
    account.transactions.push({Deposited:`₹${amount}`});
}
function withdraw(amount){
    if(amount<=0){
        console.log("Transaction Failed: Amount must be greater than 0");
    }
    else if(amount>account.balance){
        console.log("Transaction Failed: Not Enough Balance");
    }
    else if((account.balance-withdraw)>500){
        console.log("Transaction Failed: Minimum Balance maintained!");
    }
    else if(amount>10000){
        console.log("Transaction Failed: Maximum withdrawel amount is 10000 only"); 
    }
    else{
        account.balance-=amount;
        account.transactions.push({Withdrawn: `₹${amount}`});
    }
}
function getBalance(){
    return account.balance;
}
function getTransaction(){
    return account.transactions;
}
deposit(2000);
withdraw(500);
deposit(1000);
console.log(getBalance());

let transactionArray=getTransaction();

for(let i=0;i<transactionArray.length;i++){
    console.log(transactionArray[i]);
}