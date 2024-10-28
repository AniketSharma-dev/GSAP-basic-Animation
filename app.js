gsap.to(".imageContainer", {
  width: "100%",
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 2,
});

gsap.to(".imageContainer", {
  delay: 2,
  width: "0",
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 2,
});

gsap.to(".text h1", {
  top: 0,
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 2,
});

gsap.to(".text h1", {
  delay: 2,
  top: 120,
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 2,
});
