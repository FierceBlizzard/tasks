import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
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
                name="Colors"
                value={curColor}
                {COLORS.map((color: string) => 
                    <option key={color} value={color} label={color}>
                        {color}
                    </option>
                )}
                onChange={(c) => setColor(c.target.value)}
            />
        </div>
    );
}
