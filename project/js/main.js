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
});