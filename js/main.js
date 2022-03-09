$(function () {
  $(".portfolio__slider").slick({
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  nextArrow: '<button type="button" class="slick-next"><img src="images/portfolio/slider-arrow.svg" alt="Right-Arrow"></button>',
  prevArrow: ''
  });
});

const anchors = document.querySelectorAll('.nav-link[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
