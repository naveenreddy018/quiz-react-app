import React, { useEffect, useState } from 'react';

function RunOnceExample() {

    const [data,setdata] = useState(0)

    // useEffect(() => {
    //     console.log('Effect runs once on mount');
    //     document.title = `${data}`
    //     return () => {
    //         console.log('Cleanup runs when component unmounts');
    //     };
    // }, []);
    useEffect(() => {
        document.title = `${data}`; // Updates document title with the latest `data` value
    }, [data]);

    return <button onClick={()=> setdata(data+1)}>click me</button>;
}

export default RunOnceExample;
