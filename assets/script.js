function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

preloadImages([
  "../images/space_background.jpg",
  "../images/orange_background.jpg",
  "../images/pink_background.jpg"
]);
