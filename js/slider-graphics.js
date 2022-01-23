new Swiper('.slider-graphics', {
    slidesPerView: 8,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    speed: 550,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        370: {
            slidesPerView: 2,
            spaceBetween: 150,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        550: {
            slidesPerView: 3,
            spaceBetween: 150,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        750: {
            slidesPerView: 4,
            spaceBetween: 170,
        },
        900: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 7,
            spaceBetween: 80,
        },
        1800: {
            slidesPerView: 8,
            spaceBetween: 80,
        }
    }
});

