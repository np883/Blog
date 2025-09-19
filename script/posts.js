/* =======================
   POSTS.JS - Blog Posts (Merged)
   Dynamically renders featured posts on homepage AND all posts on blog page
   ======================= */

fetch('blog.json')
  .then(res => res.json())
  .then(posts => {

    /* ---------- Featured posts on homepage ---------- */
    const featuredContainer = document.getElementById("featuredPostsContainer");
    if (featuredContainer) {
      const featuredPosts = posts.slice(0, 3); // latest 3 posts
      featuredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("featured-post-card");
        postDiv.innerHTML = `
          ${post.image ? `<img class="post-image" src="${post.image}" alt="${post.title}">` : ''}
          <h3><a href="blog/${post.file}">${post.title}</a></h3>
          <p><em>${post.date}</em></p>
          <p>${post.preview}</p>
        `;
        featuredContainer.appendChild(postDiv);
      });
    }

    /* ---------- All posts on blog page ---------- */
    const container = document.getElementById("postsContainer");
    if (container) {
      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post-card");
        postDiv.innerHTML = `
          ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ""}
          <h3><a href="${post.file}">${post.title}</a></h3>
          <p><em>${post.date}</em></p>
          <p>${post.preview}</p>
        `;
        container.appendChild(postDiv);
      });
    }

  })
  .catch(err => console.error("Error loading blog posts:", err));
