import React from 'react'
import Modal from "react-modal";

import st from "./styles.module.scss";
import close from "/icons/close.svg";
import info from '/icons/info.svg';
import leftArrow from "/icons/left-arrow.svg";
import rightArrow from "/icons/right-arrow.svg";

function PastEventModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Past Event Modal"
            ariaHideApp={false}
            closeTimeoutMS={800}
            overlayClassName={st.overlayWrapper}
            className={st.modalWrapper}
        >
            <button className={st.modalCloseBtn} onClick={onRequestClose}>
                <img src={close} />
            </button>
            <h3 className={st.h3}>Велофестиваль La Strada</h3>
            <div className={st.info}>Мероприятие уже прошло</div>
        </Modal>
    );
}

export default PastEventModal;
