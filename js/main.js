// Menu Hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');
if (menuHamburguer) {
    menuHamburguer.addEventListener('click', () => {
        toggleMenu();
    });
} else {
    console.error('Elemento .menu-hamburguer não encontrado');
}

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    if (nav) {
        menuHamburguer.classList.toggle('change');
        if (menuHamburguer.classList.contains('change')) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    } else {
        console.error('Elemento .nav-responsive não encontrado');
    }
}

// Services - Expandir/Recolher Texto
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.services-box .btn');
    const servicesBtn = document.querySelector('#services-btn');
    
    if (readMoreButtons.length > 0) {
        readMoreButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                const serviceBox = this.closest('.services-box');
                const serviceText = serviceBox.querySelector('.service-text');
                
                if (serviceText) {
                    serviceText.classList.toggle('expanded');
                    this.textContent = serviceText.classList.contains('expanded') ? 'Read Less' : 'Read More';
                }
            });
        });
    }
    
    if (servicesBtn) {
        servicesBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const allTexts = document.querySelectorAll('.service-text');
            let allExpanded = Array.from(allTexts).every(text => text.classList.contains('expanded'));
            
            allTexts.forEach(text => {
                if (allExpanded) {
                    text.classList.remove('expanded');
                } else {
                    text.classList.add('expanded');
                }
            });
            
            this.textContent = allExpanded ? 'Read More' : 'Read Less';
        });
    }
});