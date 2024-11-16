import React from 'react';
import './sidebar.css';

const Aside = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90;
      const position = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sidebar">
      <h1 className='text-white text-2xl'>Prodigy API</h1>
      <a className="active" onClick={() => handleScroll("allproducts")}>Get all Products</a>
      <a onClick={() => handleScroll("getsingleproducts")}>Get a single product</a>
      <a onClick={() => handleScroll("limitres")}>Limit results</a>
      <a onClick={() => handleScroll("sortres")}>Sort results</a>
      <a onClick={() => handleScroll("getincategory")}>Get in category</a>
      <a onClick={() => handleScroll("pagination")}>Pagination Result</a>
      <a onClick={() => handleScroll("specificfields")}>Select Specific Fields</a>
    </div>
  );
};

export default Aside;

