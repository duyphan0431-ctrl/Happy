/* =====================================================
   LẤY CÁC PHẦN TỬ
===================================================== */

const openBtn =
  document.getElementById("openBtn");

const book =
  document.getElementById("book");

const tree =
  document.getElementById("heartTree");

const floating =
  document.getElementById("floatingHearts");


let treeCreated = false;
let floatingStarted = false;


/* =====================================================
   TẠO CÂY TRÁI TIM
===================================================== */

function createHeartTree() {

  if (treeCreated) return;

  treeCreated = true;


  /*
    Số lượng tim nhỏ
  */

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

    const heart =
      document.createElement("div");


    heart.className = "heart";


    /*
      Tạo hình trái tim bằng
      phương trình toán học
    */

    const t =
      Math.random() *
      Math.PI * 2;


    /*
      Phân bố từ ngoài vào trong
    */

    const scale =
      Math.sqrt(
        Math.random()
      );


    let x =
      16 *
      Math.pow(
        Math.sin(t),
        3
      );


    let y =
      13 *
        Math.cos(t)
      - 5 *
        Math.cos(2 * t)
      - 2 *
        Math.cos(3 * t)
      - Math.cos(4 * t);


    x *= scale;
    y *= scale;


    /*
      Vị trí tâm
    */

    const centerX = 215;
    const centerY = 155;


    const px =
      centerX +
      x * 8;


    const py =
      centerY -
      y * 8;


    heart.style.left =
      px + "px";


    heart.style.top =
      py + "px";


    /*
      Màu ngẫu nhiên
    */

    heart.style.setProperty(
      "--heart-color",
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ]
    );


    /*
      Kích thước ngẫu nhiên
    */

    const size =
      .5 +
      Math.random() * .9;


    heart.style.width =
      12 * size + "px";


    heart.style.height =
      12 * size + "px";


    /*
      Hiệu ứng xuất hiện
    */

    heart.style.animationDelay =
      (i * .009) + "s";


    /*
      Một số tim phát sáng
    */

    if (
      Math.random() < .10
    ) {

      heart.classList.add(
        "glow"
      );

    }


    tree.appendChild(
      heart
    );

  }

}


/* =====================================================
   NÚT MỞ TRANG
===================================================== */

openBtn.addEventListener(
  "click",
  function () {

    /*
      Lật trang
    */

    book.classList.add(
      "open"
    );


    /*
      Đợi gần lật xong
      rồi mới tạo cây
    */

    setTimeout(
      function () {

        createHeartTree();

        startFloatingHearts();

      },
      900
    );

  }
);


/* =====================================================
   TIM BAY
===================================================== */

function startFloatingHearts() {

  if (floatingStarted) return;

  floatingStarted = true;


  setInterval(
    function () {

      const heart =
        document.createElement(
          "div"
        );


      heart.className =
        "floating";


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
            Math.random() *
            emojis.length
          )
        ];


      /*
        Vị trí ngang
      */

      heart.style.left =
        Math.random() *
        100 +
        "%";


      /*
        Kích thước
      */

      heart.style.fontSize =
        (
          12 +
          Math.random() * 20
        ) +
        "px";


      /*
        Tốc độ bay
      */

      heart.style.animationDuration =
        (
          4 +
          Math.random() * 4
        ) +
        "s";


      floating.appendChild(
        heart
      );


      /*
        Xóa sau khi bay xong
      */

      setTimeout(
        function () {

          heart.remove();

        },
        8500
      );

    },
    650
  );

}    /*
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
