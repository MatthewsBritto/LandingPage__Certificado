import React, {useCallback, useEffect, useState} from 'react';
import batatinha from '../../assets/batatinha.png';
import Reviews from '../../../utils/json/reviews.json';
import Stars from './Star';


import {ContainerComents,TitleSection} from './styles';



function Coments() {



  const [reviews,setReview] = useState([]);

  useEffect(()=>{
    
    attReview(2);

  },[])

  const attReview = useCallback((index) => {

    const review = Reviews.reviews;

    if(index === 1) {
      const objReview = review.slice(0,4);
      setReview(objReview);

    } else  {

      const objReview = review.slice(4,8);
      setReview(objReview);

    }  
  })  

  return (

   <ContainerComents>
     <section>
        <TitleSection>Sua satisfação é nossa prioridade!</TitleSection>
        <ul>

          {reviews.map((review) => {

              return (
                <li>
                  <div className='imgCard'>
                    <img src={batatinha} alt="batatinha" />
                  </div>
                  
                  <div className="infoCard">
                    <h4>{review.displayName}</h4>      
                    <p>{review.comment}</p>
                    <Stars/>
                  </div>
                </li>
              
            )})}

        </ul>
     </section>
     

   </ContainerComents>
  )
};

export default Coments;