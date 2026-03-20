const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector("#windchill").textContent =
    calculateWindChill(30, 10);

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1); 
    } else {
        return "N/A";
    }
}