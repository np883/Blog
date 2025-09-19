/* ------------------- blog.js ------------------- */
/* Dynamically creates featured blog posts on the homepage */

/* Container where featured posts will appear */
const featuredContainer = document.getElementById("featuredPostsContainer");

/* Check if container exists and posts array is defined */
if (featuredContainer && typeof posts !== 'undefined') {
  // Display latest 3 posts
  const featuredPosts = posts.slice(0, 3);

  featuredPosts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("featured-post-card");

    // Create HTML structure for each featured post
    postDiv.innerHTML = `
      ${post.image ? `<img class="post-image" src="${post.image}" alt="${post.title}">` : ''}
      <h3><a href="blog/${post.file}">${post.title}</a></h3>
      <p><em>${post.date}</em></p>
      <p>${post.preview}</p>
    `;

    featuredContainer.appendChild(postDiv);
  });
}
