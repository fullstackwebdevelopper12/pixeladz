document.addEventListener('DOMContentLoaded', () => {
    const aboutTitle = document.getElementById('about');
    const leftAbout = document.getElementsByClassName('left-about');
    const figureAbout = document.getElementById('about-figure');
   const logo = document.getElementById('logo');
   const nav = document.querySelector('.nav-links-section ul');
    window.addEventListener('load', () => {
        aboutTitle.id = 'opacity';
        figureAbout.id = 'slide-figure';
        logo.id = 'slide-logo';
       
         nav.id = 'slide-nav';
       
        [...leftAbout].forEach(function(item) {
            item.classList.add('slide-left-about');
        });
    });

    const cardsLeft = document.querySelectorAll(".card-left");
    const cardsRight = document.querySelectorAll(".card-right");
    const h1 = document.querySelector(".top h1");
    const p = document.querySelector(".top p");
    const cardCenter = document.querySelector(".card-center");

    // Scroll-triggered animations
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        // Slide left cards
        cardsLeft.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("slide-card-left");
            }
        });

        // Slide right cards
        cardsRight.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("slide-card-right");
            }
        });

        const h1Top = h1.getBoundingClientRect().top;
        if (h1Top < triggerBottom) {
            h1.classList.add("slide-in-left");
        }

        const pTop = p.getBoundingClientRect().top;
        if (pTop < triggerBottom) {
            p.classList.add("slide-in-right");
        }

        const cardCenterTop = cardCenter.getBoundingClientRect().top;
        if (cardCenterTop < triggerBottom) {
            cardCenter.classList.add("flip-card");
        }
    }

    // Run checkScroll on page load and every time the user scrolls
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case any elements are already in view
    const signup = document.getElementById('signup');
const form = document.getElementsByClassName('sign-up-form-container');
const body = document.getElementsByTagName('body');
signup.addEventListener('click',() => {
    body.style.filter = 'blur';
   [...form].forEach((item) => {
      item.classList.add('popup');
   });
});
});
const cards = document.querySelectorAll('.performance .card');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function scrollAnimation() {
    cards.forEach((card) => {
        if (isInViewport(card)) {
            card.classList.add('show'); 
            
        }
    });
}

window.addEventListener('scroll', scrollAnimation);









const cards1 = document.querySelectorAll(' .philosophy .card');

cards1.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = 'var(--primary-color)'; 
        
        const firstContent = card.querySelector('.interior-card:first-child');
        const secondContent = card.querySelector('.interior-card:nth-child(2)');
        
        firstContent.style.opacity = '0';
        firstContent.style.visibility = 'hidden';
        secondContent.style.opacity = '1';
        secondContent.style.visibility = 'visible';
    });

    // Add mouseleave event to revert the effect
    card.addEventListener('mouseleave', () => {
        // Reset rotation and background color
        card.style.transform = 'rotateY(0)';
        card.style.backgroundColor = 'white';
        
        // Revert content
        const firstContent = card.querySelector('.interior-card:first-child');
        const secondContent = card.querySelector('.interior-card:nth-child(2)');
        
        firstContent.style.opacity = '1';
        firstContent.style.visibility = 'visible';
        secondContent.style.opacity = '0';
        secondContent.style.visibility = 'hidden';
    });
});
