/*
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

const grid = document.querySelector(".grid");

grid.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("gridItem")) return;
    e.target.style.opacity = "0"
})

grid.addEventListener("mouseout", (e) => {
    if (!e.target.classList.contains("gridItem")) return;
  e.target.style.opacity = "1"
})


