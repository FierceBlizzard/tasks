import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(3);
    const [askAttempts, setAskAttempts] = useState<number>(0);

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
                        setAskAttempts(parseInt(event.target.value))
                    }
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
