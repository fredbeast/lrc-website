$(".view-jobs").click(function (e) {
    e.preventDefault();

    $('html,body').animate({
            scrollTop: $("#jobs").offset().top
        },
        'slow');
});

$(".view-apply").click(function (e) {
    e.preventDefault();

    $('html,body').animate({
            scrollTop: $("#apply").offset().top
        },
        'slow');
});
