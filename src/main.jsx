import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJzTjgSzjjNzW2grBDXiH0KraB29S5gnY",
  authDomain: "ecommerce-47160.firebaseapp.com",
  projectId: "ecommerce-47160",
  storageBucket: "ecommerce-47160.appspot.com",
  messagingSenderId: "142193805861",
  appId: "1:142193805861:web:09f269c2855a418f684dcc",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
