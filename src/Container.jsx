import { useState } from 'react'
import './main'
import { MainContainer, CenterContainer} from './styles'
import FormInfos from './componets/FormInfos';
import Hero from './componets/Hero';
import Carrossel from './componets/Carrossel';
import WhatsBtn from './componets/WhatsBtn';


function Container() {


  return (
    <MainContainer>
      <CenterContainer>
        <FormInfos/>
        <Hero/> 
        <Carrossel/>
        <WhatsBtn/>          
      </CenterContainer>
    </MainContainer>
  )
}

export default Container
