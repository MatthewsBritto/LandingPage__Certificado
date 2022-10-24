import React from 'react';
import batatinha from '../../assets/batatinha.png';
import {FaClock,FaLock,FaUserCheck} from 'react-icons/fa'

import { DifsContainer,DifsList,DifsItem } from './styles';

function Difs() {
  return (
      <DifsContainer>
         
            
            <DifsList>


               <DifsItem>
                  <h3><FaUserCheck/></h3>
                  <div>
                     <h4>Prático</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi similique doloribus odio eius magni.</p>
                  </div>
               </DifsItem>
               <DifsItem>
                  <h3><FaClock/></h3>
                  <div>
                     <h4>Rapido</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi similique doloribus odio eius magni.</p>
                  </div>
               </DifsItem>
               <DifsItem>
                  <h3><FaLock/></h3>
                  <div>
                     <h4>Seguro</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi similique doloribus odio eius magni.</p>
                  </div>
               </DifsItem>

            
            </DifsList> 
      </DifsContainer>
  );
}

export default Difs;