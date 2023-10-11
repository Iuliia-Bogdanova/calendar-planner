import React from 'react'

import st from "./styles.module.scss";

function InactiveUser() {
    return (
        <div className={st.inactiveLogin}>
            <button className={st.loginBtn}>Войти</button>
        </div>
    );
}

export default InactiveUser;
