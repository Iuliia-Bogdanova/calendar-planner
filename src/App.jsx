import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ru";

import "./styles/base.scss";

import Header from "./components/Header/Header";
import GridCalendar from "./components/GridCalendar/GridCalendar";

moment.locale("ru");
console.log(moment.locale());

function App() {
    moment.updateLocale("ru", { week: { dow: 1 } });
    const today = moment();
    const startDay = today.startOf("month").startOf("week").day(1);
    
    const [currentMonth, setCurrentMonth] = useState(moment());

    const changeMonth = (direction) => {
        setCurrentMonth(currentMonth.clone().add(direction, 'months'));
    };

    // window.moment = moment;

    return (
        <div className="App">
            <div className="container">
                <Header currentMonth={currentMonth} changeMonth={changeMonth} />
                <GridCalendar
                    startDay={currentMonth
                        .clone()
                        .startOf("month")
                        .startOf("week")
                        .day(1)}
                />
            </div>
        </div>
    );
}

export default App;
