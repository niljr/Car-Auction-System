import React from 'react';
import Typography from '../Typography/Typography';
import './navbar.scss';

type Props = {
    className?: string
}

const appName = process.env.REACT_APP_SITE_TITLE;

export default function Navbar({ className = '' }: Props): JSX.Element {
    return (
        <div>
            <a href=''>Log In</a>
            <nav className='navbar'>
                <ul className='navbar__list'>
                    <li className='navbar__navBtn'>Home</li>
                    <li className='navbar__navBtn'>Sell</li>
                    <li className='navbar__navBtn'>My Page</li>
                    <li className='navbar__navBtn'>Auction List</li>
                    <li className='navbar__navBtn'>Online AA</li>
                    <li className='navbar__navBtn'>Random AA</li>
                    <li className='navbar__navBtn'>Market Price</li>
                    <li className='navbar__navBtn'>Transportation</li>
                    <li className='navbar__navBtn'>F & I</li>
                </ul>
            </nav>
        </div>
    );
}
