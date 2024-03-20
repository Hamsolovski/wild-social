
//Post types

const myTestPosts =
{
    picture: "/assets/img/dog-7134183_1280.jpg",
    firstname: "Tidus",
    lastname: "Lambert",
    date: new Date().toLocaleDateString(),
    message: `Coucou, c'est Tidus. Je suis trop content d'être avec de nouveaux gens.`
}


//Nouveau post
const thread = document.querySelector(".thread");
const post = document.querySelectorAll(".post");
const addPost = document.querySelector(".publish-button");
const newUserPost = document.querySelector("textarea");

// Fonction qui crée le HTML de mon post
function newPost() {
    const newPost = document.createElement("article");
    newPost.className = "post";
    newPost.innerHTML = `<sidebar></sidebar>
    <section class="post-box">
        <header>
            <img class="profile-pic" src="${myTestPosts.picture}" alt="" />
            <section class="profile-info">
            <h2 class="username">${myTestPosts.firstname} ${myTestPosts.lastname}</h2>
            <p class="date">a wildé le ${myTestPosts.date}</p>
            </section>
        </header>
        <main>
            <img class="pic1" src="" alt="" />
            <p class="message">${myTestPosts.message}</p>
        </main>
        <footer>
            <ul class="interactions">
                <li id="buttonLike" class="likes"><img src="assets/icons/thumbs-up 1.svg" alt="">0</li>
                <li class="shares"><img src="assets/icons/share 1.svg" alt="">0</li>
                <li class="comments"><img src="assets/icons/comment 1.svg" alt=""><span class="commentCounter">0</span></li>
            </ul>
        </footer>
    </section>`
    thread.appendChild(newPost);
};

addPost.style.display = "none";

// Je vérifie que j'ai un input
newUserPost.addEventListener("input", () => {
    const newMessage = document.querySelector("textarea").value;
    myTestPosts.message = newMessage;
    if (newMessage || newMessage.length !== 0)
        addPost.style.display = "initial";
});

addPost.addEventListener("click", () => {
    newPost();
    getLikes();
    getComments();
    const newMessage = document.querySelector("textarea").value = null
    addPost.style.display = "none";
})

//Charger les posts de mes utilisateurs
function getPost(userId) {

    for (let user of userId) {
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
                        <li class="likes"><img src="assets/icons/thumbs-up 1.svg" alt=""><span class="likeCounter">0</span></li>
                        <li class="shares"><img src="assets/icons/share 1.svg" alt="">0</li>
                        <li class="comments"><img src="assets/icons/comment 1.svg" alt=""><span class="commentCounter">0</span></li>
                    </ul>
                </footer>
            </section>`
            thread.appendChild(newPost);
        }
    }
};

getPost(myUsers);

//Compteur de likes



function getLikes() {
    const likes = document.querySelectorAll(".likes")
    for (let like of likes){
        like.onclick = function () { 
            const counter = like.querySelector(".likeCounter")
            let myCounter = Number(counter.textContent);
            myCounter++
            counter.textContent = myCounter;
        }
    }
    

}

//Commentaires
function getComments() {
    const comments = document.querySelectorAll(".comments");
    for (let comment of comments) {
        comment.addEventListener("click", function () {
            const commentCounter = comment.querySelector('.commentCounter');
            let myCounter = Number(commentCounter.innerText);
            myCounter++;
            commentCounter.textContent = myCounter;
        })
    }
}

getLikes();
getComments();