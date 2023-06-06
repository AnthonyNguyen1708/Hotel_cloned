// menu
$(".wrapBtnCtrMenuHeader").on("click", function (e) {
  $("body").toggleClass("showMenu");
  $(".wrapHeader").fadeToggle();
  e.preventDefault();
});

$(".wrapCloseMenuHeaderMobile").on("click", function (e) {
  $("body").removeClass("showMenu");
  $(".wrapHeader").fadeOut();
  e.preventDefault();
});

$(".btnDropdownMenuSub").on("click", function (e) {
  if ($(this).next().hasClass("wrapTextOver"))
    $(this).next(".wrapTextOver").slideToggle();
  else $(this).next(".wrapMenuHeader").slideToggle();

  $(this).parent(".menuSub").toggleClass("activeMenu");

  e.preventDefault();
});
// end menu

var widthScreenRes = 575;

// set bg main
function setBgMain() {
  var srcImg = "";

  if ($(window).width() > widthScreenRes)
    srcImg = $(".wrapImgMain .showImg img").attr("data-destop");
  else srcImg = $(".wrapImgMain .showImg img").attr("data-mobile");

  $(".wrapImgMain .showImg img").attr("src", srcImg);
}
// end set bg main

// set link font size contact
function setLinkFontSizeContact() {
  if (
    $(".wrapContact .linkItem").length &&
    $(window).width() > widthScreenRes
  ) {
    var numberFont = ($(window).width() * 15) / 1920;

    $(".wrapContact .linkItem").attr(
      "style",
      "font-size: " + numberFont + "px;"
    );
  } else $(".wrapContact .linkItem").attr("style", "");
}
// end set link font size contact

// set title font size contact
function setTitleFontSizeContact() {
  if (
    $(".wrapContact .titleMain").length &&
    $(window).width() > widthScreenRes
  ) {
    var numberFont = ($(window).width() * 21) / 1920;

    $(".wrapContact .titleMain").attr(
      "style",
      "font-size: " + numberFont + "px;"
    );
  } else $(".wrapContact .titleMain").attr("style", "");
}
// end set title font size contact

// set title font size contact
function setLinkMenuFontSize() {
  if ($(".linkMenuHeader").length && $(window).width() > widthScreenRes) {
    var numberFont = ($(window).width() * 24) / 1920;

    $(".linkMenuHeader").attr("style", "font-size: " + numberFont + "px;");
  } else $(".linkMenuHeader").attr("style", "");
}
// end set title font size contact

// set title font size social
function setTitleFontSizeSocial() {
  if (
    $(".wrapSocial .titleItem").length &&
    $(window).width() > widthScreenRes
  ) {
    var numberFont = ($(window).width() * 14) / 1920;

    $(".wrapSocial .titleItem, .menuSub .wrapTextItem").attr(
      "style",
      "font-size: " + numberFont + "px;"
    );
  } else $(".wrapSocial .titleItem, .menuSub .wrapTextItem").attr("style", "");
}
// end set title font size social

// set height link social
function setHeightLinkSocial() {
  if (
    $(".wrapSocial .social .linkItem").length &&
    $(window).width() > widthScreenRes
  ) {
    var numberHeight = $(".wrapSocial .social .linkItem").width();

    $(".wrapSocial .social .linkItem").attr(
      "style",
      "height: " + numberHeight + "px;"
    );
  } else $(".wrapSocial .social .linkItem").attr("style", "");
}
// end set height link social

$(window).on("load", function () {
  setBgMain();
  setTitleFontSizeContact();
  setLinkFontSizeContact();
  setLinkMenuFontSize();
  setTitleFontSizeSocial();
  setHeightLinkSocial();

  // show content
  $("body").addClass("showContent");
  if (window.location.hash && window.location.hash === "#terms") {
    $("#modalTextTermsConditions").modal("show");
  }

  if (
    !localStorage.getItem("accept-terms") &&
    window.location.hash !== "#terms"
  ) {
    $("#modalConfirmTermsConditions").modal("show");
  }

  $("#modalConfirmTermsConditions .wrapTextModalControl a").on(
    "click",
    function (e) {
      if (
        $(this).attr("href") == "#terms" &&
        $("#modalTextTermsConditions").length
      ) {
        $("#modalConfirmTermsConditions").modal("hide");
        setTimeout(() => {
          $("#modalTextTermsConditions").modal("show");
        }, 500);
      }
      e.preventDefault();
    }
  );

  $("#modalTextTermsConditions .btnDisagree").on("click", function (e) {
    setTimeout(() => {
      $("#modalConfirmTermsConditions").modal("show");
    }, 500);
    e.preventDefault();
  });

  $("#modalTextTermsConditions .btnAgree").on("click", function (e) {
    localStorage.setItem("accept-terms", 1);
    window.location.hash = "";
    e.preventDefault();
  });

  // endshow content
});

$(window).on("resize", function () {
  setBgMain();
  setTitleFontSizeContact();
  setLinkFontSizeContact();
  setLinkMenuFontSize();
  setTitleFontSizeSocial();
  setHeightLinkSocial();
});
