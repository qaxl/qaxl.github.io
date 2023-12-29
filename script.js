$(document).ready(function() {
    // Toggle the menu on click of the menu icon
    $('.tn .icon').click(function() {
        $('.tn .icon').slideToggle();
    });

    if ($(window).width() < 768) {
        alert("This website isn't currently supported on mobile platforms. Please consider accessing the website under desktop platforms instead. However, you can continue using this website as you wish.");
    }
});
