import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const COLORS = [
    "yellow",
    "skyblue",
    "darkgreen",
    "orange",
    "purple",
    "gray",
    "magenta",
    "black"
];
const default_color = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [curColor, setColor] = useState<string>(default_color);
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="yellow"
                label="yellow"
                value="yellow"
                checked={curColor === COLORS[0]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="skyblue"
                label="skyblue"
                value="skyblue"
                checked={curColor === COLORS[1]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="darkgreen"
                label="darkgreen"
                value="darkgreen"
                checked={curColor === COLORS[2]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="orange"
                label="orange"
                value="orange"
                checked={curColor === COLORS[3]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="purple"
                label="purple"
                value="purple"
                checked={curColor === COLORS[4]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="gray"
                label="gray"
                value="gray"
                checked={curColor === COLORS[5]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="magenta"
                label="magenta"
                value="magenta"
                checked={curColor === COLORS[6]}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(event: ChangeEvent) => setColor(event.target.value)}
                id="black"
                label="black"
                value="black"
                checked={curColor === COLORS[7]}
            />
            You have chosen
            <span
                data-testid="colored-box"
                style={{
                    backgroundColor: COLORS.find(
                        (color: string): boolean => color === curColor
                    )
                }}
            >
                {curColor}
            </span>
        </div>
    );
}
