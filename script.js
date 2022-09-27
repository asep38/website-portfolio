$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // scoll up slide
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // animate typing

  var typed = new Typed(".typing", {
    strings: ["Web Depeloper", "Freelancer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Web Depeloper", "Freelancer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
// hamburger
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar .menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
