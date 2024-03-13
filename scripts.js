document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorElement = document.getElementById('error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = this.username.value;
        const password = this.password.value;

        // Your login logic here
        if (username === 'admin' && password === 'password') {
            window.location.href = 'blogs.html'; // Redirect to blogs page
        } else {
            errorElement.textContent = 'Invalid username or password';
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = this.username.value;
        const password = this.password.value;

        // Your registration logic here
        // Example: Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to login page
        window.location.href = 'blogs.html';
    });
});

//Blog page
document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;

        addPost(postTitle, postContent);
        postForm.reset();
    });

    function addPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="delete-btn">Delete</button>
        `;
        postsContainer.appendChild(postDiv);

        const deleteBtn = postDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            postDiv.remove();
        });
    }
});

