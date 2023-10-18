import React from 'react';
import Modal from "react-modal";


import st from "./styles.module.scss";
import AuthorizationModal from '../../Modals/AuthorizationModal/AuthorizationModal';

function InactiveUser() {
    return (
        <>
            <div className={st.inactiveLogin}>
                <button className={st.loginBtn}>Войти</button>
            </div>
            <AuthorizationModal />
        </>
    );
}

export default InactiveUser;
