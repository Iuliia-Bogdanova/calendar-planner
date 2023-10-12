import React from 'react';

import st from "./styles.module.scss";
import avatarIcon from '/avatar.png';
import addIcon from '/add.svg';

function ActiveUser() {
    return (
        <div>
            <div className={st.activeLogin}>
                <button className={st.addBtn}>
                    <img src={addIcon} alt="Add" className={st.addIcon} />
                </button>
                <div className={st.avatar}>
                    <img
                        src={avatarIcon}
                        alt="Avatar"
                        className={st.avatarIcon}
                    />
                </div>
            </div>
        </div>
    );
}

export default ActiveUser;
