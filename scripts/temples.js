const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;



const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");

});
