import React, { useState } from 'react';
import Modal from "react-modal";

import st from "./styles.module.scss";
import close from "/icons/close.svg";
import info from '/icons/info.svg';

function RegistrationModal({ isOpen, onRequestClose }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleRegister = () => {
        const user = {
            username: username,
            password: password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Registration Modal"
            ariaHideApp={false}
            closeTimeoutMS={800}
            overlayClassName={st.overlayWrapper}
            className={st.modalWrapper}
        >
            <button className={st.modalCloseBtn} onClick={onRequestClose}>
                <img src={close} />
            </button>
            <h3 className={st.h3}>Регистрация</h3>
            <div className={st.info}>
                <img src={info} />
                <p>
                    В пароле используйте от 8 до 32 символов: строчные
                    и&nbsp;прописные латинские буквы (A-z), цифры (0-9)
                    и&nbsp;спец&nbsp;символы ( . , : ; ? ! * + % - &lt; &gt; @ [
                    ] {} / \ _ {} $ # )
                </p>
            </div>

            <form>
                <div className={st.registrationForm}>
                    <div className={st.labelInput}>
                        <label className={st.labelUser}>Ваше имя</label>
                        <input
                            className={st.inputUser}
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={st.labelInput}>
                        <label className={st.labelPassword}>Пароль</label>
                        <input
                            className={st.inputPassword}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={st.labelInput}>
                        <label className={st.labelPasswordConfirm}>
                            Повторить пароль
                        </label>
                        <input
                            className={st.inputPasswordConfirm}
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <button
                        className={st.button}
                        type="button"
                        onClick={handleRegister}
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default RegistrationModal;