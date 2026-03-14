const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastmodified").textContent = document.lastModified;



const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");

});
