document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".nav-bar ul li", {
      duration: 1,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      ease: "power4.out"
    });

    gsap.from(".logo", {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: 0.2,
        ease: "power4.out"
      });

    gsap.from(".caption h1", {
        duration: 1.5,
        x: "-100%",
        stagger:1, 
        ease: "power4.out"
  });

  gsap.from(".caption p",{
    duration: 1,
    y: 100, 
    opacity: 0, 
    ease: "bounce.out" 
  });

  gsap.from(".caption button", {
    duration: 1,
    y: 100, 
    opacity: 0, 
    ease: "bounce.out"
  });

    
  gsap.from(".about-us", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".container",
      start: "top 80%",
      end: "top 20%",
      scrub: 1
    }
  });

  const aboutUs = document.querySelector(".about-us");
  const headingToAnimate = aboutUs.querySelector(".about h3");
  const paragraphToAnimate = aboutUs.querySelector(".about p");
  const imageToAnimate = aboutUs.querySelector(".about-us img");

  
  gsap.from([headingToAnimate, paragraphToAnimate], {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.5, 
    scrollTrigger: {
      trigger: headingToAnimate,
      start: "top 80%",
      end: "top 20%",
      scrub: 1
    }
  });

  gsap.from(imageToAnimate, {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: imageToAnimate,
      start: "top 80%",
      end: "top 20%",
      scrub: 1
    }
  });
  const heroImage = document.querySelector(".hero-image");
  gsap.from(heroImage, {
    opacity: 0,
    x: 200, 
    duration: 1,
  });

  const featureElements = document.querySelectorAll(".why-us");
  featureElements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "top 40%",
        scrub: 1
      }
    });
  });
  const recomendElements = document.querySelectorAll(".recomendations");
   recomendElements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      x: 200, 
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });
  });

  const contactElements = document.querySelectorAll(".contact");
  contactElements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });
  });
});
  
