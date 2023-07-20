window.addEventListener("load", function() {
    var progressBars = document.querySelectorAll(".progress");
  
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
  
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    progressBars.forEach(function(progressBar) {
      observer.observe(progressBar);
    });
  });

function openLink(link){
  window.open(link, '_blank');
}