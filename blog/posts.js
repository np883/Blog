/* ------------------- posts.js ------------------- */
/*
  This file contains an array called "posts" which stores all blog post data.
  Each post is an object with the following properties:

  - title: The title of the blog post
  - date: The publication date (displayed under the title)
  - preview: A short preview or teaser text for the homepage/blog homepage
  - file: The filename of the individual blog post HTML page
  - image: Optional URL to an image representing the post (used in cards)
*/

/* Example blog posts array */
const posts = [
  {
    title: "My First Blog Post",                  // Post title
    date: "2025-09-19",                           // Date of publication
    preview: "This is a short preview of my first blog post. Click to read more...", // Teaser text
    file: "post1.html",                           // Path to the post file
    image: "https://via.placeholder.com/300x180?text=Post+1" // Optional image
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
================ USAGE =================

1. Featured Posts on Homepage:
   - In blog.js, we slice the first 2–3 posts from this array and create HTML cards dynamically.
   - Example: const featuredPosts = posts.slice(0, 3);

2. Blog Homepage (blog/index.html):
   - Loop through the 'posts' array and create a card for each post.
   - Each card displays image (if available), title, date, and preview text.

3. Adding a New Blog Post:
   - Create a new HTML post page (e.g., post4.html).
   - Add a new object to this array:
     posts.push({
       title: "New Post Title",
       date: "YYYY-MM-DD",
       preview: "Short teaser text",
       file: "post4.html",
       image: "https://via.placeholder.com/300x180?text=Post+4"
     });
   - The homepage and blog homepage automatically include it.

4. Optional Enhancements:
   - You can include categories or tags by adding extra properties to the objects.
   - You could sort posts dynamically by date for newest first.

This modular structure allows your blog to scale easily, and new posts appear automatically
on both the homepage (featured) and blog homepage.
*/
