import React, { useState} from "react";

// import st from './styles.module.scss';

import Calendar from "./Calendar/Calendar";
import WeekDays from "./WeekDays/WeekDays";
import EventInactiveUserModal from "../Modals/EventInactiveUserModal/EventInactiveUserModal";

const GridCalendar = ({ startDay }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <WeekDays />

            <Calendar startDay={startDay} onCellClick={handleOpenModal} />

            <EventInactiveUserModal isOpen={isModalOpen} onRequestClose={handleCloseModal}
            />

        </div>
    );
};

export default GridCalendar;
