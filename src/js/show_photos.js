import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
import "./configuration"

function figureTemplate(key,{uid,title,comments,category,photo}){
    return`

    <div class="item">
        <div class="item-image">
          <img class="item-img" src="${photo}" alt="${title}">
        </div>
        <figcaption class="item-text">
          <div class="item-text-wrap">
            <p class="item-text-category">${category}</p>
            <h2 class="item-text-title">${title}</h2>
            <span class="comment">${comments}</span>
            <i class="fas fa-trash" data-id="${key}" data-photo="${photo}"></i>
          </div>
        </figcaption>
      </div>
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
