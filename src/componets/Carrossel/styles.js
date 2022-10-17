import styled from 'styled-components';

export const CarrosselContainer = styled.div`

    height:100vh;
    width:100%;

    section{
        width:100%;
        height:100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;


        div{
            position: relative;
            width: 100%;
            text-align: center;
            /* overflow:hidden; */
            

            img{
                
            }
            
            
            &::after {
                content: '>';
                font-size: 4rem;
                position: relative;
                bottom:5rem;
                cursor: pointer;
                
            }
            &::before {
                content: '<' ;
                font-size: 4rem;
                position: relative;
                bottom:5rem;
                cursor: pointer;
    
            }

            
        }
        
        p { 
            font-size: 1.2rem;
            padding:1rem 1rem 2rem ;
            text-align: center;
            line-height:2.5rem;
            width:60%
        }

       
           
        
    }
  
`;
