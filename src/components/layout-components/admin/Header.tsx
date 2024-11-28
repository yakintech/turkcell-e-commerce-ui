import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return <>
    <ul style={{display:"flex", justifyContent:"space-between"}}>
      <li><Link to={"/admin"}>Dashboard</Link></li>
      <li><Link to={"/admin/products"}>Products</Link></li>
    </ul>
  </>
}

export default Header