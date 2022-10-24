import styled from 'styled-components';

export const ContainerComents = styled.div`

    height:100vh;
    width:100%;
    display:flex;
    background-color: #f5f5f5;

    section {
        width: 90%;
        height: 100%;
        margin: auto;

        ul {

            margin-top: 5rem;
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;

            li {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex: 0 0 45%;
                height: 14rem;
                border-radius: 20px;
                color: white;
                background:linear-gradient(270deg,#001531 0%,#00adbe 50%,#001531 100%); 
             

                -webkit-box-shadow: 15px 14px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 15px 14px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 15px 14px 5px 0px rgba(0,0,0,0.75);
                
            
                    .imgCard {
                        
                        max-width: 25%;
                        
                        img{

                            width: 100%;
                            height: 100%;
                            border:2px solid white;
                            border-radius: 50%;

                        }
                        @media (max-width:425px) {
                            
                            max-width:15%;
                            
                        }
                    }

                    .infoCard {
                        width: 60%;
                       
                        align-items: center ;

                        h4 {
                            font-size: 1.2rem;
                            padding:.8rem 0;
                            
                        }

                        p{
                            padding: .8rem 0;
                            line-height: 1.5rem;
                            font-weight: bold;
                        }
                        @media (max-width:425px) {
                            
                            width:80%;
                            
                            h4{
                                padding:.4rem 0;
                            }

                            p{
                                width: 100%;
                            }
                            
                        }
                    }
            }
        }
        @media (max-width:768px) {

            width: 100%;

            li {
                width: 50%;
            }
        }
        @media (max-width:425px) {


            ul {

                margin-top: 0;
                
            }

            li{
                flex: 0 0 100% !important;
                height: 11rem !important;
                margin-top: 1.2rem;
            }
           
        }
    
    }
  
`;


export const StarsContainer = styled.span`

    display: flex;
    width: 100%;
    height: 20%;
        svg {
            color:#fac400;
            margin-left: 10px;
            font-size: 1.2rem;
        }
    
`
export const TitleSection = styled.h2`

        color:#fac400;
        font-size: 3rem;
        text-align: center;
        padding: 2rem 0;

        @media (max-width:425px) {

            font-size:2rem;
            padding:1rem 0;
            
        }


`