let icon = document.querySelector(".fa-moon")
icon.addEventListener("click", function () {
    document.body.classList.toggle("dark_mode")

    if (document.body.classList.contains("dark_mode") == true) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
})
