export const diffDate = (arrivalDate, leaveDate) => {
    const timeStart = new Date(leaveDate).getTime();
    const timeEnd = new Date(arrivalDate).getTime();
    const hourDiff = timeEnd - timeStart;
    const minDiff = hourDiff / 60 / 1000;
    const hDiff = hourDiff / 3600 / 1000;
    const humanReadable = {};
    humanReadable.hours = Math.floor(hDiff);
    humanReadable.minutes = minDiff - 60 * humanReadable.hours;
    return humanReadable;
};

export const timeOfFlights = (arrivalDate, leaveDate) => {
    const arrivalHour = new Date(arrivalDate).getHours();
    const arrivalMinutes = new Date(arrivalDate).getMinutes();
    const leaveHour = new Date(leaveDate).getHours();
    const leavelMinutes = new Date(leaveDate).getMinutes();
    return {
        arrival: {
            hours: arrivalHour,
            minutes: arrivalMinutes,
        },
        leave: {
            hours: leaveHour,
            minutes: leavelMinutes,
        },
    };
};
