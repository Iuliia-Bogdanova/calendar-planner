import React from 'react'

import st from "./styles.module.scss";
import logo from "/icons/logo.svg";

function SubHeader() {
    return (
        <div className={st.subheader}>
            <div className={st.logotype}>
                <img src={logo} alt="Logo" className={st.logo} />
                <p className={st.title}>red collar</p>
            </div>
            <h2 className={st.h2}>
                planner <span className={st.active}>event</span>
            </h2>
        </div>
    );
}

export default SubHeader;
