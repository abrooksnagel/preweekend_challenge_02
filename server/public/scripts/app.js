$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);


});

function clickyButton(){
    var data = {};

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(gremlins) {
            appendDOM(gremlins);
        }
    });


}

function appendDOM(kittyfoo) {
    for (var i = 0; i < kittyfoo.people.length; i++) {
        $('.container').append('<p>' + kittyfoo.people[i] + '</p>').hide().fadeIn(800);
    }
}

