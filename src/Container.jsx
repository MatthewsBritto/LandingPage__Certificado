import { useState } from 'react'
import './main'
import { MainContainer, CenterContainer} from './styles'
import FormInfos from './componets/FormInfos';
import Hero from './componets/Hero';
import Coments from './componets/Coments';
import WhatsBtn from './componets/WhatsBtn';
import Intro from './componets/Intro';

function Container() {


  return (
    <MainContainer>
      <CenterContainer>
        <Intro/>
        <FormInfos/>
        <Hero/> 
        <Coments/>
        <WhatsBtn/>          
      </CenterContainer>
    </MainContainer>
  )
}

export default Container
