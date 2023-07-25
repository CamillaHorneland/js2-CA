import { removePost } from "../../api/index.mjs";

export function setDeletePostListener() {
    const deleteButtons = document.querySelectorAll(".delete-post");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
            const confirmDelete = confirm(
                "Are you sure you want to delete this post?"
            );

            if (confirmDelete) {
                const postId = event.target.dataset.id;
                await removePost(postId);

                const postElement = event.target.closest(".post");

                if (postElement) {
                    postElement.remove();
                }
            }
        });
    });
}
