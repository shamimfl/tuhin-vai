import React from 'react';

import img from '../../imges/logo.jpg'

const Header = () => {
    return (
        <div className='bg-slate-500 text-white p-2'>
            <span className='flex justify-center'>
                <img className='h-16 rounded-full' src={img} alt="" />
                <h1 className='text-3xl font-bold text-center p-3'>Hootstory</h1>
            </span>
        </div>
    );
};

export default Header;