import React from 'react'

import st from './styles.module.scss';

function WeekDays() {
    return (
        // <div className={st.daysWrapper}>
        <ul className={st.daysWrapper}>
            <li className={st.days}>пн</li>
            <li className={st.days}>вт</li>
            <li className={st.days}>ср</li>
            <li className={st.days}>чт</li>
            <li className={st.days}>пт</li>
            <li className={st.days}>сб</li>
            <li className={st.days}>вс</li>
        </ul>
        // </div>
    );
}

export default WeekDays;
