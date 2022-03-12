import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🐲");
    //Christmas, New year day, St. Patricks Day, Diwaili, Mardi Gra
    const holidayByYear = ["🐲", "🎉", "☘️", "🎆", "🎄"];
    const holidayByAlp = ["🎄", "🎆", "🎉", "🐲", "☘️"];

    function changeByYear(): void {
        let i = holidayByYear.indexOf(holiday) + 1;
        if (i === holidayByYear.length) {
            i = 0;
        }
        setHoliday(holidayByYear[i]);
    }
    function changeByAlp(): void {
        let i = holidayByAlp.indexOf(holiday) + 1;
        if (i === holidayByAlp.length) {
            i = 0;
        }
        setHoliday(holidayByAlp[i]);
    }
    return (
        <div>
            <Button onClick={changeByYear}>Change By Year</Button>
            <Button onClick={changeByAlp}>Change By Alphabet</Button>
            <span>Current Holiday: {holiday}</span>
        </div>
    );
}
