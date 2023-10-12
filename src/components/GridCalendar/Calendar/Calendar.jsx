import React from 'react';
import moment from "moment";
import "moment/locale/ru";

import st from './styles.module.scss';

moment.locale("ru");

const Calendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
    console.log(daysArray);

    return (
        <ul className={st.cellsWrapper}>
            {daysArray.map((dayItem) => (
                <li className={st.cells} key={dayItem.format("DDMMYYY")}>
                    {dayItem.date() === 1
                        ? dayItem.format("D MMM.")
                        : dayItem.format("D")}
                    <li className={st.event}>event1</li>
                    <li className={st.event}>event2</li>
                </li>
            ))}
        </ul>
    );
};

export default Calendar;
