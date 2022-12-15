const numbers = document.querySelectorAll(".number");
const button = document.querySelector("button");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".tnx");
const scoreBox = document.querySelector(".score")

let score = 0
console.log("rating");


numbers.forEach(number => {
    number.addEventListener("click", activate);

    function activate() {
        numbers.forEach(number => {
            number.classList.remove("active");    
        });
        number.classList.add("active");
        score = number.id;
        scoreBox.innerHTML = "You selected " + score +" out of 5"
    }
});

button.addEventListener("click", switches);

function switches() {
    rating.classList.toggle("hidden");
    thanks.classList.toggle("hidden");
}
