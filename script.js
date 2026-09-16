document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.getElementById("openBtn");
  const backBtn = document.getElementById("backBtn");

  const book = document.getElementById("book");
  const tree = document.getElementById("heartTree");
  const floating = document.getElementById("floatingHearts");

  let treeCreated = false;
  let floatingStarted = false;

  /* =========================
     TẠO CÂY TIM
  ========================= */

  function createHeartTree() {

    if (treeCreated) return;

    treeCreated = true;

    const total = 480;

    const colors = [
      "#ff3f75",
      "#ff527f",
      "#ff6d91",
      "#ff86a3",
      "#e93669",
      "#ff9fb5",
      "#d92f62"
    ];

    for (let i = 0; i < total; i++) {

      const heart = document.createElement("div");

      heart.className = "heart";

      const t = Math.random() * Math.PI * 2;
      const scale = Math.sqrt(Math.random());

      let x =
        16 * Math.pow(Math.sin(t), 3);

      let y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

      x *= scale;
      y *= scale;

      const centerX = 215;
      const centerY = 155;

      const px = centerX + x * 8;
      const py = centerY - y * 8;

      heart.style.left = px + "px";
      heart.style.top = py + "px";

      heart.style.setProperty(
        "--heart-color",
        colors[
          Math.floor(
            Math.random() * colors.length
          )
        ]
      );

      const size =
        0.5 + Math.random() * 0.9;

      heart.style.width =
        12 * size + "px";

      heart.style.height =
        12 * size + "px";

      /* Hiệu ứng xuất hiện từng trái tim */
      heart.style.animationDelay =
        (i * 0.009) + "s";

      /* Một số tim phát sáng */
      if (Math.random() < 0.1) {
        heart.classList.add("glow");
      }

      tree.appendChild(heart);
    }
  }


  /* =========================
     TIM BAY
  ========================= */

  function startFloatingHearts() {

    if (floatingStarted) return;

    floatingStarted = true;

    setInterval(function () {

      const heart =
        document.createElement("div");

      heart.className = "floating";

      const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
      ];

      heart.innerText =
        emojis[
          Math.floor(
            Math.random() * emojis.length
          )
        ];

      heart.style.left =
        Math.random() * 100 + "%";

      heart.style.fontSize =
        12 + Math.random() * 20 + "px";

      heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

      floating.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 8500);

    }, 650);
  }


  /* =========================
     MỞ TRANG
  ========================= */

  if (openBtn) {

    openBtn.addEventListener(
      "click",
      function () {

        book.classList.add("open");

        /* Cho trang chuyển trước */
        setTimeout(function () {

          createHeartTree();
          startFloatingHearts();

        }, 500);

      }
    );
  }


  /* =========================
     QUAY LẠI
  ========================= */

  if (backBtn) {

    backBtn.addEventListener(
      "click",
      function () {

        book.classList.remove("open");

      }
    );
  }

});
