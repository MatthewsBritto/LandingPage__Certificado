import styled from 'styled-components';
import imgIntro from '../../assets/bd_intro2.jpg';


export const IntroContainer = styled.div`

  width:100%;
  height:87vh;
  background:url(${imgIntro});
  background-color: #001c30;
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
        
        top: -15px;
        width: 40%;
        
      }
    }
  

`;

export const SectionContainer = styled.section`

  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
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

      width: 50%;
      height: 100%;
      /* margin-bottom: 1.2rem; */
      /* background-color:#295872; */
      padding-top: 20%;

      

      
      h2{

        padding: 1rem 0;
        font-size: 2.5rem;
        font-weight: bold;
        color: #fac400;
        
      }
      p {

        padding: 1rem 0;
        font-size: 2rem;
        line-height:2.5rem;
        max-width: 70%;
        color: #fff;
        margin: 0 auto;
      }

      button{
        display:block;
        width: 30%;
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
    padding-top: 45%;
    display: block;
    text-align: left;
    width: 65%;

    h2{
      font-size: 2rem;
      padding: 2rem 0;
    }

    p{
      font-size: 1.5rem;
      line-height: 2rem;
      padding: 0;
    }

    button{
      width: 50%;
      margin-top: 5rem;
    }
}


`;

export const LogoContainer = styled.header`

    
    text-align: center;
    min-width: 100%;
    height: 10%;
    margin: 0 auto;
    z-index:2;
    position: absolute;
  
    .logo{
      max-width:25%
    }
    @media (max-width: 425px){
      .logo{
        max-width:100%;
      }
    }

`

