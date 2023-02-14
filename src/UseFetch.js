import { useState, useEffect } from "react";
const UseFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const createBlog = (prev_id) => {
    const new_id = Math.floor(Math.random() * 1000) + 1;
    const newBlog = { new_id, ...prev_id };
    setBlogs([...blogs, newBlog]);
  };
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("You have got some error");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return {
    blogs,
    show,
    isPending,
    error,
    handleDelete,
    setShow,
    setIsPending,
    createBlog,
  };
};
export default UseFetch;
