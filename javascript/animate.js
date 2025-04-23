

const reveals = document.querySelectorAll('.reveal');
const navbar = document.querySelector('.navbar');

let hamburg = document.querySelector(".hamburg")
let innerHam = document.querySelector(".hamburg .inner-ham")
let sidebtn = document.querySelector('.sidebar')
let close = document.querySelector('.sidebar .close')

hamburg.addEventListener('click', ()=>{
    hamburg.classList.add('rote')
    innerHam.classList.add('rote') 
    sidebtn.classList.remove('close')
})

close.addEventListener('click', ()=>{
    sidebtn.classList.add('close')
    hamburg.classList.toggle('rote')
    innerHam.classList.toggle('rote') 
})

// Throttled scroll handler
window.addEventListener('scroll', () => {
    window.requestAnimationFrame(animate);

    const scrollY = window.scrollY || window.pageYOffset;
    if(scrollY > 50){
        navbar.classList.add('white')
        hamburg.classList.remove('white')
        innerHam.classList.remove('white')
    }else{
        navbar.classList.remove('white')
        hamburg.classList.remove('white')
        innerHam.classList.remove('white')
    }
});

function animate() {
    const viewportHeight = window.innerHeight;
    
    // Reveal animation (elements appear when 80% into view)
    const revealTrigger = viewportHeight * 0.8;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        element.classList.toggle('active', elementTop < revealTrigger);
    });

    // Home section color change (when 20% into view)
    const homeTrigger = viewportHeight * 0.2;
    const homePosition = home.getBoundingClientRect().top;
    home.classList.toggle('white', homePosition > homeTrigger);
}

// Initialize on load
animate();