window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs_item");

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
});