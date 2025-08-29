// heart fucntions

document.getElementById("card-box").addEventListener("click", function (e) {
  if (e.target.classList.contains("heart-icon")) {
    let heartCount = document.getElementById("heart-count");
    let newHeartCount = Number(heartCount.innerText) + 1;

    heartCount.innerText = newHeartCount;

    e.target.classList.add("animate");
    setTimeout(() => {
      e.target.classList.remove("animate");
    }, 200);
  }
});

// call functions

document.getElementById("card-box").addEventListener("click", function (e) {
  const phoneBtn = e.target.closest(".phone-button");

  if (phoneBtn) {
    const coin = document.getElementById("coin-count").innerText;
    if (Number(coin) < 20) {
      alert("Insuffient Coin! Please Recharge");
      return;
    }
    document.getElementById("coin-count").innerText = Number(coin) - 20;
    const time = new Date().toLocaleTimeString();
    const title = phoneBtn.parentNode.parentNode.children[1].innerText;

    const mobile = phoneBtn.parentNode.parentNode.children[3].innerText;
    console.log(mobile);

      alert("Calling "+title+". Mobile: "+mobile);
    const newCall = document.createElement("div");
    const history = document.getElementById("history-container");

    newCall.innerHTML = `
                        <div class="flex justify-between items-center mt-3 bg-[#FAFAFA] p-2 rounded-md">
                            <div>
                                <h1 class="font-semibold">${title}</h1>
                                <h1>${mobile}</h1>
                            </div>
                            <h1>${time}</h1>
                        </div>`;

    history.append(newCall);
  }
});

// clear button
document.getElementById("clear").addEventListener("click", function () {
  const history = document.getElementById("history-container");
  history.innerHTML = "";
});
