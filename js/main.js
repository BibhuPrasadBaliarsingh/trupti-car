(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);


var btns = document.querySelectorAll(".modal_open_button");
var modal = document.querySelector(".modal");
var span = document.querySelector(".close");

for (let b of btns) {
  b.onclick = () => {
    modal.style.display = "block";
  };
}

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//? Play video on scroll when in view
// const video = document.getElementById('carousel-video');
// const carousel = $('#header-carousel');

// if (video && carousel.length) {
//   video.muted = true;
//   video.play().catch(console.warn);

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         video.muted = false;  // Unmute when visible
//         video.play();
//       } else {
//         video.muted = true;
//         video.pause();
//       }
//     });
//   }, { threshold: 0.5 });

//   observer.observe(video);

//   video.onplay = () => carousel.carousel('pause');
//   video.onended = () => {
//     carousel.carousel('cycle');
//     carousel.carousel('next');
//   };
// }




// const video = document.getElementById('carousel-video');
// const carousel = $('#header-carousel');

// // Mute all videos except the carousel video on page load
// document.querySelectorAll('video:not(#carousel-video)').forEach(v => {
//   v.muted = true;
// });

// if (video && carousel.length) {
//   // Start muted, enable sound only on click or keypress
//   video.muted = true;
//   video.volume = 0;
//   video.play().catch(() => console.warn("Autoplay blocked"));

//   let soundEnabled = false;

//   const enableSound = () => {
//     if (!soundEnabled) {
//       soundEnabled = true;
//       video.muted = false;
//       video.volume = 1;
//       video.play().catch(() => {});
//     }
//   };

//   window.addEventListener('click', enableSound);
//   window.addEventListener('keydown', enableSound);

//   const totalSlides = $('#header-carousel .carousel-item').length;

//   // Handle carousel behavior
//   $('#header-carousel').on('slid.bs.carousel', function (e) {
//     const currentSlide = $(e.relatedTarget);
//     const currentIndex = $(e.relatedTarget).index();

//     if (currentSlide.find('video').length) {
//       const v = currentSlide.find('video')[0];
//       // Mute videos when sliding, except for the first slide if sound is enabled
//       if (currentIndex === 0 && soundEnabled) {
//         v.muted = false;
//         v.volume = 1;
//       } else {
//         v.muted = true;
//         v.volume = 0;
//       }
//       v.currentTime = 0;
//       v.play();
//       carousel.carousel('pause');

//       v.onended = function () {
//         if (currentIndex === totalSlides - 1) {
//           carousel.carousel(0);
//         } else {
//           carousel.carousel('next');
//         }
//         carousel.carousel('cycle');
//       };
//     } else {
//       video.pause();
//     }
//   });
// }











// ?muted

// const videos = document.querySelectorAll('#header-carousel video');

// videos.forEach(video => {
//     video.muted = true;
//     video.play().catch(() => {}); // Start autoplay silently

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 video.play();
//             } else {
//                 video.pause();
//             }
//         });
//     }, { threshold: 0.5 });

//     observer.observe(video);

//     // Pause carousel while video plays, then move to next slide
//     video.onplay = () => carousel.carousel('pause');
//     video.onended = () => {
//         carousel.carousel('cycle');
//         carousel.carousel('next');
//     };
// });




// export mart

// const video = document.getElementById('carousel-video');
// const carousel = $('#header-carousel');

// // Mute all videos except the carousel video on page load
// document.querySelectorAll('video:not(#carousel-video)').forEach(v => {
//   v.muted = true;
// });

// if (video && carousel.length) {
//   // Attempt to play with sound automatically
//   video.muted = false;
//   video.volume = 1;
//   video.play().catch(() => console.warn("Autoplay with sound blocked by browser"));

//   const totalSlides = $('#header-carousel .carousel-item').length;

//   // Handle carousel behavior
//   $('#header-carousel').on('slid.bs.carousel', function (e) {
//     const currentSlide = $(e.relatedTarget);

//     if (currentSlide.find('video').length) {
//       const v = currentSlide.find('video')[0];
//       v.muted = false;
//       v.volume = 1;
//       v.currentTime = 0;
//       v.play();
//       carousel.carousel('pause');

//       v.onended = function () {
//         const currentIndex = $(e.relatedTarget).index();
//         if (currentIndex === totalSlides - 1) {
//           carousel.carousel(0);
//         } else {
//           carousel.carousel('next');
//         }
//         carousel.carousel('cycle');
//       };
//     } else {
//       video.pause();
//     }
//   });
// }




// const carousel = document.getElementById('header-carousel');
// const video = document.getElementById('carousel-video');
// const bsCarousel = new bootstrap.Carousel(carousel, { interval: 4000, pause: false });

// // When the carousel slides to a new item
// carousel.addEventListener('slid.bs.carousel', function (event) {
//   const activeSlide = event.relatedTarget;

//   // If the active slide contains the video
//   if (activeSlide.contains(video)) {
//     video.currentTime = 0;
//     video.muted = false;
//     video.play().catch(err => console.warn("Autoplay blocked:", err));
//   } else {
//     // Pause and mute video when leaving it
//     video.pause();
//     video.muted = true;
//   }
// });

// // When the video finishes, move to the next carousel item
// video.addEventListener('ended', function () {
//   const carouselInstance = bootstrap.Carousel.getInstance(carousel);
//   carouselInstance.next();
// });






c


