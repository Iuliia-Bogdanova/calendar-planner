import React from "react";
import moment from "moment";

import st from "./styles.module.scss";

import { russianShortMonths } from "../../../helpers/constants";

const Calendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
    
    const isPastEvent = (eventDate) => {
        const currentDay = moment();
        return eventDate.isBefore(currentDay);
    };

    return (
        <div className={st.cellsWrapper}>
            {daysArray.map((dayItem) => (
                <div className={st.cells} key={dayItem.format("DDMMYYY")}>
                    <span style={{
                            opacity: dayItem.isSame(moment(), "month")
                                ? 1
                                : 0.5,
                        }}
                    >
                        {dayItem.date() === 1
                            ? `${dayItem.date()} ${russianShortMonths[dayItem.month()]}${dayItem.month() === 4 ? '' : '.'}`
                            : dayItem.format("D")}
                    </span>
                    <p
                        className={st.event}
                        style={{ opacity: isPastEvent(dayItem) ? 0.5 : 1 }}
                    >
                        event1
                    </p>
                    <p
                        className={st.event}
                        style={{ opacity: isPastEvent(dayItem) ? 0.5 : 1 }}
                    >
                        event2
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Calendar;
