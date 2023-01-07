const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".menu");
const logoEl = document.querySelector("#logo");

console.log(logoEl)


console.log(hamburgerEl);

hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("active");
    navMenuEl.classList.toggle("active");
    logoEl.classList.toggle("active");
    
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburgerEl.classList.remove("active");
//     navMenuEl.classList.remove("active"); 
// }))