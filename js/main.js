const buttonClient = document.querySelector(".navigation__btn"),
    modalClient = document.querySelector(".site__navigation"),
    buttonMap = document.querySelector(".map__btn"),
    map = document.querySelector(".map"),
    footer = document.getElementById("last"),
    logo = document.querySelector(".logo-mob"),
    menuPlace = document.getElementById("no-flex");

    (function ($) {
        $(window).on('load', function () {
            $.instagramFeed({
                'username': 'bzz.tattoo', //Имя пользователя
                'container': "#instafeed", //Контейнер для изображений
                'display_profile': false, //Отображение профиля
                'display_biography': false, //Отображение биографии
                'display_gallery': true, //Отображение галереи
                'styling': false, //Стандартные стили библиотеки
                'items': 6, //Количество изображений в галереи
                'items_per_row': 3, //Количество изображений в ряд
                'margin': 1, //Отступ между изображениями
                'image_size': 320
            });
        });
    })(jQuery);

$(document).ready(function () {

            $('.navigation__btn').on('click', function () {
                $('.site__navigation').slideToggle();
                $('.main__header-logo').slideToggle();
            });


            function anim() {
                footer.scrollIntoView(false);
                map.removeEventListener('transitionend', anim);
            }



            function scroll() {
                map.addEventListener('transitionend', anim);
                map.classList.toggle("is__open");
            }
            //buttonMap.addEventListener("click", scroll);

        });