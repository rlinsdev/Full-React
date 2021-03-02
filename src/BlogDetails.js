import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const { data:blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)

  return ( 
    <div className="blog-details">
      { error && <div> { error } </div> }
      { !error && isPending && <div>loading...</div> }
      <div>{ blog &&  (
        <article>
          <h2>{ blog.title }</h2>
          <p><b>Written by: </b><i>{blog.author}</i></p>
          <div>{ blog.body }</div>
        </article>
      )}</div>
    </div>
   );
}
 
export default BlogDetails;