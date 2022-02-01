var myCarousel = document.querySelector('#carouselExampleIndicators');

console.log(myCarousel);


let prev = document.querySelector('.carousel-control-prev');

prev.addEventListener('click', function(){
    console.log('click on prev');
})

let next = document.querySelector('.carousel-control-next');

next.addEventListener('click', function(){
    console.log('click on next');
})