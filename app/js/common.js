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


// событие увода мыши с блока
// $(document).mouseout(function (e) { // событие  увода мыши
//     var div = $(".js-tab-content"); // тут указываем ID элемента
//     if (!div.is(e.target) // если увели мышку
//         && div.has(e.target).length === 0) { // и не по его дочерним элементам
//         div.removeClass('active');
//     }
// });