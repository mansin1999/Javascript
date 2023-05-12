let display_btn = document.querySelector(".display-btn");
let nevigation = document.querySelector(".nevigation")
let close_btn = document.querySelector(".close-btn")

display_btn.addEventListener("click", function () {
    nevigation.classList.toggle("show_menu");
})

close_btn.addEventListener("click", function () {
    nevigation.classList.remove("show_menu");
})



/*==============css for scroll menubar============ */

function changebg() {
    let menu_fixed = document.querySelector(".header");
    let live = window.scrollY;

    if (live > 0) {
        menu_fixed.classList.add("header-fixed");
    } else {
        menu_fixed.classList.remove("header-fixed");
    }
}

window.addEventListener("scroll",changebg)