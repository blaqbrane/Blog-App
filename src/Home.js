import BlogList from "./BlogList";
import Create from "./Create";
import { useState} from "react"; 
import {Data} from './BlogData'
import Header from "./Header";

const Home = () => {
  const [blogs, setBlogs] = useState(Data);
  const[isopen, setIsopen] = useState(false)

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const createBlog = (prev_id) => {
    const new_id = Math.floor(Math.random() * 1000) + 1;
    const newBlog = { new_id, ...prev_id };
    setBlogs([...blogs, newBlog]);
  };
  
  return (
    <div className="app">
      <Header isopen={isopen} setIsopen={setIsopen}/>
      { blogs.length > 0  ? (
        <BlogList blogs={blogs} setBlogs={setBlogs} handleDelete={handleDelete} isopen = {isopen}/>
      ) : (
        <p className="new--blog">Add new blogs</p>
      )}
      <Create onAdd={createBlog} isopen={isopen} />
      
    </div>
  );
};

export default Home;
