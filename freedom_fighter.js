const mandelaImages = document.querySelectorAll('img');
const movedToFavorites = document.querySelector('#favorites');
let counter = 1;

mandelaImages.forEach(image => {
  image.addEventListener('click', () => {
    const clonedImage = image.cloneNode();
    movedToFavorites.appendChild(clonedImage);
    image.parentNode.removeChild(image);

    const numberLabel = document.createElement('span');
    numberLabel.textContent = counter;
    numberLabel.classList.add('image-number'); // Add a CSS class to style the number label
    clonedImage.parentNode.insertBefore(numberLabel, clonedImage); // Insert the number label before the cloned image

    const displayUpdates = document.querySelector('#actions');
    const bulletList = document.createElement('li');
    const imageName = image.getAttribute('src').split('/').pop(); // Extract the file name from the image source
    bulletList.textContent = `Moved ${imageName} to favorites.`;
    displayUpdates.appendChild(bulletList);

    counter++;
  });
});











