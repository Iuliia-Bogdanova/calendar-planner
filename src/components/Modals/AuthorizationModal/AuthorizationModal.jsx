import React, { useState} from "react";
import Modal from "react-modal";

import st from "./styles.module.scss";
import close from "/icons/close.svg";

function AuthorizationModal({ isOpen, onRequestClose }) {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", email);
        // Здесь вы можете добавить код для обработки электронной почты
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="User Autorization Modal"
            ariaHideApp={false}
            closeTimeoutMS={800}
            overlayClassName={st.overlayWrapper}
            className={st.modalWrapper}
        >
            <button className={st.modalCloseBtn} onClick={onRequestClose}>
                <img src={close} />
            </button>
            <h3 className={st.h3}>Вход</h3>
            <form className={st.form} onSubmit={handleSubmit}>
                <div className={st.mailForm}>
                    <label className={st.label}>E-mail</label>
                    <input
                        className={st.inputMail}
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder=""
                    />
                </div>
                <button className={st.button} type="submit">
                    Далее
                </button>
            </form>
        </Modal>
    );
}

export default AuthorizationModal;