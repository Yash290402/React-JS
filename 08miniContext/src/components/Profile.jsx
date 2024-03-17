import React,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile(props) {
    const { user } = useContext(UserContext)
   if(!user) return <div>please login</div>

   return <div>welcome {user.username}</div>
}

export default Profile;