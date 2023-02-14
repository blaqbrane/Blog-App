import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import {Data} from './BlogData'
import { useState } from "react";
const BlogDetails = ({blogs}) => {
    const[blog, setBlog] = useState(Data)

    const{id} = useParams();
    
    return ( 
        <div className='blog-details'>
           
           {blog.map((blogs) => (
                 <article className="article">
                 <h1>{blogs.title}</h1>
                 <p>Written by {blogs.author}</p>
                 <div>{blogs.body}</div>
            </article>
           ))}
          
        </div> 
       
    );
}
 
export default BlogDetails;