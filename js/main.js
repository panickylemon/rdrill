$(document ).ready(function() {
    $(".b-search__expand")
    .focus(function(e){
        $("#search-button").addClass("b-search__button--focus");
        $(this).attr("placeholder", "Введите запрос");
    })
    .blur(function(e){
        setTimeout(function(){
            $("#search-button").removeClass("b-search__button--focus");
        },300);
        $(this).attr("placeholder", "Поиск");
    });


    $(".header__menu-item").each(function(){
        if ($(this).children('ul').length != 0){
            $(this).addClass("menu-item__has-child");
        }
    });

    $(".header__menu-burger").click(function() {
        $(".header__menu").slideToggle("slow");
        if( $('.icon-bar').is(':visible') ) {
            $(".icon-bar").hide();
        } else {
            $(".icon-bar").delay(500).fadeIn(100);
        }
        if( $('.icon-close').is(':visible') ) {
            $(".icon-close").delay(300).fadeOut(100);
        } else {
            $(".icon-close").show();
        }
    });


    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true, //Зацикливаем слайдер
        nav:false, //Отключена навигация
        // autoplay:true, //Автозапуск слайдера
        // smartSpeed:1000, //Время движения слайда
        // autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // $('#demoTab').easyResponsiveTabs({ tabidentify: 'vert' });
    // $('#myTab').tabCollapse({
    //     tabsClass: 'hidden-sm hidden-xs',
    //     accordionClass: 'visible-sm visible-xs'
    // });
});