import React from 'react'

const SidebarLink = ({text, Icon}) => {
  return (
    <div className='text-[#d9d9d9] flex items-center justify-center xl:justify-start md:text-sm xl:text-xl space-x-3 hoverEffect px-4 py-2 w-fit'>
        <Icon/>
        <span className='hidden md:inline xl:inline'>{text}</span>
    </div>
  )
}

export default SidebarLink