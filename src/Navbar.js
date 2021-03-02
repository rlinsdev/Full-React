import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blob</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <a href="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</a> */}
            </div>
        </nav>
     );
}
//Hot key: sfc

export default NavBar;