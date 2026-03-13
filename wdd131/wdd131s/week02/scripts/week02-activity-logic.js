// //for loop
// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport { i } < LIMIT) {console.log(studentReport[i]);
//     }
// }

// //while loop
// let i = 0;
// while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
//     i++
// }

// //forEach loop
// studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//         console.log(item)
//     }
// });

// //for...in loop
// for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }

//trying it out

const numberOfDays = 6
const options = { weekday: "long" };

const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;


for (let i = 1; i <= numberOfDays; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    const item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);
}




// studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//         console.log(item)
//     }
// });