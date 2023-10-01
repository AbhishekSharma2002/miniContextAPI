import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  // if there is no user.
  if(!user) return <div>Please login</div>
  
  // if there is user.
  return <div>Welcom {user.username}</div>
}

export default Profile