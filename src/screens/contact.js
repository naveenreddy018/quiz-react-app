import React from "react";
import Navbar from "../nav_bar/navbar";
import { Outlet,Link } from "react-router-dom";
function Contactscreen (){
    return (
        <>
        <div>
            <Navbar></Navbar>
            <h2>
                contact screen 
            </h2><Link to={"doctors"}>Doctors</Link>
            <Link to={"engineers"}>Engineers</Link>
            <Outlet/>
        </div>
        </>
    )
}
export default Contactscreen;