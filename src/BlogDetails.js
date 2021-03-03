import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const { data:blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs/${id}`,{
      method:'DELETE'
    }).then(() => {
      history.push('/')
    });
  }

  return ( 
    <div className="blog-details">
      { error && <div> { error } </div> }
      { !error && isPending && <div>loading...</div> }
      <div>{ blog &&  (
        <article>
          <h2>{ blog.title }</h2>
          <p><b>Written by: </b><i>{blog.author}</i></p>
          <div>{ blog.body }</div>
          <button onClick={handleClick} >Delete</button>
        </article>
      )}</div>
    </div>
   );
}
 
export default BlogDetails;