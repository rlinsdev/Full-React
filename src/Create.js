import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const [author, setAuthor] = useState('Mario');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  }

  return ( 
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" require='true' value={ title } onChange={ (e) => setTitle(e.target.value) }></input>
        <label>Blog Body:</label>
        <textarea require='true' value={ body } onChange={ (e)=> setBody(e.target.value) } ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={ (e) => setAuthor(e.target.value) }>
          <option value='Mario'>Mario</option>
          <option value='Yoshy'>Yoshy</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
   );
}
 
export default Create