async function fetchData(){
    try{
        let respone=await fetch("https://dummyjson.com/products");
        if(respone.ok){
            let data= await respone.json();
            let products=data.products;
            displayData(products)
        }
    }
    catch(err){
        console.log(err);  
    }
}
function displayData(data:any){
    let sortascdata=[...data];
    let sortdscdata=[...data];
    //filter by 5
    let filteredby_price5=data.filter((product:any)=>{
       return product.price>5;
    })
    console.log("price Filter greater than 5"+filteredby_price5);
    //filter by 10
    let filteredby_price10=data.filter((product:any)=>{
       return product.price>10;
    })
    console.log(filteredby_price10);
    //sort by asc
    let sortByTitleasc:any=sortascdata.sort((a,b)=>{
        return a.title.localeCompare(b.title);
    })
    console.log(sortByTitleasc);
    //sort by desc
    let sortByTitledesc=sortdscdata.sort((a,b)=>{
        return b.title.localeCompare(a.title);
    })
    console.log(sortByTitledesc);
    
    //filter for furniture
    let furnituredata=data.filter((product)=>{
        return product.category=="furniture";
    });
    console.log(furnituredata);
    
    //filter for beauty
    let beautyfilter=data.filter((product)=>{
        return product.category=="beauty";
    });
    console.log(beautyfilter);
}
fetchData();    


