import React from 'react';
import moment from 'moment';

import st from "./styles.module.scss";
import leftArrow from "/left-arrow.svg";
import rightArrow from "/right-arrow.svg";

function Monitor({ currentMonth, changeMonth }) {
    const today = moment();
    return (
        <div className={st.monitor}>
            <p className={st.month}>
                {currentMonth.year() === today.year()
                    ? currentMonth.format("MMMM")
                    : currentMonth.format("MMMM YYYY")}
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
