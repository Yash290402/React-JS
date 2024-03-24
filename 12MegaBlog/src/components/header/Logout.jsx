import React from 'react';
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logout(props) {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>

        </div>
    );
}

export default Logout;