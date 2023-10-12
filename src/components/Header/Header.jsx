import React from 'react';
import moment from 'moment';

import Title from './Title/Title';
import Monitor from './Monitor/Monitor';
import InactiveUser from "./InactiveUser/InactiveUser";

import st from './styles.module.scss';

import "moment/locale/ru";
moment.locale("ru");
console.log(moment.locale());

const today = moment();

function Header() {
    return (
        <div className={st.wrapper}>

            <Title />
            
            <Monitor today = {today} />

            <InactiveUser />
            
        </div>
    );
}

export default Header;