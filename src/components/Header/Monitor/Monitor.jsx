import React from 'react';
import moment from 'moment';

import st from "./styles.module.scss";
import leftArrow from "/left-arrow.svg";
import rightArrow from "/right-arrow.svg";

const russianMonths = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
];

function Monitor({ currentMonth, changeMonth }) {
    
    const today = moment();
    const monthName = russianMonths[currentMonth.month()];
    return (
        <div className={st.monitor}>
            <p className={st.month}>
                {currentMonth.year() === today.year()
                    ? monthName
                    : `${monthName} ${currentMonth.year()}`}
            </p>
            <button className={st.leftArrow} onClick={() => changeMonth(-1)}>
                <img src={leftArrow} />
            </button>
            <button className={st.rightArrow} onClick={() => changeMonth(1)}>
                <img src={rightArrow} />
            </button>
        </div>
    );
}

export default Monitor;
