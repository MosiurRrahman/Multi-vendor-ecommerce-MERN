import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { getNavs } from '../navigation';
import { BiLogOutCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
const Sidebar = ({showSidebar, setShowSidebar}) => {
  const [allNav, setAllNav] = useState([]);
  const {role} = useSelector(state=>state.auth)
  const {pathname} = useLocation();
  useEffect(()=>{
    const navs = getNavs(role);
    setAllNav(navs)
  },[])
  return (
    <div className=''>
    <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}></div>
      <div className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
          <div className=' h-[ 70px ] flex justify-center items-center '>
              <Link to="/" className=' w-[180px] h-[50px]'>
              <img src="/images/logo.png" alt="" />
              </Link>
          </div>
          <div className=" px-[16px] pt-5">
          
          <ul>
            {
              allNav.map((n,i)=><li key={i}>
                <Link className={`${pathname === n.path ?"bg-slate-600 shadow-indigo-500/30 text-white duration-500":"text-[#d0d2d6] font-normal duration-200" } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4  transition-all w-full mb-1`} to={n.path}>
                <span>{n.icon}</span>
                <span>{n.title}</span>
                </Link>
              </li>)
            }
            <li>
              <button className='text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap[12px] hover:pl-4  transition-all w-full mb-1   '>
                <span><BiLogOutCircle/></span>
                <span>
                  Logout
                </span>
              </button>
            </li>
          </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar