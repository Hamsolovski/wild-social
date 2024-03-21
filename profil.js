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

//Nouveau post
const thread = document.querySelector(".thread");
const post = document.querySelectorAll(".post");

function getUserPost(user) {{
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
  }
};

getUserPost(myUsers[1]);

