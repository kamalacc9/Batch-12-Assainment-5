// Heart Counter
const heartCount = document.getElementById("heart-count");
let count = 0;

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

//  Coin + Call Button
let coins = 100;
const coinDisplays = document.getElementsByClassName("coin-count");

// all coin-count update file
for (let i = 0; i < coinDisplays.length; i++) {
  coinDisplays[i].textContent = coins;
}

const callButtons = document.getElementsByClassName("call");
const historyParent = document.querySelector(".history-parent");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const index = i + 1;

    const serviceNameEl = document.getElementById(`Service-name${index}`);
    const serviceNumEl = document.getElementById(`Service-num${index}`);

    const serviceName = serviceNameEl ? serviceNameEl.innerText : "Unknown";
    const serviceNumber = serviceNumEl ? serviceNumEl.innerText : "N/A";

    // coin check
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    // coin decr
    coins -= 20;
    for (let j = 0; j < coinDisplays.length; j++) {
      coinDisplays[j].textContent = coins;
    }

    // alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // history add
    const time = new Date().toLocaleTimeString();

    const historyCard = document.createElement("div");
    historyCard.className =
      "history-card-parent pt-[16px] pb-[16px] pr-[16px] pl-[16px] w-full h-[86px] bg-[#FAFAFA] rounded-lg flex justify-between items-center";

    historyCard.innerHTML = `
      <div class="w-[215px] h-[54px]">
        <h1 class="font-semibold">${serviceName}</h1>
        <p class="text-gray-500">${serviceNumber}</p>
      </div>
      <div class="w-[89px] h-[25px]">
        <p class="text-sm">${time}</p>
      </div>
    `;

    historyParent.classList.remove("hidden");
    historyParent.prepend(historyCard);
  });
}
// Copy Button + Copy Counter
const copyStore = document.getElementById("copy-store");
let copyCount = 0;

const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].classList.add("cursor-pointer");

  copyButtons[i].addEventListener("click", function (e) {
    e.preventDefault();

    // i+1 diye id dhorechi
    const index = i + 1;
    const serviceNumEl = document.getElementById(`Service-num${index}`);

    if (serviceNumEl) {
      const serviceNumber = serviceNumEl.innerText;

      // number copy section
      navigator.clipboard.writeText(serviceNumber).then(() => {
        // bangla Alert
        alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);
      });

      // Counter update
      copyCount += 1;
      copyStore.textContent = copyCount;
    }
  });
}
// Clear Button
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", function () {
  // history-parent-emty
  historyParent.innerHTML = "";
});
