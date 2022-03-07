import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, changeQuizState] = useState<boolean>(false);
    const [numAttempts, changeAttempts] = useState<number>(4);
    function startAttempt(): void {
        changeAttempts(numAttempts - 1);
        changeQuizState(true);
    }
    function stopAttempt(): void {
        changeQuizState(false);
    }
    function mulligan(): void {
        changeAttempts(numAttempts + 1);
    }
    return (
        <div>
            <span>NumAttempts: {numAttempts} </span>
            <Button
                onClick={() => startAttempt()}
                disabled={!numAttempts || inProgress}
            >
                {" "}
                Start Quiz{" "}
            </Button>
            <Button onClick={() => stopAttempt()} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={() => mulligan()} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
