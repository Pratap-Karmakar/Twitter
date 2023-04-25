import React from "react";
import { BsBell, BsBookmark, BsTwitter } from "react-icons/bs";
import SidebarLink from "./SidebarLink";
import { AiFillHome, AiOutlineInbox, AiOutlineUser } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { HiOutlineClipboardList, HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import {CgAdd} from 'react-icons/cg'
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {

  const {data: session} = useSession();

  return (
    <div className="flex flex-col items-center md:items-start md:w-[180px] xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-400 pr-0 ">
      <div className="flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:ml-24">
        <BsTwitter className="text-white text-[34px]" />
      </div>
      <div className="space-y-1 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={AiFillHome} />
        <SidebarLink text="Explore" Icon={BiHash} />
        <SidebarLink text="Notification" Icon={BsBell} />
        <SidebarLink text="Message" Icon={AiOutlineInbox} />
        <SidebarLink text="Bookmark" Icon={BsBookmark} />
        <SidebarLink text="Lists" Icon={HiOutlineClipboardList} />
        <SidebarLink text="Profile" Icon={AiOutlineUser} />
        <SidebarLink text="Home" Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      <button className="hidden md:inline xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full md:w-28 md:h-10 md:text-sm md:ml-2 xl:ml-20 xl:w-40 xl:h-[40px] xl:text-lg font-bold hover:bg-[#1a8cd8]">Tweet</button>
      <button className="md:hidden xl:hidden text-[#1d9bf0] text-[30px] hover:text-[#1a8cd8]/90"><CgAdd/></button>

      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto md:hoverEffect xl:hoverEffect cursor-pointer xl:ml-20 xl:mr-16 px-4 py-2 md:-ml-0" onClick={()=>signOut('google')}>
        <img src={session?.user.image} alt="" className="w-10 h-10 md:h-6 md:w-6 xl:w-6 xl:h-6 rounded-full xl:mr-2.5"/>
        <div className="hidden xl:inline md:inline leading-5 md:text-xs md:pl-2">
          <h4 className="font-bold">{session?.user?.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


