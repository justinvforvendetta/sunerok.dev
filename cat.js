var scbf = function(d, t) { 
    var c = d.createElement(t),
        i = d.createElement(t),
        s = d.getElementsByTagName(t)[0],
        sf = 200,
        st = 10000,
        img = '/nyan/img/design/';

    // --- Hardcoded array of GIFs ---
    var gifs = ['megaman.gif', 'dragonwarrior.gif', 'tmnt.gif', 'cat.gif', 'qbert.gif', 'metroid.gif', 'castlevania.gif'];
    var randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    var up = function() {
        $(this).animate({'marginTop' : '-=10'}, sf, i.down);
    }
    var down = function() {
        $(this).animate({'marginTop' : '+=10'}, sf, i.up );
    }
    
    i.up = up;
    i.down = down;
    
    $(i).addClass('i')
        .css({
            'background' : 'url(' + img + randomGif + ') 100% 0 no-repeat',
            'height' : '100%',
            'width' : '450px', 
            'position' : 'absolute',
            'right' : '0'
        });
    
    i.up();
    
    $(c).addClass('c')
        .hide()
        .fadeIn(1000)
        .animate({'width' : '+=120%'}, st, 'linear', function(){
            $(this).fadeOut(function(){
                $(this).remove();
            });
        })
        .css({
            'position' : 'fixed',
            'left' : '-200px',
            'top' : '200px',
            'z-index' : '100',
            'width' : '350px',
            'height' : '350px',
			pointerEvents: 'none',
            'background' : 'none'
        })
        .html(i);

    s.parentNode.insertBefore(c, s);
};

$(document).ready(function() {
    console.log("document loaded");
    scbf(document,'div');
    k = [];
});