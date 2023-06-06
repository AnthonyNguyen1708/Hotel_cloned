//Header
//Header-fixed
$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();

  if (scroll >= 3) {
    $("#site-header").addClass("fixed_header");
    $(".header_menu .menu_info").slideUp();
    $(".header_menu .menu_navbar").slideDown();
    $(".header_bot").slideUp();
  } else {
    $("#site-header").removeClass("fixed_header");
    $(".header_menu .menu_info").slideDown();
    $(".header_menu .menu_navbar").slideUp();
    $(".header_bot").slideDown();
  }
});

//Show sub mneu + Prevent a default action with subMenu
$(".menuItem").on("click", function (e) {
  if ($(this).find(".dropDownBtn")) {
    $(this).next().slideToggle();
    // $(this).parent().next().slideToggle();
  }
});
if ($(".menuItem .dropDownBtn").parent().find("a")) {
  $(".menuItem .dropDownBtn")
    .parent()
    .find("a")
    .on("click", function (e) {
      e.preventDefault();
    });
}
//End Header

//Highlight Slider
$(".slide_content").slick({
  autoplay: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//Room List
$(".imgList_main").slick({
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".imgList_sub",
  dots: false,
});
$(".imgList_sub").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".imgList_main",
  centerMode: true,
  focusOnSelect: true,
  dots: false,
});

//Service
$(".service_list").slick({
  centerMode: true,
  centerPadding: "30px",
  slidesToShow: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: "15px",
        slidesToShow: 3,
        dots: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        centerMode: true,
        centerPadding: "180px",
        slidesToShow: 1,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
});

//Review
$(".slide").slick({
  slidesToShow: 1,
  arrows: false,
  dots: true,
});

//Award
$(".content_wapper").slick({
  slidesToShow: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
  ],
});

//Date Picker
$(function () {
  $("#CI_datePicker, #CI_datePicker").datepicker();
});

$(function () {
  $("#CO_datePicker", "#CO_datePicker").datepicker();
});

//Show today onload
$(window).on("load", function () {
  const date = new Date();

  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();

  let currentDate = `${month}/${day}/${year}`;

  $("#CI_datePicker, #CI_datePicker").val(currentDate);
  $("#CO_datePicker, #CO_datePicker").val(currentDate);
});

//Scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}

//Show fixed Btn
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $("#backToTopBtn").fadeIn();
  } else {
    $("#backToTopBtn").fadeOut();
  }
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $("#bookBtn").fadeIn();
  } else {
    $("#bookBtn").fadeOut();
  }
});
