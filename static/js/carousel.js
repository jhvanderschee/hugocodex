
document.addEventListener('DOMContentLoaded', function() {
    
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function( carousel ) {

    const ele = carousel.querySelector('ul');
    const bullets = carousel.querySelectorAll('ol li');
    const nextarrow = carousel.querySelector('.next');
    const prevarrow = carousel.querySelector('.prev');
    nextarrow.style.display = 'block';
    prevarrow.style.display = 'block';
    bullets[0].classList.add('selected');

    const scrollTo = function(event) {
        event.preventDefault();
        let href = this.getAttribute('href');
        //console.log(ele.scrollLeft, ele.querySelector(href).getBoundingClientRect().left);
        ele.scrollLeft = ele.scrollLeft + (parseInt(carousel.getAttribute("items"))*ele.querySelector(href).getBoundingClientRect().left);
    }

    const setSelected = function() {
        bullets.forEach(function(bullet) {
        bullet.classList.remove('selected');
        });
        //console.log(ele.scrollLeft);
        let nthchild = (Math.round(ele.scrollLeft/(carousel.scrollWidth))+1);
        if(carousel.querySelector('ol li:nth-child('+nthchild+')')) {
        carousel.querySelector('ol li:nth-child('+nthchild+')').classList.add('selected'); 
        }
    }
    
    const nextSlide = function() {
        if(!carousel.querySelector('ol li:last-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').nextElementSibling.querySelector('a').click();
        } else {
        carousel.querySelector('ol li:first-child a').click();
        }
    }

    const prevSlide = function() {
        if(!carousel.querySelector('ol li:first-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').previousElementSibling.querySelector('a').click();
        } else {
        carousel.querySelector('ol li:last-child a').click();
        }
    }
        
    // Attach the handlers
    ele.addEventListener("scroll", setSelected);
    nextarrow.addEventListener("click", nextSlide);
    prevarrow.addEventListener("click", prevSlide);
    bullets.forEach(function(bullet) {
        bullet.querySelector('a').addEventListener('click', scrollTo);
    });

    //setInterval for autoplay
    if(carousel.getAttribute('duration')) {
        setInterval(function(){ 
        if (ele != document.querySelector(".carousel:hover ul")) {
            nextarrow.click();
        }
        }, carousel.getAttribute('duration'));
    }
    
    }); //end foreach
    
}); //end onload
