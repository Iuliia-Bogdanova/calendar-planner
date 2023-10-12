import React from 'react';
import moment from "moment";
import "moment/locale/ru";

// import st from './styles.module.scss';
import Calendar from './Calendar/Calendar';

moment.locale("ru");

const GridCalendar = ({ startDay }) => {
    
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
    console.log(daysArray);

    return (
        <Calendar startDay={startDay} />

        // <div className={st.cellsWrapper}>
        //     {daysArray.map((dayItem) => (
        //         <div className={st.cells} key={dayItem.format("DDMMYYY")}>
        //             {dayItem.date() === 1
        //                 ? dayItem.format("D MMM.")
        //                 : dayItem.format("D")}
        //             <p className={st.event}>event1</p>
        //             <p className={st.event}>event2</p>
        //         </div>
        //     ))}
        // </div>
    );
};

export default GridCalendar;
