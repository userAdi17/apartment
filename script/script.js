$(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"> < </button>',
        nextArrow: '<button type="button" class="slick-next"> > </button>'

    })
$(window).scroll(function () {
    if($(this).scrollTop() > 1000){
        $('.pageup').fadeIn()
    }else{
        $('.pageup').fadeOut()
    }
})




});


