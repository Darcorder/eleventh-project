function convertMsToDays(ms) {
    const msInDay = 1000 * 60 * 60 * 24; //Сколько миллисекнуд в дне
    return Math.round(ms / msInDay);
};

function getDaysBeforeBirthday(nextBirthdayDate) {
    const timeNow = new Date();
    const differenceDates = nextBirthdayDate.getTime() - timeNow.getTime();
    return convertMsToDays(differenceDates);
};

const myNextBirthday = new Date(2025, 10, 8);
const leftDays = getDaysBeforeBirthday(myNextBirthday);
console.log(`До моего дня рождения осталось ${leftDays} дней`);