function showNav() {
    var links = document.querySelector('#myLinks');

    if (links.classList.contains('show')) {
        links.classList.remove('show');
    } else {
        links.classList.add('show');
    }
}
