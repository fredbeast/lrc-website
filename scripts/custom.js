$(document).ready(function () {
    $('.circle').addClass('huge');
    $('.circle-2').addClass('huge-2');
    $('.loader-wrapper').delay(1800).fadeOut(600)
});

/* ---- GALLERY ---- */

function gallery1() {
    image1 = [];
    for (i = 0; i < g1.length; i++) {
        image1.push([3 * i]);
    }
    x = (x === g1.length - 1) ? 0 : x + 1;
    $('#g-1').fadeTo('slow', 0, function () {
        $(this).css("background-image", "url(./images/" + g1[x][0] + ")");
        $("#g-1-text").html(g1[x][1]);
        $("#g-1-slide").off("click");
        $('#g-1-slide').click(function () {
            $("#gallery-carousel").carousel(Number(image1[x]));
        });
    }).delay(400).fadeTo(400, 1);
}

function gallery2() {
    image2 = [];
    for (i = 0; i < g2.length; i++) {
        image2.push([3 * i + 1]);
    }
    y = (y === g2.length - 1) ? 0 : y + 1;
    $('#g-2').fadeTo('slow', 0, function () {
        $(this).css("background-image", "url(./images/" + g2[y][0] + ")");
        $("#g-2-text").html(g2[y][1]);
        $("#g-2-slide").off("click");
        $('#g-2-slide').click(function () {
            $("#gallery-carousel").carousel(Number(image2[y]));
        });
    }).delay(400).fadeTo(400, 1);

}

function gallery3() {
    image3 = [];
    for (i = 0; i < g3.length; i++) {
        image3.push([3 * i + 2]);
    }
    z = (z === g3.length - 1) ? 0 : z + 1;
    $('#g-3').fadeTo('slow', 0, function () {
        $(this).css("background-image", "url(./images/" + g3[z][0] + ")");
        $("#g-3-text").html(g3[z][1]);
        $("#g-3-slide").off("click");
        $('#g-3-slide').click(function () {
            $("#gallery-carousel").carousel(Number(image3[z]));
        });
    }).delay(400).fadeTo(400, 1);

}

$(document).ready(function () {
    var cycle;

    function cycleFunction() {
        gallery1();
        setTimeout(gallery2, 1300);
        setTimeout(gallery3, 2600);
    }


    function stopCycle() {
        window.clearInterval(cycle);
        interval = null;
    }

    function startCycle() {
        if (!cycle) {
            cycle = setInterval(cycleFunction, 6000);
        }
    }
    window.addEventListener('focus', startCycle);
    window.addEventListener('blur', stopCycle);
});



var g1 = [],
    x = 0;

var g2 = [],
    y = 0;

var g3 = [],
    z = 0;

g1.push(["boroughs/borough-1.jpg", "WESTMINSTER"]);
g1.push(["boroughs/borough-4.jpg", "WANDSWORTH"]);

g2.push(["boroughs/borough-2.jpg", "KENSINGTON<br>& CHELSEA"]);
g2.push(["boroughs/borough-5.jpg", "HIGHBURY<br>& ISLINGTON"]);


g3.push(["boroughs/borough-3.jpg", "HAMMERSMITH<br>& FULHAM"]);
g3.push(["boroughs/borough-6.jpg", "CAMDEN"]);


$('li a').click(function (e) {
    $('a').removeClass('active');
    $(this).addClass('active');
});

// Add smooth scrolling on all links inside the navbar
$("#navbar a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});

$(document).ready(function () {

    // Fakes the loading setting a timeout
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3500);

});
