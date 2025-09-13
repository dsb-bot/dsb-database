function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

preloadImages([
  "../images/outer_space.jpg",
  "../images/orange_theme.jpg",
  "../images/pink_theme.jpg"
]);
