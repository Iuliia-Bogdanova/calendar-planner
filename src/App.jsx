import React, { useEffect, useState } from "react";
import moment from "moment";

import "./styles/base.scss";

import Header from "./components/Header/Header";
import GridCalendar from "./components/GridCalendar/GridCalendar";
import ErrorModal from "./components/Modals/ErrorModal/ErrorModal";

const url = "http://localhost:3000/";

function App() {
    moment.updateLocale("ru", { week: { dow: 1 } });
    const monthDates = moment();
    const startDay = monthDates.startOf("month").startOf("week").day(1);

    window.moment = moment;

    const [currentMonth, setCurrentMonth] = useState(moment());
    const [isError, setIsError] = useState(false);

    const changeMonth = (direction) => {
        setCurrentMonth(currentMonth.clone().add(direction, "months"));
    };

    const handleError = () => {
        setIsError(true);
    }; 

    const [events, setEvents] = useState([]);
    const startDateQuery = startDay.clone().format('X');
    const endDateQuery = startDay.clone().add(42, 'days').format("X");

    useEffect(() => {
        fetch(
            // `${url}/events/`
            "http://localhost:3000/events/"
            // `${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log("Response", res);
                setEvents(res);
            });
    }, []);

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
                <ErrorModal isError={isError} setIsError={setIsError} />
                <button className="button" onClick={handleError}>
                    Вызвать ошибку
                </button>
            </div>
        </div>
    );
}

export default App;
