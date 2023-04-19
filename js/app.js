var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var barcontents = document.getElementsByClassName('bar-contents');


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Video

if(window.innerWidth < 768) {
    const dcstpVideo = document.getElementById('dekcstop-video');
    const mdVideo = document.getElementById('media-video');

    dcstpVideo.classList.add('none');
    mdVideo.classList.remove('none');
}