function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  let tl = gsap.timeline();

  tl.to("#page-transition", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  tl.to("#page-transition", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
    },
  ],
});
