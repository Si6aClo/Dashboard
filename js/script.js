
$(document).ready(function () {
    //Header functions
    $('.header__notify-noactive').on('click', function () {
        $(this)[0].style.display = 'none';
        $('.header__notify-active')[0].style.display = 'block';
        $('.menu-notify').addClass('active');
    });
    $('.header__notify-active').on('click', function () {
        $(this)[0].style.display = 'none';
        $('.header__notify-noactive')[0].style.display = 'block';
        $('.menu-notify').removeClass('active');
    });
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //Dashboard functions
    //top block
    $('.dashboard__change').on('click', function () {
        $('#change-img').toggleClass('active');
        $('.statblockmin').toggleClass('active');
    });
    //connect block
    $('.connect__bigbubble1').on('click', function() {
        $(this).addClass('active');
        $('.connect__bigbubble2').removeClass('active');
        $('.connect__bigbubble3').removeClass('active');
    });
    $('.connect__bigbubble2').on('click', function() {
        $(this).addClass('active');
        $('.connect__bigbubble1').removeClass('active');
        $('.connect__bigbubble3').removeClass('active');
    });
    $('.connect__bigbubble3').on('click', function() {
        $(this).addClass('active');
        $('.connect__bigbubble2').removeClass('active');
        $('.connect__bigbubble1').removeClass('active');
    });
    //graph-block
    $('.condition__year').on('click', function () {
        $(this).addClass('active');
        $('.condition__week').removeClass('active');
        $('.condition__month').removeClass('active');
    });
    $('.condition__week').on('click', function () {
        $(this).addClass('active');
        $('.condition__year').removeClass('active');
        $('.condition__month').removeClass('active');
    });
    $('.condition__month').on('click', function () {
        $(this).addClass('active');
        $('.condition__week').removeClass('active');
        $('.condition__year').removeClass('active');
    });
    //Адаптив
    const screenWidth = window.screen.width;
    if (screenWidth <= 500) {
        $('.statblockmin').removeClass('active');
    }
});