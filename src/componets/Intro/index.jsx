import React from 'react';
import logo2 from '../../assets/Logo.png';
import certiImg from '../../assets/certificado.png';
import { IntroContainer,SectionContainer,TextContainer,LogoContainer } from './styles';

export default function Intro() {

  return ( 
      <IntroContainer>    
        <LogoContainer>
          <img src={logo2} className='logo'/>
        </LogoContainer>
        <SectionContainer>
          <img src= {certiImg}/>
          <TextContainer>
            <h2>Certificado Digital</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa libero explicabo qui neque, blanditiis eaque tenetur ipsam provident accusamus rerum voluptatem fugit a odit ex. Delectus, vero sunt. Asperiores, reiciendis!</p>
            <button type="submit">CTA</button>
          </TextContainer>
        </SectionContainer>

      </IntroContainer> ) ;
}
