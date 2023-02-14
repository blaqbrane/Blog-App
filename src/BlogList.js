
import { useState } from "react";
const BlogList = ({ blogs, handleDelete,isopen,setBlogs }) => {
  const handleClick =(id)=>{
    setBlogs(prevblog => {
       return prevblog.map((blog) =>{
        return blog.id === id ? {...blog, view:!blog.view} : blog
      })
    })
  }
  return (
    <div className={!isopen ? "bloglist": 'hidden'}>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div className={!isopen ? "blog-preview":""} key={blog.id}>
          {/* <Link to={`/blogs/${blog.id}`}> */}
            <div className="details">
             <h2>{blog.title}</h2>
             <h4 onClick={() => handleClick(blog.id)} className='details'>Details</h4>
            </div>
            <p>Written by {blog.author}</p>
            {blog.view && <p className="body-text">{blog.body}</p>}
          {/* </Link> */}

          <button  onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
