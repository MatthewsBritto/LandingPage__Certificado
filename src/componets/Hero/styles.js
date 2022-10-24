import styled from 'styled-components';
import img from '../../assets/bd_hero.jpg';

export const HeroContainer = styled.div`

    background:linear-gradient(270deg,#001531 0%,#00adbe 50%,#001531 100%); 
    width:100%;
    height:100vh;  
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
    color:black;

    
    

    .logo{
        opacity: 1;
        /* max-width: 50%; */
        height: 40%;
        padding-right: 6rem;
        z-index: 2;
    }
    div {
        
        max-width:50%;
        height: 50%;
        
        padding-left:6rem ;
        color: #fff;
        z-index: 12;
        

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
            z-index: 2;
            padding: 2rem 0;
            font-size: 1.2rem;
            line-height: 40px;
            max-width: 80%;
        }

        
    }    
    @media (max-width:768px) {
        
        .logo{
            padding-right: 0;
        }
        
        div{

            p{
                
                padding-top: 1rem 0;
                max-width: 100%;
            }
        }
    }
    @media (max-width:425px){

        flex-direction: column;

        .logo{
            height: 20%;
        }

        div {
            height: 75%;
            padding-left: 0;

            h3,span{
                font-size: 2rem !important;
                line-height: 45px;
                padding: 1.2rem 0;

            }
            p{
                
                font-size: 1.2rem;
                line-height: 35px;
            }
        }
    }

`;
export const ImgFundo = styled.img`

    background-image:url(${img});
    background-size:cover;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: .1;
    

`;

export const Container = styled.div`

    position: relative;
    width: 100%;
    height: 100vh;
    


`;