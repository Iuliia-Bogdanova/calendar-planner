import React from 'react';

import st from './styles.module.scss';

const CalendarGrid = () => {
    const totalDays = 42;
    const daysArray = [...Array(42)];

    return (
        <div className={st.cellsWrapper}>
            {daysArray.map((_, i) => (
                <div className={st.cells}>
                    {i}
                    <p className={st.event}>event1</p>
                    <p className={st.event}>event2</p>
                </div>
            ))}
        </div>
    );
};
// import moment from 'moment/moment';

// function CalendarGrid() {

//     console.log(moment());

//     moment.updateLocale('ru', {week:{dow: 1}});
//     const startDay = moment().startOf('month').startOf('week');
//     const endDay = moment().endOf('month').endOf('week');

//     const calendar = [];
//     const day = startDay.clone();

//     while (!day.isAfter(endDay)) {
//         calendar.push(day.clone());
//         day.add(1, 'day')
//     }

//     console.log(calendar);
//     window.moment = moment;
//     window.startDay = startDay;
//     window.endDay = endDay;
//     window.day = day;

//     return (
//         <div>CalendarGrid</div>
//     )
// }

export default CalendarGrid;
