// import React from 'react'

import st from './styles.module.scss';

function Header() {
    return (
        <div className={st.wrapper}>
            <div className={st.subheader}>
                <div className={st.logotype}>
                    <img src="/logo.svg" alt="Logo" className={st.logo} />
                    <p className={st.title}>red collar</p>
                </div>
                <h2 className={st.h2}>
                    planner <span className={st.active}>event</span>
                </h2>
            </div>
            <div className={st.monitor}>
                <p className={st.month}>Сентябрь</p>
                <button className={st.leftArrow}>
                    <img src="/left-arrow.svg" />
                </button>
                <button className={st.rightArrow}>
                    <img src="/right-arrow.svg" />
                </button>
            </div>
            <div className={st.inactiveLogin}>
                <button className={st.loginBtn}>Войти</button>
            </div>
        </div>
    );
}

export default Header;