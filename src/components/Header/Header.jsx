import React from 'react';
import Title from './Title/Title';
import Monitor from './Monitor/Monitor';
import InactiveUser from "./InactiveUser/InactiveUser";

import st from './styles.module.scss';

function Header() {
    return (
        <div className={st.wrapper}>

            <Title />
            
            <Monitor />

            <InactiveUser />
            
        </div>
    );
}

export default Header;