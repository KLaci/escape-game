import React, { useState } from "react";
import steps from "../steps";
import Step from "./Step";
import Timer from "./Timer";

const Game = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const onSuccess = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <div style={{ margin: "auto", fontSize: 24 }}>
            <Timer></Timer>
            {currentStep < steps.length ? <Step step={steps[currentStep]} next={onSuccess}></Step> : <div>Gratula</div>}
        </div>
    );
};

export default Game;
