import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
import "./configuration"

function figureTemplate(key,{uid,title,comments,category,photo}){
    return`
    <img src="${photo}" alt="${title}">
    <figcaption>
        <span>${title}</span>
        <p>${comments}</p>
        <P>${category}</p>
        <i class="fas fa-trash" data-id="${key}" data-photo="${photo}"></i>
    </figcaption>
    `
}

export default function showPhotos(){
const d=document,
    db=firebase.database(),
    photos=d.getElementById("photos")

    db.ref().child("photos").on("child_added",datak=>{
        let figure=d.createElement("figure")
        
        figure.id=datak.key
        figure.innerHTML=figureTemplate(datak.key,datak.val())
        photos.insertAdjacentElement("afterbegin",figure)
    })
}
