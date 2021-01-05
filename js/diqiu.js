var _rm5tat30bj_ = _rm5tat30bj_ || {a: {}, b: []};
(function (d, o) {
  var e,
    a,
    s,
    t = d.getElementsByTagName("script"),
    i = t.length;
  w: while (i--) {e = t[i];
    if (e.src) {a = d.createElement("a");
      a.href = (e.src.match(/^\/\//) ? "http:" : "") + e.src;
      if (a.hostname.match(/\.revolvermaps\.com$/i) &&
        a.pathname.match(/^\/?0\/0\/5\.js$/)
      ) {
        s = o.b.length;
        while (s--) if (o.b[s] === e) continue w;
        o.b.push(e);
        function p(t) {t = new RegExp("[&\\?]" + t + "=([^&]*)").exec(a.search);
          return t ? t[1] : "";
        }
        function b(i, t, u) {i = d.createElement("iframe");
          if (
            !(
              "IntersectionObserverEntry" in window &&
              "isIntersecting" in window.IntersectionObserverEntry.prototype
            )
          )
            i.onload = function () {(function l(a) {if (!d.hidden) {a = i.getBoundingClientRect();
                  i.contentWindow.postMessage(
                    a.top < window.innerHeight &&
                      a.left < window.innerWidth &&
                      a.bottom > 0 &&
                      a.right > 0,
                    "*"
                  );
                }
                setTimeout(l, 400);
              })();};
          i.setAttribute("style", "background:transparent !important");
          i.setAttribute("scrolling", "no");
          i.setAttribute("frameborder", "0");
          i.setAttribute("allowTransparency", "true");
          i.setAttribute("width", p("s") || "100%");
          i.setAttribute("height", p("s") || "100%");
          i.setAttribute("src", "//" + a.hostname + "/w/5/a/a2.php" + a.search);
          u = i;
          if (!p("s")) {t = d.createElement("div");
            t.style.position = "relative";
            t.style.paddingTop = "100%";
            i.style.position = "absolute";
            i.style.top = i.style.left = 0;
            t.appendChild(i);
            u = d.createElement("div");
            u.style.maxWidth = "180px";
            u.style.margin = "0 auto";
            u.appendChild(t);
          }
          e.parentNode.insertBefore(u, e);
        }
        s = p("i");
        if (!o.a[s]) {o.a[s] = [b];
          i = new Image();
          i.onload = i.onerror = function () {while (o.a[s].length) o.a[s].pop()();
            o.a[s] = 1;
          };
          i.src = "//" + a.hostname + "/js/c.php?i=" + s;
          t = new Image();
          t.onload = function () {this.width = 1;};
          t.src =
            "//" +
            a.hostname +
            "/js/r.php?i=" +
            s +
            "&l=" +
            encodeURIComponent(d.URL) +
            "&r=" +
            new Date().getTime();
        } else if (o.a[s] === 1) b();
        else {o.a[s].push(b);
        }
        break;
      }
    }
  }
})(document, _rm5tat30bj_);
