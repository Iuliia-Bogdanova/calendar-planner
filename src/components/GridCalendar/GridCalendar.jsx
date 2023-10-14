import React from "react";
// import moment from "moment";
// import "moment/locale/ru";

// import st from './styles.module.scss';

import Calendar from "./Calendar/Calendar";
import WeekDays from "./WeekDays/WeekDays";

// moment.locale("ru");

// console.log(moment.locales());

const GridCalendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
    console.log(daysArray);

    return (
        <div>
            <WeekDays />

            <Calendar startDay={startDay} />
        </div>
    );
};

export default GridCalendar;
