// slider
const swiper = new Swiper('.main-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// hover header box
$(".js-tab-trigger").hover(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.btn-registration').on('click', function (e) {
    e.preventDefault();
    $('.cabinet-box-entrance').fadeOut();
    $('.cabinet-box-registration').fadeIn();
});

$('.btn-entrance').on('click', function (e) {
    e.preventDefault();
    $('.cabinet-box-registration').fadeOut();
    $('.cabinet-box-entrance').fadeIn();
});

// search mobile
$('.btn-open-search').on('click', function () {
    $('.form-search-mobile').fadeIn();
    $('.overlay').fadeIn();
});

$('.overlay').on('click', function () {
    $('.form-search-mobile').fadeOut();
    $('.search-result').css('display', 'none');
});

$('.form-search input').focus(function () {
    $('.search-result').fadeIn();
});


$('.form-search input').blur(function () {
    $('.search-result').fadeOut();
});


// load card
$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.tabs__content').find('.product-col:hidden').slideDown();

    var onBlock = $(this).parents('.tabs__content').find('.product-col:hidden').length;
    if (onBlock <= 0) {
        $(this).hide();
    }
});

// catalog tabs
$(".tabs-group__item").click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.catalog-tab[data-id="' + id + '"]');

    $('.tabs-group__item.active').removeClass('active');
    $(this).addClass('active');

    $('.catalog-tab.active').removeClass('active');
    content.addClass('active');
});

$(".btn-tab-click").click(function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tab'),
        content = $('.box-tab[data-id="' + id + '"]');

    $('.btn-tab-click.active').removeClass('active');
    $(this).addClass('active');

    $('.box-tab.active').removeClass('active');
    content.addClass('active');
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

// slider range
$(document).ready(function() {

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 2000,
        values: [0, 500],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("values", 0));
    $(".dec2").val($(".slider-range").slider("values", 1));

});

// close dropdown-mob
$('.links-close-dropdown').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.dropdown-mobile').removeClass('active');

});

// preview img clicked = src max img
$(document).ready(function () {
    var penImg = $('.product-image__max img');
    var linksImg = $('.product-image__max a');

    $('.product-image__min div.item').on('click', function () {
        $('.product-image__min div.item').removeClass('click-item');
        $(this).addClass('click-item');
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
        linksImg.attr('href', imgPath);

    });
});

// show block product text
$('.read-more').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        content = $(this).parent().find('.product-wrapper__info-list');

    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть полное описание');

        content.addClass('open');
    } else {
        $this.removeClass('trigger');
        $this.html('Показать полное описание');

        content.removeClass('open');
    }

    $('.product-wrapper-two').toggleClass('click-prev-block');
});


// событие клика за пределами блока
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".js-tab-content"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('active'); // скрываем его
        $('.js-tab-trigger').removeClass('active'); // скрываем его
    }
});
