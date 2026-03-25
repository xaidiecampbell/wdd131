const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;



const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");

})

const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C. Maryland Temple",
        location: "Kensington, Maryland",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru Temple",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Boston Massachusetts Temple",
        location: "Boston, Massachusetts",
        dedicated: "2000, October, 1",
        area: 69600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
    },
    {
        templeName: "Kyiv Ukraine Temple",
        location: "Kyiv, Ukraine",
        dedicated: "2007, June, 23",
        area: 22184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
    },
    {
        templeName: "Taylorsville Utah Temple",
        location: "Taylorsville, Utah",
        dedicated: "2024, June, 2",
        area: 72492,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-44959-main.jpg"
    },
];

createTempleCard(temples);

function createTempleCard() {

    temples.forEach(temple => {
        let templeCard = document.createElement("section");
        let templeName = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");


        templeName.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        templeCard.appendChild(templeName);
        templeCard.appendChild(location);
        templeCard.appendChild(dedication);
        templeCard.appendChild(area);
        templeCard.appendChild(img);

        document.querySelector(".res-grid").appendChild(templeCard);


    });
}

const nonutahLink = document.querySelector("#nonutah");
nonutahLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => !temple.templeName.includes("Utah")));
})

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let templeCard = document.createElement("section");
        let templeName = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");


        templeName.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        templeCard.appendChild(templeName);
        templeCard.appendChild(location);
        templeCard.appendChild(dedication);
        templeCard.appendChild(area);
        templeCard.appendChild(img);

        document.querySelector(".res-grid").appendChild(templeCard);


    });
}

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () =>
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return year < 2010;
    })));

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () =>
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated);
        return year > 2010;
    })));

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () =>
    createTempleCard(temples.filter(temple => {
        const area = parseInt(temple.area);
        return area < 10000;
    })));

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () =>
    createTempleCard(temples.filter(temple => {
        const area = parseInt(temple.area);
        return area > 10000;
    })));