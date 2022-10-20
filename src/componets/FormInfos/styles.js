import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const FormInfosContainer = styled.div`
  
   
    background-color:#f5f5f5;
    height: 100vh;
    width:100%;
    color:black; 
   



    .typesOp{ 

        display:flex;
        align-items:center;
        justify-content:space-evenly;
        height:20%;
        width:80%;
        margin: .5rem auto;
        
    
    }

    article{
        width: 60%;
        margin:2rem auto;
        text-align: center;

        p{
            width: 100%;
            font-weight: bolder;
            font-size: 1rem;
            line-height: 2rem;
        }
    }

    section {
        height:55%;
        width:81%;
        color:white;
        padding:1rem;
        margin: 1rem auto;

        div{


            h3{
                font-weight: bolder;
                font-size:2rem;
                padding: 2rem 0;
                border-bottom: 1px solid white;
            }
            .infos{
                margin-top: 3.2rem;
            }
            p{
                font-size:1.2rem;
                padding:.7rem;
            }
            .price{
                font-weight: bolder;
                font-size:1.5rem;
                letter-spacing: .1rem;
                
                span{
                    color: #fac400;
                    font-size: 1.5rem;
                    font-weight: bolder;
                    padding-left: .5rem;
                }
            }
            a{
                padding: .8rem 1.2rem;
                margin: 1.2rem auto 0;
                display: block;
                width: 65%;
                background-color: #12a2d6;
                font-size: 1rem;
                font-weight: bolder;
                border-radius:10px;
                cursor:pointer;
                letter-spacing: .1rem;
                
                /* -webkit-box-shadow: 5px 4px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 5px 4px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 5px 4px 5px 0px rgba(0,0,0,0.75);
                 */

            }


        }
        



        @media (min-width: 768px){

            li{
                font-size: 2.3rem;
                padding: 0 1rem;
            }
        }




        /* carousel styles */

        .slick-slider {
            height: 100%;
            
        }

        .slick-dots{
            opacity: 1;
            padding-top: 3rem;
            color: white;
        }
        .slick-slide {
            background-color:#295872;
            text-align:center;
            width:250px;
            height:400px;
            margin-right:10px;
            margin-left:10px;
            border-radius:10px;
            

            -webkit-box-shadow: 5px 2px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 5px 2px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 5px 2px 5px 0px rgba(0,0,0,0.75);
        }        
    }


`;

export const Type = styled.li`

    list-style: none;
    a {
        min-width: 49%;
        height:95%;
        display: flex;
        align-items: center;
        justify-content: center;
        color:${props => props.active ? '#295872' :'#666666'};
        font-size: ${props=> props.active ?  '2.2rem' : '1.8rem'};    
        /* text-decoration: ${props=> props.active ? 'underline': 'none'}; */
        border-bottom: ${props=> props.active ?'4px solid #295872': 'none'};
        font-weight: bold;
        cursor: pointer;
        padding: .5rem 0;
            
    }    
    

`

// export const Infos = styled.section`

//     height:50%;
//     width: 100%;
//     background-color: green;
//     margin-top: 3rem;
//     display:flex;
//     justify-items: center;
//     align-items: center;
//     /* flex-wrap: wrap; */
//     overflow: hidden;
    

//     &::after{
//         content:'<';
//         position:absolute;
//         font-size:5rem ;
//         top:45%;
//         left: 2rem;
//         z-index: 2;
//     }
//     &::before{

//         content:'>';
//         position:absolute;
//         font-size:5rem ;
//         top:45%;
//         right: 2rem;
//         z-index: 2;
//     }

//     div {
//         height:90%;
//         min-width:25%;
//         background-color:red;
//         margin:2rem;
//         display:flex;
//         align-items:center;
//         flex-direction: column;
//         flex: 0 0 25%;

//         position: relative;
//         left: 6% ;

//         h3{
//             font-size: 2rem;
//             padding:1rem;
//         }
//         p{
//             padding:.8rem;
//         }
//         button{
//             padding:.5rem 1rem;
//             margin-top: 1rem;
//         }
        
//     }

//     @media (min-width: 768px){

//     li{
//             font-size: 2.3rem;
//             padding: 0 1rem;
//         }
//     }


// `