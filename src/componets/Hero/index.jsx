import React from 'react';
import logo from '../../assets/logo_outro.png';
import logo2 from '../../assets/Logo.png';

 import { HeroContainer,Container,ImgFundo } from './styles';

function Hero() {

  return (
   <Container>
      <ImgFundo src={'../../assets/bd_hero.jpg'}/>
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
            
         </HeroContainer>
   </Container>
  )
}

export default Hero;