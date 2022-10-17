import React from 'react';
import logo from '../../assets/logo2.png';
import heroimg from '../../assets/herotest.jpg';

 import { HeroContainer } from './styles';

function Hero() {
  return (
  <HeroContainer>
      <img src={logo} className='logo'/>
      <div>
         <h3>
            Lorem ipsum dolor sit amet consectetur
         </h3>
         <img src={heroimg}/>

         <button type="submit">batatinha</button>
      </div>
   </HeroContainer>)
}

export default Hero;