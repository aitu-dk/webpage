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

    return <AddToCalendarButton
        name="BLISS Meeting"
        description="Weekly meeting of the Berlin Learning & Intelligent Systems Society"
        startDate={closestTuesday()}
        startTime="19:00"
        endTime="21:00"
        timeZone="Europe/Berlin"
        location="Erweiterungsbau der Technischen Universität Berlin, EB 302, Str. des 17. Juni 145, 10623 Berlin"
        recurrence="weekly"
        options={['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com']}
        iCalFileName="bliss-meeting"
        buttonStyle='date'
    ></AddToCalendarButton>
}