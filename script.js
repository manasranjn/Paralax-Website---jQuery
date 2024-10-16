$(window).on("scroll", function() {
    var parallax = $(".parallax");
    var scrollPosition = $(this).scrollTop();
    console.log(scrollPosition)
    parallax.css("transform", "translateY("+ scrollPosition * 0.5 + "px" +")");
})