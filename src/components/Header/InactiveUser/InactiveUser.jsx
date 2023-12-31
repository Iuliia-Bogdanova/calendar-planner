import React, { useState } from "react";
import Modal from "react-modal";

import st from "./styles.module.scss";
// import AutorizationModal from "../../Modals/AutorizationModal/AutorizationModal";
import RegistrationModal from "../../Modals/RegistrationModal/RegistrationModal";

function InactiveUser() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={st.inactiveLogin}>
                <button className={st.loginBtn} onClick={openModal}>
                    Войти
                </button>
            </div>
            {/* <AutorizationModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            /> */}

            <RegistrationModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            />
        </>
    );
}

export default InactiveUser;
