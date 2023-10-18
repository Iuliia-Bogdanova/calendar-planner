import React from "react";
import moment from "moment";

import Title from "./Title/Title";
import Monitor from "./Monitor/Monitor";
import InactiveUser from "./InactiveUser/InactiveUser";
import ActiveUser from "./ActiveUser/ActiveUser";

import st from "./styles.module.scss";

const monthDates = moment();

function Header({ currentMonth, changeMonth }) {
    return (
        <ul className={st.wrapper}>
            <li>
                <Title />
            </li>
            <li></li>
            <li>
                <Monitor
                    currentMonth={currentMonth}
                    changeMonth={changeMonth}
                />
            </li>
            <li>
                {/* <InactiveUser /> */}
                <ActiveUser />
                {/* {isAuthenticated ? <ActiveUser /> : <InactiveUser />} */}
            </li>
        </ul>
    );
}

export default Header;
