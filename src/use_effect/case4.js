import React, { useState, useEffect } from 'react';

function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString()); // Update time every second
            console.log('Interval running');
        }, 1000);

        // Cleanup: Clear the interval when the component unmounts
        return () => {
            clearInterval(timer);
            console.log('Cleanup before effect runs or component unmounts');
        };
    }, []); // Empty dependency array ensures the effect runs only on mount

    return (
        <div>
            <h1>Live Clock</h1>
            <p>Current Time: {time}</p>
        </div>
    );
}

export default LiveClock;
