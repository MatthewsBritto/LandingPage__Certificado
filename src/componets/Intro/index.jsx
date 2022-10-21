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
            <p>O Certificado Digital foi criado para validar operações via internet, para poder assegurar quem esta executando aquele procedimento.</p>
            <button type="submit">CTA</button>
          </TextContainer>
        </SectionContainer>

      </IntroContainer> ) ;
}
