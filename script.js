// const sections = document.querySelectorAll('section')
// const navLinks = document.getElementById('nav-link')

// window.onscroll(()=>{
//     sections.forEach((sec)=>{
//         let top = window.screenY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id')

//         if(top>=offset && top < offset + height){
//             navLinks.forEach((links)=>{
//                 links.classList.remove('active');
//                 document.querySelector('.nav-link [')
//             })
//         }
//     })
// })

// Function to add 'active' class to the navigation link corresponding to the section in view
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', setActiveNavLink);
