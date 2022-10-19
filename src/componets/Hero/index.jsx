import React from 'react';
import logo from '../../assets/logo2.png';

 import { HeroContainer } from './styles';

function Hero() {

  return (
  <HeroContainer>
      
      <img src={logo} className='logo'/>
         <div>
            <h3>
               <span>Comodidade</span>, Praticidade e <span>Confiança</span>.
            </h3>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, eaque sapiente corrupti exercitationem similique assumenda laborum reiciendis alias optio magnam.
            </p>

         </div>
   </HeroContainer>)
}

export default Hero;