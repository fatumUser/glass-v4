function fullImgShow() {
    document.getElementById("full-img").classList.add("full-img-show");
    document.getElementById("body").classList.add("body-no-scroll");
}
function fullImgClose() {
    document.getElementById("full-img").classList.remove("full-img-show");
    document.getElementById("body").classList.remove("body-no-scroll");
}
function burgerMenu() {
    document.getElementById("header__nav").classList.toggle("header__nav-show");
}