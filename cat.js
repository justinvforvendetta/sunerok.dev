var scbf = function(d, t) { 
    var c = d.createElement(t),
        i = d.createElement(t),
        s = d.getElementsByTagName(t)[0],
        sf = 200,
        st = 10000,
        img = '/nyan/img/design/';

    // --- Hardcoded array of GIFs ---
    var gifs = [
        'megaman.gif',
        'dragonwarrior.gif',
        'tmnt.gif',
        'cat.gif',
        'qbert.gif',
        'metroid.gif',
        'castlevania.gif'
    ];

    var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    var direction = 1; // 1 = left→right, -1 = right→left

    // bobbing animation
    var up = function() {
        $(this).animate({ marginTop: '-=10' }, sf, i.down);
    };
    var down = function() {
        $(this).animate({ marginTop: '+=10' }, sf, i.up);
    };

    i.up = up;
    i.down = down;

    $(i).addClass('i').css({
        background: 'url(' + img + randomGif + ') no-repeat',
        backgroundSize: 'contain',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transformOrigin: 'center'
    });

    i.up();

    $(c).addClass('c').css({
        position: 'fixed',
        top: '200px',
        left: '-400px',
        zIndex: 100,
        width: '350px',
        height: '350px',
        pointerEvents: 'none',
        background: 'none',
        overflow: 'visible'
    }).html(i).hide().fadeIn(1000);

    s.parentNode.insertBefore(c, s);

    function walk() {
        var startLeft, endLeft, scale;

        if (direction === 1) {
            // left → right (facing right)
            startLeft = -400;
            endLeft = $(window).width() + 400;
            scale = 1;
        } else {
            // right → left (facing left)
            startLeft = $(window).width() + 400;
            endLeft = -400;
            scale = -1;
        }

        $(c).css({ left: startLeft });
        $(i).css({ transform: 'scaleX(' + scale + ')' });

        $(c).animate(
            { left: endLeft },
            st,
            'linear',
            function() {
                direction *= -1; // flip direction
                walk();          // loop forever
            }
        );
    }

    walk();
};

$(document).ready(function() {
    console.log("document loaded");
    scbf(document, 'div');
    k = [];
});
