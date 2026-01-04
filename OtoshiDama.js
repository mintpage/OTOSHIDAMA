const giftURL = "https://gift.starbucks.co.jp/c/1767GcDfZg5ca7om7NjXpTS5A2qhU3Fb"; // 本物に差し替え

// HTMLが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("giftBtn").onclick = () => {
    window.location.href = giftURL;
  };
});
