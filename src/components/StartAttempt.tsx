import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [testing, setTest] = useState<boolean>(false);

    function changeAttempts(numChange: number): void {
        setNumAttempts(numAttempts + numChange);
    }
    function changeTest(): void {
        setTest(!testing);
    }
    return (
        <div>
            <Button
                onClick={() => {
                    changeTest();
                    changeAttempts(-1);
                }}
                disabled={testing || numAttempts === 0}
            >
                Start Quiz
            </Button>
            {<div>{numAttempts} </div>}
            <Button
                onClick={() => {
                    changeTest();
                }}
                disabled={!testing}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    changeAttempts(1);
                }}
                disabled={testing}
            >
                Mulligan
            </Button>
        </div>
    );
}
