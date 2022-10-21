import styled from 'styled-components';
import imgIntro from '../../assets/bd_intro.jpg';

export const DifsContainer = styled.section`

   height: 100vh;
   width:100%;
   background-color:#001531; 
   display: flex;
   justify-content:center;
   align-items:center;


`;

export const DifsList = styled.ul`
   
   
   width: 95%;
   display: flex;
   align-items: center;
   justify-content:center;
   flex-wrap: wrap;  
   
   
   `

export const DifsItem = styled.li`


   height: 45%;
   width: 30%;
   /* border: 2px solid black; */
   flex:0 0 30%;
   list-style: none;
   padding: .5rem 1.2rem;
   background-color:#295872 ;
   margin: .4rem;
   border-radius: 10px;
   border:1px solid #00adbe;

   h3{
      font-size: 3rem;
      font-weight: bold;
      padding-top: 2.5rem;
      color: #f4f4f4;
      
   }
   
   div{
      width: 80%;
      height: 80%;
      padding: 1rem 0;
      
      h4{

         font-size:1.4rem;
         padding: 1rem 0;
         color: #fac400;
      }
      p{
         font-size: 1.2rem;
         line-height:1.5rem;
         font-weight:bolder;
         /* text-align: justify; */
         color: white;
      }
   }

`

export const DifsImg = styled.section`
   
   
   width: 40%;
   height: 70%;
         img{
            width: 100%;
            height: 100%;
            
         }
   /* background-color:red; */
`