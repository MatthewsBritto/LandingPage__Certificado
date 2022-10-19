import styled from 'styled-components';

export const ContainerComents = styled.div`

    height:100vh;
    width:100%;
    display:flex;
    background:linear-gradient(45deg, #2f73ca 0%,#030242 100%); 

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
                background-color: #295872;
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
                            padding:.5rem 0;
                            
                        }

                        p{
                            padding: .8rem 0;
                            line-height: 1.5rem;
                        }
                        span{
                        
                            
                            
                        
                        }

                    }
            }
        }
    
    }
  
`;

