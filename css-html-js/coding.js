$(function() {
    const hum = $('.hamburger, .close');
    const nav = $('.sp-nav');
    const swiperContainer = $('.swiperContainer');
    const swiperOffset = 400; // 高さ
    
    hum.on('click', function() {
        nav.toggleClass('toggle');
        
        if (nav.hasClass('toggle')) {
            swiperContainer.css('margin-top', swiperOffset + 'px'); // Swiperスライド
        } else {
            swiperContainer.css('margin-top', '0'); // 元の位置に戻す
        }
    });
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    breakpoints:{
        600:{
            slidesPerView:2,
            loop: true,
            speed: 1500,
            autoplay:{
                delay: 1500,
                disableOnIntraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        },
    },
    loop: true,
    speed: 2000,
    autoplay:{
        delay: 1500,
        disableOnIntraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const headings = document.querySelectorAll('h1.maincontents');

headings.forEach((heading) => {
    heading.addEventListener('click', () => {
        const nextUl = heading.nextElementSibling;
        
        if (nextUl.classList.contains('hidden')) {
            nextUl.classList.remove('hidden'); 
            nextUl.style.maxHeight = nextUl.scrollHeight + "px";
            nextUl.style.opacity = "1";  // フェードイン不透明度設定
            nextUl.style.transform = "translateY(0)";
        } else {
            nextUl.style.maxHeight = "0"; 
            nextUl.style.opacity = "0"; 
            nextUl.style.transform = "translateY(0px)"; // フェードアウト位置調整
            nextUl.addEventListener('transitionend', () => {
                nextUl.classList.add('hidden');  // フェードアウト後非表示
            }, { once: true });
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.hidden'); 

    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
