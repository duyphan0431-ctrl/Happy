const openBtn = document.getElementById("openBtn");
const book = document.getElementById("book");
const tree = document.getElementById("heartTree");
const floating = document.getElementById("floatingHearts");

let treeCreated = false;


/* ================= CÂY TIM ================= */

function createHeartTree() {

  if (treeCreated) return;

  treeCreated = true;

  const total = 430;

  const colors = [
    "#ff4f81",
    "#ff668f",
    "#ff8fab",
    "#e83e70",
    "#ffb3c6",
    "#d92f62",
    "#ff7396"
  ];


  for (let i = 0; i < total; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";


    /*
      Công thức tạo hình trái tim
    */

    let t =
      Math.random() *
      Math.PI * 2;

    const scale =
      Math.sqrt(Math.random());


    let x =
      16 * Math.pow(Math.sin(t), 3);

    let y =
      13 * Math.cos(t)
      - 5 * Math.cos(2 * t)
      - 2 * Math.cos(3 * t)
      - Math.cos(4 * t);


    x *= scale;
    y *= scale;


    const centerX = 165;
    const centerY = 130;


    const px =
      centerX + x * 7;

    const py =
      centerY - y * 7;


    heart.style.left =
      px + "px";

    heart.style.top =
      py + "px";


    heart.style.setProperty(
      "--heart-color",
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ]
    );


    const size =
      0.45 +
      Math.random() * 0.9;


    heart.style.width =
      13 * size + "px";

    heart.style.height =
      13 * size + "px";


    heart.style.animationDelay =
      i * 0.012 + "s";


    if (Math.random() < 0.12) {

      heart.classList.add("glow");

    }


    tree.appendChild(heart);
  }
}


/* ================= MỞ TRANG ================= */

openBtn.addEventListener(
  "click",
  () => {

    book.classList.add("open");


    setTimeout(
      () => {

        createHeartTree();

        startFloatingHearts();

      },
      900
    );

  }
);


/* ================= TIM BAY ================= */

let floatingStarted = false;


function startFloatingHearts() {

  if (floatingStarted) return;

  floatingStarted = true;


  setInterval(
    () => {

      const heart =
        document.createElement("div");


      heart.className =
        "floating";


      const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"
      ];


      heart.innerText =
        emojis[
          Math.floor(
            Math.random() *
            emojis.length
          )
        ];


      heart.style.left =
        Math.random() * 100 + "%";


      heart.style.fontSize =
        12 +
        Math.random() * 20 +
        "px";


      heart.style.animationDuration =
        4 +
        Math.random() * 4 +
        "s";


      floating.appendChild(heart);


      setTimeout(
        () => heart.remove(),
        8000
      );

    },
    700
  );
}      16 *
      Math.pow(Math.sin(t), 3);

    let y =
      13 * Math.cos(t)
      - 5 * Math.cos(2 * t)
      - 2 * Math.cos(3 * t)
      - Math.cos(4 * t);

    /*
      Thu nhỏ / phóng to
    */

    x *= scale;
    y *= scale;

    /*
      Chuyển sang vị trí trên cây
    */

    const centerX = 165;
    const centerY = 130;

    const px =
      centerX + x * 7;

    const py =
      centerY - y * 7;


    heart.style.left = px + "px";
    heart.style.top = py + "px";


    /*
      Nhiều màu trái tim
    */

    const colors = [
      "#ff4f81",
      "#ff668f",
      "#ff8fab",
      "#e83e70",
      "#ffb3c6",
      "#d92f62",
      "#ff7396"
    ];

    heart.style.setProperty(
      "--heart-color",
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ]
    );


    /*
      Kích thước ngẫu nhiên
    */

    const size =
      0.45 +
      Math.random() * 0.9;

    heart.style.width =
      13 * size + "px";

    heart.style.height =
      13 * size + "px";


    /*
      Tim xuất hiện lần lượt
    */

    heart.style.animationDelay =
      (i * 0.012) + "s";


    /*
      Một số tim lung linh
    */

    if (Math.random() < 0.12) {
      heart.classList.add("glow");
    }


    tree.appendChild(heart);
  }
}


/* =================================
   LẬT TRANG
================================= */

openBtn.addEventListener("click", () => {

  book.classList.add("open");

  /*
    Bắt đầu tạo cây sau khi lật
  */

  setTimeout(() => {

    createHeartTree();

    startFloatingHearts();

  }, 900);

});


/* =================================
   TIM BAY
================================= */

function startFloatingHearts() {

  setInterval(() => {

    const heart =
      document.createElement("div");

    heart.className = "floating";

    const emojis = [
      "❤️",
      "💕",
      "💗",
      "💖",
      "💓"
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
      (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
      (4 + Math.random() * 4) + "s";


    floating.appendChild(heart);


    setTimeout(() => {
      heart.remove();
    }, 8000);

  }, 700);
}
