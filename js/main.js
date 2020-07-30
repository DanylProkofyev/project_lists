$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});

$(window).bind("load", function () {
        $('body').addClass('loaded');
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        AOS.init({
            duration: 800,
            easing: 'ease-in-cubic',
            delay: 50,
            anchorPlacement: 'top-bottom',
            once: true
            // disable: 'mobile'
        });
    }
);

document.addEventListener("DOMContentLoaded",
    function () {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = thumb(v[n].dataset.id);
            div.onclick = iframe;
            v[n].appendChild(div);
        }
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        $('.scrollToTop').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    });

function thumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function iframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
