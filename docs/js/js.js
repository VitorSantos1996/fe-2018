function container1() {
    document.getElementsByClassName('hr')[0].style.visibility = 'visible';
    document.getElementsByClassName('hr')[1].style.visibility = 'visible';
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('nav')[0].style.visibility = 'visible';
    document.getElementsByClassName('containeri')[0].style.display = 'inline-block';
}

function containern() {
    document.getElementsByClassName('containeri')[0].style.display = 'none';
    document.getElementsByClassName('containern')[0].style.display = 'inline-block';
}

function containerd() {
    document.getElementsByClassName('containern')[0].style.display = 'none';
    document.getElementsByClassName('containerd')[0].style.display = 'inline-block';
}

function containere() {
    document.getElementsByClassName('containerd')[0].style.display = 'none';
    document.getElementsByClassName('containere')[0].style.display = 'inline-block';
}

function containerc() {
    document.getElementsByClassName('containere')[0].style.display = 'none';
    document.getElementsByClassName('containerc')[0].style.display = 'inline-block';
}

function containerv() {
    document.getElementsByClassName('containerc')[0].style.display = 'none';
    document.getElementsByClassName('containerv')[0].style.display = 'inline-block';
}

function finalizar() {
    document.getElementsByClassName('containerv')[0].style.display = 'none';
    document.getElementsByClassName('hr')[0].style.visibility = 'hidden';
    document.getElementsByClassName('hr')[1].style.visibility = 'hidden';
    document.getElementsByClassName('container')[0].style.display = 'inline-block';
    document.getElementsByClassName('nav')[0].style.visibility = 'hidden';
    document.getElementsByClassName('containeri')[0].style.display = 'none';
}