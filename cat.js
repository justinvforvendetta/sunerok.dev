var scbf = function(d,t){
    var c = d.createElement(t),
        i = d.createElement(t),
        s = d.getElementsByTagName(t)[0],
        sf = 200,      // vertical bounce speed
        st = 10000,    // horizontal movement speed
        img = '/nyan/img/design/';
    
    // Bounce up/down functions
    var up = function() {
        $(this).animate({'marginTop' : '-=10'}, sf, i.down);
    }
    var down = function() {
        $(this).animate({'marginTop' : '+=10'}, sf, i.up );
    }
    
    i.up = up;
    i.down = down;
    
    // Cat image (50% smaller)
    $(i).addClass('i')
        .css({
            'background' : 'url(' + img + 'cat.gif) 100% 0 no-repeat',
            'height' : '50%',     // 50% smaller
            'width' : '225px',    // 50% of 450px
            'position' : 'absolute',
            'right' : '0'
        });
    
    i.up(); // start bounce
    
    // Container div (no trail)
    $(c).addClass('c')
        .hide()
        .fadeIn(1000)
        .animate({'width' : '+=120%'}, st, 'linear', function(){
            $(this).fadeOut(function(){
                $(this).remove();
            });
        })
        .css({
            'position' : 'absolute',
            'left' : '-200px',
            'top' : '200px',
            'z-index' : '100',
            'width' : '225px',  // match cat width
            'height' : '175px', // roughly proportional
            'background' : 'none' // removed trail.gif
        })
        .html(i);
    
    s.parentNode.insertBefore(c,s);
};

$(document).ready(function() {
    console.log("document loaded");
    scbf(document,'div');
    k = [];
});
