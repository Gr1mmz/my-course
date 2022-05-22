const burgerBtn = document.querySelector(".burger-btn");
burgerBtn.addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.toggle("active");
    burgerBtn.classList.toggle("active");
});