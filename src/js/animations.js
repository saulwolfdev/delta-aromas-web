


const animationText=()=>{
    document.addEventListener('DOMContentLoaded', function(){
        const titleLeft =  document.querySelector(".paragraph-left")
        titleLeft.classList.add("animated", "fadeInUp","delay-1s")
        const titleRight =  document.querySelector(".paragraph-right")
        titleRight.classList.add("animated", "fadeInUp","delay-2s")
    });
    }
    export default animationText;


