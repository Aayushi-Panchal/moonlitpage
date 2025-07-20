// Navbar slide in
gsap.to(".navbar", {
  y: 0,
  duration: 1.2,
  ease: "power2.out"
});

// Scroll-triggered fade-ins
gsap.utils.toArray(".fade-section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });
});
