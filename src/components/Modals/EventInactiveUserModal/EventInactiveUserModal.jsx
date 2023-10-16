import React from 'react'
import Modal from "react-modal";

import st from "./styles.module.scss";
import close from "/icons/close.svg";
import info from '/icons/info.svg';
import leftArrow from "/icons/left-arrow.svg";
import rightArrow from "/icons/right-arrow.svg";

function EventInactiveUserModal({ isOpen, onRequestClose }) {
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
            <div className={st.info}>
                <img src={info} />
                <p>Мероприятие уже прошло</p>
            </div>
            <div className={st.eventItem}>
                <div className={st.eventDetails}>
                    <ul className={st.h4}>
                        <li className={st.day}>воскресенье</li>
                        <li className={st.date}>10 сентября</li>
                        <li className={st.time}>11:00</li>
                    </ul>
                    <hr className={st.divider} />
                    <div className={st.location}>г. Санкт-Петербург,<br/>ЦПКиО им. Кирова</div>
                </div>
                <div className={st.eventDescription}>
                    Это яркие велособытия для тех, кто любит исследовать город и
                    открывать новые маршруты. Присоединяйся к яркой велопрогулке
                    или стань участником динамичной велогонки. Это твой шанс
                    заявить о себе и получить новую заветную медаль финишера.
                </div>
            </div>
        </Modal>
    );
}

export default EventInactiveUserModal;
