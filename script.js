particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.4,
      "random": true,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.20,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});


window.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 800); 
});

        const slider = document.querySelector('.slider');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        
        nextBtn.addEventListener('click', () => {
            
            const slideWidth = slider.clientWidth;
            slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        
        prevBtn.addEventListener('click', () => {
           
            const slideWidth = slider.clientWidth;
            slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });