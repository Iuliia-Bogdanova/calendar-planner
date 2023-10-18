import React,  { useState} from "react";
import moment from "moment";
import Modal from 'react-modal';
import EventInactiveUserModal from "../../Modals/EventInactiveUserModal/EventInactiveUserModal";

import st from "./styles.module.scss";

import { russianShortMonths } from "../../../helpers/constants";

const Calendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(totalDays)].map(() =>
        day.add(1, "day").clone()
    );

    const isPastEvent = (eventDate) => {
        const currentDay = moment();
        return eventDate.isBefore(currentDay);
    };

    const [selectedDay, setSelectedDay] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={st.cellsWrapper}>
            {daysArray.map((dayItem) => (
                <div
                    className={st.cells}
                    key={dayItem.format("DDMMYYY")}
                    onClick={() => setSelectedDay(dayItem)}
                >
                    <span
                        style={{
                            opacity: dayItem.isSame(moment(), "month")
                                ? 1
                                : 0.5,
                        }}
                    >
                        {dayItem.date() === 1
                            ? `${dayItem.date()} ${
                                  russianShortMonths[dayItem.month()]
                              }${dayItem.month() === 4 ? "" : "."}`
                            : dayItem.format("D")}
                    </span>
                    <p
                        className={st.event}
                        style={{ opacity: isPastEvent(dayItem) ? 0.5 : 1 }}
                    >
                        event1
                    </p>
                    <p
                        className={st.event}
                        style={{ opacity: isPastEvent(dayItem) ? 0.5 : 1 }}
                    >
                        event2
                    </p>
                </div>
            ))}
            <Modal
                isOpen={selectedDay !== null}
                onRequestClose={() => setSelectedDay(null)}
                ariaHideApp={false}
                // в react-modal вложенные окна всегда с двойным оверлеем, решается через рендеринг портала ReactDOM.createPortal
            >
                <EventInactiveUserModal
                    isOpen={selectedDay !== null}
                    onRequestClose={() => setSelectedDay(null)}
                />
            </Modal>
        </div>
    );
};

export default Calendar;
