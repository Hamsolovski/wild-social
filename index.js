//Post types

const myTestPosts =
{
    picture: "assets/img/cat-img2.jpg",
    firstname: "Toto",
    lastname: "Test",
    date: "le 14 mars 2024",
    message: "Coucou, c'est Toto. Voilà du lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum ut lectus quis posuere. Integer non sapien iaculis, efficitur nunc ac, dignissim felis. Ut maximus libero eu libero malesuada, ut malesuada sapien ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sed vehicula neque. Duis sit amet lorem nec felis malesuada gravida. Donec tristique enim a arcu placerat facilisis. Etiam a quam ex. ",
}


//Nouveau post
const thread = document.querySelector(".thread");
const post = document.querySelectorAll(".post");
const interactions = document.querySelector(".interactions");
const likes = document.querySelector(".likes");
const addPost = document.querySelector(".publish-button");
const newUserPost = document.querySelector("textarea");


function newPost() {
    const newPost = document.createElement("article");
    newPost.className = "post";
    newPost.innerHTML = `<sidebar></sidebar>
    <section class="post-box">
        <header>
            <img class="profile-pic" src="${myTestPosts.picture}" alt="" />
            <h2 class="username">${myTestPosts.firstname} ${myTestPosts.lastname}</h2>
            <p class="date">a wildé le ${myTestPosts.date}</p>
        </header>
        <main>
            <img class="pic1" src="" alt="" />
            <p class="message">${myTestPosts.message}</p>
        </main>
        <footer>
            <ul class="interactions">
                <li class="likes"><img src="assets/icons/thumbs-up 1.svg" alt="">0</li>
                <li class="shares"><img src="assets/icons/share 1.svg" alt="">0</li>
                <li class="comments"><img src="assets/icons/comment 1.svg" alt="">0</li>
            </ul>
        </footer>
    </section>`
    thread.appendChild(newPost);
};

newUserPost.addEventListener("input", () => {
    const newMessage = document.querySelector("textarea").value;
    myTestPosts.message = newMessage;
    return myTestPosts;
});

addPost.addEventListener("click", () => {
    newPost();
})

//Compteur de likes
