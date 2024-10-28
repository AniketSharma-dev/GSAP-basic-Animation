var tl = gsap.timeline({
  repeat: -1,
});

tl.to(
  ".imageContainer",
  {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 4,
  },
  "a"
)
  .to(
    ".imageContainer",
    {
      delay: 2,
      width: "0%",
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 4,
    },
    "a"
  )
  .to(
    ".text h1",
    {
      top: 0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 4,
    },
    "a"
  )
  .to(
    ".text h1",
    {
      delay: 2,
      top: 100,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 4,
    },
    "a"
  )
  .to(
    ".content p",
    {
      top: 0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 4,
    },
    "a"
  )
  .to(
    ".content p",
    {
      delay: 2,
      top: 100,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 4,
    },
    "a"
  );
