$(document ).ready(function() {
    $(".b-search__expand")
    .focus(function(e){
        $("#search-button").addClass("b-search__button--focus");
        $(this).attr("placeholder", "Введите запрос");
    })
    .blur(function(e){
        $("#search-button").removeClass("b-search__button--focus");
        $(this).attr("placeholder", "Поиск");
    });
});