body = document.querySelector("body");
button = document.getElementById("switch");
header = document.querySelector(".header");

button.addEventListener("click", () =>{
    body.classList.toggle("dark");
    header.classList.toggle("bg-warning");
    button.classList.toggle("bg-warning");
})