const play = document.querySelector('.play');
let isAnimating = false;

play.addEventListener('click', () => {
  if (isAnimating) return;

  isAnimating = true;
  play.disabled = true;

  const timeline = gsap.timeline({
    onComplete: () => {
      play.disabled = false;
      isAnimating = false;
    }
  });

  timeline.from('.cr7-img', { duration: 5, x: '80vw', y: '18vw', height: '10px', ease: 'power3', rotationY: 1300, scale: 0.5 })
    .to('.cr7-img', { duration: 1, scale: 1.1 })
    .to('.cr7-img', { duration: 1, scale: 1 });
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from('#second', { xPercent: -100 })
  .from('#third', { xPercent: 100 })
  .from('#fourth', { yPercent: -100 })
  .from('#fifth', { yPercent: 100 });

ScrollTrigger.create({
  animation: tl,
  trigger: "#scroll-animation",
  start: "top top",
  end: "+=1900",
  scrub: 2,
  pin: true,
  anticipatePin: 1,
});
