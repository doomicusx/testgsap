const tl = gsap.timeline();
tl.fromTo(
  ".header",
  {
    opacity: 0,
  },
  {
    duration: 1,
    opacity: 1,
  }
)
  .fromTo(
    ".titulo",
    {
      opacity: 0,
      x: -50,
    },
    {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "power4.out",
    }
  )
  .fromTo(
    ".texto",
    {
      opacity: 0,
      y: -50,
    },
    {
      duration: 1,
      y: 0,
      opacity: 1,
    }
  )
  .to(".teste", {
    duration: 2,
    y: "100%",
    ease: "ease-in-out",
  });

timeline.play();
