import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new WebSite - 001', body:'lorem ipsum...', author:'Mario', id:1 },
    { title: 'My new WebSite - 002', body:'lorem ipsum...', author:'Luiggi', id:2 },
    { title: 'My new WebSite - 003', body:'lorem ipsum...', author:'Toddy', id:3 },
  ])
  return (
    <div className='home'>
    <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
