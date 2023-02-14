import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
const Create = ({ onAdd, isopen }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // const blog = { title, body, author };
    // fetch("http://localhost:5000/blogs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   console.log("new blog added");
    //   setIsPending(false);
    //   history.push("/");
    // });
    history.push("/");
    onAdd({ title, body, author });
    setTitle("");
    setBody("");
    setAuthor("");
  };
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);
  const handleTitle = (e) => {
    if (e.key === "Enter") {
      bodyRef.current.focus();
    }
  };
  const handleBody = (e) => {
    if (e.key === "Enter") {
      authorRef.current.focus();
    }
  };
  const handleAuthor = (e) => {
    if (e.key === "Enter") {
      console.log("submitted");
    }
  };

  return (
    <form className={isopen ? "add-form" : "hidden"} onSubmit={handleSubmit}>
     
      <div className="form-control">
        <label className="">Title</label>
        <input
          ref={titleRef}
          onKeyDown={handleTitle}
          type="text"
          required
          placeholder="Add a Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Body</label>
        <textarea
          ref={bodyRef}
          onKeyDown={handleBody}
          placeholder="Description"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control">
        <label> Author</label>
        <input
          type="text"
          ref={authorRef}
          onKeyDown={handleAuthor}
          value={author}
          required
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type='submit'>Add Blog</button>
      {/* {isPending && <button disabled>Adding blog...</button>} */}
    </form>
  );
};
export default Create;
