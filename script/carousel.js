let itemIndex = 1
carouselControl(itemIndex,false);
var queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const detected_carousel = urlParams.get("carousel");
let items = document.querySelectorAll(".carousel.item");
for (let i = 0; i < items.length; i++) {
    if (items[i].getAttribute("prop") == detected_carousel) {
        itemIndex = i + 1;
        carouselControl(i + 1);
    }
}

function carouselChange(diff) {
    itemIndex += diff
    carouselControl(itemIndex,true);
}
function carouselSet(id) {
    itemIndex = id;
    carouselControl(itemIndex,true);
}
function carouselControl(id,is_new) {
    let items = document.querySelectorAll(".carousel.item");
    let dots = document.querySelectorAll(".carousel.dot");
    let descs = document.querySelectorAll(".carousel.desc");
    if (id > items.length) {
        itemIndex = 1;
    }
    if (id < 1) {
        itemIndex = items.length;
    }
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("hide")
        descs[i].classList.add("hide")
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    items[itemIndex - 1].classList.remove("hide")
    if (is_new) {
        window.history.replaceState(null, null, "?carousel=" + items[itemIndex - 1].getAttribute("prop"))
    }
    dots[itemIndex - 1].classList.add("active")
    descs[itemIndex - 1].classList.remove("hide")
}