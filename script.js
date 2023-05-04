var index = 0;
showSlides();

function showSlides() {
    var i;
    var items = document.getElementsByClassName("item");
    for (i = 0 ; i < items.length ; i++) {
        items[i].style.display = "none";
    }
    index++;
    if (index > items.length) {index = 1}
    items[index-1].style.display = "block";
    setTimeout(showSlides, 1000)
}
