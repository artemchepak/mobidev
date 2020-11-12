$(function() {
    //слайдер
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-arrow-left"><img src="images/icons/left-arrow.svg" alt="left arrow"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow-right"><img src="images/icons/right-arrow.svg" alt="right arrow"></button>',
    });
    //счетчик цифр
    let target_block = $("#projects-num"); // Ищем блок 

    let blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $('#projects-num').animate({ num: 28 - 0 /* - начало */ }, {
                duration: 6000,
                step: function(num) {
                    this.innerHTML = (num).toFixed(0)
                }
            });

            $('#clients-num').animate({ num: 19 - 0 /* - начало */ }, {
                duration: 6000,
                step: function(num) {
                    this.innerHTML = (num).toFixed(0)
                }
            });

            $('#countries-num').animate({ num: 11 - 0 /* - начало */ }, {
                duration: 6000,
                step: function(num) {
                    this.innerHTML = (num).toFixed(0)
                }
            });
            $('#users-num').animate({ num: 53 - 0 /* - начало */ }, {
                duration: 6000,
                step: function(num) {
                    this.innerHTML = (num).toFixed(0) + 'k'
                }
            });

        }

    });
});