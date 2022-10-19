import styled from 'styled-components';

export const HeroContainer = styled.div`

    background:linear-gradient(145deg, #2f73ca 0%,#030242 100%); 
    width:100%;
    height:100vh;  
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;

    .logo{
        max-width: 50%;
        height: 50%;
        padding-right: 6rem;
        
    }

    div{
        max-width:50%;
        height: 50%;
        
        padding-left:5rem ;
        color: white;
        

        h3 {
            font-size: 3rem;
            line-height: 65px;
            span{
                font-size: 3rem;
                color: #D4AF37;
                font-weight: bolder;
                
            }
        }

        p {
            
            padding: 2rem 0;
            font-size: 1.2rem;
            line-height: 30px;
            max-width: 80%;
        }

    }


`;
