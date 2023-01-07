var owl = $('.owl-carousel');
owl.owlCarousel({
    nav:true,
    items:4,
    loop:true,
    margin:10,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
    responsive: {
        0: { items: 1, nav: false },
        700: { items: 2, nav: false },
        1200: { items: 3, nav: false },
    }
});
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})