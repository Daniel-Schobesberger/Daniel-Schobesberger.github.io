function switchLeft() {
var img1 = document.images[0].src;
for (var i = 0; i < 4; i++) {
    document.images[i].src = document.images[i + 1].src;
    document.images[i].src = document.images[i +1].src;
    document.images[i].src = document.images[i +1].src;
    document.images[i].src = document.images[i +1].src;
}
    document.images[4].src = img1;
}

function switchRight() {
var img2 = document.images[4].src;
for (var i = 4; i > 0; i--) {
    document.images[i].src = document.images[i - 1].src;
    document.images[i].src = document.images[i - 1].src;
    document.images[i].src = document.images[i - 1].src;
    document.images[i].src = document.images[i - 1].src;
}
    document.images[0].src = img2;
}