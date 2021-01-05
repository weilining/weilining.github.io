(function () {
  const $dom = document.getElementById("click-show-text");
  let config = null;
  config = {
    mobile: $dom.getAttribute("data-mobile"),
    text: $dom.getAttribute("data-text"),
    fontSize: $dom.getAttribute("data-fontsize"),
    random: $dom.getAttribute("data-random"),
  };
  if (
    config.mobile === "false" &&
    /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)
  ) {
    return;
  }

  const randomColor = function () {
    const colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    const colorArray = colorElements.split(",");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let aIdx = 0;

  document.body.addEventListener("click", function (e) {
    const text = config.text.split(",");
    const $span = document.createElement("span");
    if (config.random === "true") {
      aIdx = Math.floor(Math.random() * text.length);
      $span.textContent = text[aIdx];
    } else {
      $span.textContent = text[aIdx];
      aIdx = (aIdx + 1) % text.length;
    }

    const x = e.pageX;
    const y = e.pageY;
    let top = y - 20;

    $span.style.cssText = `
		z-index: 150;
		top: ${top}px;
		left: ${x - 20}px;
		position: absolute;
		font-weight: bold;
		color: ${randomColor()};
		cursor: default;
		font-size: ${config.fontSize || "inherit"};
		word-break: break-word;
	  `;
    this.appendChild($span);

    // animation
    const initTime = new Date().getTime();
    let opacityValue = 1;

    function animate() {
      top--;
      opacityValue = opacityValue - 0.02;
      $span.style.top = top + "px";
      $span.style.opacity = opacityValue;
      const newTime = new Date().getTime();
      const diff = newTime - initTime;
      if (diff < 600) {
        window.requestAnimationFrame(animate);
      } else {
        $span.remove();
      }
    }
    window.requestAnimationFrame(animate);
  });
  // 雪花
  let e = {
    flakeCount: 100,
    minDist: 150,
    color: "255, 255, 255",
    size: 2,
    speed: 0.5,
    opacity: 0.2,
    stepsize: 0.5,
  };
  const t =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    };
  window.requestAnimationFrame = t;
  const i = document.getElementById("snow"),
    n = i.getContext("2d"),
    o = e.flakeCount;
  let a = -100,
    s = -100,
    d = [];
  (i.width = window.innerWidth), (i.height = window.innerHeight);
  const h = () => {
      n.clearRect(0, 0, i.width, i.height);
      const r = e.minDist;
      for (let t = 0; t < o; t++) {
        let o = d[t];
        const h = a,
          m = s,
          w = o.x,
          c = o.y,
          p = Math.sqrt((h - w) * (h - w) + (m - c) * (m - c));
        if (p < r) {
          const e = (h - w) / p,
            t = (m - c) / p,
            i = r / (p * p) / 2;
          (o.velX -= i * e), (o.velY -= i * t);
        } else
          (o.velX *= 0.98),
            o.velY < o.speed &&
              o.speed - o.velY > 0.01 &&
              (o.velY += 0.01 * (o.speed - o.velY)),
            (o.velX += Math.cos((o.step += 0.05)) * o.stepSize);
        (n.fillStyle = "rgba(" + e.color + ", " + o.opacity + ")"),
          (o.y += o.velY),
          (o.x += o.velX),
          (o.y >= i.height || o.y <= 0) && l(o),
          (o.x >= i.width || o.x <= 0) && l(o),
          n.beginPath(),
          n.arc(o.x, o.y, o.size, 0, 2 * Math.PI),
          n.fill();
      }
      t(h);
    },
    l = (e) => {
      (e.x = Math.floor(Math.random() * i.width)),
        (e.y = 0),
        (e.size = 3 * Math.random() + 2),
        (e.speed = 1 * Math.random() + 0.5),
        (e.velY = e.speed),
        (e.velX = 0),
        (e.opacity = 0.5 * Math.random() + 0.3);
    };
  document.addEventListener("mousemove", (e) => {
    (a = e.clientX), (s = e.clientY);
  }),
    window.addEventListener("resize", () => {
      (i.width = window.innerWidth), (i.height = window.innerHeight);
    }),
    (() => {
      for (let t = 0; t < o; t++) {
        const t = Math.floor(Math.random() * i.width),
          n = Math.floor(Math.random() * i.height),
          o = 3 * Math.random() + e.size,
          a = 1 * Math.random() + e.speed,
          s = 0.5 * Math.random() + e.opacity;
        d.push({
          speed: a,
          velX: 0,
          velY: a,
          x: t,
          y: n,
          size: o,
          stepSize: (Math.random() / 30) * e.stepsize,
          step: 0,
          angle: 180,
          opacity: s,
        });
      }
      h();
    })();
})();
