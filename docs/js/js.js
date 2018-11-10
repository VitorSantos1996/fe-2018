function container1() {
    document.getElementsByClassName('hr')[0].style.visibility = 'visible';
    document.getElementsByClassName('hr')[1].style.visibility = 'visible';
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('nav')[0].style.visibility = 'visible';
    document.getElementsByClassName('containeri')[0].style.display = 'inline-block';
    document.getElementsByTagName('li')[0].style.backgroundColor = "#8C8C8C";
}

function containern() {
    document.getElementsByClassName('containeri')[0].style.display = 'none';
    document.getElementsByClassName('containern')[0].style.display = 'inline-block';
    document.getElementsByTagName('li')[0].style.backgroundColor = "#CCCCCC";
    document.getElementsByTagName('li')[1].style.backgroundColor = "#8C8C8C";
}

function containerd() {
    document.getElementsByClassName('containern')[0].style.display = 'none';
    document.getElementsByClassName('containerd')[0].style.display = 'inline-block';
    document.getElementsByTagName('li')[1].style.backgroundColor = "#CCCCCC";
    document.getElementsByTagName('li')[2].style.backgroundColor = "#8C8C8C";
}

function containere() {
    document.getElementsByClassName('containerd')[0].style.display = 'none';
    document.getElementsByClassName('containere')[0].style.display = 'inline-block';
    document.getElementsByTagName('li')[2].style.backgroundColor = "#CCCCCC";
    document.getElementsByTagName('li')[3].style.backgroundColor = "#8C8C8C";
}

function containerc() {
    document.getElementsByClassName('containere')[0].style.display = 'none';
    document.getElementsByClassName('containerc')[0].style.display = 'inline-block';
    document.getElementsByTagName('li')[3].style.backgroundColor = "#CCCCCC";
    document.getElementsByTagName('li')[4].style.backgroundColor = "#8C8C8C";
}

function containerv() {
    document.getElementsByClassName('containerc')[0].style.display = 'none';
    document.getElementsByClassName('containerv')[0].style.display = 'inline-block';
    document.getElementsByTagName('li')[4].style.backgroundColor = "#CCCCCC";
    document.getElementsByTagName('li')[5].style.backgroundColor = "#8C8C8C";
}

function finalizar() {
    document.getElementsByClassName('containerv')[0].style.display = 'none';
    document.getElementsByClassName('hr')[0].style.visibility = 'hidden';
    document.getElementsByClassName('hr')[1].style.visibility = 'hidden';
    document.getElementsByClassName('container')[0].style.display = 'inline-block';
    document.getElementsByClassName('nav')[0].style.visibility = 'hidden';
    document.getElementsByClassName('containeri')[0].style.display = 'none';
    document.getElementsByTagName('li')[0].style.backgroundColor = "#F2F2F2";
    document.getElementsByTagName('li')[1].style.backgroundColor = "#F2F2F2";
    document.getElementsByTagName('li')[2].style.backgroundColor = "#F2F2F2";
    document.getElementsByTagName('li')[3].style.backgroundColor = "#F2F2F2";
    document.getElementsByTagName('li')[4].style.backgroundColor = "#F2F2F2";
    document.getElementsByTagName('li')[5].style.backgroundColor = "#F2F2F2";
    document.getElementsByTagName('li')[6].style.backgroundColor = "#F2F2F2";
}