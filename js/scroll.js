$('a[href^="#"]').click(function (event) {
    var scroll_el = $(this).attr('href').replace("#", "").toString();
    $('html, body').animate({
        scrollTop: $('a[name=' + scroll_el).offset().top - 50
    }, 500);
    return false;
});