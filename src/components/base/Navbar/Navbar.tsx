import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';
import './navbar.scss';

type Props = {
    className?: string
}

const appName = process.env.REACT_APP_SITE_TITLE;

export default function Navbar({ className = '' }: Props): JSX.Element {
    return (
        <div>
            <Link to='/login' className='navbar__navBtnRight'>Log In</Link>
            <Link to='/register' className='navbar__navBtnRight'>Sign Up</Link>
            <nav className='navbar'>
                <ul className='navbar__list'>
                    <li className='navbar__navBtn'><Link to='/dashboard' className='navbar__navBtn'>Home</Link></li>
                    <li className='navbar__navBtn'><Link to='/sell' className='navbar__navBtn'>Sell</Link></li>
                    <li className='navbar__navBtn'><Link to='' className='navbar__navBtn'>My Page</Link></li>
                    <li className='navbar__navBtn'><Link to='/auction-list' className='navbar__navBtn'>Auction List</Link></li>
                    <li className='navbar__navBtn'><Link to='' className='navbar__navBtn'>Online AA</Link></li>
                    <li className='navbar__navBtn'><Link to='' className='navbar__navBtn'>Random AA</Link></li>
                    <li className='navbar__navBtn'><Link to='' className='navbar__navBtn'>Market Price</Link></li>
                    <li className='navbar__navBtn'><Link to='' className='navbar__navBtn'>Transportation</Link></li>
                    <li className='navbar__navBtn'><Link to='' className='navbar__navBtn'>F & I</Link></li>
                </ul>
            </nav>
        </div>
    );
}
