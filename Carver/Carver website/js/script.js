// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//Init Scrollspy
$('body').scrollspy({ target: '#main-navigation' });

//add smooth scrolling
$('#main-navigation a').on('click', function (e) {
    //check for a hash value
    if (this.hash !== '') {
        //prevent default behaviour
        e.preventDefault();

        //store hash
        const hash = this.hash;

        //animate smooth scroll
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top,
            },
            900,
            function () {
                //add hash to url after scroll
                window.location.hash = hash;
            }
        );
    }
});

var element = document.getElementById("chat");
element.scrollTop = element.scrollHeight;

function updateScroll() {
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
}

//once a second
setInterval(updateScroll, 0);

var scrolled = false;
function updateScroll() {
    if (!scrolled) {
        var element = document.getElementById("chat");
        element.scrollTop = element.scrollHeight;
    }
}

$("#chat").on('scroll', function () {
    scrolled = true;
});

$('#list-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$(function () {
    $('#list-tab a:first-child').tab('show')
})



