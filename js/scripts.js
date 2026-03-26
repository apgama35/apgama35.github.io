/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) { return; }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Bootstrap ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse navbar on mobile when a link is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Reveal on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

// Parallax + animação do texto "PRODUÇÃO"
function handleProducao() {
    const secao = document.querySelector('#projects');
    if (!secao) { return; }

    const palavras = document.querySelectorAll('.producao-vertical');
    const rect = secao.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Ativa visibilidade ao entrar na viewport
    if (rect.top < windowHeight * 0.8) {
        palavras.forEach(p => p.classList.add('ativa'));
    }

    // Parallax
    const scrollY = window.scrollY;
    palavras.forEach(p => {
        const velocidade = scrollY * 0.05;
        if (p.classList.contains('esquerda')) {
            p.style.transform = `translateY(calc(-50% + ${velocidade}px)) rotate(-90deg)`;
        } else {
            p.style.transform = `translateY(calc(-50% - ${velocidade}px)) rotate(90deg)`;
        }
    });
}

window.addEventListener('scroll', () => {
    revealOnScroll();
    handleProducao();
});

// Executa uma vez no carregamento para elementos já visíveis
revealOnScroll();
window.addEventListener("scroll", function() {
    const section = document.querySelector("#projects");
    const body = document.body;

    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        body.classList.add("projects-active");
    } else {
        body.classList.remove("projects-active");
    }
});window.addEventListener("scroll", function() {
    const section = document.querySelector("#projects");
    const esq = document.getElementById("prod-esq");
    const dir = document.getElementById("prod-dir");

    if (!section || !esq || !dir) return;

    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
        esq.style.opacity = "1";
        dir.style.opacity = "1";
    } else {
        esq.style.opacity = "0";
        dir.style.opacity = "0";
    }
});