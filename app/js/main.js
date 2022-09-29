$(function () {

    $('header__btn').on('click', function () {
        $('.dropdown').removeClass('dropdown--close');
    });
    $('dropdown__close').on('click', function () {
        $('.dropdown').addClass('dropdown--close');
    });
    
})