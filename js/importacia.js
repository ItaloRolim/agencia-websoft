document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS (Animate On Scroll)
    AOS.init();
    
    // GSAP ScrollTrigger para animações baseadas em scroll
    gsap.registerPlugin(ScrollTrigger);
    
    // Animação do título
    gsap.from('.highlight', {
      scrollTrigger: {
        trigger: '.highlight',
        start: 'top 80%',
      },
      color: '#6b7280',
      duration: 1.5,
      ease: 'power2.out'
    });
    
    // Animação para cards de benefícios
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'back.out(1.7)'
      });
    });
  });