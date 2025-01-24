

/*
Normal way using REST API
==========================
const fetchListOfProducts=async()=>{
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    return data?.products;
}



const ServerActionsExample=async ()=>{
     const products=await fetchListOfProducts();
     console.log(products);
    return(
        <>
        <h1>Server page Example</h1>
        </>
    )
}

*/

/*

this is the Sever Action: 

const fetchListOfProducts=async()=>{
    'use server'
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    return data?.products;
}


const ServerActionsExample=async ()=>{
    const products=await fetchListOfProducts();
    console.log(products.slice(0,10));
   return(
       <>
       <h1>Server page Example</h1>
       </>
   )
}


export default ServerActionsExample;


*/


//writing all server actions in some folder and calling them for reusability

import { fetchListOfProducts } from "@/actions";

const ServerActionsExample=async ()=>{
    const products=await fetchListOfProducts();
    // console.log(products.slice(0,10));
   return(
       <>
       <h1 className="font-bold bg-amber-400 inline">Server page Example</h1>
       <ul>
        {
            products && products.length>0 ?
            products.map((item,index)=>(
                <li key={index}>{item.title}</li>
            )): <h2>No Products Found</h2>
        }
       </ul>
       </>
   )
}


export default ServerActionsExample;
