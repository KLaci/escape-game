import React from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
    return (
        <div className="App" style={{ height: "100vh", display: "flex", placeItems: "center", backgroundColor: "black", color: "#ccc" }}>
            <Game></Game>
        </div>
    );
}

export default App;
