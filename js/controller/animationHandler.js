const projectImages = document.querySelectorAll(".project-image");

const animate = (play) => {
  const firstComments = Array.from(document.querySelectorAll('.comment-card-1'));
  const secondComments = Array.from(document.querySelectorAll('.comment-card-2'));

  const animation = anime({
    targets: [firstComments, secondComments],
    translateY: -20,
    opacity: 1,
    delay: (el, i) => i * 150,
    easing: 'easeInOutExpo'
  });
  return play ? animation.play() : animation.reverse();
};

pages.forEach ( page => {
  page.onclick = (event) => {
    const isProjectPage = event.target.dataset.bsTarget.includes("projects");
    
    return isProjectPage ? animate(true) : animate (false);
  };
});


