import useInterval from "@use-it/interval";
import React, { useState } from "react";

const Timer = () => {
    const [started] = useState(Math.floor(new Date().getTime() / 1000));
    const [remainingSeconds, setRemainingSeconds] = useState(3600);

    useInterval(() => {
        const remaining = started + 3600 - Math.floor(new Date().getTime() / 1000);
        setRemainingSeconds(remaining);
    }, 500);

    return (
        <div style={{ fontSize: 60, color: "white", marginBottom: 32 }}>
            {Math.floor(remainingSeconds / 60)}:{Math.floor(remainingSeconds % 60)}
        </div>
    );
};

export default Timer;
