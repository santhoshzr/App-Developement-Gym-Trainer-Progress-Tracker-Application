
import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nav=useNavigate();

  return (
    <div className='navbar'>
      <span className='logo'>EVO GYM</span>

      <ul className='nav-items'>
        <li><Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link></li>
        <li onClick={() => scrollToSection('carddd')}>Programs</li>
        <li onClick={() => scrollToSection('footer')}>About us</li>
        <li>Subscribe</li>

        {isLoggedIn ? (
          <li className='user-profile'  style={{border: 'none'}}>
            <FaUserCircle size={40} className='user-icon' onClick={(() => nav('/dash'))}/> {/* Display user icon when logged in */}
            <span className='log-out' onClick={onLogout}>Logout</span>
          </li>
        ) : (
          <li className='log-in'>
            <Link to="/login" style={{textDecoration:'none', color:'white'}}>Login</Link> {/* Using Link for navigation */}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

