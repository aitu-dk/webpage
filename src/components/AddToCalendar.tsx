import { AddToCalendarButton } from 'add-to-calendar-button-react';

export const AddToCalendar = () => {
    const closestTuesday = () => {
        var today = new Date(), tuesday, day;
        let tuesday_num: number;

        if (today.getDay() == 2 && today.getHours() < 19) {
            return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        } else {
            day = today.getDay();
            tuesday_num = today.getDate() - day + (day < 2 ? 2 : 9);
        }

        tuesday = new Date(today.setDate(tuesday_num));
        return tuesday.getFullYear() + "-" + (('0' + (tuesday.getMonth() + 1)).slice(-2)) + "-" + ('0' + tuesday.getDate()).slice(-2);
    }

    return <div>Testing render</div>
}