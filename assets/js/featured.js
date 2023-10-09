document.addEventListener("DOMContentLoaded", function () {
    // Function to update the image
    function updateImage(title) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "data.json", true);
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const item = data.find((item) => item.title === title);
  
          if (item) {
            // Update the image source
            document.getElementById("image").src = item.imageSrc;
          }
        }
      };
  
      xhr.send();
    }
  
    // Attach click event handlers to card links
    const cardLinks = document.querySelectorAll(".card-link");
    cardLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        const linkTitle = link.textContent;
        updateImage(linkTitle);
      });
    });
  
    // Initialize with the first item
    updateImage("Item 1");
  });
  