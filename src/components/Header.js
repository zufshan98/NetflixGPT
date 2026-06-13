import React from 'react'

const Header = () => {
  return (
    <div className='w-full absolute z-10 px-32 py-2 bg-gradient-to-b from-black flex justify-between items-center'>

      <img className='w-48 h-20' 
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>

      <div className='flex items-center justify-center gap-3 px-10'>
        <button className='w-52 h-9 bg-black/50 border border-gray-400 border-[0.5] border-gray-200 text-white rounded-md text-lg'>English</button>
        <button className='w-20 h-9 bg-red-600 rounded-md text-white font-bold'>Sign In</button>
      </div>

    </div>
    
  );
};

export default Header;
