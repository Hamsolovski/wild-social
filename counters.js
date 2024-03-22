//Compteur de likes
function getLikes() {
    const likes = document.querySelectorAll(".likes")
    for (let like of likes) {
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
            inputHidden()
            commentCounter.textContent = myCounter;
        })
    }
}

getLikes();
getComments();


function inputHidden() {
    const element = document.getElementById("inputComment");
    element.style.display = "block";
    console.log(element);

}