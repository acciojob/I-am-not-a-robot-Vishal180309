//your code here
// Get all images
const images = document.querySelectorAll('.image');

// Get the reset and verify buttons
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');

// Get the paragraph element for displaying the result
const resultParagraph = document.getElementById('para');

// Initialize an array to store the clicked images
let clickedImages = [];

// Function to shuffle the images
function shuffleImages() {
    // Create an array of image sources
    const imageSources = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image1.jpg'];

    // Shuffle the array
    for (let i = imageSources.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageSources[i], imageSources[j]] = [imageSources[j], imageSources[i]];
    }

    // Set the image sources
    images.forEach((image, index) => {
        image.src = imageSources[index];
    });
}

// Function to handle image clicks
function handleImageClick(event) {
    // Get the clicked image
    const clickedImage = event.target;

    // Add the clicked image to the array
    clickedImages.push(clickedImage);

    // Display the reset button
    resetButton.style.display = 'block';

    // If two images are clicked, display the verify button
    if (clickedImages.length === 2) {
        verifyButton.style.display = 'block';
    }
}

// Function to handle reset button clicks
function handleResetButtonClick() {
    // Reset the clicked images array
    clickedImages = [];

    // Hide the reset and verify buttons
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';

    // Remove the result message
    resultParagraph.textContent = '';
}

// Function to handle verify button clicks
function handleVerifyButtonClick() {
    // Get the sources of the clicked images
    const imageSources = clickedImages.map((image) => image.src);

    // Check if the images are identical
    if (imageSources[0] === imageSources[1]) {
        resultParagraph.textContent = 'You are a human. Congratulations!';
    } else {
        resultParagraph.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }

    // Hide the verify button
    verifyButton.style.display = 'none';
}

// Add event listeners to the images
images.forEach((image) => {
    image.addEventListener('click', handleImageClick);
});

// Add event listeners to the buttons
resetButton.addEventListener('click', handleResetButtonClick);
