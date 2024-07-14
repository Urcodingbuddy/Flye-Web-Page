// -----------------------------------------------------
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const openFormBtn = document.querySelectorAll('.openFormBtn');
  const totalbtn = document.querySelectorAll('.openFormBtn').length;
  const overlay = document.getElementById('overlay');
  const popupForm = document.getElementById('popupForm');

  for (let i = 0; i < totalbtn; i++) {
    openFormBtn[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      popupForm.style.display = 'block';
    });

  }

  overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    popupForm.style.display = 'none';
  });
});

//--------------------- SlideShow ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.querySelector('#btn-1');
  const btn2 = document.querySelector('#btn-2');
  const btn3 = document.querySelector('#btn-3');

  const sliderInner = document.querySelector('.slider-inner');
  let currentIndex = 0;
  let intervalId;

  // Function to update slide based on index
  function updateSlide(index) {
    currentIndex = index;
    const position = -index * 1200; // Adjust this value based on your slider item width
    sliderInner.style.transform = `translateX(${position}px)`;
    updateButtons(index);
  }

  // Function to update button styles
  function updateButtons(index) {
    const buttons = [btn1, btn2, btn3];
    buttons.forEach((btn, i) => {
      const img = btn.querySelector('img');
      img.src = (i === index) ? 'redcir.svg' : 'blackcir.svg';
    });
  }

  // Function to start the automatic slider
  function startSlider() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % 3; // Assuming 3 slides
      updateSlide(currentIndex);
    }, 1900); // Change slide every 3 seconds (adjust as needed)
  }

  // Event listeners for manual button clicks
  btn1.addEventListener('click', () => {
    if (currentIndex !== 0) {
      updateSlide(0);
      clearInterval(intervalId); // Stop automatic sliding
    }
  });

  btn2.addEventListener('click', () => {
    if (currentIndex !== 1) {
      updateSlide(1);
      clearInterval(intervalId); // Stop automatic sliding
    }
  });

  btn3.addEventListener('click', () => {
    if (currentIndex !== 2) {
      updateSlide(2);
      clearInterval(intervalId); // Stop automatic sliding
    }
  });

  // Start automatic slider on page load
  startSlider();

  // Pause automatic slider when mouse enters the slider area
  sliderInner.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
  });

  // Resume automatic slider when mouse leaves the slider area
  sliderInner.addEventListener('mouseleave', () => {
    startSlider();
  });

});

//-------------------------------------------------

let a = document.querySelectorAll(".selections").length
let box1 = document.querySelector('#tab1')
let box2 = document.querySelector('#tab2')
let box3 = document.querySelector('#tab3')



for (let i = 0; i < a; i++) {

  let a = document.querySelectorAll(".selections")[i].addEventListener("click", function () {
    let id = this.id;
    if (id === "tab1") {
      document.querySelector(".bigimg img").setAttribute("src", "https://i.postimg.cc/Dz7x86Q2/japan1.jpg")
      document.querySelector
      box1.style.backgroundColor = "#FF3147"
      box1.style.color = "white"
      box2.style.backgroundColor = "#F6F6F6"
      box2.style.color = "black"
      box3.style.backgroundColor = "#F6F6F6"
      box3.style.color = "black"
    }
    else if (id === "tab2") {
      document.querySelector(".bigimg img").setAttribute("src", "https://i.postimg.cc/g287wrfK/image.png")
      box2.style.backgroundColor = "#FF3147"
      box2.style.color = "white"
      box1.style.backgroundColor = "#F6F6F6"
      box1.style.color = "black"
      box3.style.backgroundColor = "#F6F6F6"
      box3.style.color = "black"
    }
    else if (id === "tab3") {
      document.querySelector(".bigimg img").setAttribute("src", "https://i.postimg.cc/YCH5z1NP/japan3.jpg")
      box3.style.backgroundColor = "#FF3147"
      box3.style.color = "white"
      box2.style.backgroundColor = "#F6F6F6"
      box2.style.color = "black"
      box1.style.backgroundColor = "#F6F6F6"
      box1.style.color = "black"
    }
    else {
      console.log('no')
    }

  })
}

// -------------------------------------------------


let sidebar = document.getElementsByClassName('sidebar')[0];
let toggle = document.querySelector('#checkbox');

toggle.addEventListener('click', function () {
  if (toggle.checked) {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
});

let cross = document.getElementsByClassName('closebtn')[0];
cross.addEventListener('click', function () {
  if (sidebar.style.display = 'block') {
    sidebar.style.display = 'none';
  }

});



let checkbox = document.getElementById('checkbox');
let closeBtn = document.querySelector('.closebtn');

closeBtn.addEventListener('click', function() {
  checkbox.click();
});




//------------------

