import {Link, useNavigate,Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { TbLogout } from "react-icons/tb";



const HomeNav = [
  { to : '/', text: 'หน้าหลัก' },
  { to : '/login', text: 'เข้าสู่ระบบ' },
  { to : '/register', text: 'ลงทะเบียน' },

]

const userNav = [
  { to : '/', text: 'รายการแจ้งซ่อมของคุณ' },
  { to : '/newrepair', text: 'แจ้งซ่อม' },
]

const adminNav = [
  { to : '/adminhome', text: 'รายกรแจ้งซ่อมทั้งหมด' },
  { to : '/tec', text: 'ข้อมูลช่าง' },

]




export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? (user.role === 'ADMIN' ? adminNav : userNav) : HomeNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-none">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl  ">
      <div className="avatar-group -space-x-6 rtl:space-x-reverse"> 
        <div className="bg-neutral text-neutral-content rounded-full w-12">
        <img className="mask mask-circle" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        </div>   
       {user?.role === 'ADMIN' && user?.id ? `${user.username} (${user.role})` : user?.id ? user.username : 'Gust'}
        {/* <br />
        {user?.id ? user.email : 'Gust'} */}
      </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}><TbLogout size={20}/></Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}
