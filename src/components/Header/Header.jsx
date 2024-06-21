import React from 'react'
import HeaderLogo from './HeaderLogo'

import UserIcons from './UserIcons'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <header className=' h-16 shadow-md'>
       <div className="container mx-auto h-full flex items-center px-4 justify-between">
     <HeaderLogo width={90} height={50}/>
     <SearchInput/>
     <UserIcons/>
     </div>
    </header>
  )
}

export default Header
