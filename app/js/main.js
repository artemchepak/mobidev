$(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-arrow-left"><img src="images/icons/left-arrow.svg" alt="left arrow"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow-right"><img src="images/icons/right-arrow.svg" alt="right arrow"></button>',
    });
});