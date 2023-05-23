let menuBar = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");
let heart = document.querySelector("#heart-first");
let glavniy = document.querySelector(".glavniy-pic");
let profile = document.querySelector(".profule-inside");
let body = document.querySelector(".body");
menuBar.addEventListener("click", evt => {
    evt.preventDefault();

    menu.classList.toggle("h-full");
    menu.classList.toggle("block");
   
})

heart.addEventListener("click" , evt =>{
    evt.preventDefault();

    heart.classList.toggle("bg-red-400");
});
glavniy.addEventListener("click" , gl =>{
    gl.preventDefault();

    profile.classList.toggle("h-full")
})



