// dynamic footer code
const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

let viewCount = localStorage.getItem("pageViews");

if (viewCount === null) {
    viewCount = 1;
} else {
    viewCount = Number(viewCount) + 1;
}

localStorage.setItem("pageViews", viewCount);

// Display it on the page
document.querySelector("#viewCount").textContent = viewCount;

// array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];