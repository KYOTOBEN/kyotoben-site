/*
KYOTO BEN PHOTO CONTROL CENTER
==============================
This file changes ONLY images and their crop position. It does not change the website design.

EASIEST OPTION:
1) Put a new image in assets/photos/
2) Change only the `src` value below
3) Optional: change `position` such as "center center", "center 35%", "60% center"

You can also replace a file in assets/photos/ using the SAME filename and edit nothing here.
*/
window.KYOTO_BEN_PHOTOS = {
  "header-logo":       { src: "assets/photos/brand-logo.jpg", position: "center center" },
  "hero-logo":         { src: "assets/photos/brand-logo.jpg", position: "center center" },
  "hero":              { src: "assets/photos/hero-bamboo.jpg", position: "center 47%" },

  "first-light-main":  { src: "assets/photos/01-first-light-main.png", position: "center center" },
  "first-light-small": { src: "assets/photos/01-first-light-small.jpg", position: "center center" },

  "west-east-main":    { src: "assets/photos/02-west-east-main.jpg", position: "center center" },
  "west-east-small":   { src: "assets/photos/02-west-east-small.jpg", position: "center center" },

  "kimono-main":       { src: "assets/photos/03-kimono-main.jpg", position: "center center" },
  "kimono-small":      { src: "assets/photos/03-kimono-small.jpg", position: "center center" },

  "geisha-main":       { src: "assets/photos/04-geisha-main.jpg", position: "center center" },
  "geisha-small":      { src: "assets/photos/04-geisha-small.jpg", position: "center center" },

  "taiko-main":        { src: "assets/photos/05-taiko-main.jpg", position: "center center" },
  "taiko-small":       { src: "assets/photos/05-taiko-small.jpg", position: "center center" },

  "hidden-main":       { src: "assets/photos/06-hidden-main.jpg", position: "center center" },
  "hidden-small":      { src: "assets/photos/06-hidden-small.jpg", position: "center center" },

  "meet-ben":          { src: "assets/photos/meet-ben.jpg", position: "center center" },
  "footer-logo":       { src: "assets/photos/brand-logo.jpg", position: "center center" }
};

(function applyKyotoBenPhotos(){
  const config = window.KYOTO_BEN_PHOTOS || {};
  document.querySelectorAll('img[data-photo]').forEach((img) => {
    const item = config[img.dataset.photo];
    if (!item) return;
    if (item.src) img.src = item.src;
    if (item.position) img.style.objectPosition = item.position;
  });
})();
