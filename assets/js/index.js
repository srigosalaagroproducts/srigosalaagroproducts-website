document.addEventListener('DOMContentLoaded', function () {
    var parallaxContainer = document.querySelector('.parallax-container');
    
    parallaxContainer.addEventListener('mousemove', function (e) {
      var xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      var yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      
      parallaxContainer.querySelector('.parallax').style.transform = 'translate(' + xAxis + 'px, ' + yAxis + 'px)';
    });
  });