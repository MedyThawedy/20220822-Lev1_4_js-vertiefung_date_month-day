



//https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php

let tageImMonat = (m, y) => {
    let numberOfDays = new Date(y, m, 0).getDate();
    return numberOfDays;

}

console.log(tageImMonat(1, 2016)); //31
console.log(tageImMonat(2, 2016)); //29
console.log(tageImMonat(2, 2017)); //28
console.log(tageImMonat(12, 2017)); //31