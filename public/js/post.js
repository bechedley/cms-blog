const postUpdateHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the name and date modal
  const post_title = document.querySelector("#new-title").value.trim();
  const post_text = document.querySelector("#new-post-text").value.trim();
  if (post_text !== null) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/posts/${id}/text`, {
      method: "PUT",
      body: JSON.stringify({ post_title, post_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/post/${id}`);
    } else {
      alert("Error when updating the blog post!");
    }
  } else {
    alert("You must include a post title and text!");
  }
};

const postDeleteHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to delete post!");
    }
  }
};

const commentAddHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the comment modal
  const comment_text = document.querySelector("#new-comment-text").value.trim();
  if (comment_text) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts/${id}/comment`, {
      method: "POST",
      body: JSON.stringify({ comment_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/post/${id}`);
    } else {
      alert("Error when adding the new comment!");
    }
  } else {
    alert("Invalid comment!");
  }
};

const commentDeleteHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-cid")) {
    const cid = event.target.getAttribute("data-cid");
    const pid = event.target.closest(".post-div").getAttribute("data-pid");

    const response = await fetch(`/api/posts/${pid}/comment/${cid}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/post/${pid}`);
    } else {
      alert("Failed to delete comment");
    }
  }
};

const commentUpdateHandler = async (event) => {
  event.preventDefault();
  
  let pid;
  let cid;

  if (event.target.hasAttribute("id")) {
    cid = event.target.querySelector("#edit-comment-cid").value;
    pid = event.target.querySelector("#edit-comment-cpid").value;
  }

// Collect values from the comment modal
const comment_text = document.querySelector("#edit-comment-text").value.trim();

console.log(cid, pid, comment_text);

if (comment_text !== null) {
  // Send a PUT request to the API endpoint
  const response = await fetch(`/api/posts/${pid}/comment/${cid}/text`, {
    method: "PUT",
    body: JSON.stringify({ comment_text }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, refresh the project page
    document.location.replace(`/post/${pid}`);
  } else {
    alert("Error when updating the comment!");
  }
} else {
  alert("You must include text in your comment!");
}
};

const comments = document.querySelectorAll(".comment-delete");
for (let i = 0; i < comments.length; i++) {
  comments[i].addEventListener("click", commentDeleteHandler);
}

const editCommentModal = document.getElementById('editCommentModal')
editCommentModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  let commentIndex = button.getAttribute('data-bs-cindex');
  let commentId = button.getAttribute('data-bs-cid');
  let commentIdText = button.getAttribute('data-bs-ctext');
  let commentPostId = button.getAttribute('data-bs-cpid');
  // Update the modal's content.
  const editCommentIndex = editCommentModal.querySelector('#edit-comment-cindex');
  const editCommentId = editCommentModal.querySelector('#edit-comment-cid');
  const editCommentText = editCommentModal.querySelector('#edit-comment-text');
  const editCpid = editCommentModal.querySelector('#edit-comment-cpid');

  editCommentIndex.value = commentIndex
  editCommentId.value = commentId
  editCommentText.value = commentIdText
  editCpid.value = commentPostId
});


editCommentModal.addEventListener("submit", commentUpdateHandler);

document
  .querySelector("#postDeleteModal")
  .addEventListener("submit", postDeleteHandler);

document
  .querySelector("#editPostModal")
  .addEventListener("submit", postUpdateHandler);

  document
  .querySelector("#addCommentModal")
  .addEventListener("submit", commentAddHandler);
