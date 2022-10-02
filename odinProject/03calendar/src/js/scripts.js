console.log("Hello World.");
const currentYear = '2022';
const currentMonth = document.getElementById('month').value;
const monthName = document.getElementById('monthName');
const thisYear = document.getElementById('thisYear');
const daybox = document.getElementsByClassName('day');
const triangle = document.getElementsByClassName('triangle');
const daynum = document.getElementsByClassName('num');
const dayContent = document.getElementsByClassName('dayContent');

// function logchange () {
//     console.log(currentMonth.value);
//     currentMonth = this.value
// }
const setTriangles = function(array, daynumber, tri){
    for (i = 0; i < daynumber.length; i++) {
        array.push(i + 1);
        if ((i%0) !== (i+6)) {
            tri[i].style.borderLeftColor = '#FFFFA1';
        }
        if (i%7 === 0) {
            tri[i].style.borderLeftColor = '#F4B0EE';
            if (i >= 7) {
                tri[i-1].style.borderLeftColor = '#F4B0EE';
            }
            // console.log(i+6);
        } 
    }
}
const setDays = function (array, daynumber, content, tri, topshift, bottomshift) {
    // move day start point by 'topshift' amount(add blank spaces for each point)
    for(i = 0; i < topshift; i++) {
        array.unshift(' ');
    }
    // remove proper number of numbers from end of array
    for(i = 0; i < bottomshift; i++) {
        array.pop();
    }
    // add proper number of spaces to the end
    for(i = 0; i < bottomshift; i++) {
        array.push(' ');
    }
    // insert daynumbers
    for (i = 0; i < daynumber.length; i++) {
        daynumber[i].textContent = array.shift();
        // if calendar space has no number, clear the triangle
        if (daynumber[i].textContent === ' ') {
            content[i].textContent = ' ';
            tri[i].style.borderLeftColor = 'transparent';
        }
    }
}


// Set up the days in the calendar per month and year selected.
const setMonthDays = function(month,year) {
    const daynumArray = [];
    // setTriangles(daynumArray, daynum, triangle);
    monthName.textContent = month;
    thisYear.textContent = year;
    switch(month) {
        case 'JANUARY':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 6, 11);
            break;
        case 'FEBRUARY':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 2, 14);
            break;
        case 'MARCH':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 2, 11);
            break;
        case 'APRIL':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 5, 12);
            break;
        case 'MAY':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 0, 11);
            break;
        case 'JUNE':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 3, 12);
            break;
        case 'JULY':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 5, 11);
            break;
        case 'AUGUST':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 1, 11);
            break;
        case 'SEPTEMBER':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 4, 12);
            break;
        case 'OCTOBER':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 6, 11);
            break;
        case 'NOVEMBER':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 2, 12);
            break;
        case 'DECEMBER':
            setTriangles(daynumArray, daynum, triangle);
            setDays(daynumArray, daynum, dayContent, triangle, 4, 11);
            break;
        default:
            for (i = 0; i < daynum.length; i++) {
                daynum[i].textContent = '';
            }
            console.log('default');
    }
}
// setMonthDays(currentMonth, currentYear);

function changemonth () {
    const month = document.getElementById('month');
    const uppercase = month.value.toUpperCase();
    document.getElementById('whichMonth').innerHTML = uppercase;
    setMonthDays(month.value.toUpperCase(), currentYear);
}
document.getElementById('month').addEventListener(InputEvent, changemonth());