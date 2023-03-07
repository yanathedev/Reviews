//selection of the used elements
const reviews = [
    {
        id: 1,
        name: "Kate",
        job: "Painter",
        img: "./images/ABC Smile .png",
        text: "Bla bla"
    },
    {
        id: 2,
        name: "Fave",
        job: "Artist",
        img: "./images/ABC Smile 1 .png",
        text: "LA LA"
    },
    {
        id: 3,
        name: "Ksey",
        job: "Construction-worker",
        img: "./images/Вариант 1 .png",
        text: "FEEEE"
    }
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})

