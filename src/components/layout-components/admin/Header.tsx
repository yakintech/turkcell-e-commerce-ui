import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseService } from '../../../api/baseService'
import { AuthContext, AuthContextType } from '../../../context/AuthContext'

function Header() {

  const {logout: adminlogout} = useContext(AuthContext) as AuthContextType

  const logout = () => {
    baseService.post("logout", {})
    .then(res => {
      adminlogout()
    })
  }

  return <>
    <ul style={{ display: "flex", justifyContent: "space-between" }}>
      <li><Link to={"/admin"}>Dashboard</Link></li>
      <li><Link to={"/admin/products"}>Products</Link></li>
      <button onClick={logout}>Logout</button>
    </ul>

  </>
}

export default Header