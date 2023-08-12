import React from 'react';
import logo from './../assets/logo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <>
      <nav>
        <img className='navitem logo' src={logo} alt="logo" />
        <div className="navitem course">
          <span>Courses</span> <ExpandMoreIcon className='navitem_arrow' fontSize={''} />
        </div>
        <div className="navitem program">
          <span>Programs</span> <ExpandMoreIcon className='navitem_arrow' fontSize={''} />
        </div>
        <SearchIcon className='navitem search' fontSize='small' />
        <button className="navitem login">Log in</button>

        <button className="navitem joinnow">JOIN NOW</button>
      </nav>
    </>
  )
}

export default Navbar;