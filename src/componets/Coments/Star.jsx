import {StarsContainer} from './styles';
import {TiStar} from 'react-icons/ti';

import React from 'react';

// import { Container } from './styles';

function Stars() {


  return (
      <StarsContainer>
         <TiStar/>
         <TiStar/>
         <TiStar/>
         <TiStar/>
         <TiStar/>
      </StarsContainer>

  );
}

export default Stars;