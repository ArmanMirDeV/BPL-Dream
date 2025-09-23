import React from 'react';
import navImg from '../../assets/logo.png'
import dollerImg from '../../assets/doller.png'

const Navbar = () => {
    return (
        <div>
            

      <div className="navbar max-w-[1200px] mx-auto" >
        <div className="flex-1">
          <a className=" text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span>60000000000 </span>
          <span className='mx-2' > Coin</span>
          <img className='h-[30px] w-[30px]' src={dollerImg} alt="" />
        </div>
      </div>
        </div>
    );
};

export default Navbar;