import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer:</h3>
            <Form.Group controlId="short-answer-question">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={updateAnswer}
                ></Form.Control>
                {expectedAnswer === givenAnswer && <span>✔️</span>}
                {expectedAnswer !== givenAnswer && <span>❌</span>}
            </Form.Group>
        </div>
    );
}
