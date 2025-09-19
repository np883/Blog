/* ------------------- Blog Posts Data ------------------- */

/*
  This file contains an array called "posts".
  Each post is an object with the following properties:
    - title: The title of the post (shown on homepage, blog page, and post page)
    - date: Date of the post (displayed under title)
    - preview: Short preview text for homepage/blog card
    - file: Path to the individual blog post HTML file
    - image: Optional image for the post card / featured post
*/

const posts = [
  {
    title: "My First Blog Post",                 // Post title
    date: "2025-09-19",                          // Date of publication
    preview: "This is a short preview of my first blog post. Click to read more...", // Short teaser text
    file: "post1.html",                          // Path to individual post page
    image: "https://via.placeholder.com/300x180?text=Post+1" // Optional image URL
  },
  {
    title: "Learning Web Development",
    date: "2025-09-18",
    preview: "Today I learned how to structure a website using HTML, CSS, and JS...",
    file: "post2.html",
    image: "https://via.placeholder.com/300x180?text=Post+2"
  },
  {
    title: "Cozy Cottagecore Tips",
    date: "2025-09-17",
    preview: "Sharing some simple ways to make your digital space cozy and whimsical...",
    file: "post3.html",
    image: "https://via.placeholder.com/300x180?text=Post+3"
  }
];

/*
  ================= USAGE =================
  
  1. Homepage "Featured Posts" section:
      - Script will slice the first 2–3 posts:
          const featuredPosts = posts.slice(0,3);
      - Create a card for each featured post.
  
  2. Blog homepage:
      - Loop through "posts" array.
      - For each post, create a card containing:
          - Image (if available)
          - Title linking to "file"
          - Date
          - Preview text
  
  3. Adding a new post:
      - Copy an object and add to the array
      - Update title, date, preview, file, image
      - Create corresponding HTML post file
      - The homepage and blog page will automatically include it
*/

/* ================= EXAMPLE: Adding a new post ================= */
/*
posts.push({
  title: "New Blog Post",
  date: "2025-09-20",
  preview: "A quick summary of the new post.",
  file: "post4.html",
  image: "https://via.placeholder.com/300x180?text=Post+4"
});
*/
