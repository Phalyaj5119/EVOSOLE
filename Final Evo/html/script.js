document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.indicators');

// Create indicators
slides.forEach((slide, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  if (index === 0) indicator.classList.add('active');
  indicatorsContainer.appendChild(indicator);
  indicator.addEventListener('click', () => {
    goToSlide(index);
  });
});

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  document.querySelector('.indicator.active').classList.remove('active');
  document.querySelectorAll('.indicator')[index].classList.add('active');
  currentIndex = index;
}

// Auto slide
setInterval(() => {
  let newIndex = currentIndex + 1;
  if (newIndex >= slides.length) newIndex = 0;
  goToSlide(newIndex);
}, 3000); // Change slide every 3 seconds

// SHOE DISPLAY 1
const productData1 = [
  { 
    image: "shoe1.png",
    name: "TATUM2",
    description: "$250",
    bgColor: "#15ff005a"
  },
  { 
    image: "shoe2.png",
    name: "AIRMAX",
    description: "$300",
    bgColor: "#0088ff5a"
  },
  { 
    image: "shoe4 2.png",
    name: "AIRMAX",
    description: "$270",
    bgColor: "#f835135a"
  }
];

let currentIndex1 = 0;

function showProduct1(index) {
  const product1 = productData1[index];
  document.querySelector('.product img').src = product1.image;
  document.querySelector('.description1 h2').textContent = product1.name;
  document.querySelector('.description1 p').textContent = product1.description;
  document.querySelector('.container1').style.backgroundColor = product1.bgColor;
}

document.addEventListener('DOMContentLoaded', () => {
  showProduct1(currentIndex1);
  setInterval(nextProduct1, 5000);
});

function nextProduct1() {
  currentIndex1 = (currentIndex1 + 1) % productData1.length;
  showProduct1(currentIndex1);
}

function prevProduct1() {
  currentIndex1 = (currentIndex1 - 1 + productData1.length) % productData1.length;
  showProduct1(currentIndex1);
}