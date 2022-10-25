let offset=0; //смещение от левого края
const sliderLine=document.querySelector('.container .slider .slider-line');

document.querySelector('.container .buttons .next').addEventListener('click', function() {
    offset += 300;
    if (offset > 3800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.container .buttons .prev').addEventListener('click', function() {
    offset -= 300;
    if (offset < 0) {
        offset = 3800;
    }
    sliderLine.style.left = -offset + 'px';
})
