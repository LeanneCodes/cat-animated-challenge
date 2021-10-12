var i = 0; //Start point
var images = [];
var time = 3000;

// Image list
images[0] = 'frame1.jpg';
images[1] = 'frame2.jpg';
images[2] = 'frame3.jpg';

// Change image
function changeImage(){
    document.cat.src = images[i];

    if(i < images.length - 1){
        i++;   
    } else {
        i = 0;
    }

setTimeout("changeImage()", time);
}

window.onload = changeImage;