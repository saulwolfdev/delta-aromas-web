import firebase from "firebase/app"


const configuration=
        {
                apiKey: "AIzaSyCRb1dUIC8mgqfg1Q8s5HYaLE8NcFP3i4A",
                authDomain: "delta-aromas-web-fb31b.firebaseapp.com",
                databaseURL: "https://delta-aromas-web-fb31b.firebaseio.com",
                projectId: "delta-aromas-web-fb31b",
                storageBucket: "delta-aromas-web-fb31b.appspot.com",
                messagingSenderId: "634587784295"
              };

const init=()=>firebase.initializeApp(configuration)
init()
