import React from 'react';

import st from './styles.module.scss';

const CalendarGrid = ({startDay}) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
    console.log(daysArray);

    return (
        <div className={st.cellsWrapper}>
            {daysArray.map((dayItem) => (
                <div className={st.cells}
                key={dayItem.format('DDMMYYY')}
                >
                    {dayItem.format('D')}
                    <p className={st.event}>event1</p>
                    <p className={st.event}>event2</p>
                </div>
            ))}
        </div>
    );
};

export default CalendarGrid;
