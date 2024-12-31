import { useState ,useEffect } from "react";


export default function Example(){
       
    const [data,setdata] = useState([])

    useEffect(()=>{
      
        fetchData();

    })

    const fetchData =async ()=>{
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        const data1 = await response.json();
        console.log(data1)
        console.log(data1.title)
        if(response.status === 200){
            setdata(data1[0].title)
        }
    }catch (err){
        setdata("error occured not hing to display ")
    }
    }
    return (
        <>
           <h3>{data}</h3>
        </>
    )



}