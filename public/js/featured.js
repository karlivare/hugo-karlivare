// Get all card links and featured images
const cardLinks = document.querySelectorAll('.card-link');
const featuredImages = document.querySelectorAll('.featured-img');

// Iterate through the card links and add event listeners
cardLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const dataImage = link.getAttribute('data-image');

    // Remove the "active" class from all card links
    cardLinks.forEach(cardLink => {
        cardLink.classList.remove('active');
    });

    // Add the "active" class to the hovered link (to style it)
    link.classList.add('active');

    // Hide all featured images
    featuredImages.forEach(img => {
      img.style.opacity = 0; // Set the initial opacity to 0
      img.style.display = 'none';
    });

    // Show the corresponding featured image with a fade-in effect
    const correspondingImage = document.getElementById(dataImage);
    if (correspondingImage) {
      correspondingImage.style.display = 'block';
      setTimeout(() => {
        correspondingImage.style.opacity = 1; // Change opacity to 1 after a brief delay
      }, 20);
    }
  });
});

