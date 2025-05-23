import React from 'react'
import './header.css'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Netflixlogo from '../../assets/Images/netflix_rep.svg'

function Header() {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li>
                          <img src={Netflixlogo} alt="netflix-clone-2024\netflix-clone-2024\src\assets\Images\netflix_rep.svg" width='100' /> 
                    </li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon /></li>
                    <li>< AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header