var dateObject = new Date();
var year = 1701;
var month = 1;
firstSaturdays = [];
for (let year = 1701; year <= 1800; year++) {
    for (let month = 1; month <= 12; month++) {
        dayOfWeek = -1;
        dayOfWeek = dateObject.getDay(year, month, 1);
        console.log(year, month, dayOfWeek)
        if (dayOfWeek == 6) {
            console.log("found saturday");
            firstSaturdays.push(dayOfWeek);
            return dayOfWeek;
        }
    }
}
console.log(firstSaturdays)
