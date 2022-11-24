const btnNext = document.querySelector('.js-btn-slider-right');
const btnPrev = document.querySelector(".js-btn-slider-left"); 


const swiper = new Swiper('.swiper', {
    breakpoints: {
        1199: {
            slidesPerView: 4,
            spaceBetween: 20,
            watchSlidesProgress:true,
            loopFillGroupWithBlank: true,
            hideOnClick:true,
        },

        768: {
            slidesPerView: 2.3,
            spaceBetween:20,
            watchSlidesProgress:true,            // loopFillGroupWithBlank: true,
            loopFillGroupWithBlank: true,

        },

        375: {
            slidesPerView: 1.8,
            spaceBetween:10,
            watchSlidesProgress:true,            // loopFillGroupWithBlank: true,
            loopFillGroupWithBlank: true,

        }

    },
    navigation: {   
        enabled:true,
        nextEl: btnNext,
        prevEl: btnPrev,
       
        
      },

  });
 