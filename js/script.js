"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button[type='submit']");

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const userConfirmed = confirm("回答を送信しますか??");

    if (userConfirmed) {
      alert("回答を送信しました！！");

      window.location.href = "../page2/index.html";
    }
  });
});
/*---page2*/
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button[type='situmonsubmit']");

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const userConfirmed = confirm("質問を送信しますか??");

    if (userConfirmed) {
      alert("質問を送信しました！！");
      window.location.href = "../page2/index.html";
    }
  });
});

// もっと見るボタンと閉じるボタン
document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.querySelector(".more-btn");
  const closeBtn = document.querySelector(".close-btn");
  const moreHiddenItems = document.querySelectorAll("li.hidden");

  moreBtn.addEventListener("click", function () {
    moreHiddenItems.forEach(function (item) {
      item.classList.remove("hidden");
    });
    moreBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    moreHiddenItems.forEach(function (item) {
      item.classList.add("hidden");
    });
    closeBtn.style.display = "none";
    moreBtn.style.display = "block";
  });
});
