import React from 'react';
import HomeImg from '../assets/EcommerceImg.png';
import { NavLink } from 'react-router-dom';
import docslogo from '../assets/docsicon.svg';
import githublog from '../assets/github2.png';

const Page1 = () => {
  return (
    <div className='flex justify-between items-center gap-[30px] py-[15.5rem] px-5 mx-auto max-w-[1200px]'>
      <div className='left flex flex-col justify-center gap-4 max-w-[600px]'>
        <h1 className='text-5xl'>Progidy API</h1>
        <p>Empowering Your E-commerce Platform with Seamless API Integration.</p>
        <div className='buttons mt-4 flex gap-5'>
          <NavLink to={"/docs"}>
            <button className='flex justify-center items-center gap-4 p-4 bg-black text-white border border-white rounded-sm'>
              Read Docs <img src={docslogo} alt="DocsLogo" className='w-[15px]'/>
            </button>
          </NavLink>
          <NavLink to={"https://github.com/Muzamil-26/MuzamilApi"}>
            <button className='flex justify-center items-center gap-4 p-4 bg-white text-black border border-black rounded-sm hover:bg-black hover:text-white transition-all duration-500'>
              View on Github <img src={githublog} alt="GitHubLogo" className='w-[15px] bg-white rounded-full'/>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="img right max-w-[600px]">
        <img src={HomeImg} alt="Ecommerce Img" className='w-full h-auto object-contain'/>
      </div>
    </div>
  );
};

export default Page1;
