window.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector("#video");
    const playBtn = document.querySelector("#playVideo");
    const tabs = document.querySelectorAll(".tabs_item");

    playBtn.addEventListener('click', function () {
        video.play();
        video.setAttribute('controls', 'controls');
        playBtn.style.display = "none";
    });
    video.addEventListener('ended', function () {
        this.src = this.src;
        playBtn.style.display = "block";
        video.removeAttribute('controls');
    });

    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            if (elem.classList.contains("tabs_item_active")) {
                elem.classList.remove("tabs_item_active");
            } else {
                tabs.forEach(otherItem => {
                    if (otherItem.classList.contains("tabs_item_active")) {
                        otherItem.classList.remove("tabs_item_active");
                    }
                });
                elem.classList.add("tabs_item_active");
            }
        });
    });

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel_arrow carousel_next"><i class="fas fa-chevron-right"></i></div>'
    });

    $("#buyNowBtn").on('click', () => {
        $('.buy_now_popup').addClass('popup_active');
        $('.buy_now_popup').show();
        $('body').css('overflow', 'hidden');
    });

    $('#tryForFreeBtn').on('click', () => {
        $('.try_for_free_popup').addClass('popup_active');
        $('.try_for_free_popup').show();
        $('body').css('overflow', 'hidden');
    });

    $('#signBtn, .ft_about_item').on('click', () => {
        $('.soon_popup').addClass('popup_active');
        $('.soon_popup').show();
        $('body').css('overflow', 'hidden');
    });

    $(".popup_close").on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').css('overflow', 'visible');
    });

    /*
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
    */

    $('.form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "#",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('form').trigger('reset');
            $('.popup').hide();
            $('.popup').addClass('popup_active');
            $('.popup_done').show();
        });
        return false;
    });
});