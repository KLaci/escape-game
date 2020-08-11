import useInterval from "@use-it/interval";
import React, { useState } from "react";

const Step = ({ step, next }) => {
    const [pin, setPin] = useState("");

    const [lastFailed, setLastFailed] = useState(null);

    const [remainingSeconds, setRemainingSeconds] = useState(3600);

    useInterval(() => {
        if (!lastFailed === null) return;

        const remaining = lastFailed + 10 - Math.floor(new Date().getTime() / 1000);
        setRemainingSeconds(remaining);
        if (remaining <= 0) {
            setLastFailed(null);
        }
    }, 100);

    const onTry = () => {
        if (pin === step.pin) {
            alert("Siker!!!");
            next();
        } else {
            alert("Sajnos a kód nem helyes.");
            setLastFailed(Math.floor(new Date().getTime() / 1000));
        }
        setPin("");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, fontSize: 24, maxWidth: 700 }}>
            <div>{step.text}</div>
            <input
                placeholder={"Kód"}
                style={{ fontSize: 46, padding: 16, width: 300, textAlign: "center" }}
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
            ></input>
            <button
                disabled={lastFailed}
                style={{
                    fontSize: 24,
                    backgroundColor: lastFailed ? "grey" : "#0e2761",
                    color: "white",
                    cursor: "pointer",
                    border: "2px #ccc solid",
                    padding: "8px 24px",
                    borderRadius: 8,
                }}
                onClick={onTry}
                type="button"
            >
                🔑
            </button>
        </div>
    );
};

export default Step;
