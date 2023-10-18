import React from 'react';

import st from "./styles.module.scss";
import avatarIcon from '/icons/avatar.png';
import addIcon from '/icons/add.svg';
import CreateEventModal from '../../Modals/CreateEventModal/CreateEventModal';

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
            <CreateEventModal />
        </div>
    );
}

export default ActiveUser;
