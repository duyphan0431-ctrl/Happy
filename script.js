document.addEventListener("click", function () {
  const flame = document.querySelector(".flame");

  flame.style.animation = "none";

  setTimeout(() => {
    flame.style.animation =
      "flicker .15s infinite alternate";
  }, 10);
});
