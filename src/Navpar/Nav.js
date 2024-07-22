import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div style={{display:'flex'}}>
        <header>
        <h1>IronCoreX </h1>
    </header>
          <nav>
       
        {/* <a href="#">Home</a> */}
        <Link style={{paddingleft:"20%"}} to='/Class'>Classes</Link>
        <Link style={{paddingleft:"20%"}} to='/Getstart'>Blogs</Link>
        <Link style={{paddingleft:"20%"}} to='/Aboutus'>AboutUs</Link>
        <Link style={{paddingleft:"20%"}} to='/Profile'>Profile</Link>
        <Link style={{paddingleft:"20%"}} to='/Main'>CalorieTracker</Link>
        <Link style={{paddingleft:"20%"}} to='/cont'>Contact</Link>
        <Link style={{paddingleft:"20%"}} to='/card'>Shop</Link>
        <Link style={{paddingleft:"20%"}} to='/Login'>Login</Link>
        
    </nav>
    </div>
  )
}

export default Nav
  