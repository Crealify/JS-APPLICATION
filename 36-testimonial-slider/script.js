const testimonials = [
    {
        name: "Nova Sharma",
        photoUrl: "images/nova.jpg",
        text: "Thanks guys, keep up the good work! Ice cream is worth much more than I paid. If you aren't sure, always go for Ice cream.",
    },
    {
        name: "Dipesh Paudel",
        photoUrl: "images/dipesh.jpg",
        text: "This is simply unbelievable!",
    },
    {
        name: "Black Adam",
        photoUrl: "images/adam.jpg",
        text: "After using mug my business skyrocketed! The best on the net!",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}
