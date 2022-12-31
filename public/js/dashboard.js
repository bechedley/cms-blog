const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#addPostTitle').value.trim();
    const post_text = document.querySelector('#addPostText').value.trim();
    const post_created = new Date();
  
    if (post_title && post_text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ post_title, post_text, post_created }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.add-post-form')
    .addEventListener('submit', newPostFormHandler);

  