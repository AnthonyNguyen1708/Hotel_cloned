/** 
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/lightgallery@2.1.3/lightgallery.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * lightgallery | 2.1.3 | June 7th 2021
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.lightGallery = e());
  })(this, function () {
    "use strict";
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */ var t =
      function () {
        return (t =
          Object.assign ||
          function (t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var n in (e = arguments[i]))
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
          }).apply(this, arguments);
      };
    !(function () {
      if ("function" == typeof window.CustomEvent) return !1;
      window.CustomEvent = function (t, e) {
        e = e || { bubbles: !1, cancelable: !1, detail: null };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
      };
    })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector);
    var e = (function () {
      function t(t) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(t)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (t.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (t) {
              var e = (16 * Math.random()) | 0;
              return ("x" == t ? e : (3 & e) | 8).toString(16);
            }
          );
        }),
        (t.prototype._getSelector = function (t, e) {
          return (
            void 0 === e && (e = document),
            "string" != typeof t
              ? t
              : ((e = e || document),
                "#" === t.substring(0, 1)
                  ? e.querySelector(t)
                  : e.querySelectorAll(t))
          );
        }),
        (t.prototype._each = function (t) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, t)
                : t(this.selector, 0),
              this)
            : this;
        }),
        (t.prototype._setCssVendorPrefix = function (t, e, i) {
          var s = e.replace(/-([a-z])/gi, function (t, e) {
            return e.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(s)
            ? ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
              (t.style["webkit" + s] = i),
              (t.style["moz" + s] = i),
              (t.style["ms" + s] = i),
              (t.style["o" + s] = i))
            : (t.style[s] = i);
        }),
        (t.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (t.prototype.isEventMatched = function (t, e) {
          var i = e.split(".");
          return t
            .split(".")
            .filter(function (t) {
              return t;
            })
            .every(function (t) {
              return -1 !== i.indexOf(t);
            });
        }),
        (t.prototype.attr = function (t, e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.getAttribute(t)
              : ""
            : (this._each(function (i) {
                i.setAttribute(t, e);
              }),
              this);
        }),
        (t.prototype.find = function (t) {
          return i(this._getSelector(t, this.selector));
        }),
        (t.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? i(this.selector[0])
            : i(this.selector);
        }),
        (t.prototype.eq = function (t) {
          return i(this.selector[t]);
        }),
        (t.prototype.parent = function () {
          return i(this.selector.parentElement);
        }),
        (t.prototype.get = function () {
          return this._getFirstEl();
        }),
        (t.prototype.removeAttr = function (t) {
          var e = t.split(" ");
          return (
            this._each(function (t) {
              e.forEach(function (e) {
                return t.removeAttribute(e);
              });
            }),
            this
          );
        }),
        (t.prototype.wrap = function (t) {
          if (!this.firstElement) return this;
          var e = document.createElement("div");
          return (
            (e.className = t),
            this.firstElement.parentNode.insertBefore(e, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            e.appendChild(this.firstElement),
            this
          );
        }),
        (t.prototype.addClass = function (t) {
          return (
            void 0 === t && (t = ""),
            this._each(function (e) {
              t.split(" ").forEach(function (t) {
                e.classList.add(t);
              });
            }),
            this
          );
        }),
        (t.prototype.removeClass = function (t) {
          return (
            this._each(function (e) {
              t.split(" ").forEach(function (t) {
                e.classList.remove(t);
              });
            }),
            this
          );
        }),
        (t.prototype.hasClass = function (t) {
          return !!this.firstElement && this.firstElement.classList.contains(t);
        }),
        (t.prototype.hasAttribute = function (t) {
          return !!this.firstElement && this.firstElement.hasAttribute(t);
        }),
        (t.prototype.toggleClass = function (t) {
          return this.firstElement
            ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this)
            : this;
        }),
        (t.prototype.css = function (t, e) {
          var i = this;
          return (
            this._each(function (s) {
              i._setCssVendorPrefix(s, t, e);
            }),
            this
          );
        }),
        (t.prototype.on = function (e, i) {
          var s = this;
          return this.selector
            ? (e.split(" ").forEach(function (e) {
                Array.isArray(t.eventListeners[e]) || (t.eventListeners[e] = []),
                  t.eventListeners[e].push(i),
                  s.selector.addEventListener(e.split(".")[0], i);
              }),
              this)
            : this;
        }),
        (t.prototype.once = function (t, e) {
          var i = this;
          return (
            this.on(t, function () {
              i.off(t), e(t);
            }),
            this
          );
        }),
        (t.prototype.off = function (e) {
          var i = this;
          return this.selector
            ? (Object.keys(t.eventListeners).forEach(function (s) {
                i.isEventMatched(e, s) &&
                  (t.eventListeners[s].forEach(function (t) {
                    i.selector.removeEventListener(s.split(".")[0], t);
                  }),
                  (t.eventListeners[s] = []));
              }),
              this)
            : this;
        }),
        (t.prototype.trigger = function (t, e) {
          if (!this.firstElement) return this;
          var i = new CustomEvent(t.split(".")[0], { detail: e || null });
          return this.firstElement.dispatchEvent(i), this;
        }),
        (t.prototype.load = function (t) {
          var e = this;
          return (
            fetch(t).then(function (t) {
              e.selector.innerHTML = t;
            }),
            this
          );
        }),
        (t.prototype.html = function (t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (e) {
                e.innerHTML = t;
              }),
              this);
        }),
        (t.prototype.append = function (t) {
          return (
            this._each(function (e) {
              "string" == typeof t
                ? e.insertAdjacentHTML("beforeend", t)
                : e.appendChild(t);
            }),
            this
          );
        }),
        (t.prototype.prepend = function (t) {
          return (
            this._each(function (e) {
              e.insertAdjacentHTML("afterbegin", t);
            }),
            this
          );
        }),
        (t.prototype.remove = function () {
          return (
            this._each(function (t) {
              t.parentNode.removeChild(t);
            }),
            this
          );
        }),
        (t.prototype.empty = function () {
          return (
            this._each(function (t) {
              t.innerHTML = "";
            }),
            this
          );
        }),
        (t.prototype.scrollTop = function (t) {
          return void 0 !== t
            ? ((document.body.scrollTop = t),
              (document.documentElement.scrollTop = t),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (t.prototype.scrollLeft = function (t) {
          return void 0 !== t
            ? ((document.body.scrollLeft = t),
              (document.documentElement.scrollLeft = t),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (t.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var t = this.firstElement.getBoundingClientRect(),
            e = i("body").style().marginLeft;
          return {
            left: t.left - parseFloat(e) + this.scrollLeft(),
            top: t.top + this.scrollTop(),
          };
        }),
        (t.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (t.prototype.width = function () {
          var t = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(t.paddingLeft) -
            parseFloat(t.paddingRight)
          );
        }),
        (t.prototype.height = function () {
          var t = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(t.paddingTop) -
            parseFloat(t.paddingBottom)
          );
        }),
        (t.eventListeners = {}),
        t
      );
    })();
    function i(t) {
      return new e(t);
    }
    var s = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function n(t) {
      return "href" === t
        ? "src"
        : (t = (t =
            (t = t.replace("data-", "")).charAt(0).toLowerCase() +
            t.slice(1)).replace(/-([a-z])/g, function (t) {
            return t[1].toUpperCase();
          }));
    }
    var o = function (t, e, s, n) {
        void 0 === s && (s = 0);
        var o = i(t).attr("data-lg-size") || n;
        if (o) {
          var r = o.split(",");
          if (r[1])
            for (var l = window.innerWidth, a = 0; a < r.length; a++) {
              var g = r[a];
              if (parseInt(g.split("-")[2], 10) > l) {
                o = g;
                break;
              }
              a === r.length - 1 && (o = g);
            }
          var h = o.split("-"),
            d = parseInt(h[0], 10),
            c = parseInt(h[1], 10),
            u = e.width(),
            m = e.height() - s,
            p = Math.min(u, d),
            f = Math.min(m, c),
            v = Math.min(p / d, f / c);
          return { width: d * v, height: c * v };
        }
      },
      r = function (t, e, s, n, o) {
        if (o) {
          var r = i(t).find("img").first();
          if (r.get()) {
            var l = e.get().getBoundingClientRect(),
              a = l.width,
              g = e.height() - (s + n),
              h = r.width(),
              d = r.height(),
              c = r.style(),
              u =
                (a - h) / 2 -
                r.offset().left +
                (parseFloat(c.paddingLeft) || 0) +
                (parseFloat(c.borderLeft) || 0) +
                i(window).scrollLeft() +
                l.left,
              m =
                (g - d) / 2 -
                r.offset().top +
                (parseFloat(c.paddingTop) || 0) +
                (parseFloat(c.borderTop) || 0) +
                i(window).scrollTop() +
                s;
            return (
              "translate3d(" +
              (u *= -1) +
              "px, " +
              (m *= -1) +
              "px, 0) scale3d(" +
              h / o.width +
              ", " +
              d / o.height +
              ", 1)"
            );
          }
        }
      },
      l = function (t, e, i, s) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; height: " +
          i +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (s ? 'title="' + s + '"' : "") +
          ' src="' +
          t +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      a = function (t, e, i, s, n, o) {
        var r =
            "<img " +
            i +
            " " +
            (s ? "srcset=" + s : "") +
            "  " +
            (n ? "sizes=" + n : "") +
            ' class="lg-object lg-image" data-index="' +
            t +
            '" src="' +
            e +
            '" />',
          l = "";
        o &&
          (l = ("string" == typeof o ? JSON.parse(o) : o).map(function (t) {
            var e = "";
            return (
              Object.keys(t).forEach(function (i) {
                e += " " + i + '="' + t[i] + '"';
              }),
              "<source " + e + "></source>"
            );
          }));
        return "" + l + r;
      },
      g = function (t) {
        for (var e = [], i = [], s = "", n = 0; n < t.length; n++) {
          var o = t[n].split(" ");
          "" === o[0] && o.splice(0, 1), i.push(o[0]), e.push(o[1]);
        }
        for (var r = window.innerWidth, l = 0; l < e.length; l++)
          if (parseInt(e[l], 10) > r) {
            s = i[l];
            break;
          }
        return s;
      },
      h = function (t) {
        return !!t && !!t.complete && 0 !== t.naturalWidth;
      },
      d = function (t, e, i, s) {
        return (
          '<div class="lg-video-cont ' +
          (s && s.youtube
            ? "lg-has-youtube"
            : s && s.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          i +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (e || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          t +
          '" />\n        </div>'
        );
      },
      c = function (t, e, o, r) {
        var l = [],
          a = (function () {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++)
              t += arguments[e].length;
            var s = Array(t),
              n = 0;
            for (e = 0; e < i; e++)
              for (var o = arguments[e], r = 0, l = o.length; r < l; r++, n++)
                s[n] = o[r];
            return s;
          })(s, e);
        return (
          [].forEach.call(t, function (t) {
            for (var e = {}, s = 0; s < t.attributes.length; s++) {
              var g = t.attributes[s];
              if (g.specified) {
                var h = n(g.name),
                  d = "";
                a.indexOf(h) > -1 && (d = h), d && (e[d] = g.value);
              }
            }
            var c = i(t),
              u = c.find("img").first().attr("alt"),
              m = c.attr("title"),
              p = r ? c.attr(r) : c.find("img").first().attr("src");
            (e.thumb = p),
              o && !e.subHtml && (e.subHtml = m || u || ""),
              (e.alt = u || m || ""),
              l.push(e);
          }),
          l
        );
      },
      u = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      m = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: document.body,
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        showAfterLoad: !0,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
      },
      p = "lgAfterAppendSlide",
      f = "lgInit",
      v = "lgHasVideo",
      y = "lgContainerResize",
      b = "lgUpdateSlides",
      C = "lgAfterAppendSubHtml",
      I = "lgBeforeOpen",
      x = "lgAfterOpen",
      w = "lgSlideItemLoad",
      S = "lgBeforeSlide",
      T = "lgAfterSlide",
      E = "lgPosterClick",
      O = "lgDragStart",
      L = "lgDragMove",
      D = "lgDragEnd",
      z = "lgBeforeNextSlide",
      G = "lgBeforePrevSlide",
      M = "lgBeforeClose",
      k = "lgAfterClose",
      A = 0,
      B = (function () {
        function s(t, e) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.isDummyImageRemoved = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !t)
          )
            return this;
          if (
            (A++,
            (this.lgId = A),
            (this.el = t),
            (this.LGel = i(t)),
            this.generateSettings(e),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (s.prototype.generateSettings = function (e) {
            if (
              ((this.settings = t(t({}, m), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : u())
            ) {
              var i = t(
                t({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = t(t({}, this.settings), i);
            }
          }),
          (s.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (s.prototype.init = function () {
            var t = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(f, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                t.enableDrag(), t.enableSwipe();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (s.prototype.openGalleryOnItemClick = function () {
            for (
              var t = this,
                s = function (s) {
                  var o = n.items[s],
                    r = i(o),
                    l = e.generateUUID();
                  r.attr("data-lg-id", l).on(
                    "click.lgcustom-item-" + l,
                    function (e) {
                      e.preventDefault();
                      var i = t.settings.index || s;
                      t.openGallery(i, o);
                    }
                  );
                },
                n = this,
                o = 0;
              o < this.items.length;
              o++
            )
              s(o);
          }),
          (s.prototype.buildModules = function () {
            var t = this;
            this.settings.plugins.forEach(function (e) {
              t.plugins.push(new e(t, i));
            });
          }),
          (s.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (s.prototype.getSlideItem = function (t) {
            return i(this.getSlideItemId(t));
          }),
          (s.prototype.getSlideItemId = function (t) {
            return "#lg-item-" + this.lgId + "-" + t;
          }),
          (s.prototype.getIdName = function (t) {
            return t + "-" + this.lgId;
          }),
          (s.prototype.getElementById = function (t) {
            return i("#" + this.getIdName(t));
          }),
          (s.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (s.prototype.buildStructure = function () {
            var t = this;
            if (!(this.$container && this.$container.get())) {
              var e = "",
                s = "";
              this.settings.controls &&
                (e =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="Previous slide" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="Next slide" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-sub-html" === this.settings.appendSubHtmlTo &&
                  (s =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var n = "";
              this.settings.allowMediaOverlap && (n += "lg-media-overlap ");
              var o = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                r = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                l =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container ? "lg-inline" : ""),
                a =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="Close gallery" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                g = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="Toggle maximize" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                h =
                  '\n        <div class="' +
                  l +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  o +
                  " " +
                  r +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  n +
                  ' ">\n                    <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg" style="width: ' +
                  this.settings.width +
                  "; height:" +
                  this.settings.height +
                  '">\n                        <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner"></div>\n                        <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                        ' +
                  g +
                  "\n                        " +
                  a +
                  "\n                    </div>\n                    " +
                  e +
                  '\n                    <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                        ' +
                  s +
                  "\n                    </div>\n                </div> \n            </div>\n        </div>\n        ";
              i(this.settings.container).css("position", "relative").append(h),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgContent = this.getElementById("lg-content")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.settings.showAfterLoad && (d += "lg-show-after-load"),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" aria-label="Download" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                i(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    t.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (s.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var t = this.galleryItems[this.index].__slideVideoInfo,
                e = this.getMediaContainerPosition(),
                i = e.top,
                s = e.bottom;
              if (
                ((this.currentImageSize = o(
                  this.items[this.index],
                  this.$lgContent,
                  i + s,
                  t && this.settings.videoMaxSize
                )),
                t && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var n = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", n);
              }
              this.LGel.trigger(y);
            }
          }),
          (s.prototype.resizeVideoSlide = function (t, e) {
            var i = this.getVideoContStyle(e);
            this.getSlideItem(t).find(".lg-video-cont").attr("style", i);
          }),
          (s.prototype.updateSlides = function (t, e) {
            if (
              (this.index > t.length - 1 && (this.index = t.length - 1),
              1 === t.length && (this.index = 0),
              t.length)
            ) {
              var i = this.galleryItems[e].src;
              this.addSlideVideoInfo(t),
                (this.galleryItems = t),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var s = 0;
              this.galleryItems.some(function (t, e) {
                return t.src === i && ((s = e), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                this.loadContent(s, !0),
                this.getSlideItem(s).addClass("lg-current"),
                (this.index = s),
                this.updateCurrentCounter(s),
                this.updateCounterTotal(),
                this.LGel.trigger(b);
            } else this.closeGallery();
          }),
          (s.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var t = i(this.settings.selectWithin);
                  this.items = t.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return c(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (s.prototype.openGallery = function (t, e) {
            var s = this;
            if ((void 0 === t && (t = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.get().focus(),
                this.outer.removeClass("lg-hide-items"),
                this.$container.addClass("lg-show");
              var n = this.getItemsToBeInsertedToDom(t, t);
              this.currentItemsInDom = n;
              var l = "";
              n.forEach(function (t) {
                l = l + '<div id="' + t + '" class="lg-item"></div>';
              }),
                this.$inner.append(l),
                this.addHtml(t);
              var a = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var g = this.mediaContainerPosition,
                h = g.top,
                d = g.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(h, d),
                this.zoomFromOrigin &&
                  e &&
                  ((this.currentImageSize = o(
                    e,
                    this.$lgContent,
                    h + d,
                    this.galleryItems[t].__slideVideoInfo &&
                      this.settings.videoMaxSize
                  )),
                  (a = r(e, this.$lgContent, h, d, this.currentImageSize))),
                (this.zoomFromOrigin && a) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(t).removeClass("lg-complete"));
              var c = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                s.outer.addClass("lg-components-open");
              }, c),
                (this.index = t),
                this.LGel.trigger(I),
                this.getSlideItem(t).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = i(window).scrollTop()),
                setTimeout(function () {
                  if (s.zoomFromOrigin && a) {
                    var e = s.getSlideItem(t);
                    e.css("transform", a),
                      setTimeout(function () {
                        e
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            s.settings.startAnimationDuration + "ms"
                          ),
                          s.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        e.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    s.$backdrop.addClass("in"),
                      s.$container.addClass("lg-show-in");
                  }, 10),
                    (s.zoomFromOrigin && a) ||
                      setTimeout(function () {
                        s.outer.addClass("lg-visible");
                      }, s.settings.backdropDuration),
                    s.slide(t, !1, !1, !1),
                    s.LGel.trigger(x);
                }),
                document.body === this.settings.container &&
                  i("html").addClass("lg-on");
            }
          }),
          (s.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var t = this.$toolbar.get().clientHeight || 0,
              e =
                this.settings.defaultCaptionHeight ||
                this.outer.find(".lg-sub-html").get().clientHeight,
              i = this.outer.find(".lg-thumb-outer").get();
            return { top: t, bottom: (i ? i.clientHeight : 0) + e };
          }),
          (s.prototype.setMediaContainerPosition = function (t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              this.$inner.css("top", t + "px").css("bottom", e + "px");
          }),
          (s.prototype.hideBars = function () {
            var t = this;
            setTimeout(function () {
              t.outer.removeClass("lg-hide-items"),
                t.settings.hideBarsDelay > 0 &&
                  (t.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                    t.outer.removeClass("lg-hide-items"),
                      clearTimeout(t.hideBarTimeout),
                      (t.hideBarTimeout = setTimeout(function () {
                        t.outer.addClass("lg-hide-items");
                      }, t.settings.hideBarsDelay));
                  }),
                  t.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (s.prototype.initPictureFill = function (t) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [t.get()] });
              } catch (t) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (s.prototype.counter = function () {
            if (this.settings.counter) {
              var t =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> / \n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(t);
            }
          }),
          (s.prototype.addHtml = function (t) {
            var e, s;
            if (
              (this.galleryItems[t].subHtmlUrl
                ? (s = this.galleryItems[t].subHtmlUrl)
                : (e = this.galleryItems[t].subHtml),
              !s)
            )
              if (e) {
                var n = e.substring(0, 1);
                ("." !== n && "#" !== n) ||
                  (e =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? i(this.items).eq(t).find(e).first().html()
                      : i(e).first().html());
              } else e = "";
            if (".lg-sub-html" === this.settings.appendSubHtmlTo)
              s
                ? this.outer.find(".lg-sub-html").load(s)
                : this.outer.find(".lg-sub-html").html(e);
            else {
              var o = i(this.getSlideItemId(t));
              s
                ? o.load(s)
                : o.append('<div class="lg-sub-html">' + e + "</div>");
            }
            null != e &&
              ("" === e
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(C, { index: t });
          }),
          (s.prototype.preload = function (t) {
            for (
              var e = 1;
              e <= this.settings.preload && !(e >= this.galleryItems.length - t);
              e++
            )
              this.loadContent(t + e, !1);
            for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
              this.loadContent(t - i, !1);
          }),
          (s.prototype.getDummyImgStyles = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px; \n                margin-left: -" +
                  t.width / 2 +
                  "px;\n                margin-top: -" +
                  t.height / 2 +
                  "px; \n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (s.prototype.getVideoContStyle = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px; \n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (s.prototype.getDummyImageContent = function (t, e, s) {
            var n;
            if ((this.settings.dynamic || (n = i(this.items).eq(e)), n)) {
              var o = void 0;
              if (
                !(o = this.settings.exThumbImage
                  ? n.attr(this.settings.exThumbImage)
                  : n.find("img").first().attr("src"))
              )
                return "";
              var r =
                "<img " +
                s +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                o +
                '" />';
              return (
                t.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
              );
            }
            return "";
          }),
          (s.prototype.setImgMarkup = function (t, e, i) {
            var s = this.galleryItems[i],
              n = s.alt,
              o = s.srcset,
              r = s.sizes,
              l = s.sources,
              g = n ? 'alt="' + n + '"' : "",
              h =
                '<picture class="lg-img-wrap"> ' +
                (!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize
                  ? this.getDummyImageContent(e, i, g)
                  : a(i, t, g, o, r, l)) +
                "</picture>";
            e.prepend(h);
          }),
          (s.prototype.onLgObjectLoad = function (t, e, i, s, n) {
            var o = this;
            n && this.LGel.trigger(w, { index: e, delay: i || 0 }),
              t
                .find(".lg-object")
                .first()
                .on("load.lg", function () {
                  o.handleLgObjectLoad(t, e, i, s, n);
                }),
              setTimeout(function () {
                t.find(".lg-object")
                  .first()
                  .on("error.lg", function () {
                    t.addClass("lg-complete lg-complete_"),
                      t.html(
                        '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                      );
                  });
              }, s);
          }),
          (s.prototype.handleLgObjectLoad = function (t, e, i, s, n) {
            var o = this;
            setTimeout(function () {
              t.addClass("lg-complete lg-complete_"),
                n || o.LGel.trigger(w, { index: e, delay: i || 0 });
            }, s);
          }),
          (s.prototype.isVideo = function (t, e) {
            if (!t)
              return this.galleryItems[e].video
                ? { html5: !0 }
                : void console.error(
                    "lightGallery :- data-src is not provided on slide item " +
                      (e + 1) +
                      ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                  );
            var i = t.match(
                /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
              ),
              s = t.match(
                /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i
              ),
              n = t.match(
                /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
              );
            return i
              ? { youtube: i }
              : s
              ? { vimeo: s }
              : n
              ? { wistia: n }
              : void 0;
          }),
          (s.prototype.addSlideVideoInfo = function (t) {
            var e = this;
            t.forEach(function (t, i) {
              t.__slideVideoInfo = e.isVideo(t.src, i);
            });
          }),
          (s.prototype.loadContent = function (t, e) {
            var s = this,
              n = this.galleryItems[t],
              r = i(this.getSlideItemId(t)),
              c = n.poster,
              u = n.srcset,
              m = n.sizes,
              f = n.sources,
              y = n.src,
              b = n.video,
              C = b && "string" == typeof b ? JSON.parse(b) : b;
            if (n.responsive) {
              var I = n.responsive.split(",");
              y = g(I) || y;
            }
            var x = n.__slideVideoInfo,
              w = "",
              S = !!n.iframe;
            if (!r.hasClass("lg-loaded")) {
              if (x) {
                var T = this.mediaContainerPosition,
                  E = T.top,
                  O = T.bottom,
                  L = o(
                    this.items[t],
                    this.$lgContent,
                    E + O,
                    x && this.settings.videoMaxSize
                  );
                w = this.getVideoContStyle(L);
              }
              if (S) {
                var D = l(
                  y,
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  n.iframeTitle
                );
                r.prepend(D);
              } else if (c) {
                var z = "",
                  G = !this.lGalleryOn,
                  M =
                    !this.lGalleryOn &&
                    this.zoomFromOrigin &&
                    this.currentImageSize;
                M && (z = this.getDummyImageContent(r, t, ""));
                D = d(c, z || "", w, x);
                r.prepend(D);
                var k =
                  (M
                    ? this.settings.startAnimationDuration
                    : this.settings.backdropDuration) + 100;
                setTimeout(function () {
                  s.LGel.trigger(v, {
                    index: t,
                    src: y,
                    html5Video: C,
                    hasPoster: !0,
                    isFirstSlide: G,
                  });
                }, k);
              } else if (x) {
                D = '<div class="lg-video-cont " style="' + w + '"></div>';
                r.prepend(D),
                  this.LGel.trigger(v, {
                    index: t,
                    src: y,
                    html5Video: C,
                    hasPoster: !1,
                  });
              } else if ((this.setImgMarkup(y, r, t), u || f)) {
                var A = r.find(".lg-object");
                this.initPictureFill(A);
              }
              this.LGel.trigger(p, { index: t }),
                this.lGalleryOn &&
                  ".lg-sub-html" !== this.settings.appendSubHtmlTo &&
                  this.addHtml(t);
            }
            var B = 0,
              P = 0;
            this.lGalleryOn ||
              (P =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
              P && !i(document.body).hasClass("lg-from-hash") && (B = P),
              !this.lGalleryOn &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (setTimeout(function () {
                  r.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                r.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if (
                      (r
                        .find(".lg-img-wrap")
                        .append(a(t, y, "", u, m, n.sources)),
                      u || f)
                    ) {
                      var e = r.find(".lg-object");
                      s.initPictureFill(e);
                    }
                    s.onLgObjectLoad(r, t, P, B, !0);
                    var i = r.find(".lg-object").first();
                    h(i.get())
                      ? s.loadContentOnLoad(t, r, B)
                      : i.on("load.lg error.lg", function () {
                          s.loadContentOnLoad(t, r, B);
                        });
                  }, this.settings.startAnimationDuration + 100)),
              r.addClass("lg-loaded"),
              this.onLgObjectLoad(r, t, P, B, !1),
              x && x.html5 && !c && r.addClass("lg-complete lg-complete_"),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !r.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  r.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === e &&
                (r.hasClass("lg-complete_")
                  ? this.preload(t)
                  : r
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        s.preload(t);
                      }));
          }),
          (s.prototype.loadContentOnLoad = function (t, e, i) {
            var s = this;
            setTimeout(function () {
              e.find(".lg-dummy-img").remove(),
                e.removeClass("lg-first-slide"),
                s.outer.removeClass("lg-first-slide-loading"),
                (s.isDummyImageRemoved = !0),
                s.preload(t);
            }, i + 300);
          }),
          (s.prototype.getItemsToBeInsertedToDom = function (t, e, i) {
            var s = this;
            void 0 === i && (i = 0);
            var n = [],
              o = Math.max(i, 3);
            o = Math.min(o, this.galleryItems.length);
            var r = "lg-item-" + this.lgId + "-" + e;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (t, e) {
                  n.push("lg-item-" + s.lgId + "-" + e);
                }),
                n
              );
            if (t < (this.galleryItems.length - 1) / 2) {
              for (var l = t; l > t - o / 2 && l >= 0; l--)
                n.push("lg-item-" + this.lgId + "-" + l);
              var a = n.length;
              for (l = 0; l < o - a; l++)
                n.push("lg-item-" + this.lgId + "-" + (t + l + 1));
            } else {
              for (l = t; l <= this.galleryItems.length - 1 && l < t + o / 2; l++)
                n.push("lg-item-" + this.lgId + "-" + l);
              for (a = n.length, l = 0; l < o - a; l++)
                n.push("lg-item-" + this.lgId + "-" + (t - l - 1));
            }
            return (
              this.settings.loop &&
                (t === this.galleryItems.length - 1
                  ? n.push("lg-item-" + this.lgId + "-0")
                  : 0 === t &&
                    n.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + e),
              n
            );
          }),
          (s.prototype.organizeSlideItems = function (t, e) {
            var s = this,
              n = this.getItemsToBeInsertedToDom(
                t,
                e,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              n.forEach(function (t) {
                -1 === s.currentItemsInDom.indexOf(t) &&
                  s.$inner.append('<div id="' + t + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (t) {
                -1 === n.indexOf(t) && i("#" + t).remove();
              }),
              n
            );
          }),
          (s.prototype.getPreviousSlideIndex = function () {
            var t = 0;
            try {
              var e = this.outer.find(".lg-current").first().attr("id");
              t = parseInt(e.split("-")[3]) || 0;
            } catch (e) {
              t = 0;
            }
            return t;
          }),
          (s.prototype.setDownloadValue = function (t) {
            if (this.settings.download) {
              var e = this.galleryItems[t],
                i = !1 !== e.downloadUrl && (e.downloadUrl || e.src);
              i &&
                !e.iframe &&
                this.getElementById("lg-download").attr("href", i);
            }
          }),
          (s.prototype.makeSlideAnimation = function (t, e, i) {
            var s = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  s.outer.addClass("lg-no-trans"),
                    s.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === t
                      ? (e.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                      : (e.addClass("lg-next-slide"),
                        i.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      s.outer.find(".lg-item").removeClass("lg-current"),
                        e.addClass("lg-current"),
                        s.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (s.prototype.slide = function (t, e, i, s) {
            var n = this,
              r = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(t, r)),
              !this.lGalleryOn || r !== t)
            ) {
              var l = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(t);
                var a = this.getSlideItem(t),
                  g = this.getSlideItem(r),
                  h = this.galleryItems[t],
                  d = h.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(h)),
                  this.setDownloadValue(t),
                  d)
                ) {
                  var c = this.mediaContainerPosition,
                    u = c.top,
                    m = c.bottom,
                    p = o(
                      this.items[t],
                      this.$lgContent,
                      u + m,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(t, p);
                }
                if (
                  (this.LGel.trigger(S, {
                    prevIndex: r,
                    index: t,
                    fromTouch: !!e,
                    fromThumb: !!i,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(t),
                  s || (t < r ? (s = "prev") : t > r && (s = "next")),
                  e)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var f = void 0,
                    v = void 0;
                  l > 2
                    ? ((f = t - 1),
                      (v = t + 1),
                      ((0 === t && r === l - 1) || (t === l - 1 && 0 === r)) &&
                        ((v = 0), (f = l - 1)))
                    : ((f = 0), (v = 1)),
                    "prev" === s
                      ? this.getSlideItem(v).addClass("lg-next-slide")
                      : this.getSlideItem(f).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(s, a, g);
                this.lGalleryOn || this.loadContent(t, !0),
                  setTimeout(function () {
                    n.lGalleryOn && n.loadContent(t, !0),
                      ".lg-sub-html" === n.settings.appendSubHtmlTo &&
                        n.addHtml(t);
                  }, (this.lGalleryOn ? this.settings.speed + 50 : 50) +
                    (e ? 0 : this.settings.slideDelay)),
                  setTimeout(function () {
                    (n.lgBusy = !1),
                      g.removeClass("lg-slide-progress"),
                      n.LGel.trigger(T, {
                        prevIndex: r,
                        index: t,
                        fromTouch: e,
                        fromThumb: i,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (e ? 0 : this.settings.slideDelay));
              }
              this.index = t;
            }
          }),
          (s.prototype.updateCurrentCounter = function (t) {
            this.getElementById("lg-counter-current").html(t + 1 + "");
          }),
          (s.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (s.prototype.getSlideType = function (t) {
            return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image";
          }),
          (s.prototype.touchMove = function (t, e) {
            var i = e.pageX - t.pageX,
              s = e.pageY - t.pageY,
              n = !1;
            if (
              (this.swipeDirection
                ? (n = !0)
                : Math.abs(i) > 15
                ? ((this.swipeDirection = "horizontal"), (n = !0))
                : Math.abs(s) > 15 &&
                  ((this.swipeDirection = "vertical"), (n = !0)),
              n)
            ) {
              var o = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                this.outer.addClass("lg-dragging"), this.setTranslate(o, i, 0);
                var r = o.get().offsetWidth,
                  l = (15 * r) / 100 - Math.abs((10 * i) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -r + i - l,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    r + i + l,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                this.$container.addClass("lg-dragging-vertical");
                var a = 1 - Math.abs(s) / window.innerHeight;
                this.$backdrop.css("opacity", a);
                var g = 1 - Math.abs(s) / (2 * window.innerWidth);
                this.setTranslate(o, 0, s, g, g),
                  Math.abs(s) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (s.prototype.touchEnd = function (t, e, s) {
            var n,
              o = this;
            "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
              setTimeout(function () {
                o.$container.removeClass("lg-dragging-vertical"),
                  o.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === o.swipeDirection) {
                  n = t.pageX - e.pageX;
                  var l = Math.abs(t.pageX - e.pageX);
                  n < 0 && l > o.settings.swipeThreshold
                    ? (o.goToNextSlide(!0), (r = !1))
                    : n > 0 &&
                      l > o.settings.swipeThreshold &&
                      (o.goToPrevSlide(!0), (r = !1));
                } else if ("vertical" === o.swipeDirection) {
                  if (
                    ((n = Math.abs(t.pageY - e.pageY)),
                    o.settings.closable && o.settings.swipeToClose && n > 100)
                  )
                    return void o.closeGallery();
                  o.$backdrop.css("opacity", 1);
                }
                if (
                  (o.outer.find(".lg-item").removeAttr("style"),
                  r && Math.abs(t.pageX - e.pageX) < 5)
                ) {
                  var a = i(s.target);
                  o.isPosterElement(a) && o.LGel.trigger(E);
                }
                o.swipeDirection = void 0;
              }),
              setTimeout(function () {
                o.outer.hasClass("lg-dragging") ||
                  "lg-slide" === o.settings.mode ||
                  o.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (s.prototype.enableSwipe = function () {
            var t = this,
              e = {},
              s = {},
              n = !1,
              o = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (s) {
                s.preventDefault();
                var n = t.getSlideItem(t.index);
                (!i(s.target).hasClass("lg-item") &&
                  !n.get().contains(s.target)) ||
                  t.outer.hasClass("lg-zoomed") ||
                  t.lgBusy ||
                  1 !== s.targetTouches.length ||
                  ((o = !0),
                  (t.touchAction = "swipe"),
                  t.manageSwipeClass(),
                  (e = {
                    pageX: s.targetTouches[0].pageX,
                    pageY: s.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (i) {
                i.preventDefault(),
                  o &&
                    "swipe" === t.touchAction &&
                    1 === i.targetTouches.length &&
                    ((s = {
                      pageX: i.targetTouches[0].pageX,
                      pageY: i.targetTouches[0].pageY,
                    }),
                    t.touchMove(e, s),
                    (n = !0));
              }),
              this.$inner.on("touchend.lg", function (r) {
                if ("swipe" === t.touchAction) {
                  if (n) (n = !1), t.touchEnd(s, e, r);
                  else if (o) {
                    var l = i(r.target);
                    t.isPosterElement(l) && t.LGel.trigger(E);
                  }
                  (t.touchAction = void 0), (o = !1);
                }
              }));
          }),
          (s.prototype.enableDrag = function () {
            var t = this,
              e = {},
              s = {},
              n = !1,
              o = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (s) {
                var o = t.getSlideItem(t.index);
                (i(s.target).hasClass("lg-item") || o.get().contains(s.target)) &&
                  (t.outer.hasClass("lg-zoomed") ||
                    t.lgBusy ||
                    (s.preventDefault(),
                    t.lgBusy ||
                      (t.manageSwipeClass(),
                      (e = { pageX: s.pageX, pageY: s.pageY }),
                      (n = !0),
                      (t.outer.get().scrollLeft += 1),
                      (t.outer.get().scrollLeft -= 1),
                      t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      t.LGel.trigger(O))));
              }),
              i(window).on("mousemove.lg.global" + this.lgId, function (i) {
                n &&
                  t.lgOpened &&
                  ((o = !0),
                  (s = { pageX: i.pageX, pageY: i.pageY }),
                  t.touchMove(e, s),
                  t.LGel.trigger(L));
              }),
              i(window).on("mouseup.lg.global" + this.lgId, function (r) {
                if (t.lgOpened) {
                  var l = i(r.target);
                  o
                    ? ((o = !1), t.touchEnd(s, e, r), t.LGel.trigger(D))
                    : t.isPosterElement(l) && t.LGel.trigger(E),
                    n &&
                      ((n = !1),
                      t.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (s.prototype.manageSwipeClass = function () {
            var t = this.index + 1,
              e = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (e = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (t = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
              this.getSlideItem(t).addClass("lg-next-slide");
          }),
          (s.prototype.goToNextSlide = function (t) {
            var e = this,
              i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(z, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : i
                  ? ((this.index = 0),
                    this.LGel.trigger(z, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      e.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (s.prototype.goToPrevSlide = function (t) {
            var e = this,
              i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(G, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : i
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(G, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      e.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (s.prototype.keyPress = function () {
            var t = this;
            i(window).on("keydown.lg.global" + this.lgId, function (e) {
              t.lgOpened &&
                !0 === t.settings.escKey &&
                27 === e.keyCode &&
                (e.preventDefault(),
                t.settings.allowMediaOverlap &&
                t.outer.hasClass("lg-can-toggle") &&
                t.outer.hasClass("lg-components-open")
                  ? t.outer.removeClass("lg-components-open")
                  : t.closeGallery()),
                t.lgOpened &&
                  t.galleryItems.length > 1 &&
                  (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()),
                  39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()));
            });
          }),
          (s.prototype.arrow = function () {
            var t = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              t.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                t.goToNextSlide();
              });
          }),
          (s.prototype.arrowDisable = function (t) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var e = this.getElementById("lg-prev"),
                i = this.getElementById("lg-next");
              t + 1 < this.galleryItems.length
                ? e.removeAttr("disabled").removeClass("disabled")
                : e.attr("disabled", "disabled").addClass("disabled"),
                t > 0
                  ? i.removeAttr("disabled").removeClass("disabled")
                  : i.attr("disabled", "disabled").addClass("disabled");
            }
          }),
          (s.prototype.setTranslate = function (t, e, i, s, n) {
            void 0 === s && (s = 1),
              void 0 === n && (n = 1),
              t.css(
                "transform",
                "translate3d(" +
                  e +
                  "px, " +
                  i +
                  "px, 0px) scale3d(" +
                  s +
                  ", " +
                  n +
                  ", 1)"
              );
          }),
          (s.prototype.mousewheel = function () {
            var t = this;
            this.outer.on("mousewheel.lg", function (e) {
              !e.deltaY ||
                t.galleryItems.length < 2 ||
                (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(),
                e.preventDefault());
            });
          }),
          (s.prototype.isSlideElement = function (t) {
            return (
              t.hasClass("lg-outer") ||
              t.hasClass("lg-item") ||
              t.hasClass("lg-img-wrap")
            );
          }),
          (s.prototype.isPosterElement = function (t) {
            var e = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              t.hasClass("lg-video-poster") ||
              t.hasClass("lg-video-play-button") ||
              (e && e.contains(t.get()))
            );
          }),
          (s.prototype.toggleMaximize = function () {
            var t = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              t.$container.toggleClass("lg-inline"), t.refreshOnResize();
            });
          }),
          (s.prototype.invalidateItems = function () {
            for (var t = 0; t < this.items.length; t++) {
              var e = i(this.items[t]);
              e.off("click.lgcustom-item-" + e.attr("data-lg-id"));
            }
          }),
          (s.prototype.manageCloseGallery = function () {
            var t = this;
            if (this.settings.closable) {
              var e = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                t.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var n = i(s.target);
                    e = !!t.isSlideElement(n);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    e = !1;
                  }),
                  this.outer.on("mouseup.lg", function (s) {
                    var n = i(s.target);
                    t.isSlideElement(n) &&
                      e &&
                      (t.outer.hasClass("lg-dragging") || t.closeGallery());
                  }));
            }
          }),
          (s.prototype.closeGallery = function (t) {
            var e = this;
            if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
            this.LGel.trigger(M), i(window).scrollTop(this.prevScrollTop);
            var s,
              n = this.items[this.index];
            if (this.zoomFromOrigin && n) {
              var l = this.mediaContainerPosition,
                a = l.top,
                g = l.bottom,
                h = o(
                  n,
                  this.$lgContent,
                  a + g,
                  this.galleryItems[this.index].__slideVideoInfo &&
                    this.settings.videoMaxSize
                );
              s = r(n, this.$lgContent, a, g, h);
            }
            this.zoomFromOrigin && s
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", s))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              i("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var d =
              this.zoomFromOrigin && s
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                e.zoomFromOrigin &&
                  s &&
                  e.outer.removeClass("lg-zoom-from-image"),
                  e.$container.removeClass("lg-show"),
                  e.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      e.settings.backdropDuration + "ms"
                    ),
                  e.outer.removeClass("lg-closing " + e.settings.startClass),
                  e.getSlideItem(e.index).removeClass("lg-start-end-progress"),
                  e.$inner.empty(),
                  e.lgOpened && e.LGel.trigger(k, { instance: e }),
                  e.outer.get() && e.outer.get().blur(),
                  (e.lgOpened = !1);
              }, d + 100),
              d + 100
            );
          }),
          (s.prototype.initModules = function () {
            this.plugins.forEach(function (t) {
              try {
                t.init();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (s.prototype.destroyModules = function (t) {
            this.plugins.forEach(function (e) {
              try {
                t ? e.destroy() : e.closeGallery && e.closeGallery();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (s.prototype.refresh = function (t) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = t || this.getItems()),
              this.openGalleryOnItemClick(),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName(),
              this.LGel.trigger(b);
          }),
          (s.prototype.destroy = function () {
            var t = this,
              e = this.closeGallery(!0);
            setTimeout(function () {
              t.destroyModules(!0),
                t.settings.dynamic || t.invalidateItems(),
                i(window).off(".lg.global" + t.lgId),
                t.LGel.off(".lg"),
                t.$container.remove();
            }, e);
          }),
          s
        );
      })();
    return function (t, e) {
      return new B(t, e);
    };
  });
  //# sourceMappingURL=/sm/5f43f4b7c2670264867a348602d06f9f32748dd5a24bfcdf5e269fbd9b2a85e2.map
  
  
  /*!
   * lightgallery | 2.1.3 | June 7th 2021
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   */
  
  (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
      typeof define === 'function' && define.amd ? define(factory) :
      (global.lgThumbnail = factory());
  }(this, (function () { 'use strict';
  
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  
      var __assign = function() {
          __assign = Object.assign || function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
          };
          return __assign.apply(this, arguments);
      };
  
      var thumbnailsSettings = {
          thumbnail: true,
          animateThumb: true,
          currentPagerPosition: 'middle',
          alignThumbnails: 'middle',
          thumbWidth: 100,
          thumbHeight: '80px',
          thumbMargin: 5,
          appendThumbnailsTo: '.lg-components',
          toggleThumb: false,
          enableThumbDrag: true,
          enableThumbSwipe: true,
          thumbnailSwipeThreshold: 10,
          loadYouTubeThumbnail: true,
          youTubeThumbSize: 1,
      };
  
      /**
       * List of lightGallery events
       * All events should be documented here
       * Below interfaces are used to build the website documentations
       * */
      var lGEvents = {
          afterAppendSlide: 'lgAfterAppendSlide',
          init: 'lgInit',
          hasVideo: 'lgHasVideo',
          containerResize: 'lgContainerResize',
          updateSlides: 'lgUpdateSlides',
          afterAppendSubHtml: 'lgAfterAppendSubHtml',
          beforeOpen: 'lgBeforeOpen',
          afterOpen: 'lgAfterOpen',
          slideItemLoad: 'lgSlideItemLoad',
          beforeSlide: 'lgBeforeSlide',
          afterSlide: 'lgAfterSlide',
          posterClick: 'lgPosterClick',
          dragStart: 'lgDragStart',
          dragMove: 'lgDragMove',
          dragEnd: 'lgDragEnd',
          beforeNextSlide: 'lgBeforeNextSlide',
          beforePrevSlide: 'lgBeforePrevSlide',
          beforeClose: 'lgBeforeClose',
          afterClose: 'lgAfterClose',
      };
  
      var Thumbnail = /** @class */ (function () {
          function Thumbnail(instance, $LG) {
              this.thumbOuterWidth = 0;
              this.thumbTotalWidth = 0;
              this.translateX = 0;
              this.thumbClickable = false;
              // get lightGallery core plugin instance
              this.core = instance;
              this.$LG = $LG;
              return this;
          }
          Thumbnail.prototype.init = function () {
              // extend module default settings with lightGallery core settings
              this.settings = __assign(__assign({}, thumbnailsSettings), this.core.settings);
              this.thumbOuterWidth = 0;
              this.thumbTotalWidth =
                  this.core.galleryItems.length *
                      (this.settings.thumbWidth + this.settings.thumbMargin);
              // Thumbnail animation value
              this.translateX = 0;
              this.setAnimateThumbStyles();
              if (!this.core.settings.allowMediaOverlap) {
                  this.settings.toggleThumb = false;
              }
              if (this.settings.thumbnail) {
                  this.build();
                  if (this.settings.animateThumb) {
                      if (this.settings.enableThumbDrag) {
                          this.enableThumbDrag();
                      }
                      if (this.settings.enableThumbSwipe) {
                          this.enableThumbSwipe();
                      }
                      this.thumbClickable = false;
                  }
                  else {
                      this.thumbClickable = true;
                  }
                  this.toggleThumbBar();
                  this.thumbKeyPress();
              }
          };
          Thumbnail.prototype.build = function () {
              var _this = this;
              this.setThumbMarkup();
              this.manageActiveClassOnSlideChange();
              this.$lgThumb.first().on('click.lg touchend.lg', function (e) {
                  var $target = _this.$LG(e.target);
                  if (!$target.hasAttribute('data-lg-item-id')) {
                      return;
                  }
                  setTimeout(function () {
                      // In IE9 and bellow touch does not support
                      // Go to slide if browser does not support css transitions
                      if (_this.thumbClickable && !_this.core.lgBusy) {
                          var index = parseInt($target.attr('data-lg-item-id'));
                          _this.core.slide(index, false, true, false);
                      }
                  }, 50);
              });
              this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
                  var index = event.detail.index;
                  _this.animateThumb(index);
              });
              this.core.LGel.on(lGEvents.beforeOpen + ".thumb", function () {
                  _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
              });
              this.core.LGel.on(lGEvents.updateSlides + ".thumb", function () {
                  _this.rebuildThumbnails();
              });
              this.core.LGel.on(lGEvents.containerResize + ".thumb", function () {
                  if (!_this.core.lgOpened)
                      return;
                  setTimeout(function () {
                      _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
                      _this.animateThumb(_this.core.index);
                      _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
                  }, 50);
              });
          };
          Thumbnail.prototype.setThumbMarkup = function () {
              var thumbOuterClassNames = 'lg-thumb-outer ';
              if (this.settings.alignThumbnails) {
                  thumbOuterClassNames += "lg-thumb-align-" + this.settings.alignThumbnails;
              }
              var html = "<div class=\"" + thumbOuterClassNames + "\">\n        <div class=\"lg-thumb lg-group\">\n        </div>\n        </div>";
              this.core.outer.addClass('lg-has-thumb');
              if (this.settings.appendThumbnailsTo === '.lg-components') {
                  this.core.$lgComponents.append(html);
              }
              else {
                  this.core.outer.append(html);
              }
              this.$thumbOuter = this.core.outer.find('.lg-thumb-outer').first();
              this.$lgThumb = this.core.outer.find('.lg-thumb').first();
              if (this.settings.animateThumb) {
                  this.core.outer
                      .find('.lg-thumb')
                      .css('transition-duration', this.core.settings.speed + 'ms')
                      .css('width', this.thumbTotalWidth + 'px')
                      .css('position', 'relative');
              }
              this.setThumbItemHtml(this.core.galleryItems);
          };
          Thumbnail.prototype.enableThumbDrag = function () {
              var _this = this;
              var thumbDragUtils = {
                  cords: {
                      startX: 0,
                      endX: 0,
                  },
                  isMoved: false,
                  newTranslateX: 0,
                  startTime: new Date(),
                  endTime: new Date(),
                  touchMoveTime: 0,
              };
              var isDragging = false;
              this.$thumbOuter.addClass('lg-grab');
              this.core.outer
                  .find('.lg-thumb')
                  .first()
                  .on('mousedown.lg.thumb', function (e) {
                  if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                      // execute only on .lg-object
                      e.preventDefault();
                      thumbDragUtils.cords.startX = e.pageX;
                      thumbDragUtils.startTime = new Date();
                      _this.thumbClickable = false;
                      isDragging = true;
                      // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                      _this.core.outer.get().scrollLeft += 1;
                      _this.core.outer.get().scrollLeft -= 1;
                      // *
                      _this.$thumbOuter
                          .removeClass('lg-grab')
                          .addClass('lg-grabbing');
                  }
              });
              this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function (e) {
                  if (!_this.core.lgOpened)
                      return;
                  if (isDragging) {
                      thumbDragUtils.cords.endX = e.pageX;
                      thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
                  }
              });
              this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function () {
                  if (!_this.core.lgOpened)
                      return;
                  if (thumbDragUtils.isMoved) {
                      thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
                  }
                  else {
                      _this.thumbClickable = true;
                  }
                  if (isDragging) {
                      isDragging = false;
                      _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
                  }
              });
          };
          Thumbnail.prototype.enableThumbSwipe = function () {
              var _this = this;
              var thumbDragUtils = {
                  cords: {
                      startX: 0,
                      endX: 0,
                  },
                  isMoved: false,
                  newTranslateX: 0,
                  startTime: new Date(),
                  endTime: new Date(),
                  touchMoveTime: 0,
              };
              this.$lgThumb.on('touchstart.lg', function (e) {
                  if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                      e.preventDefault();
                      thumbDragUtils.cords.startX = e.targetTouches[0].pageX;
                      _this.thumbClickable = false;
                      thumbDragUtils.startTime = new Date();
                  }
              });
              this.$lgThumb.on('touchmove.lg', function (e) {
                  if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                      e.preventDefault();
                      thumbDragUtils.cords.endX = e.targetTouches[0].pageX;
                      thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
                  }
              });
              this.$lgThumb.on('touchend.lg', function () {
                  if (thumbDragUtils.isMoved) {
                      thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
                  }
                  else {
                      _this.thumbClickable = true;
                  }
              });
          };
          // Rebuild thumbnails
          Thumbnail.prototype.rebuildThumbnails = function () {
              var _this = this;
              // Remove transitions
              this.$thumbOuter.addClass('lg-rebuilding-thumbnails');
              setTimeout(function () {
                  _this.thumbTotalWidth =
                      _this.core.galleryItems.length *
                          (_this.settings.thumbWidth + _this.settings.thumbMargin);
                  _this.$lgThumb.css('width', _this.thumbTotalWidth + 'px');
                  _this.$lgThumb.empty();
                  _this.setThumbItemHtml(_this.core.galleryItems);
                  _this.animateThumb(_this.core.index);
              }, 50);
              setTimeout(function () {
                  _this.$thumbOuter.removeClass('lg-rebuilding-thumbnails');
              }, 200);
          };
          // @ts-check
          Thumbnail.prototype.setTranslate = function (value) {
              this.$lgThumb.css('transform', 'translate3d(-' + value + 'px, 0px, 0px)');
          };
          Thumbnail.prototype.getPossibleTransformX = function (left) {
              if (left > this.thumbTotalWidth - this.thumbOuterWidth) {
                  left = this.thumbTotalWidth - this.thumbOuterWidth;
              }
              if (left < 0) {
                  left = 0;
              }
              return left;
          };
          Thumbnail.prototype.animateThumb = function (index) {
              this.$lgThumb.css('transition-duration', this.core.settings.speed + 'ms');
              if (this.settings.animateThumb) {
                  var position = 0;
                  switch (this.settings.currentPagerPosition) {
                      case 'left':
                          position = 0;
                          break;
                      case 'middle':
                          position =
                              this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                          break;
                      case 'right':
                          position = this.thumbOuterWidth - this.settings.thumbWidth;
                  }
                  this.translateX =
                      (this.settings.thumbWidth + this.settings.thumbMargin) * index -
                          1 -
                          position;
                  if (this.translateX > this.thumbTotalWidth - this.thumbOuterWidth) {
                      this.translateX = this.thumbTotalWidth - this.thumbOuterWidth;
                  }
                  if (this.translateX < 0) {
                      this.translateX = 0;
                  }
                  this.setTranslate(this.translateX);
              }
          };
          Thumbnail.prototype.onThumbTouchMove = function (thumbDragUtils) {
              thumbDragUtils.newTranslateX = this.translateX;
              thumbDragUtils.isMoved = true;
              thumbDragUtils.touchMoveTime = new Date().valueOf();
              thumbDragUtils.newTranslateX -=
                  thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
              thumbDragUtils.newTranslateX = this.getPossibleTransformX(thumbDragUtils.newTranslateX);
              // move current slide
              this.setTranslate(thumbDragUtils.newTranslateX);
              this.$thumbOuter.addClass('lg-dragging');
              return thumbDragUtils;
          };
          Thumbnail.prototype.onThumbTouchEnd = function (thumbDragUtils) {
              thumbDragUtils.isMoved = false;
              thumbDragUtils.endTime = new Date();
              this.$thumbOuter.removeClass('lg-dragging');
              var touchDuration = thumbDragUtils.endTime.valueOf() -
                  thumbDragUtils.startTime.valueOf();
              var distanceXnew = thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
              var speedX = Math.abs(distanceXnew) / touchDuration;
              // Some magical numbers
              // Can be improved
              if (speedX > 0.15 &&
                  thumbDragUtils.endTime.valueOf() - thumbDragUtils.touchMoveTime < 30) {
                  speedX += 1;
                  if (speedX > 2) {
                      speedX += 1;
                  }
                  speedX =
                      speedX +
                          speedX * (Math.abs(distanceXnew) / this.thumbOuterWidth);
                  this.$lgThumb.css('transition-duration', Math.min(speedX - 1, 2) + 'settings');
                  distanceXnew = distanceXnew * speedX;
                  this.translateX = this.getPossibleTransformX(this.translateX - distanceXnew);
                  this.setTranslate(this.translateX);
              }
              else {
                  this.translateX = thumbDragUtils.newTranslateX;
              }
              if (Math.abs(thumbDragUtils.cords.endX - thumbDragUtils.cords.startX) <
                  this.settings.thumbnailSwipeThreshold) {
                  this.thumbClickable = true;
              }
              return thumbDragUtils;
          };
          Thumbnail.prototype.getThumbHtml = function (thumb, index) {
              var slideVideoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
              var thumbImg;
              if (slideVideoInfo.youtube) {
                  if (this.settings.loadYouTubeThumbnail) {
                      thumbImg =
                          '//img.youtube.com/vi/' +
                              slideVideoInfo.youtube[1] +
                              '/' +
                              this.settings.youTubeThumbSize +
                              '.jpg';
                  }
                  else {
                      thumbImg = thumb;
                  }
              }
              else {
                  thumbImg = thumb;
              }
              return "<div data-lg-item-id=\"" + index + "\" class=\"lg-thumb-item " + (index === this.core.index ? ' active' : '') + "\" \n        style=\"width:" + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + "px;\">\n            <img data-lg-item-id=\"" + index + "\" src=\"" + thumbImg + "\" />\n        </div>";
          };
          Thumbnail.prototype.getThumbItemHtml = function (items) {
              var thumbList = '';
              for (var i = 0; i < items.length; i++) {
                  thumbList += this.getThumbHtml(items[i].thumb, i);
              }
              return thumbList;
          };
          Thumbnail.prototype.setThumbItemHtml = function (items) {
              var thumbList = this.getThumbItemHtml(items);
              this.$lgThumb.html(thumbList);
          };
          Thumbnail.prototype.setAnimateThumbStyles = function () {
              if (this.settings.animateThumb) {
                  this.core.outer.addClass('lg-animate-thumb');
              }
          };
          // Manage thumbnail active calss
          Thumbnail.prototype.manageActiveClassOnSlideChange = function () {
              var _this = this;
              // manage active class for thumbnail
              this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
                  var $thumb = _this.core.outer.find('.lg-thumb-item');
                  var index = event.detail.index;
                  $thumb.removeClass('active');
                  $thumb.eq(index).addClass('active');
              });
          };
          // Toggle thumbnail bar
          Thumbnail.prototype.toggleThumbBar = function () {
              var _this = this;
              if (this.settings.toggleThumb) {
                  this.core.outer.addClass('lg-can-toggle');
                  this.core.$toolbar.append('<button type="button" aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>');
                  this.core.outer
                      .find('.lg-toggle-thumb')
                      .first()
                      .on('click.lg', function () {
                      _this.core.outer.toggleClass('lg-components-open');
                  });
              }
          };
          Thumbnail.prototype.thumbKeyPress = function () {
              var _this = this;
              this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function (e) {
                  if (!_this.core.lgOpened || !_this.settings.toggleThumb)
                      return;
                  if (e.keyCode === 38) {
                      e.preventDefault();
                      _this.core.outer.addClass('lg-components-open');
                  }
                  else if (e.keyCode === 40) {
                      e.preventDefault();
                      _this.core.outer.removeClass('lg-components-open');
                  }
              });
          };
          Thumbnail.prototype.destroy = function () {
              if (this.settings.thumbnail) {
                  this.$LG(window).off(".lg.thumb.global" + this.core.lgId);
                  this.core.LGel.off('.lg.thumb');
                  this.core.LGel.off('.thumb');
                  this.$thumbOuter.remove();
                  this.core.outer.removeClass('lg-has-thumb');
              }
          };
          return Thumbnail;
      }());
  
      return Thumbnail;
  
  })));
  //# sourceMappingURL=lg-thumbnail.umd.js.map