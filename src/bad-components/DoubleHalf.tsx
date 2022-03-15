import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(1);
    function Doubler(): void {
        setDhValue(2 * dhValue);
    }

    function Halver(): void {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={Doubler}>Doubler</Button>
            <Button onClick={Halver}>Halver</Button>
        </div>
    );
}
