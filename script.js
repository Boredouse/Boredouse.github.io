const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.20,
  rootMargin: "15%"
};
/* */

const appearOnScroll = new IntersectionObserver(
  function(entries, appearOnScroll) 
  {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        /*entry.target.classList.remove("appear");*/
        return;
      }
      else {
        /* Allows CSS animation to occur*/
        entry.target.classList.add("appear");
        /* stops the animation from repeating when scrolled away*/
        appearOnScroll.unobserve(entry.target);
        /* console.log("hello"); */
		    
      }
    })
  },
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
}); 