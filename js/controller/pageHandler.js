const pages = document.querySelectorAll(".page");

pages.forEach( (page) => {
  page.addEventListener("click", (e) => {
    const currentSelection = e.currentTarget.dataset.bsTarget;
    const allPane = document.querySelectorAll(".tab-pane");
    const currentPane = document.querySelector(currentSelection);
    
    allPane.forEach(pane => pane.classList.remove("active"));
    currentPane.classList.add("active");
  });
});

