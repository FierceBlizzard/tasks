import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(3);
    const [askAttempts, setAskAttempts] = useState<number>(0);

    function changeAttempts(num: number): void {
        setAttempts(numAttempts + num);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            {numAttempts}
            <Form.Group controlId="attempt-form">
                <Form.Label>Num Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={askAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAskAttempts(parseInt(event.target.value) || 0)
                    }
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    changeAttempts(-1);
                }}
                disabled={numAttempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    changeAttempts(askAttempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
