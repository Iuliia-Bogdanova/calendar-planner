import './styles/base.scss';

import React from 'react';
import moment from 'moment';
import "moment/locale/ru";

moment.locale("ru");
console.log(moment.locale());

import Header from './components/Header/Header';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';

function App() {
        moment.updateLocale('ru', {week:{dow: 1}});
        
        const startDay = moment().startOf('month').startOf('week').day(1);

    return (
        <div className="App">
            <div className="container">
                
                <Header />
                
                <CalendarGrid startDay={startDay} />
                
            </div>
        </div>
    );
}

export default App;
