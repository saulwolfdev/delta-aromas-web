import styles from "./scss/main.scss";
import styleAnimate from "animate.css";
import toggleNav from "./js/toggle_nav";
import routes from "./js/routes";
import sliderDualImage from "./js/slider_header";
import animationText from "./js/animations";
// import Parrallax from "./js/parallax";
const footerYear=document.querySelector(".footer-year")
footerYear.textContent=new Date().getFullYear()
toggleNav()
routes()
animationText()
// Parrallax()
// Rellax()
sliderDualImage()