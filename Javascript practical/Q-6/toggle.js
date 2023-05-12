let display_btn = document.querySelector(".display-btn");
let nevigation = document.querySelector(".nevigation")
let close_btn = document.querySelector(".close-btn")

display_btn.addEventListener("click", function () {
    nevigation.classList.toggle("show_menu");
})

close_btn.addEventListener("click", function () {
    nevigation.classList.remove("show_menu");
})



