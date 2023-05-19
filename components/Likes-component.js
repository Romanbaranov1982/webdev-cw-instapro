import { likePost, dislikePost } from "../api.js";
import { getToken, updatePage } from "../index.js";
// import { POSTS_PAGE } from "../routes.js";

export const likeButtonFunk = (posts) => {

    const likeButtonElements = document.querySelectorAll(".like-button");
    for (const likeButtonElement of likeButtonElements) {

        likeButtonElement.addEventListener('click', (event) => {

            const postId = likeButtonElement.dataset.postId;
            const choicePost = posts.find((post) => post.id === postId);
            const token = getToken();
            if (!choicePost.isLiked) {
                likePost(postId, token)
                    .then(() => {
                        updatePage();
                    });
            } else {
                dislikePost(postId, token)
                    .then(() => {
                        updatePage();
                    });
            }

            event.stopPropagation();
        })
    }
}