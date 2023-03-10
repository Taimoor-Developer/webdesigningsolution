function setCookie(e, s, t) {
  var i = new Date();
  i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
  var a = "expires=" + i.toUTCString();
  document.cookie = e + "=" + s + ";" + a + ";path=/";
}
function getCookie(e) {
  for (
    var s = e + "=", t = decodeURIComponent(document.cookie).split(";"), i = 0;
    i < t.length;
    i++
  ) {
    for (var a = t[i]; " " === a.charAt(0); ) a = a.substring(1);
    if (0 === a.indexOf(s)) return a.substring(s.length, a.length);
  }
  return "";
}
new WOW().init(),
  $(".open_modal").click(function () {
    $(".pack_select").find("option:selected").attr("selected", !1);
    var e = $(this).data("pack_id");
    $(".pack_select")
      .find("option[value='" + e + "']")
      .attr("selected", !0),
      $("#myModal").modal("show");
  }),
  $("#package_submit").click(function () {
    $("#package_form").submit();
  }),
  $(document).scroll(function () {
    "use strict";
    var e = $(this).scrollTop();
    e > 200
      ? $(".sticky-container").fadeIn()
      : $(".sticky-container").fadeOut(),
      e >= 70
        ? $(".header-main").addClass("showmenu")
        : $(".header-main").removeClass("showmenu");
  }),
  $(document).ready(function () {
    "use strict";
    var e = document.querySelector(".cookiealert"),
      s = document.querySelector(".acceptcookies");
    e.offsetHeight,
      getCookie("acceptCookies") || e.classList.add("show"),
      s.addEventListener("click", function () {
        setCookie("acceptCookies", !0, 60), e.classList.remove("show");
      });
  }),
  $(document).ready(function () {
    $(".acceptcookies").on("click", function () {
      setCookie("acceptCookies", !0, 60), $(".cookiealert").hide();
    });
  }),
  $(document).ready(function () {
    "use strict";
    $(".salecrcle-btn").click(function () {
      $(
        ".sale-blckfriday, .salecrcle-btn, .sale-box, .uppersale-bx"
      ).toggleClass("open");
    }),
      window.setTimeout(function () {
        $(
          ".salecrcle-btn, .salecrcle-btn, .sale-box, .uppersale-bx"
        ).toggleClass("open");
      }, 6e3),
      $(".mobile-nav-btn").click(function () {
        $(".mobile-nav-btn, .mobile-nav, .app-container").toggleClass("active");
      }),
      $(".firstlevel li a").click(function () {
        $(this).hasClass("active")
          ? ($(this).removeClass("active"), $(this).siblings("ul").slideUp())
          : ($(".firstlevel li a").removeClass("active"),
            $(this).addClass("active"),
            $(".dropdown").slideUp(),
            $(this).siblings("ul").slideDown());
      }),
      $(".mainnav > li > a").click(function () {
        $(this).hasClass("active")
          ? ($(this).removeClass("active"),
            $(this).parents("li").children(".firstlevel").slideUp())
          : ($(this).addClass("active"),
            $(this).parents("li").children(".firstlevel").slideDown(),
            $(this)
              .parents("li")
              .siblings("li")
              .children("a")
              .removeClass("active"),
            $(this)
              .parents("li")
              .siblings("li")
              .children(".firstlevel")
              .slideUp());
      }),
      $(".cs-slider").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 1,
        autoplay: !0,
        autoplaySpeed: 4e3,
        adaptiveHeight: !0,
      }),
      $(".portslider").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 5,
        autoplay: !1,
        slide: "li",
        adaptiveHeight: !0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: !1,
              arrows: !1,
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      }),
      $(".home-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 1,
        autoplay: !0,
        autoplaySpeed: 4e3,
        adaptiveHeight: !0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: !0,
              arrows: !1,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }),
      $(".partnerslider").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        adaptiveHeight: !0,
      });
    var e, s, t, i, a;
    function o() {
      e.css({ width: "0%" }),
        clearTimeout(i),
        (a = 0),
        (t = !1),
        (i = setInterval(n, 10));
    }
    function n() {
      !1 === t &&
        ((a += 1 / 4.1),
        e.css({ width: a + "%" }),
        a >= 100 && (s.slick("slickNext"), o()));
    }
    (s = $(".home-slider")),
      (e = $(".slider-progress .progress")),
      $(".slider-wrapper").on({
        mouseenter: function () {
          t = !0;
        },
        mouseleave: function () {
          t = !1;
        },
      }),
      o();
    var l = {
      dots: !0,
      arrows: !0,
      infinite: !0,
      speed: 1e3,
      slidesToShow: 1,
      autoplay: !0,
      autoplaySpeed: 4e3,
      adaptiveHeight: !0,
      prevArrow: $(".prev-btn"),
      nextArrow: $(".next-btn"),
      customPaging: function (e, s) {
        return "<a> 0" + (s + 1) + "</a>";
      },
    };
    $(".number-slider").slick(l),
      $(".sliderxs").slick({
        arrows: !1,
        dots: !0,
        autoplay: !0,
        adaptiveHeight: !0,
        responsive: [
          { breakpoint: 1e4, settings: "unslick" },
          { breakpoint: 767, settings: { unslick: !0 } },
        ],
      }),
      $(".testi-slider").slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        speed: 600,
        autoplay: !0,
        autoplaySpeed: 2e3,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".package-slider").slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        speed: 600,
        autoplay: !0,
        autoplaySpeed: 2e3,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".testwraper").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 2e3,
        fade: !0,
        cssEase: "linear",
        responsive: [
          { breakpoint: 776, settings: { vertical: !1, arrows: !1 } },
        ],
      });
    $.each(
      { 1: { slider: ".packslider" }, 2: { slider: ".boxwrap" } },
      function () {
        $(this.slider).slick({
          arrows: !1,
          dots: !1,
          autoplay: !0,
          settings: "unslick",
          responsive: [
            { breakpoint: 2e3, settings: "unslick" },
            { breakpoint: 767, settings: { unslick: !0 } },
          ],
        });
      }
    ),
      $(".product-slider-gallery").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: !0,
        autoplaySpeed: 3e3,
        asNavFor: ".product-gallery-nav",
      }),
      $(".product-gallery-nav").slick({
        dots: !1,
        arrows: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 800,
        autoplay: !0,
        autoplaySpeed: 3e3,
        vertical: !0,
        verticalSwiping: !0,
        focusOnSelect: !0,
        asNavFor: ".product-slider-gallery",
        responsive: [
          { breakpoint: 991, settings: { vertical: !1 } },
          { breakpoint: 776, settings: { vertical: !1 } },
          {
            breakpoint: 480,
            settings: { vertical: !1, slidesToShow: 2, slidesToScroll: 1 },
          },
        ],
      }),
      $(".thumb-slider").slick({
        centerMode: !0,
        centerPadding: "0px",
        arrows: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: !1,
              dots: !1,
              centerMode: !0,
              centerPadding: "10px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              arrows: !1,
              dots: !1,
              centerMode: !1,
              centerPadding: "10px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: !1,
              dots: !1,
              centerMode: !0,
              centerPadding: "10px",
              slidesToShow: 1,
            },
          },
        ],
      }),
      $(".slider-for").slick({
        dots: !0,
        arrows: !1,
        infinite: !0,
        speed: 500,
        slide: "li",
        fade: !1,
        cssEase: "linear",
        centerMode: !0,
        slidesToShow: 1,
        variableWidth: !0,
        autoplay: !0,
        autoplaySpeed: 4e3,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: !1,
              centerMode: !1,
              centerPadding: "40px",
              variableWidth: !1,
              slidesToShow: 1,
              dots: !0,
            },
            breakpoint: 1200,
            settings: {
              arrows: !1,
              centerMode: !1,
              centerPadding: "40px",
              variableWidth: !1,
              slidesToShow: 1,
              dots: !0,
            },
          },
        ],
        customPaging: function (e, s) {
          return (
            '<button class="tab">' +
            $(".thumbsmain li:nth-child(" + (s + 1) + ")").html() +
            "</button>"
          );
        },
      }),
      $(".gallery-slider-main").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1e3,
        autoplay: !0,
        autoplaySpeed: 2e3,
        fade: !0,
        cssEase: "linear",
        asNavFor: ".gallery-nav-main",
      }),
      $(".gallery-nav-main").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".gallery-slider-main",
        dots: !0,
        focusOnSelect: !0,
      }),
      $(".bid-slider-gallery").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: !0,
        autoplaySpeed: 3e3,
        asNavFor: ".bid-gallery-nav",
      }),
      $(".bid-gallery-nav").slick({
        dots: !1,
        arrows: !1,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 800,
        autoplay: !0,
        autoplaySpeed: 3e3,
        vertical: !0,
        focusOnSelect: !0,
        asNavFor: ".bid-slider-gallery",
        responsive: [{ breakpoint: 767, settings: { vertical: !1 } }],
      }),
      $("[data-targetit]").on("click", function () {
        $(this).siblings().removeClass("current"), $(this).addClass("current");
        var e = $(this).data("targetit");
        $("." + e)
          .siblings('[class^="tabs"]')
          .removeClass("current"),
          $("." + e).addClass("current"),
          $(".slick-slider").slick("setPosition", 0);
      });
    var r =
      decodeURIComponent(
        (new RegExp("[?|&]" + "pack" + "=([^&;]+?)(&|#|;|$)").exec(
          location.search
        ) || [null, ""])[1].replace(/\+/g, "%20")
      ) || null;
    function c() {
      jQuery(".accordion .quest-title").removeClass("active"),
        jQuery(".accordion .quest-content").slideUp(300).removeClass("open");
    }
    let d;
    "1" == r && $("#packages").val("Basic Website Packages - $244.00"),
      "2" == r && $("#packages").val("Startup Website Packages - $394.00"),
      "3" == r && $("#packages").val("Professional Website Packages - $844.00"),
      "4" == r && $("#packages").val("Basic Logo Package - $44.00"),
      "5" == r && $("#packages").val("Start Up Logo Package - $74.00"),
      "6" == r && $("#packages").val("Professional Logo Package - $124.00"),
      "7" == r && $("#packages").val("Startup SEO Plan - $1,000.00"),
      "8" == r && $("#packages").val("Scaling SEO Plan - $1,500.00"),
      "9" == r && $("#packages").val("Venture SEO Plan - $2,000.00"),
      "10" == r && $("#packages").val("Starter Video Package - $349.00"),
      "11" == r && $("#packages").val("Business Video Package - $599.00"),
      "12" == r && $("#packages").val("Premium Video Package - $999.00"),
      $(".tab-custom .tab-custom-nav a").click(function (e) {
        $(this)
          .closest("li")
          .siblings("li")
          .children("a")
          .removeClass("current"),
          $(this).addClass("current"),
          $(this)
            .closest(".tab-custom")
            .children("div.tab-content-panel:not(:hidden)")
            .hide(),
          $(this.hash).show(),
          e.preventDefault(),
          $(".sliderxs").slick("setPosition");
      }),
      $(".tabs-custom-nav a").click(function (e) {
        $(this)
          .closest("li")
          .siblings("li")
          .children("a")
          .removeClass("current"),
          $(this).addClass("current"),
          $(this.hash)
            .closest(".general")
            .children("div.tab-content-panel:not(:hidden)")
            .hide(),
          $(this.hash).show(),
          e.preventDefault(),
          $(".sliderxs").slick("setPosition");
      }),
      $(".accordion .quest-title.active1").addClass("active"),
      jQuery(".quest-title").click(function (e) {
        var s = jQuery(this).attr("href");
        jQuery(e.target).is(".active")
          ? c()
          : (c(),
            jQuery(this).addClass("active"),
            jQuery(".accordion " + s)
              .slideDown(300)
              .addClass("open")),
          e.preventDefault();
      }),
      $('[data-fancybox="swf-file"]').fancybox({
        iframe: { css: { width: "336px", height: "280px" } },
      }),
      $('[data-fancybox="video-file"]').fancybox({
        iframe: { css: { width: "580px", height: "340px" } },
      }),
      $(".phone-country").intlTelInput({
        geoIpLookup: function (e) {
          $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
            s
          ) {
            var t = s && s.country ? s.country : "";
            e(t), (d = s.ip);
          });
        },
        initialCountry: "auto",
        nationalMode: !0,
        separateDialCode: !0,
      }),
      setTimeout(function () {
        $('input[name="pc"]').val($(".selected-dial-code").text()),
          $('input[name="cip"]').val(d),
          $('input[name="ctry"]').val(
            $(".country-list .country.active .country-name").text()
          );
      }, 3e3),
      $("body").delegate(".country", "click", function () {
        $('input[name="pc"]').val($(this).find(".dial-code").text()),
          $('input[name="cip"]').val(d),
          $('input[name="ctry"]').val(
            $(this)
              .closest("form")
              .find(".country-list .country.active .country-name")
              .text()
          );
      });
    var u = jQuery(".car-top");
    jQuery(window).scroll(function () {
      jQuery(window).scrollTop() >= 200
        ? (u.addClass("show"), u.addClass("car-down"))
        : (u.removeClass("show"),
          setTimeout(function () {
            u.removeClass("car-down");
          }, 300));
    }),
      u.on("click", function () {
        return (
          jQuery("html,body").animate({ scrollTop: 0 }, 800),
          jQuery(this).addClass("car-run"),
          setTimeout(function () {
            u.removeClass("car-run");
          }, 1e3),
          !1
        );
      });
  });
var $gallery = $(".gallery-slider-main"),
  slideCount = null;
function setSlideCount() {
  "use strict";
  $(".slide-count-wrap").find(".total").text(slideCount);
}
function setCurrentSlideNumber(e) {
  "use strict";
  $(".slide-count-wrap")
    .find(".current")
    .text(e + 1);
}
function setButtonURL() {
  $zopim.livechat.window.show();
}

$gallery.on("init", function (e, s) {
  "use strict";
  (slideCount = s.slideCount),
    setSlideCount(),
    setCurrentSlideNumber(s.currentSlide);
}),
  $gallery.on("beforeChange", function (e, s, t, i) {
    "use strict";
    setCurrentSlideNumber(i);
  }),
  $("#banform").validate({
    rules: {
      username: { required: !0, minlength: 2 },
      email: { required: !0, email: !0 },
      agree: "required",
    },
    messages: {
      username: {
        required: "Please enter a username",
        minlength: "Your username must consist of at least 2 characters",
      },
      email: "Please enter a valid email address",
    },
  }),
  $("#contactForm").validate(),
  $(function () {
    "use strict";
    var e = new Date().getFullYear();
    $("#year").html(e);
  }),
  $(function () {
    ($.mCustomScrollbar.defaults.theme = "light-1"),
      $(".list-scroll").mCustomScrollbar({
        scrollButtons: { enable: !0 },
        callbacks: {
          onTotalScroll: function () {
            addContent(this);
          },
          onTotalScrollOffset: 100,
          alwaysTriggerOffsets: !1,
        },
      });
  }),
  $(document).ready(function () {
    $(window).scroll(function () {
      var e = $(".header");
      $(window).scrollTop() >= 10
        ? (e.addClass("sticky"), $("body").addClass("bodyClass"))
        : (e.removeClass("sticky"), $("body").removeClass("bodyClass"));
    }),
      $(".percent").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: $(this).text() },
            {
              duration: 3e3,
              easing: "swing",
              step: function (e) {
                $(this).text(Math.ceil(e));
              },
            }
          );
      }),
      $(".preloader").addClass("loader-width"),
      setTimeout(function () {
        $(".preloader").addClass("hidden"),
          $(".preloader-block, .preloader-bar").fadeOut("slow");
      }, 3e3),
      setTimeout(function () {
        $(".preloader").addClass("hidden-main");
      }, 3500),
      $(".list-group .list-group-item").click(function () {
        $(".list-group .list-group-item").removeClass("active"),
          $(this).addClass("active");
      });
  }),
  $(document).scroll(function () {}),
  $(document).ready(function () {
    $(".floating_strip .rotatekaro a").on("click", function (e) {
      $(".floating_form").toggleClass("open"),
        $("body").toggleClass("notscroll"),
        e.preventDefault();
    });
  }),
  $(".floating_wrap .floating_strip").click(function (e) {
    $(this).parent().toggleClass("active"),
      $(".formOverlaySide").toggleClass("active"),
      e.stopPropagation();
  }),
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        { Counter: $(this).text() },
        {
          duration: 4e3,
          easing: "swing",
          step: function (e) {
            $(this).text(Math.ceil(e));
          },
        }
      );
  }),
  $("ul.process-ul li").on("click", function () {
    $("ul.process-ul").addClass("process-animate");
    var e = $(this).attr("id");
    $("ul.process-ul li").removeClass("active"),
      $(this).addClass("active"),
      $(".process-tabs").removeClass("active"),
      $("." + e)
        .fadeIn("slow")
        .addClass("active"),
      $("ul.process-ul").removeClass("process1"),
      $("ul.process-ul").removeClass("process2"),
      $("ul.process-ul").removeClass("process3"),
      $("ul.process-ul").removeClass("process4"),
      $("ul.process-ul").removeClass("process5"),
      $("ul.process-ul").removeClass("process6"),
      $("ul.process-ul").addClass(e),
      setTimeout(function () {
        $("ul.process-ul").removeClass("process-animate");
      }, 500);
  }),
  $(".srv-info-sec .srv-info-wrap .srv-item-ico").hover(function () {
    $(".srv-info-sec .srv-info-wrap .srv-item-ico").removeClass("active"),
      $(".srv-info-sec .srv-info-wrap .srv-item-content").removeClass("active"),
      $(this).addClass("active"),
      $(this).next().addClass("active");
  });
var $bannerSlider = jQuery(".banner-slider"),
  $bannerFirstSlide = $("div.banner-slide:first-child");
function slideanimate(e) {
  e.each(function () {
    var e = $(this),
      s = e.data("delay"),
      t = "animated " + e.data("animation");
    e.css({ "animation-delay": s, "-webkit-animation-delay": s }),
      e
        .addClass(t)
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            e.removeClass(t);
          }
        );
  });
}
$bannerSlider.on("init", function (e, s) {
  slideanimate($bannerFirstSlide.find("[data-animation]"));
}),
  $bannerSlider.on("beforeChange", function (e, s, t, i) {
    slideanimate(
      $('div.slick-slide[data-slick-index="' + i + '"]').find(
        "[data-animation]"
      )
    );
  }),
  $bannerSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    dots: !1,
    swipe: !0,
    speed: 800,
    autoplay: !0,
    autoplaySpeed: 6e3,
    adaptiveHeight: !0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !1,
          autoplaySpeed: 4e3,
          swipe: !0,
        },
      },
    ],
  }),
  jQuery("[data-color]").each(function () {
    jQuery(this).css("color", jQuery(this).attr("data-color"));
  }),
  jQuery("[data-bgcolor]").each(function () {
    jQuery(this).css("background-color", jQuery(this).attr("data-bgcolor"));
  });
var windowWidth = $(window).width();
$(".banner").mousemove(function (e) {
  var s = 0.1 * ($(window).width() / 2 - e.pageX),
    t = 0.1 * ($(window).height() / 2 - e.pageY);
  $(".object1").css("margin-top", t + "px"),
    $(".object2").css("margin-right", -s + "px"),
    $(".object2").css("margin-bottom", -t + "px"),
    $(".object3").css("margin-right", s + "px"),
    $(".object3").css("margin-top", t + "px"),
    $(".object4").css("margin-left", -s + "px"),
    $(".object4").css("margin-top", -t + "px");
});
windowWidth = $(window).width();
$(".banner").mousemove(function (e) {
  var s = 0.1 * ($(window).width() / 2 - e.pageX),
    t = 0.1 * ($(window).height() / 2 - e.pageY);
  $(".object1").css("margin-top", t + "px"),
    $(".object2").css("margin-right", -s + "px"),
    $(".object2").css("margin-bottom", -t + "px"),
    $(".object3").css("margin-right", s + "px"),
    $(".object3").css("margin-top", t + "px"),
    $(".object4").css("margin-left", -s + "px"),
    $(".object4").css("margin-top", -t + "px");
});
