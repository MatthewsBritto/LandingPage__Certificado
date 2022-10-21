import styled from 'styled-components';

export const ContainerComents = styled.div`

    height:100vh;
    width:100%;
    display:flex;
    background-color: #f5f5f5;

    section {
        width: 90%;
        height: 80%;
        margin: auto;

        ul {

            margin-top: 5rem;
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            li {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex: 0 0 40%;
                min-height: 14rem;
                border-radius: 20px;
                color: white;
                background:linear-gradient(270deg,#001531 0%,#00adbe 50%,#001531 100%); 
                margin: 0 1.5rem;

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
                    }

                    .infoCard{
                        width: 60%;
                        height: 100%;
                        

                        h4 {
                            font-size: 1.2rem;
                            padding:.2rem 0;
                            
                        }

                        p{
                            padding: .8rem 0;
                            line-height: 1.5rem;
                            font-weight: bold;
                        }
                    

                    }
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

        color: #001531;
        font-size: 3rem;
        text-align: center;

`