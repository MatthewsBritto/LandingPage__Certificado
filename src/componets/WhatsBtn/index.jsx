import React from 'react';
import {FaWhatsapp} from 'react-icons/fa'; 
// import {FaCar} from 'react-icons/'; 


import { WhatsBtnContainer } from './styles';



function WhatsBtn() {
  return (
   <WhatsBtnContainer>
      <FaWhatsapp/>
   </WhatsBtnContainer>
  )
};

export default WhatsBtn;