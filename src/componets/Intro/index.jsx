import React from 'react';
import logo2 from '../../assets/Logo.png';
import certiImg from '../../assets/batatinha.png';
import { IntroContainer } from './styles';

export default function Intro() {

  return ( <IntroContainer>    
      <header>
        <img src= {logo2}/>
      </header>
      <section>
        <img src= {certiImg}/>
        <h2>Certificado Digital</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button type="submit">CTA</button>
      </section>

      </IntroContainer> ) ;
}
