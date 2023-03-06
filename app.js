//reviewers

const reviews = [
    {
        id: 1,
        name: "Adele",
        job: "Developer",
        img: "./images/Вариант 1 .png",
        text: "Bla"
    },
    {
        id: 2,
        name: "Kate",
        job: "Painter",
        img: "./images/ABC Smile 1 .png",
        text: "fe fe"
    },
    {
        id: 3,
        name: "Peter",
        job: "Programmer",
        img: "./images/ABC Smile .png",
        text: "ble ble"
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getAnimations('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DomContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});



