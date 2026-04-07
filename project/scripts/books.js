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

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");

})

const books = [
    {
        bookName: "Level 1",
        description: "This level focuses on simple relationship conversation, simple grammar and every-day vocabulary. This book comes with 50 unlisted links to grammar and pronunciation video lessons. This book corresponds with CEFR level A1",
        price: "25 USD",
        pages: 200,
        image:
            "images/book1.webp"
    },
    {
        bookName: "Level 2",
        description: "This level focuses on simple relationship conversation, simple grammar and every-day vocabulary. This book comes with 50 unlisted links to grammar and pronunciation video lessons. This book corresponds with CEFR level A2",
        price: "25 USD",
        pages: 200,
        image:
            "images/book2.webp"
    },
    {
        bookName: "Level 3",
        description: "This level focuses on developing relationship conversation, developing grammar and every-day vocabulary. This book comes with 50 unlisted links to grammar and pronunciation video lessons. This book corresponds with CEFR level B1",
        price: "25 USD",
        pages: 250,
        image:
            "images/book3.webp"
    },
    {
        bookName: "Level 4",
        description: "This level focuses on developing relationship conversation, developing grammar and every-day vocabulary. This book comes with 50 unlisted links to grammar and pronunciation video lessons. This book corresponds with CEFR level B2",
        price: "25 USD",
        pages: 300,
        image:
            "images/book4.webp"
    },
    {
        bookName: "Level 5",
        description: "This level focuses on nuances in relationship conversation, complex grammar and every-day vocabulary. This book comes with 50 unlisted links to grammar and pronunciation video lessons. This book corresponds with CEFR level C1",
        price: "25 USD",
        pages: 350,
        image:
            "images/book5.webp"
    },
    {
        bookName: "Level 6",
        description: "This level focuses on nuances in relationship conversation, complex grammar and every-day vocabulary. This book comes with 50 unlisted links to grammar and pronunciation video lessons. This book corresponds with CEFR level C2",
        price: "25 USD",
        pages: 400,
        image:
            "images/book6.webp"
    },
    
];

createBookCard(books);

function createBookCard(bookList) {

    bookList.forEach(book => {
        let bookCard = document.createElement("section");
        let bookName = document.createElement("h3");
        let description = document.createElement("p");
        let price = document.createElement("p");
        let pages = document.createElement("p");
        let img = document.createElement("img");

        bookName.textContent = book.bookName;
        description.innerHTML = `<span class="label">Description:</span> ${book.description}`;
        price.innerHTML = `<span class="label">Price:</span> ${book.price}`;
        pages.innerHTML = `<span class="label">Pages:</span> ${book.pages}`;
        img.setAttribute("src", book.image);
        img.setAttribute("alt", `${book.bookName} Book`);
        img.setAttribute("loading", "lazy");

        bookCard.appendChild(bookName);
        bookCard.appendChild(description);
        bookCard.appendChild(price);
        bookCard.appendChild(pages);
        bookCard.appendChild(img);

        document.querySelector(".res-grid").appendChild(bookCard);
    });
}

let viewCount = localStorage.getItem("pageViews");

if (viewCount === null) {
    viewCount = 1;
} else {
    viewCount = Number(viewCount) + 1;
}

localStorage.setItem("pageViews", viewCount);

document.querySelector("#viewCount").textContent = viewCount;