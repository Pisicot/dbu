//hamburger menu
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu__mobile'),
    closeElem = document.querySelector('.menu__mobile-close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//carousel
$(document).ready(function () {
    $('.answer__block-title').click(function (event) {
        if ($('.answer__block').hasClass('one')) {
            $('.answer__block-title').not($(this)).removeClass('active');
            $('.answer__block-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    // modal
    $('[data-modal=call]').on('click', function () {
        $('.overlay, #call').fadeIn('slow');
    });
    $('[data-modal=santehnik]').on('click', function () {
        $('.overlay, #santehnik').fadeIn('slow');
    });
    $('[data-modal=docs]').on('click', function () {
        $('.overlay, #docs').fadeIn('slow');
    });
    $('.overlay__close').on('click', function () {
        $('.overlay, #call, #santehnik, #docs').fadeOut('slow');
    });

    //slider
    $('.news__items').slick({
        infinite: false,
        dots: false,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    $('.reviewswriting__items, .reviewsaudio__items').slick({
        infinite: false,
        dots: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        mobileFirst: true
    });
    $('.reviewstext__items').slick({
        infinite: true,
        dots: false,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        mobileFirst: true
    });
});

document.getElementById('file').addEventListener('change', function (e) {
    if (this.files && this.files.length == 1) {
        const textContainer = this.nextElementSibling.querySelector('.overlay__form-text');
        const fileName = e.target.value.split('\\').pop();
        if (textContainer) {
            textContainer.textContent = fileName || 'Выберите файл для загрузки';
            return true;
        }
    }
    return false;
});






