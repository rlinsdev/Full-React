import { useState } from 'react';

const Home = () => {
  const [blobs, setBlobs] = useState([
    { title: 'My new WebSite - 001', body:'lorem ipsum...', author:'Mario', id:1 },
    { title: 'My new WebSite - 002', body:'lorem ipsum...', author:'Luiggi', id:2 },
    { title: 'My new WebSite - 003', body:'lorem ipsum...', author:'Toddy', id:3 },
  ])
  return (
    <div className='home'>
    {blobs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <h2> { blog.title } </h2>
        <p>Writen by { blog.author }</p>
      </div>
    ))}
    </div>
  );
};

export default Home;
