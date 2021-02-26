const Home = () => {
  
  // 
  const handleClick = () => {
    console.log('teset');
  };

  const handleClickParameter = (param) =>{
    console.log(`Hello ${param}`)
  }

  return (
    <div className='home'>
      <h2>HomePage</h2>
      <button onClick={handleClick}>Clicke me</button>
      <button onClick={()=>{handleClickParameter('teste!')}}>button 2</button>
    </div>
  );
};

export default Home;
