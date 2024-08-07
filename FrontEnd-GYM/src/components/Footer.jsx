import React from 'react';
import './Footer.css';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer-container' id='footer'>
      <section className='footer-subscription'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              EVOGYM
            </Link>
          </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/home'>How it works</Link>
            <Link to='/home'>Careers</Link>
            <Link to='/home'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/home'>Services : <CallIcon className='iiii'/> 91+ 1408921336</Link>
            <Link to='/home'>Queries : <CallIcon className='iiii'/>91+ 1456248651</Link>
            <Link to='/home'><MailIcon className='iiii'/>  Email : evogym@gmail.com</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/home'><InstagramIcon/> Instagram</Link>
            <Link to='/home'><FacebookIcon/> Facebook </Link> 
            <Link to='/home'><XIcon/> Twitter</Link>
          </div>
        </div>
      </div>
      <br/>
      <div className='footer-link-wrapper'>
        <h4 style={{color:'white',wordSpacing:"5"}}>
          Australia         &nbsp;&nbsp;&nbsp;&nbsp;
          France            &nbsp;&nbsp;&nbsp;&nbsp;
          Germany           &nbsp;&nbsp;&nbsp;&nbsp;
          Italy             &nbsp;&nbsp;&nbsp;&nbsp;
          Japan             &nbsp;&nbsp;&nbsp;&nbsp;
          Netherlands       &nbsp;&nbsp;&nbsp;&nbsp;
          Poland            &nbsp;&nbsp;&nbsp;&nbsp;
          Singapore         &nbsp;&nbsp;&nbsp;&nbsp;
          United Kingdom    &nbsp;&nbsp;&nbsp;&nbsp;
          United States
        </h4>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <medium class='website-rights'>EVOGYM © 2016</medium>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/home'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/home'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/home'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
