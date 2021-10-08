import Slider from "./scripts/script";
//import "https://kit.fontawesome.com/596c3faf39.js";
import "./css/styles.css";
import "./css/media.css";

const slider = new Slider();

document.addEventListener("DOMContentLoaded", (event) => {
  slider.startInterval();
  slider.buttons.forEach((item) => {
    item.addEventListener("click", slider.buttonSlideHandler);
  });
});
