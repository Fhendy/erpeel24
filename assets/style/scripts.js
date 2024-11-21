let slideIndex = 0;
     const slides = document.querySelectorAll('.gallery .image-container img');
     const dots = document.querySelectorAll('.gallery .dots span');

     function showSlides(n) {
         if (n >= slides.length) {
             slideIndex = 0;
         } else if (n < 0) {
             slideIndex = slides.length - 1;
         } else {
             slideIndex = n;
         }

         slides.forEach((slide, index) => {
             slide.style.display = index === slideIndex ? 'block' : 'none';
         });

         dots.forEach((dot, index) => {
             dot.className = index === slideIndex ? 'active' : '';
         });
     }

     function currentSlide(n) {
         showSlides(n);
     }

     function nextSlide() {
         showSlides(slideIndex + 1);
     }

     function prevSlide() {
         showSlides(slideIndex - 1);
     }

     setInterval(nextSlide, 3000); // Change image every 3 seconds

     showSlides(slideIndex);