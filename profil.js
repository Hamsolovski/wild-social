//rename profil

const editProfile = document.querySelector(".btn");

const newImage = document.querySelector(".imagedeprofile");
const newBackground = document.querySelector(".imagedefond");
const newCompteur = document.querySelector(".compteur");

//Nouveau post
const thread = document.querySelector(".thread");
const post = document.querySelectorAll(".post");

function getUserPost(user) {
    for (let post of user.messages) {
        const newPost = document.createElement("article");
        newPost.className = "post";
        newPost.innerHTML = `<sidebar></sidebar>
          <section class="post-box">
              <header>
                  <img class="profile-pic" src="${user.picture}" alt="" />
                  <section class="profile-info">
                  <h2 class="username">${user.firstname} ${user.lastname}</h2>
                  <p class="date">a wildé le ${post.date}</p>
                  </section>
              </header>
              <main>
                  <img class="pic1" src="" alt="" />
                  <p class="message">${post.message}</p>
              </main>
              <footer>
                  <ul class="interactions">
                      <li class="likes"><i class="bi bi-hand-thumbs-up-fill"></i><span class="likeCounter">${post.likes}</span></li>
                      <li class="comments"><i class="bi bi-chat-left-dots-fill"></i><span class="commentCounter">0</span></li>
                  </ul>
              </footer>
          </section>`
        thread.appendChild(newPost);
    }
};

getUserPost(myUsers[1]);

//éditer le profil

editProfile.addEventListener("click", function () {
    const newProfile = document.querySelector(".nameprofile");
    const threadName = document.querySelector(".lastpost")
    newProfile.innerHTML = `<form>
        <label for="profile_name">
            <input id="profile_name" name="profile_name" placeholder="Prénom Nom"></textarea>
        </label>
        </form>`
    console.log(document.querySelector("#profile_name"));
    addEventListener("submit", function (event) {
        const newProfileId = document.querySelector("#profile_name").value;
        event.preventDefault();
        newProfile.innerHTML = `<h1 class="nameprofile">${newProfileId}</h1>`
        threadName.innerHTML = `<h1 class="lastpost">LES DERNIERS POST DE ${newProfileId}</h1>`
        newImage.src = "assets/img/cat-img2.jpg";
        const username = thread.querySelectorAll(".username")
        const profilePic = thread.querySelectorAll(".profile-pic")
        newBackground.style.backgroundImage =
        'url("assets/img/42848087-lignes-de-code-numérique-bleu.jpg")';

        for (let element of username) {
            element.outerHTML = `<h2 class="username">${newProfileId}</h2>`;
            element.className = "username"
        }
        for (let element of profilePic) {
            element.src = "assets/img/cat-img2.jpg"
        }
    })





    //   newProfile.textContent = "Mickael Beaugrand";
    //   newCompteur.textContent = "0 Abonnements 0 Abonnés  ";
    //   newImage.src = "assets/img/cat-img2.jpg";
      
});

//getUserPost(myUsers[1]);

//editProfile.addEventListener("click", function () {
  //newProfile.textContent = "Mickael Beaugrand";
  //newCompteur.textContent = "0 Abonnements 0 Abonnés  ";
  //newImage.src = "assets/img/cat-img2.jpg";
  //newBackground.style.backgroundImage =
    //'url("assets/img/42848087-lignes-de-code-numérique-bleu.jpg")';
//});
