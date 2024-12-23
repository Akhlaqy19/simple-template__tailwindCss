const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");


toggleThemeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            } 
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            }
    });
    });

    submenuOpenBtn.addEventListener("click", (e) => {
    console.log(submenu);

    submenu.classList.toggle("submenu--open");
    // submenu.classList.add("block");
    // submenu.children.add("child:block");    
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    });

    navOpenBtn.addEventListener("click", () => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
});
