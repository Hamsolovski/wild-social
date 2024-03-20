//rename profil


const editProfile = document.querySelector(".btn")
const newProfile = document.querySelector(".nameprofile")
const newImage = document.querySelector(".imagedeprofile")
const newBackground = document.querySelector (".imagedefond")

editProfile.addEventListener("click", function () { 
     newProfile.textContent  = "Mickael Beaugrand" ;
      newImage.src = "assets/img/cat-img2.jpg";
      newBackground.style.backgroundImage = 'url("assets/img/42848087-lignes-de-code-numérique-bleu.jpg")';
    
    }
    
) 


