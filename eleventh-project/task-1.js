function getDateFormat(date, separator = '.') {
    const day = date.getDate();
    const month = date.getMonth() +1; 
    const year = date.getFullYear();

    const addZero = (number) => {
        if (number < 10) {
            return '0' + number;
        } else {
            return number.toString();
        }
    }

    const updatedDay = addZero(day);
    const updatedMonth = addZero(month);
    // console.log('day', updatedDay, 'month', updatedMonth, typeof updatedDay);
    return `${updatedDay}${separator}${updatedMonth}${separator}${year}`;
};


const date = new Date('2023-03-05');
console.log(getDateFormat(date)); // '05.03.2023'
console.log(getDateFormat(date, '-')); // '05-03-2023'
