
const toggleNav=()=>{
    const d= document,
    headerButton=d.querySelector(".Header-btn"),
    header=d.querySelector(".Header"),
    main=d.querySelector(".Main")

    headerButton.addEventListener("click",e=>{
        e.preventDefault()
        header.classList.toggle("is-active")
        headerButton.classList.toggle("is-active")
        main.classList.toggle("is-active")
    })
    d.addEventListener("click",(e)=>{
        if(e.target.matches('a[href="#"]')){
            e.preventDefault()
            header.classList.remove("is-active")
            headerButton.classList.remove("is-active")
            main.classList.remove("is-active")
        }
    })
}
export default toggleNav;