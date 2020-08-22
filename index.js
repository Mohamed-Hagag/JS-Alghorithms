window.alert("Open consloe");


function printFullName(firstName, lastName) {

    console.log(firstName, lastName);
}
printFullName('Mohamed', 'Hagag');





function ageToToday(day, month, year) {

    var todayDate = new Date();
    var todayDay = todayDate.getDate();

    var birthDate = new Date(year, month - 1, day);
    var birthDay = birthDate.getDate();

    var ageInSeconds = (todayDate - birthDate) / (1000);
    var ageInMin = (ageInSeconds) / (60);
    var ageInHours = (ageInMin) / (60);
    var ageInDays = (ageInHours) / (24);
    var ageInWeeks = (ageInDays) / (7);
    var ageInMonths = (ageInDays) / (30.5);
    var ageInYears = (ageInDays) / (365.25);

    var months = (ageInYears - Math.floor(ageInYears)) * (12);

    var wDays = (ageInWeeks - Math.floor(ageInWeeks)) * (7);


    if (todayDay >= birthDay) {
        var days = (todayDay - birthDay);
    }
    else {
        var days = ((31 + todayDay) - (birthDay));
    };


    // 'WC' below=>'With Comma as thousands separators'

    var ageInDaysWC = ageInDays.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var ageInHoursWC = ageInHours.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var ageInMinWC = ageInMin.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var ageInSecondsWC = ageInSeconds.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    console.log('Age:' + '\n' +
        Math.floor(ageInYears) + ' years ' + Math.floor(months) + ' months ' + days.toFixed() + ' days ' + '\n' +
        'or ' + Math.floor(ageInMonths) + ' months ' + days.toFixed() + ' days ' + '\n' +
        'or ' + Math.floor(ageInWeeks) + ' weeks ' + wDays.toFixed() + ' days ' + '\n' +
        'or ' + ageInDaysWC + ' days ' + '\n' +
        'or ' + ageInHoursWC + ' hours ' + '\n' +
        'or ' + ageInMinWC + ' minutes ' + '\n' +
        'or ' + ageInSecondsWC + ' seconds ' + '\n')
}
ageToToday(25, 7, 1992);





function capitalizeString(string) {
    var x = string.replace(string[0], string.charAt(0).toUpperCase())
    for (i = 0; i <= x.length; i++)
        if ((x[i] == '.') && (x[i + 1] == ' ')) {
            x = x.replace(x[i + 2], x.charAt(i + 2).toUpperCase())
        } else if (((x[i] == '.') && (x[i + 1] !== ' '))) {
            x = x.replace(x[i + 1], x.charAt(i + 1).toUpperCase())

        }
    console.log('"' + x + '"')
}
capitalizeString("hello");
capitalizeString("hello world. it's a lovely day. i should go out");





function oddishOrEvenish(numbers) {

    var x = numbers.toString().split('').map(Number).reduce((a, b) => a + b);
    if ((Number.isInteger(x / 2)) || (x == 0)) {
        console.log('"' + "Evenish" + '"')
    } else {
        console.log('"' + "Oddish" + '"')
    }
}
oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);




function sevenBoom(arrayOfNumbers) {
    var numbers = JSON.stringify(arrayOfNumbers)
    var indx = numbers.indexOf(7);
    if (indx !== -1) {
        console.log("Boom!")
    }
    else {
        console.log("there is no 7 in the array")
    }
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);





function countIdenticalArrays(a, b, c, d) {
    let count = 0;
    if (a.toString() === b.toString()) {
        count++
    }
    if (a.toString() === c.toString()) {
        count++
    }
    if (a.toString() === d.toString()) {
        count++
    }
    if (b.toString() === c.toString()) {
        count++
    }
    if (b.toString() === d.toString()) {
        count++
    }
    if (c.toString() === d.toString()) {
        count++
    }
    console.log(count)
}
countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]);
countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]);
countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]);





function getDays(firstDate, secondDate) {

    var first = Date.parse(firstDate);

    var second = Date.parse(secondDate);

    var days = Math.abs(((first - second) / (1000 * 60 * 60 * 24)));

    console.log(days.toFixed());

}
getDays("June 14, 2019", "June 20, 2019");
getDays("December 29, 2018", "January 1, 2019");
getDays("July 20, 2019", "July 30, 2019");





function reversedBinaryInteger(number) {
    var x = number.toString(2).split("").reverse().join("");
    var y = parseInt(x, 2);
    console.log(y);
}
reversedBinaryInteger(10);
reversedBinaryInteger(12);
reversedBinaryInteger(25);
reversedBinaryInteger(45);





function validName(userName) {
    var userNameRegex = /(^[A-Z][.]( )[A-Z][a-z]{2,10}$)|(^[A-Z][.]( )[A-Z][.]( )[A-Z][a-z]{2,10}$)|(^[A-Z][a-z]{2,10}( )[A-Z][.]( )[A-Z][a-z]{2,10})|(^[A-Z][a-z]{2,10}( )[A-Z][a-z]{2,10}( )[A-Z][a-z]{2,10}$)/
    if (userNameRegex.test(userName) == true) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
validName("H. Wells");
validName("H. G. Wells");
validName("Herbert G. Wells");
validName("Herbert");
validName("h. Wells");
validName("H Wells");
validName("H. George Wells");
validName("H. George W.");
validName("Herb. George Wells");





function timeElapsed(firstTime, secondTime) {
    var seconds = Math.abs((firstTime - secondTime));
    var minutes = (seconds / 60);
    var hours = (minutes / 60);
    var days = (hours / 24);

    var dayString = '';
    var hourString = '';
    var minuteString = '';
    var secondString = '';

    var newDays = Math.floor(days);
    var newHours = Math.floor((days - Math.floor(days)) * 24);
    var newMinutes = Math.floor((hours - Math.floor(hours)) * 60);
    var newSeconds = Math.floor((minutes - Math.floor(minutes)) * 60);


    if (days > 1 && newDays > 1) {
        dayString = " days";
    }
    else {
        dayString = " day";
    }
    if (hours > 1 && newHours > 1) {
        hourString = " hours";
    }
    else {
        hourString = " hour";
    }
    if (minutes > 1 && newMinutes > 1) {
        minuteString = " minutes";
    }
    else {
        minuteString = " minute";
    }
    if (seconds > 1 && newSeconds > 1) {
        secondString = " seconds";
    }
    else {
        secondString = " second";
    }


    if (((Number.isInteger(minutes)) && ((Number.isInteger(hours))) && ((Number.isInteger(days))))) {
        result = '"' + days + dayString + '"'
    }
    else if ((Number.isInteger(minutes)) && (Number.isInteger(hours)) && (days < 1)) {
        result = '"' + hours + hourString + '"'
    }
    else if ((Number.isInteger(minutes)) && (hours < 1)) {
        result = '"' + minutes + minuteString + '"'
    }
    else if (minutes < 1) {
        result = '"' + seconds + secondString + '"'
    }
    else if ((days < 1) && (hours > 1)) {

        result = '"' + newHours + hourString + ', ' + newMinutes + minuteString + ', ' + newSeconds + secondString + '"'
    }
    else if ((hours < 1) && (minutes > 1)) {
        result = '"' + newMinutes + minuteString + ', ' + newSeconds + secondString + '"'
    }
    else if ((days > 1) && (newSeconds > 1)) {
        result = '"' + newDays + dayString + ', ' + newHours + hourString + ', ' + newMinutes + minuteString + ', ' + newSeconds + secondString + '"'
    }
    else if ((days > 1) && (newMinutes < 1) && (newSeconds < 1)) {
        result = '"' + newDays + dayString + ', ' + newHours + hourString + ', ' + '1' + minuteString + '"'
    }
    else if ((days > 1) && (newHours < 1) && (newMinutes < 1) && (newSeconds < 1)) {
        result = '"' + newDays + dayString + ', ' + '1' + hourString + '"'
    }

    console.log(result);
}
timeElapsed(1559813526, 1559899926);
timeElapsed(1559681004, 1559899926);
timeElapsed(1558773066, 1559899926);

































