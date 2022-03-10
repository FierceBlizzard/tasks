import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        if (questType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questType === "short_answer_question" && <div>Short Answer</div>}
            {questType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
    //this is to test if I got git finally working
}
