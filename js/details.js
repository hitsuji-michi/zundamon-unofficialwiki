var elems = document.getElementsByTagName('details');

function details_open(bool) {
    for (elem of elems) {
        elem.open = bool;
    }
}