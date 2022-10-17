import React from 'react';
import ListId from '../ListId'
import batatinha from '../../assets/batatinha.png';

import { CarrosselContainer } from './styles';

function Carrossel() {
  return (
   <CarrosselContainer>
     <section>

      <div>
      <img src={batatinha}/>
      </div>
      <p>Explicação Lorem ipsum dolor, sit amet consectetur adipisicing emp.</p>
      <ListId />
      </section>
   </CarrosselContainer>
  )
};

export default Carrossel;