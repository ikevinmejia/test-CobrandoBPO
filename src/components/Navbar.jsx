import React from 'react'
import {FiLogOut} from 'react-icons/fi'
import { getAuth } from 'firebase/auth';

const Navbar = () => {
    const auth = getAuth()

    const logout = () => {
        auth.signOut()
    }

  return (
    <div className='Navbar-container'>
        <h2>Logout</h2>
        <button onClick={logout}>
        <FiLogOut size={30} color='#a73636'/>
        </button>
    </div>
  )
}

export default Navbar