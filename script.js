// Eksa Logistics Website Scripts

// Smooth scrolling for website navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Simple page load animation

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
