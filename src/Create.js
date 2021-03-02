import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  
  console.log(isPending)
  
  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New Blog Added')
      setIsPending(false);
    });
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
        { isPending && <button disabled>Addin Blog...</button>}
        { !isPending && <button>Add Blog</button>}
      </form>
    </div>
   );
}
 
export default Create