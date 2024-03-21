//rename profil

const editProfile = document.querySelector(".btn");
const newProfile = document.querySelector(".nameprofile");
const newImage = document.querySelector(".imagedeprofile");
const newBackground = document.querySelector(".imagedefond");
const newCompteur = document.querySelector(".compteur");




editProfile.addEventListener("click", function () {
  newProfile.textContent = "Mickael Beaugrand";
  newCompteur.textContent = "0 Abonnements 0 Abonnés  ";
  newImage.src = "assets/img/cat-img2.jpg";
  newBackground.style.backgroundImage =
    'url("assets/img/42848087-lignes-de-code-numérique-bleu.jpg")';
});


//galery
