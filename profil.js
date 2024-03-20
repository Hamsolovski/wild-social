//rename profil


const editProfile = document.querySelector(".btn")
const newProfile = document.querySelector(".nameprofile")
const newImage = document.querySelector (".imagedeprofile")

editProfile.addEventListener("click", function () { 
     newProfile.textContent  = "Mickael Beaugrand" ;
      newImage.src = "assets/img/cat-img2.jpg";
      
    }
    
) 


