import React from 'react';
import beachVid from '../assets/dog.mp4';
import './Hero.css'
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = ({ sticky, nav }) => { // Pass sticky and nav as props
  return (
    <div className={`w-full h-screen relative ${sticky ? 'sticky' : ''} ${nav ? 'hidden' : ''}`}>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
             <h2 className='text-5xl mb-2'>Rescue, Rehabilitate, Rehome</h2>
         <h2 className='py-4 text-4xl'> Changing Lives Fur-ever!</h2>
        <div className='flex justify-center  items-center  mt-4'>
           <div>
              <Link to='/donate'><Button variant="contained" size='large'  color='secondary' sx={{padding:{sm:'12px 28px',xs:'8px 22px'},textTransform:'none',fontSize:{sm:'22px',xs:'18px'}, fontWeight:'700',color:'white'}}>Donate</Button></Link>
           </div>
           <div>
              <Link to='/adopt'><Button  variant="outlined" size='large' color='secondary' sx={{padding:{sm:'12px 28px',xs:'8px 22px'},textTransform:'none',fontSize:{sm:'22px',xs:'18px'}, fontWeight:'700'}}>Adopt me</Button></Link>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;
