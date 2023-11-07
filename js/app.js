/*Headwer*/

$(function () {
  let header = $("#header");
  let intro = $("#intro");
  introHeight = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkscroll(scrollPos, introHeight);
  $(window).on("scroll resize", function () {
    introHeight = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkscroll(scrollPos, introHeight);
  });

  function checkscroll(scrollPos, introHeight) {
    if (scrollPos > introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*Smooth scroll*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    nav.removeClass("show");
    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });

  /*Nav Toggle*/
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });
  /*Nav Toggle*/

  /* Btn scroll*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) $(".gotobtn").addClass("active");
    else $(".gotobtn").removeClass("active");
  });
  $(".gotobtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
  $(document).ready(function () {
    $(".document").ready();
  });

  $(document).ready(function () {
    $(".box div").click(function () {
      if ($(this).hasClass("spin")) {
        $(".box div").removeClass("spin");
      } else {
        $(".box div").removeClass("spin");
        $(this).addClass("spin");
      }
    });
  });
});

/*Slider Card Flash*/

$(document).ready(function () {
  $(".card-wrapper .card").last().addClass("active");
  $(".card-wrapper .card").last().prev().addClass("next");
  // Autoplay interval
  var interval = 5000;
  var myInt = setInterval(function () {
    $(".card.active").trigger("click");
  }, interval);
  // Clickable toggle
  $(".card").on("click", function () {
    clearInterval(myInt);
    // Prevent multiple fast clicks to break the functioning
    $(".card").css({ "pointer-events": "none" });
    $(".card.active").addClass("animate-leave").removeClass("active");
    $(".card.next").addClass("active").removeClass("next");
    $(".card-wrapper .card").last().prev().prev().addClass("next");
    setTimeout(function () {
      $(".card.animate-leave")
        .addClass("animate-back")
        .removeClass("animate-leave");
      $(".card-wrapper").prepend($(".animate-back"));
    }, 300); // Wait for the animation to end
    setTimeout(function () {
      $(".card.animate-back").removeClass("animate-back");
      $(".card").css({ "pointer-events": "auto" });
      clearInterval(myInt);
      myInt = setInterval(function () {
        $(".card.active").trigger("click");
      }, interval);
    }, 700);
  });

  // Just for fun
  $(".polaroid-style").on("click", function () {
    $(".card").toggleClass("polaroid");
  });
});

/*Smooth scroll*/

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    elementId = $(this).data("scroll");
  const el = $("#does-not-exist");
  elementOffset = $(elementId).offset().top;

  $("nav a").removeClass("active");
  $this.addClass("active");

  $("html,body").animate(
    {
      scrollTop: elementOffset,
    },
    700
  );
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Hide element video slides

// document.addEventListener("click", function handleClickOutsideBox(event) {
//   const box = document.getElementById("box");

//   if (!box.contains(event.target)) {
//     box.style.display = "none";
//   }
// });

//  exports.handler = async (event) => {
// try{
// // some code...
//     return {
//       statusCode: 200,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Headers':
//           'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//         'Access-Control-Allow-Methods': 'OPTIONS,POST',
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': '*',
//         'X-Requested-With': '*',
//       },
//       body: JSON stringified object,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Headers':
//           'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//         'Access-Control-Allow-Methods': 'OPTIONS,POST',
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': '*',
//         'X-Requested-With': '*',
//       },
//       body: JSON.stringify({
//         name: error.name,
//         code: error.code,
//         message: error.message,
//       }),
//     };
//   }
// };
