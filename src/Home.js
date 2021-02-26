import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Mario');

  
  const handleClick = () => {
    setName('Luigi')
  };

  return (
    <div className='home'>
      <h2>HomePage</h2>
      <button onClick={handleClick}>Clicke me</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
