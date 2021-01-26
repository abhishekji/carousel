let sliderImg = 0;
const imageColl = document.getElementsByClassName('image');
for(let i=0; i<imageColl.length; i++) {
    imageColl[i].style.display = 'none';
}
function changeSlides(n) {
    sliderImg += n;
    if (sliderImg > 2) {
        sliderImg = 0;
    } else if (sliderImg < 0) {
        sliderImg = imageColl.length - 1;
    }
    for(let i=0; i<imageColl.length; i++) {
        imageColl[i].style.display = 'none';
    }
    imageColl[sliderImg].style.display = 'block';
    
}
imageColl[0].style.display = 'block';
