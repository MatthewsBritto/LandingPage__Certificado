import styled from 'styled-components';
import imgIntro from '../../assets/bd_intro.jpg';


export const IntroContainer = styled.div`

  width:100%;
  height:87vh;
  background:url(${imgIntro});
  /* background-color: #001c30; */
  background-repeat: no-repeat;
  background-size:cover;


    
  img{
      width: 35%;
      position: relative;
      top: -55px;
    }
    @media (max-width: 768px){
  
        
        img{
          top: -30px;
        }
    
    }
    @media (max-width: 425px){

      
      img {
        height: 150%;
        top: -15px;
        width: 40%;
        
      }
    }
  

`;

export const SectionContainer = styled.section`

  display: flex;
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  text-align: center;

    
    img{
      
      height: 50%;
     
      
    }
    @media (max-width: 768px){

      display: block;
      text-align: center;

      img {
        height: 30%;
        margin: 2.8rem 0 ;
      }
    }

    @media (max-width: 425px){

      display: block;
      text-align: center;

      img {
        height: 30%;
        margin: 2rem 0 ;
      }
    }
  
`;
export const TextContainer= styled.div`

      width: 35%;
      height: 55%;
      margin-bottom: 1.2rem;
      background-color:#295872;
      padding: 1rem;
      border-radius: 12px;
      border:1px solid #00adbe;
      
       -webkit-box-shadow: 15px 10px 10px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 15px 10px 10px 0px rgba(0,0,0,0.75);
        box-shadow: 15px 10px 10px 0px rgba(0,0,0,0.75);
                
      
      h2{

        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: bold;
        color: #fac400;
        
      }
      p {

        padding: 1rem 0;
        font-size: 1.2rem;
        line-height:2rem;
        max-width: 70%;
        color: #fff;
        margin: 0 auto;
      }

      button{
        display:block;
        width: 50%;
        padding: .7rem;
        border-radius: 10px;
        border: none;
        color: white;
        background-color: #12a2d6 ;
        font-weight: 700;
        margin:.6rem auto;

    }
    @media (max-width: 768px){
  
      margin: 0 auto;
      width: 50%;
      height: 50%;
      
      h2 {
        
        font-size: 1.6rem;
        padding: .3rem 0;
      }
      p{
        text-align:left ;
        font-size: 1.2rem;
        line-height:2rem;
        font-weight: 400;
        max-width: 95%;
        margin: 0 auto;
      }

    }
    @media (max-width: 425px){

    display: block;
    text-align: center;
    width: 65%;

    p{
      line-height: 1.4rem;
    }

    img {
      height: 30%;
      margin: 2.8rem 0 ;
    }
}


`;

export const LogoContainer = styled.header`

    
    text-align: center;
    min-width: 100%;
    height: 10%;
    margin: 0 auto;
    z-index:10;
  
    .logo{
      max-width:25%
    }
   

`

