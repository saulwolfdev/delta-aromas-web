import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
import "./configuration"

export default function deletePhotos(photo,uid){

    const d =document,
    db=firebase.database(),
    storage=firebase.storage(),
    photos=d.getElementById("photos")

    // let isDelete= confirm("¿Estas seguro de elimina la foto?")
    let isDelete=true
    if(isDelete){
        storage.refFromURL(photo).delete()
        .then(()=>db.ref(`photos/${uid}`).remove())
    db.ref().child("photos").on("child_removed", data=>{
        let toDelete=d.getElementById(data.key)
        photos.removeChild(toDelete)
    })
    }

}
