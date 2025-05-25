function addDays(date, days){
    const msInDay = 86400000;   //мс в одном дне
    const msToAdd = days * msInDay;
    const todayTimestamp = date.getTime();
    const updatedTimestamp = todayTimestamp + msToAdd;
    return new Date(updatedTimestamp);
};

const currentDate = new Date('2007-11-19');
console.log('Текущая дата:', currentDate);

const newDate = addDays(currentDate, 7);
console.log('Новая дата:', newDate);