// Array of image sources
const images = ["asserts/tajmahal.jpg", "asserts/petra.jpeg", "asserts/colosseum.jpg"]; 

// Get references to image and buttons
const sliderImage = document.getElementById('sliderImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Initial image index
let currentIndex = 0;

// Function to show the image at the current index
function showImage() {
    sliderImage.src = images[currentIndex];
}

// Event listener for the Previous button
prevButton.addEventListener('click', function() {
    // Decrement index, and loop back to the last image if at the first
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage();
});

// Event listener for the Next button
nextButton.addEventListener('click', function() {
    // Increment index, and loop back to the first image if at the last
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage();
});
