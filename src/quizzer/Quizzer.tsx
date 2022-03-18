import React from "react";
import sketch from "./assets/sketch.jpg";
export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>List of questions</h3>
            <div>
                <span>Sketch</span>
            </div>
            <img
                src={sketch}
                alt="A sketch of the Quizzer application"
                width="750px"
            />
        </div>
    );
}
