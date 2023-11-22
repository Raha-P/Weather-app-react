import React from "react";

export default function FriendlyDate(props) {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekDays[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div>
            {day} {hours}:{minutes}
        </div>
    )
}