document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postContent = document.getElementById('post-content');
    const postBtn = document.getElementById('post-btn');
    const postsContainer = document.getElementById('posts-container');

    // Function to create a new post element
    function createPostElement(content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const reactBtn = document.createElement('button');
        reactBtn.classList.add('react-btn');
        reactBtn.textContent = 'Like';
        reactBtn.addEventListener('click', function() {
            // Add your like functionality here
            alert('Liked!');
        });

        const commentBtn = document.createElement('button');
        commentBtn.classList.add('react-btn');
        commentBtn.textContent = 'Comment';
        commentBtn.addEventListener('click', function() {
            // Add your comment functionality here
            alert('Commented!');
        });

        actionsDiv.appendChild(reactBtn);
        actionsDiv.appendChild(commentBtn);

        postDiv.appendChild(postContent);
        postDiv.appendChild(actionsDiv);

        return postDiv;
    }

    // Function to handle post submission
    function handlePostSubmit() {
        const content = postContent.value.trim();
        if (content !== '') {
            const postElement = createPostElement(content);
            postsContainer.prepend(postElement);
            postContent.value = '';
        } else {
            alert('Please write something before posting!');
        }
    }

    // Event listener for post button click
    postBtn.addEventListener('click', handlePostSubmit);
});
