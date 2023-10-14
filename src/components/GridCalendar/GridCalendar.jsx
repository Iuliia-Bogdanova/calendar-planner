import React from "react";

// import st from './styles.module.scss';

import Calendar from "./Calendar/Calendar";
import WeekDays from "./WeekDays/WeekDays";

const GridCalendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());

    return (
        <div>
            <WeekDays />

            <Calendar startDay={startDay} />
        </div>
    );
};

export default GridCalendar;
