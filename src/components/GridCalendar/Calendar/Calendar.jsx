import React from "react";
import moment from "moment";
import "moment/locale/ru";

import st from "./styles.module.scss";

moment.locale("ru");

// const isCurrentDay = (day) => true;

const Calendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
    
    console.log(daysArray);

    const isPastEvent = (eventDate) => {
        const currentDay = moment();
        return eventDate.isBefore(currentDay);
    };

    return (
        <div className={st.cellsWrapper}>
            {daysArray.map((dayItem) => (
                <div className={st.cells} key={dayItem.format("DDMMYYY")}>
                    {dayItem.date() === 1
                        ? dayItem.format("D MMM.")
                        : dayItem.format("D")}

                    <p
                        className={st.event}
                        style={{ opacity: isPastEvent(dayItem) ? 0.4 : 1 }}
                    >
                        event1
                    </p>
                    <p
                        className={st.event}
                        style={{ opacity: isPastEvent(dayItem) ? 0.4 : 1 }}
                    >
                        event2
                    </p>
                    {/* <p className={st.event}>event1</p>
                    <p className={st.event}>event2</p> */}
                </div>
            ))}
        </div>
    );
};

export default Calendar;
