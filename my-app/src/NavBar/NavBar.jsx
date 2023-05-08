import React from 'react'
// import Gouls from '../Gouls/Gouls'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='navbar'>

<ol>
<li><Link to ={'/'}>Главная</Link></li>
<li><Link to ={'/winner'}>Победители</Link></li>
<li><Link to ={'/gouls'}>Голы</Link></li>
<li><Link to={'/team'}>Команды</Link></li>
<li><Link to={'/couch'}>Тренеры</Link></li>


</ol>


    </div>
  )
}
