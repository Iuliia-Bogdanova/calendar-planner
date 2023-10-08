// import React from 'react'

import st from './styles.module.scss';

function Header() {
    return (
        <div className={st.wrapper}>
            <div className={st.subheader}>
                <img src="/logo.svg" alt="Logo" className={st.logo} />
                <p className={st.title}>red collar</p>
            </div>
            <h2 className={st.h2}>
                planner <span className={st.active}>event</span>
            </h2>
        </div>
    );
}


export default Header;