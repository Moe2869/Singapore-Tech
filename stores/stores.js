// List of images
const images = [
  "image (3).png",
  "image (5).png",
  "image (4).png"
];

// Track which image is showing
let currentIndex = 0;

// Get elements from HTML
const carouselImage = document.getElementById("carouselImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// When clicking NEXT
nextBtn.addEventListener("click", () => {
  carouselImage.style.opacity = 0; // start fade out

  setTimeout(() => {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;

    carouselImage.src = images[currentIndex];
    carouselImage.style.opacity = 1; // fade in
  }, 300); // matches half of transition duration (0.5s)
});

prevBtn.addEventListener("click", () => {
  carouselImage.style.opacity = 0; // fade out

  setTimeout(() => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;

    carouselImage.src = images[currentIndex];
    carouselImage.style.opacity = 1; // fade in
  }, 300);
});