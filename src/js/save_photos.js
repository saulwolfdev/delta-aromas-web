import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
import "./configuration"

const data = document;

function saveInDB(uid,title,comments,category,photo) {
    let db = firebase.database().ref().child("photos")
    db.push({
        uid,
        title,
        comments,
        category,
        photo
    })
}

function upLoadPhoto(photo) {
    let photoName = `${new Date().getTime()}_${photo.name}`
    const photosRef = firebase.storage().ref().child("photos"),
        progressBar = data.getElementById("progress-bar"),
        progressAdvance = data.getElementById("progress-advance")
    
    let upLoader = photosRef.child(photoName).put(photo)
    
    progressBar.classList.remove("u-none")
    progressAdvance.classList.remove("u-none")
    
    upLoader.on("state_changed",
        data => {
            let progress = Math.floor((data.bytesTransferred / data.totalBytes) * 100)
            progressBar.value = progress
            progressAdvance.textContent = `${progress}%`
        },
        err => {
            progressAdvance.innerHTML = `
        <p class="u-message">${err.code} - ${err.message}</p>
        `
        },
        () => {
            const photoUrl = photosRef.child(photoName),
                uid = firebase.auth().currentUser.uid,
                title = data.querySelector('input[name="title"]').value,
                category = data.querySelector('input[name="category"]').value,
                comments = data.querySelector('textarea[name="textarea"]').value
            upLoader = null
            photoUrl
                .getDownloadURL()
                .then(url => saveInDB(uid,title,comments,category,url))
                .then(() => {
                    progressBar.value = 0
                    progressAdvance.textContent = null
                    progressBar.classList.add("u-none")
                    progressAdvance.classList.add("u-none")
                    data.getElementById("Form-save-photo").reset()
                })

        }
    )
}
export default function savePhoto() {
    data.addEventListener("submit", e => {
        if (e.target.matches("#Form-save-photo")) {
             e.preventDefault()
            let photo = e.target.photo.files[0]
            if (photo.type.match("image.*")) {
                upLoadPhoto(photo)
            } else {
                e.target.querySelector(".u-message").innerHtml = "El archivo que intentas subir no es una imagen<br> :-("
            }
        }
    })

}
