import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header className='header'>
            <NavLink to="threejs_play/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">AH</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='threejs_play/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    About
                </NavLink>
                <NavLink to='threejs_play/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}
