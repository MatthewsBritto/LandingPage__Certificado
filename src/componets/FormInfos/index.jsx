import React, { useCallback, useEffect, useState } from 'react';
import info from '../../../utils/json/certificates.json'
import {FormInfosContainer, Type,ImgInfo} from './styles';


import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function FormInfos() {
  
  const [idcomp,setIdComp] = useState('7c6712ca-541e-4357-9663-2addf696410b');

  const [type,setType] = useState([]);

  const [selectedType,setSelectedType] = useState('');

  const [obj,setObj] = useState({});

  const [name,setName] = useState();

  
  useEffect(()=>{

    handleClick(idcomp);
  

  },[])

  const setActive = useCallback ((obj)=>{

    const objActive = obj.active;

    if(!objActive){
      obj.active = true;
  }
    
  })

  const handleClick = useCallback((id)=> { 

    setIdComp(id);
    setSelectedType(id);
    
    const obj = info.find(E => E.id === id);
    
  
    if(obj) {
      setObj(obj)
      setName(obj.name)
      setType(obj.type);
      
           

    } else {
      setType([]);
    
    }

  },[]);

  const settings = {

    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    variableWidth: true,
    variableHeight:true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow:3,
    slidesToScroll:3,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    arrows: true,
    adaptiveHeight: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
    ],
  };

  console.log(selectedType)
  return (

    <FormInfosContainer>

        <ul className='typesOp'>
          {info.map((modo)=> {

          console.log({active:selectedType===modo.id});
          
          return (
            <Type key={modo.id} active={selectedType === modo.id}>
              
                <a className='title' onClick={()=> handleClick(modo.id)}> {modo.title} </a>
              
            </Type>

          )})}
        </ul> 

      
      
      <section>
        <Slider {...settings}> 
            {type && type.map( (id)  =>  {
              return  ( 


                  <div key={type.id} >
                      
                        <h3>{name} {id.label}</h3>
                        <ImgInfo src={id.img}/>
                        <div className="infos">
                          <p>{id.description}</p>
                          <p>{id.tempo}</p>
                          <p className='price'>R$ {id.value},00</p>
                        </div>
                        <a>Saiba Mais</a>
                      
                  </div>

                )
              })
            }
        </Slider>
      </section>

      <article>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Accusantium nihil nesciunt sapiente ipsum! <br/>
          Modi, architecto provident excepturi voluptate magnam culpa soluta fugiat impedit</p>
      </article>
    </FormInfosContainer>
  );
}

export default FormInfos;