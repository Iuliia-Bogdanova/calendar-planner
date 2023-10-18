import React from 'react';
import Modal from "react-modal";

import st from "./styles.module.scss";
import close from '/icons/close.svg';
import pigeon from '/img/pigeon.png';

const ErrorModal = ({ isError, setIsError }) => {
    
    const closeModal = () => {
        setIsError(false);
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <Modal
            isOpen={isError}
            onRequestClose={closeModal}
            contentLabel="Error Modal"
            ariaHideApp={false}
            closeTimeoutMS={800}
            overlayClassName={st.overlayWrapper}
            className={st.modalWrapper}
        >
            <button className={st.modalCloseBtn} onClick={closeModal}>
                <img src={close} />
            </button>
            <h2 className={st.h2}>
                Что-то пошло
                <br />
                не так
            </h2>
            <h4 className={st.h4}>Попробуйте позже</h4>
            <div className={st.decoration}>
                <img src={pigeon} />
            </div>
            <button className={st.button} onClick={reloadPage}>
                Хорошо
            </button>
        </Modal>
    );
};

export default ErrorModal;