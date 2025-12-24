// Set up the array
const slides = [
  {
    image: "Screenshot 2025-12-01 181705.png",
    heading: "THE COLLECTIVE Labrador Tower",
    paragraph: "Meticulously designed to deliver an unparalleled workspace experience by offering excellence in both design and services."

  },
  {
    image: "cheap-office-space-for-rent.jpeg",
    heading: "GreenHub SG",
    paragraph: "The go to place when it comes to cheap and affordable private office spaces where you can work in peace."

  },
  {
    image: "MacDonald_House_img_4.webp",
    heading: "MacDonald House",
    paragraph: "Located in a heritage building on the edge of the Orchard shopping district, tbo MacDonald House is a highly accessible centre just next to the Plaza Singapura shopping mall."
  }
];
// Track the current slide
let currentIndex= 0;

const carouselImage=document.getElementById("carouselImage");
const carouselHeading=document.getElementById("carouselHeading");
const carouselParagraph=document.getElementById("carouselParagraph");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
// make a function to update the slides
function  updateslide() {
  carouselImage.src=slides[currentIndex].image;
  carouselHeading.textContent=slides[currentIndex].heading;
  carouselParagraph.textContent=slides[currentIndex].paragraph;
}
// Next button to go to next slide
nextBtn.addEventListener("click", () => {
  carouselImage.style.opacity= 0;

  setTimeout(() => {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;

  updateslide();
  carouselImage.style.opacity = 1;
  }, 300);

});
// Previous button to go to next slide
prevBtn.addEventListener("click", () => {
  carouselImage.style.opacity= 0;

  setTimeout(() => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length -1;

  updateslide();
  carouselImage.style.opacity = 1;
  }, 300);

});
// load first slide on Page loading
updateslide();