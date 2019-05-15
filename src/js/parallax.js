import Rellax from "rellax";
const Parrallax=()=>{
    document.addEventListener('DOMContentLoaded',()=>{
        const title1=document.querySelector(".titulo1")
              title1.classList.add("rellax")
              title1.setAttribute("data-rellax-speed","7")
        
        const title2=document.querySelector(".titulo2")
              title2.classList.add("rellax")
              title2.setAttribute("data-rellax-speed","5")

        const title3=document.querySelector(".titulo3")
              title3.classList.add("rellax")
              title3.setAttribute("data-rellax-speed","1")
        const rellax = new Rellax('.rellax');
    });
    }
export default Parrallax;
