import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZDeIdPm0LBXiwsTTRh0KqrdYBr--JwJ0",
    authDomain: "blog-sam-c.firebaseapp.com",
    projectId: "blog-sam-c",
    storageBucket: "blog-sam-c.appspot.com",
    messagingSenderId: "748766726265",
    appId: "1:748766726265:web:625b588025018cecf7aca8",
    measurementId: "G-GNTWVKFJWP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  let db = firebase.firestore();