
const pictures = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const folder = 'images';

const nbImages = pictures.length;

let previous = document.querySelector('#previous');

let getCurrentImageId = function() {
    let currentImage = document.querySelector('img').src;

    let array = currentImage.split('/');
    let id = array[array.length -1].split('.');
    id = Number(id[0]);
    console.log(id);  
    return id;
} 

let changeImage = function(sign) { 
    let id = getCurrentImageId();
    console.log(id);
    let newId;
    if ( sign === '+' ) {
        newId = 1+(id++ % nbImages);  
    }
    else if (sign === '-' ) {
        newId=  1+(id-- % nbImages);
    }
 //   console.log(newId);
    document.querySelector('img').src = `${folder}/0${newId}.jpg`;
 //   console.log(`images/0${newId}.jpg`); 
 }


previous.addEventListener('click', function(){
    console.log('click on prev');
    changeImage('+');
})

let next = document.querySelector('#next');

next.addEventListener('click', function(){
    console.log('click on next');
    changeImage('-');
})  