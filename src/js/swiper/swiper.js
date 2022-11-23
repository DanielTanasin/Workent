const btnNext = document.querySelector('.js-btn-slider-right');
const btnPrev = document.querySelector(".js-btn-slider-left"); 


const swiper = new Swiper('.swiper', {
    // slidesPerView: 4,
    // spaceBetween: 20,
    // direction:"horizontal",
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    // mousewheel: {
    //     invert: true,
    //   },
    //   speed:600,
    //   parallax: true,
    // followFinger: true,
    
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {   
        enabled:true,
        nextEl: btnNext,
        prevEl: btnPrev,
        
        
      },
    
  });
 