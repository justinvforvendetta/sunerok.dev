// cat.js - cats run in the background, non-blocking
$(document).ready(function() {
    console.log("document loaded");

    // Create a background container for cats
    var catBackground = $('<div id="cat-background"></div>').css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'pointer-events': 'none',  // allow scrolling and clicks
        'overflow': 'hidden',
        'z-index': 0  // behind all content
    }).appendTo('body');

    // Function to spawn a cat
    function spawnCat() {
        var sf = 200;   // up/down animation speed
        var st = 10000; // horizontal animation duration
        var imgPath = '/nyan/img/design/';

        // Create cat div
        var cat = $('<div class="cat"></div>').css({
            'background': 'url(' + imgPath + 'cat.gif) 50% 0 repeat',
            'width': window.innerWidth < 768 ? '200px' : '450px',
            'height': 'auto',
            'position': 'absolute',
            'right': '0',
            'top': Math.random() * (window.innerHeight - 100) + 'px', // random vertical position
            'pointer-events': 'none'
        });

        // Up/down animation
        function up() {
            cat.animate({'marginTop': '-=10'}, sf, down);
        }
        function down() {
            cat.animate({'marginTop': '+=10'}, sf, up);
        }

        up(); // start animation

        // Horizontal fly across screen
        var container = $('<div class="cat-container"></div>').css({
            'position': 'absolute',
            'top': cat.css('top'),
            'left': '-200px',
            'width': '350px',
            'height': '350px',
            'pointer-events': 'none'
        }).append(cat).appendTo(catBackground);

        container.animate({'left': '120%'}, st, 'linear', function() {
            container.remove(); // remove after animation
        });
    }

    // Spawn the first cat
    spawnCat();

    // Optionally, spawn a new cat every few seconds
    setInterval(spawnCat, 5000); // every 5 seconds
});
