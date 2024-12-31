import { useState,useEffect } from "react";

export default function Effect(){

    useEffect(()=>{
        window.addEventListener("mousemove",capture)

        return ()=> {

            window.removeEventListener("mousemove",capture)
        }
    },[])

    const capture =()=>{
        console.log("hello i am naveen reddy")
    }

}