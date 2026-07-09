const hamburgerBtn = document.querySelector(".js-hamburger");
const spNav = document.querySelector(".js-sp-nav");

hamburgerBtn.addEventListener("click", () => {
  // ボタンとナビゲーションの状態を切り替え
  hamburgerBtn.classList.toggle("is-active");
  spNav.classList.toggle("is-active");

  // 背景のスクロール制御
  if (hamburgerBtn.classList.contains("is-active")) {
    document.body.classList.add("no-scroll");
  } else {
    // 閉じる時はアニメーション（0.4秒）が終わるのを待ってから解除
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 400);
  }
});

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  const container = document.getElementById("carousel");
  const scrollOffset = items[currentIndex].offsetLeft;

  container.scrollTo({
    left: scrollOffset,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // HTMLで設定した目印のクラスを取得
  const openBtns = document.querySelectorAll(".js-slide-open");
  const closeBtns = document.querySelectorAll(".js-slide-close");
  const overlay = document.querySelector(".js-slide-overlay");

  // 【開く】対象のボックスが複数あっても全て機能するように forEach を使用
  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlay.classList.add("is-active"); // スライドインさせる
      document.body.classList.add("no-scroll"); // 背景のスクロールをロック
    });
  });

  // 【閉じる】戻るボタンが押された時の処理
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlay.classList.remove("is-active"); // スライドアウトさせる
      document.body.classList.remove("no-scroll"); // 背景のスクロールロックを解除
    });
  });
});
