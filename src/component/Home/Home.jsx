import React from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Home.css'

function Home() {
  return (
    <div className='image-home zoom-out'>
      <div className='navbar'>
        <div className='left-section'>
          <div className='logo'>
            <MdOutlineRestaurantMenu />
          </div>
          <span className='find-txt-home'>Find The Best</span>
        </div>
        <div className='right-section'>
          <span className='home-section'>Home</span>
          <span className='about-section'>About</span>
          <span className='profile-section'>Profile</span>
          <span className='profile-section'>Shop</span>
          <span className='profile-section'>Blog</span>

        </div>
      </div>
      <div className='center-text-home'>
      <div>Explore city flavors</div>
      <div>categorized for your cravings!</div>
      <div className='find-dish'>
        Here you can find the best food dishes.
      </div>
      <div className='input-container'>
  <input className='input-home-one' type='search' placeholder="What you want to find" />
  {/* <input className='input-home-search' type='search' placeholder="Categories" /> */}
  <select className='input-home-search'>
  <option value='' disabled selected hidden className='placeholder-option'>Categories</option>
  <option value='category1'>Indian</option>
  <option value='category2'>Italian</option>
  <option value='category3'>South Indian</option>
  {/* Add more options as needed */}
</select>

</div>
      </div>
<h1 className='we-want-to'>We want to make you feel like home</h1>

       </div>
  );
}

export default Home;
