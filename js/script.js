// Animação do texto no Hero Section
const texts = [
    "Transformando Ideias em Realidade Digital",
    "Criando Soluções Digitais Inovadoras",
    "Impulsionando Negócios com Tecnologia",
    "Desenvolvendo Experiências Memoráveis"
];

let currentIndex = 0;
const textElement = document.getElementById("animated-text");

function changeText() {
    gsap.to(textElement, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            textElement.textContent = texts[currentIndex];
            gsap.to(textElement, {
                opacity: 1,
                duration: 0.5
            });
        }
    });

    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 5000); // Altera o texto a cada 5 segundos

// Animação suave ao rolar a página
gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
    });
});

// Menu Mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
    const nav = document.getElementById("mobile-menu");
    nav.classList.toggle("hidden");
});