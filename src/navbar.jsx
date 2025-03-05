import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <button
        className="nav-home"
        onClick={() => navigate('/')}
        aria-label="Go to Home"
      >
       Community Connect
      </button>
      <input
        type="text"
        className="nav-search"
        placeholder="Search Discussions"
        aria-label="Search"
      />
      <button
        className="nav-notification"
        onClick={() => navigate('/discussion')}
        aria-label="Go to Discussion Page"
      >
        Notification
      </button>
      <button 
        className="nav-profile"
        onClick={() => navigate('/profile')}
        aria-label='Go to Profile Page'
        >
        Profile 
      </button>
      
    </nav>
  );
};

export default Navbar;

