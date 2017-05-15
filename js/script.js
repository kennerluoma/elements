$(function () {
    const $window = $(window);
    $window.on(`scroll`, () => {
        $window.scrollTop() > 100 ? $(`.header`).addClass(`small`) : $(`.header`).removeClass(`small`);
    });
    const lightbox = () => {
        let s;
        const $lb = $(`#lightbox`), $lbcontent = $(`#lightbox>*`), $lbcaption = $(`#lightbox>.caption`), max = 200;
        $(`.image-container img`).on(`click`, function () {
            $lb.css({});
            s = $window.scrollTop();
            $lb.addClass(`open`);
            $lb.css({
                top: `${s - max}px`,
                paddingTop: `${max + 40}px`,
                paddingBottom: `${max + 40}px`,
                height: `${$window.height() + max * 2}px`,
                maxHeight: `${$window.height() + max * 2}px`,
                opacity: `1`
            });
            if ($(this).height() < $(this).width()) {
                $lb.addClass(`column`).removeClass(`row`);
            }
            else {
                $lb.addClass(`row`).removeClass(`column`);
            }
            $lbcontent.attr(`src`, $(this).attr(`src`)).attr(`alt`, $(this).attr(`alt`));
            $lbcaption.text($(this).attr(`alt`));
            console.log($lbcaption);
            $window.on(`scroll`, () => {
                let offset = Math.abs($window.scrollTop() - s), opacity = (max - offset) / (max - 100) > 1 ? 1 : (max - offset) / 100;
                offset > max ? close() : $lbcontent.css({ opacity: `${opacity}` });
                console.log(opacity, max, offset);
            });
        });
        const close = () => {
            $lb.removeClass(`open`);
            $lb.css({ opacity: `0` });
            $lbcontent.removeAttr(`style`);
        };
        $(`#close`).on(`click`, close);
    };
    lightbox();
});
