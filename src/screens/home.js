import React, { useState } from "react";
import Navbar from "../nav_bar/navbar";
import { Link } from "react-router-dom";
import ButtonComp from "../button";
import axios from "axios";

function Homescreen() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data)
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <div>
                <Navbar />
                <h2>Home Screen</h2>

                <button
                    style={{
                        backgroundColor: "red", // Corrected the spelling
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer",
                    }}
                    onClick={fetchData}
                >
                    Fetch Data
                </button>

                {data.length > 0 ? (
                    <>
                        {data.map((each) => {
                            return (
                                <Link
                                    key={each.id} // Added unique key
                                    to={`hyderabad/${each.category}${each.id}/info`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <ButtonComp text={each.title} />
                                </Link>
                            );
                        })}
                    </>
                ) : (
                    <h5>No data found</h5>
                )}
            </div>
        </>
    );
}

export default Homescreen;
