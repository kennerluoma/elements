$(function () {
    const $window = $(window);
    if ($window.scrollTop() > 100)
        $(`.header`).addClass(`small`);
    $window.on(`scroll`, () => {
        $window.scrollTop() > 100 ? $(`.header`).addClass(`small`) : $(`.header`).removeClass(`small`);
    });
    const lightbox = (target) => {
        const images = target.map(function () {
            return this;
        }).toArray();
        let imageIndex;
        const $lb = $(`#lightbox`), $lbcontent = $(`#lightbox>:not(#close)`), $lbcaption = $(`#lightbox>.caption`), $closeBtn = $(`#lightbox>#close`);
        const maxScrollDistance = 200;
        let scrollPosition;
        const updateLightbox = (image) => {
            const $image = $(image);
            if ($image.height() < $image.width()) {
                $lb.addClass(`column`).removeClass(`row`);
            }
            else {
                $lb.addClass(`row`).removeClass(`column`);
            }
            $lbcontent.attr(`src`, $image.attr(`src`)).attr(`alt`, $image.attr(`alt`));
            $lbcaption.text($image.attr(`alt`));
        };
        $(images).on(`click`, function () {
            imageIndex = images.indexOf(this);
            scrollPosition = $window.scrollTop();
            $lb.addClass(`open`);
            $lb.css({
                top: `${scrollPosition - maxScrollDistance}px`,
                paddingTop: `${maxScrollDistance + 40}px`,
                paddingBottom: `${maxScrollDistance + 40}px`,
                height: `${$window.height() + maxScrollDistance * 2}px`,
                maxHeight: `${$window.height() + maxScrollDistance * 2}px`,
                opacity: `1`
            });
            updateLightbox($(this));
            $window.on(`scroll`, () => {
                let offset = Math.abs($window.scrollTop() - scrollPosition);
                let opacity = (maxScrollDistance - offset) / (maxScrollDistance - 100) > 1 ? 1 : (maxScrollDistance - offset) / 100;
                offset > maxScrollDistance ? close(false) : $lbcontent.css({ opacity: `${opacity}` });
            });
        });
        $(document).on(`keydown`, (event) => {
            const key = event.keyCode;
            if ((key === 39 || key === 37) && ($lb.hasClass(`open`))) {
                key === 39 && imageIndex < images.length - 1 ? ++imageIndex :
                    key === 37 && imageIndex > 0 ? --imageIndex : close();
                if ($lbcontent.is(`:animated`)) {
                    $lbcontent.stop(true, false);
                }
                $lbcontent.animate({
                    opacity: 0
                }, 200, () => {
                    updateLightbox(images[imageIndex]);
                }).animate({
                    opacity: 1
                }, 200);
            }
            else if (key === 27 && ($lb.hasClass(`open`))) {
                close();
            }
        });
        const close = (fading = true) => {
            if (fading) {
                $lb.animate({
                    opacity: 0
                }, 200, function () {
                    $lbcontent.removeAttr(`style`);
                    $lb.removeClass(`open`);
                });
            }
            else {
                $lb.removeClass(`open`).css({ opacity: `0` });
                $lbcontent.removeAttr(`style`);
            }
        };
        $(`#close`).on(`click`, () => { close(); });
    };
    lightbox($(`.image-container img`));
});
