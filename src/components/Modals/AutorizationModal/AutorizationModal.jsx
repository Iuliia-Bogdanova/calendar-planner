import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import st from "./styles.module.scss";
import close from "/icons/close.svg";

function AutorizationModal({ isOpen, onRequestClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [showClear, setShowClear] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (event.target.value !== "") {
            setShowClear(true);
            setError("");
        } else {
            setShowClear(false);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:3004/authentication", {
                identifier: email,
                password: password,
            })
            .then((response) => {
                if (response.data.length > 0) {
                    setIsLogin(false);
                } else {
                    setError("Некорректный e-mail");
                }
            })
            .catch((error) => {
                console.error(error);
                setError(
                    "Произошла ошибка при обработке запроса. Пожалуйста, попробуйте снова."
                );
            });
    };

    const handleClear = () => {
        setEmail("");
        setShowClear(false);
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
                    <div className={st.labelInput}>
                        <label className={st.label}>E-mail</label>
                        <input
                            className={st.inputMail}
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder=""
                        />
                    </div>
                    {showClear && (
                        <button
                            className={
                                st.modalCloseBtn + " " + st.modalCloseBtnSmall
                            }
                            onClick={handleClear}
                        >
                            <img src={close} />
                        </button>
                    )}
                    {error && <p>{error}</p>}
                </div>
                {isLogin ? (
                    <button className={st.button} type="submit">
                        Далее
                    </button>
                ) : (
                    <div>
                        <div className={st.labelInput}>
                            <label className={st.label}>Password</label>
                            <input
                                className={st.inputMail}
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder=""
                            />
                        </div>
                        <button className={st.button} type="submit">
                            Войти
                        </button>
                    </div>
                )}
                {/* <button className={st.button} type="submit">
                    Далее
                </button> */}
            </form>
        </Modal>
    );
}

export default AutorizationModal;
