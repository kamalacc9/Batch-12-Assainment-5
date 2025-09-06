// Navbar heart counter
const heartCount = document.getElementById("heart-count");
let count = 0;

// সব হার্ট আইকন select
const cardHearts = document.getElementsByClassName("heart-card");

// Normal for loop
for (let i = 0; i < cardHearts.length; i++) {
  cardHearts[i].addEventListener("click", function () {
    count += 1; // শুধু ১ করে বাড়াবে
    heartCount.textContent = count;
  });
}
