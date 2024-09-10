const apiUrl = 'https://jsonplaceholder.typicode.com';

      // Handle form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const query = document.getElementById('search-input').value;

  if (query) {
    // Fetch posts that match the search query
    fetch(`${apiUrl}/posts?title_like=${query}`)
      .then(response => response.json())
      .then(data => {
        displaySearchResults(data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        document.getElementById('search-results').innerHTML = '<p class="text-danger">An error occurred. Please try again.</p>';
      });
  } else {
    document.getElementById('search-results').innerHTML = '<p class="text-warning">Please enter a search term.</p>';
  }
});

// Function to display the search results
function displaySearchResults(posts) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = ''; // Clear any previous results

  if (posts.length > 0) {
    let resultsHtml = '<ul class="list-group">';
    posts.forEach(post => {
      resultsHtml += `
        <li class="list-group-item">
          <h5>${post.title}</h5>
          <p>${post.body}</p>
        </li>
      `;
    });
    resultsHtml += '</ul>';
    resultsContainer.innerHTML = resultsHtml;
  } else {
    resultsContainer.innerHTML = '<p class="text-muted">No results found.</p>';
  }
}

      // Fetching posts for News Feed
      fetch(`${apiUrl}/posts?_limit=5`)
        .then(response => response.json())
        .then(posts => {
          const newsList = document.getElementById('news-list');
          posts.forEach(post => {
            const article = `
              <div class="grid-item">
                <img src="Assets/Images/default.jpg" alt="News Image">
                <div>
                  <h2>${post.title}</h2>
                  <p>${post.body}</p>
                  <div class="comment-likes">
                    <span class="like-btn"><i class="fas fa-thumbs-up"></i> Like</span>
                    <span class="dislike-btn"><i class="fas fa-thumbs-down"></i> Dislike</span>
                  </div>
                </div>
              </div>
            `;
            newsList.innerHTML += article;
          });
        });

      // Comment Section functionality
      document.getElementById('submit-comment').addEventListener('click', function () {
        const commentText = document.getElementById('comment').value;
        if (commentText) {
          const newComment = `
            <div class="comment">
              <p>${commentText}</p>
              <div class="comment-likes">
                <span class="like-btn"><i class="fas fa-thumbs-up"></i> Like</span>
                <span class="dislike-btn"><i class="fas fa-thumbs-down"></i> Dislike</span>
              </div>
            </div>
          `;
          document.querySelector('.comments-container').innerHTML += newComment;
          document.getElementById('comment').value = '';
        }
      });

    // Dark Mode Toggle Script 
      const darkModeToggle = document.getElementById('darkModeToggle');
      darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
      });

    //  Update current date in footer
    document.addEventListener('DOMContentLoaded', function() {
      // Update current date
      const currentDateElement = document.getElementById('current-date');
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      currentDateElement.textContent = new Date().toLocaleDateString('en-US', options);
    
      // Stagger animation for footer sections
      const footerSections = document.querySelectorAll('.footer-section');
      footerSections.forEach((section, index) => {
          section.style.animationDelay = `${index * 0.1}s`;
      });
    
      // Add hover effect to social icons
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
          icon.addEventListener('mouseover', function() {
              this.style.transform = 'scale(1.2) rotate(360deg)';
              this.style.transition = 'transform 0.5s ease';
          });
          icon.addEventListener('mouseout', function() {
              this.style.transform = 'scale(1) rotate(0deg)';
          });
      });
    
      // Add parallax effect to footer
      window.addEventListener('scroll', function() {
          const footer = document.querySelector('footer');
          const scrollPosition = window.pageYOffset;
          footer.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      });
    });
