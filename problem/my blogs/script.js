const blogData = [
  {
    title: 'First Blog Post',
    date: 'January 1, 2022',
    content: 'this is content of the first blog page.'
  },
  {
    title: 'Second Blog Post',
    date: 'February 1, 2022',
    content: 'This is the content of the second blog post.'
  },
  {
    title: 'Third Blog Post',
    date: 'March 1, 2022',
    content: 'This is the content of the third blog post.'
  }
];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blog){
  const title = blog.title;
  const date = blog.date;
  const content = blog.content;

  const blog_post = document.createElement("div");
  blog_post.classList.add("blog-post");
  const blog_header = document.createElement("div");
  // blog_header.classList.add("blog-header");
  blog_header.className = "blog-header";
  const blog_title = document.createElement("h2");
  blog_title.textContent = title;
  const blog_date = document.createElement("p");
  blog_date.textContent = date;
  const blog_content = document.createElement("p");
  blog_content.textContent = content;
  blog_header.append(blog_title, blog_date);
  blog_post.append(blog_header, blog_content);

  const blog_list = document.querySelector(".blog-list");
  blog_list.append(blog_post);
  console.log(blog);
}


//Call each object present in blogData with addBlog.

// for (let i=0;i<blogData.length;i++){
//   addBlog(blogData[i]);
// }
//If page does not update the changes automatically please refresh

//calling the function
blogData.forEach(blog => addBlog(blog));