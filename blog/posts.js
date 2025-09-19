/* =======================
   POSTS.JS - Blog Posts
   Dynamically renders blog posts from blog.json
   ======================= */

fetch('blog.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("postsContainer");

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
  })
  .catch(err => console.error("Error loading blog posts:", err));
