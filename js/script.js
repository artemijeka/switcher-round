(function () {
  document.addEventListener('DOMContentLoaded', function () {
    


    let switcherRound__sliderItemList = document.querySelectorAll('.switcher-round__slider-item');
    let switcherRound__sliderItem_active = document.querySelector('.switcher-round__slider-item.--active');
    let switcherRound__listItem_active = document.querySelector('.switcher-round__reviews-list-item.--active');


    switcherRound__sliderItemList.forEach(function (el) {
      el.addEventListener('click', function() {       

        switcherRound__sliderItem_active.classList.remove('--active');
        switcherRound__sliderItem_active = this;
        switcherRound__sliderItem_active.classList.add('--active');
        
        let curI = this.dataset.slideIndex;
        switcherRound__listItem_active.classList.remove('--active');
        switcherRound__listItem_active = document.querySelector('.switcher-round__reviews-list-item[data-slide-index="'+curI+'"]');
        // console.log(test);
        switcherRound__listItem_active.classList.add('--active');

      });
    });



  });
})();