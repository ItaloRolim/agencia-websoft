// Animação da logo e da frase
const logoHero = document.getElementById("logo-hero");
const animatedText = document.getElementById("animated-text");

// Sequência de animações
gsap.timeline()
    .from(logoHero, {
        opacity: 0,
        y: -50,
        duration: 1,
    })
    .to(logoHero, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 2, // Tempo que a logo fica visível
    })
    .from(animatedText, {
        opacity: 0,
        y: 50,
        duration: 1,
        onStart: () => {
            animatedText.classList.remove("hidden"); // Mostra a frase
        },
    });