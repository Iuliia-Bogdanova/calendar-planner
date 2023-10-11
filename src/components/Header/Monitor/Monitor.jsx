import React from 'react';

import st from "./styles.module.scss";
import leftArrow from "/left-arrow.svg";
import rightArrow from "/right-arrow.svg";


function Monitor() {
    return (
        <div className={st.monitor}>
            <p className={st.month}>Октябрь</p>
            <button className={st.leftArrow}>
                <img src={leftArrow} />
            </button>
            <button className={st.rightArrow}>
                <img src={rightArrow} />
            </button>
        </div>
    );
}

export default Monitor;
