/* Date Picker */


$(document).ready(function () {

    var dateFormat = "dd/mm/yy",
        start = $("#startdate").datepicker({
            defaultDate: new Date(),
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            showButtonPanel: false,
            showOtherMonths: true,
            selectOtherMonths: true,
            minDate: new Date(),
            beforeShowDay: highlightDays
        }).on("change", function () {
            end.datepicker("option", "minDate", getDate(this));
        }),

        end = $("#enddate").datepicker({
            defaultDate: new Date(),
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            showButtonPanel: false,
            showOtherMonths: true,
            selectOtherMonths: true,
            minDate: new Date(),
            beforeShowDay: highlightDays
        }).on("change", function () {
            start.datepicker("option", "maxDate", getDate(this));
        });

    $("#enddate").datepicker("widget").wrap('<div class="ll-skin-nigran"/>');

    function highlightDays(date) {
        if (start.datepicker("getDate") != null) {
            if (start.datepicker("option", "maxDate") != null && end.datepicker("option", "minDate") != null && date != null) {
                if (date.valueOf() == start.datepicker("option", "maxDate").valueOf() || date.valueOf() == end.datepicker("option", "minDate").valueOf()) {
                    return [true, 'ui-state-selected'];
                }
            }

            if (date > start.datepicker("getDate") && date < end.datepicker("getDate")) {
                return [true, 'ui-state-range'];
            }
        }
        return [true, ''];

    }

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }
});

/* Booking Form Submit */

function process() {
    var params = {};
    var formGuest = $("#guests").val();
    var formStart = $.datepicker.formatDate("yy-mm-dd", $("#startdate").datepicker("getDate"));
    var formEnd = $.datepicker.formatDate("yy-mm-dd", $("#enddate").datepicker("getDate"));
    if (formGuest != 0) {
        params.guests = formGuest;
    }
    if (formStart != "") {
        params.startDate = formStart;
    }
    if (formEnd != "") {
        params.endDate = formEnd;
    }

    var url = "https://thelondonresidentsclub.guestybookings.com/listings?" + $.param(params);

    window.open(url, '_blank');
    return false;
}



$(document).ready(function () {
    $(".circle").addClass("huge");
    $(".circle-2").addClass("huge-2");
    $(".loader-wrapper").delay(1800).fadeOut(600)
});

$(document).ready(function () {
    $(".circle").addClass("huge");
    $(".circle-2").addClass("huge-2");
    $(".loader-wrapper").delay(1800).fadeOut(600)
});

/* ---- SLICK GALLERY ---- */

$(".multiple-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 980, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




$(".navbar-nav li a").click(function (e) {
    $(".navbar-nav li a").removeClass("active");
    $(this).addClass("active");
});

// Add smooth scrolling on all links inside the navbar
$("#navbar a").on("click", function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery"s animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});

// Add smooth scrolling on all links inside the navbar
$("#trioService").on("click", function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery"s animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});


$(document).ready(function () {
    $("body").addClass("loaded");
});
