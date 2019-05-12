$(document).ready(function () {
    svg4everybody({});

    function log(arg) {
        console.log(arg);
    }
    var sandwich = $('.header__sandwich')[0];
    var menuMobile = $('.menu_mobile')[0];
    var header = $('.header')[0];
    var item = $(menuMobile).children('.menu__list');
    var menuDesktop = $('.menu')[0];
    var itemDesktop = $(menuDesktop).children('.menu__list');
    var mainScreen = $('.main-screen')[0];

    function mobileMenuOpen(sandwich, menuMobile, header, mainScreen) {
        sandwich.onclick = function (e) {
            e.preventDefault();
            $(mainScreen).toggleClass('main-screen_open');
            $(header).toggleClass('header_open');
            $(menuMobile).toggleClass('menu_open');
            $(this).toggleClass('header__sandwich_open');
        };
    }

    function menuLinkClose(menuMobile,item,header,sandwich, mainScreen) {
        for(var i = 0; i <= item.length-1; i++){
            item[i].onclick = function () {
                $(mainScreen).removeClass('main-screen_open');
                $(header).removeClass('header_open');
                $(sandwich).removeClass('header__sandwich_open');
                $(menuMobile).removeClass('menu_open');
            }
        }
    }


    function menuActiveLink(itemDesktop) {
        for(var i = 0; i <= itemDesktop.length-1; i++){
            itemDesktop[i].onclick = function () {
                for(var i = 0; i <= itemDesktop.length-1; i++){
                    $(itemDesktop[i]).children('.menu__link').removeClass('menu__link_active');
                }
                $(this).children('.menu__link').addClass('menu__link_active');
            }
        }
    }

    mobileMenuOpen(sandwich,menuMobile,header, mainScreen);
    menuLinkClose(menuMobile,item,header,sandwich, mainScreen);
    menuActiveLink(itemDesktop);
});