import React from "react";
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

    // window.moment = moment;

    return (
        <div className="App">
            <div className="container">
                <Header />

                <GridCalendar startDay={startDay} />
            </div>
        </div>
    );
}

export default App;
