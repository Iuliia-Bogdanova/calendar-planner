import './styles/base.scss';

import moment from 'moment';

import Header from './components/Header/Header';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';

function App() {

        moment.updateLocale('ru', {week:{dow: 1}});
        const startDay = moment().startOf('month').startOf('week').day(1);
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

    return (
        <div className="App">
            <div className="container">
                <Header />

                <CalendarGrid startDay={startDay} />
            </div>
        </div>
    );
}

export default App
