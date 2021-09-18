document.addEventListener('DOMContentLoaded', function() {
    
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function( carousel ) {

        const ele = carousel.querySelector('ul');
        const bullets = carousel.querySelectorAll('ol li');
        const nextarrow = carousel.querySelector('.next');
        const prevarrow = carousel.querySelector('.prev');

        // Initialize the carousel
        nextarrow.style.display = 'block';
        prevarrow.style.display = 'block';
        ele.scrollLeft = 0;
        bullets[0].classList.add('selected');

        const scrollTo = function(event) {
            event.preventDefault();
            ele.scrollLeft = ele.querySelector(this.getAttribute('href')).offsetLeft;

            // Set selected bullet
            bullets.forEach(function(bullet) {
                bullet.classList.remove('selected');
            });
            this.parentElement.classList.add('selected');
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

    
    document.addEventListener('keydown', function (e){
        var elements = document.querySelectorAll('.carousel');

        if(e.key == 'ArrowLeft') {
            elements.forEach( function(element) {
                element.querySelector('.prev').click();
            });
        }
        if(e.key == 'ArrowRight') {
            elements.forEach( function(element) {
                element.querySelector('.next').click();
            });
        }
    });

}); //end onload