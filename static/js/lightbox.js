// Opens links to images, Youtube videos and Vimeo videos (also unlisted ones) in a lightbox: a modal
// dialog, so the page behind it is out of reach and Escape closes it. Links in the same paragraph or
// list form a gallery. Links with the class no-lightbox open normally.
document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.createElement('dialog');
    lightbox.id = 'lightbox';
    // the focus on the lightbox itself, not in a video, so the keys below work
    lightbox.autofocus = true;
    document.body.appendChild(lightbox);
    var gallery = [];
    var current = 0;

    // the html of a link in the lightbox, or nothing for a link that opens normally
    function content(link) {
        var url = link.href;
        var youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?(?:.*&)?v=))([\w-]{11})/);
        // vimeo.com/123, player.vimeo.com/video/123, vimeo.com/channels/name/123 and the like, for an
        // unlisted video with its hash: vimeo.com/123/abc or player.vimeo.com/video/123?h=abc
        var vimeo = url.match(/vimeo\.com\/(?:(?:.*\/)?videos?\/|channels\/[^\/]+\/)?(\d+)(?:\/(\w+)|.*[?&]h=(\w+))?/);
        if (link.classList.contains('no-lightbox')) return '';
        if (youtube) {
            var start = url.match(/[?&](?:t|start)=(\d+)/);
            var end = url.match(/[?&]end=(\d+)/);
            return iframe('https://www.youtube.com/embed/' + youtube[1] + '?autoplay=1&rel=0' + (start ? '&start=' + start[1] : '') + (end ? '&end=' + end[1] : ''));
        }
        if (vimeo) {
            var hash = vimeo[2] || vimeo[3];
            return iframe('https://player.vimeo.com/video/' + vimeo[1] + '?autoplay=1&byline=0&title=0&portrait=0' + (hash ? '&h=' + hash : ''));
        }
        if (/\.(jpe?g|png|gif|webp)\b/i.test(url)) return '<img src="' + url + '" alt="">';
        return '';
    }

    function iframe(src) {
        return '<iframe src="' + src + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    }

    function show(index) {
        current = (index + gallery.length) % gallery.length;
        lightbox.innerHTML = '<span id="close"></span>' + (gallery.length > 1 ? '<span id="prev">&lsaquo;</span><span id="next">&rsaquo;</span>' : '') + content(gallery[current]);
        if (!lightbox.open) lightbox.showModal();
    }

    // a click on a link opens it, with the other links in its paragraph or list as the gallery. In
    // browsers without dialogs links open normally
    document.addEventListener('click', function (event) {
        var link = event.target.closest('a[href]');
        if (!link || !lightbox.showModal || !content(link)) return;
        event.preventDefault();
        gallery = Array.from((link.closest('p, ul, ol') || link.parentNode).querySelectorAll('a[href]')).filter(content);
        show(gallery.indexOf(link));
    });

    // the arrows show the previous and next link, a click anywhere else closes the lightbox
    lightbox.addEventListener('click', function (event) {
        if (event.target.id == 'prev') show(current - 1);
        else if (event.target.id == 'next') show(current + 1);
        else lightbox.close();
    });

    // also after Escape: stops a video
    lightbox.addEventListener('close', function () {
        lightbox.innerHTML = '';
    });

    document.addEventListener('keydown', function (event) {
        if (!lightbox.open || gallery.length < 2) return;
        if (event.key == 'ArrowLeft') show(current - 1);
        if (event.key == 'ArrowRight') show(current + 1);
    });
});
