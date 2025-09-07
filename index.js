// Navbar heart counter
const heartCount = document.getElementById("heart-count");
let count = 0;

// সব heart select
const cardHearts = document.getElementsByClassName("heart-card");

for (let i = 0; i < cardHearts.length; i++) {
  cardHearts[i].classList.add("cursor-pointer");

  cardHearts[i].addEventListener("click", function (e) {
    e.preventDefault();
    count += 1;
    heartCount.textContent = count;
  });

  cardHearts[i].addEventListener("touchstart", function (e) {
    e.preventDefault();
    count += 1;
    heartCount.textContent = count;
  });
}
