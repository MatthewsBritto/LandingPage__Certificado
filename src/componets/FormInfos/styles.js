import styled from 'styled-components';

export const FormInfosContainer = styled.div`
  
  background:linear-gradient(145deg, #2f73ca 0%,#030242 100%); 
    height: 100vh;
    width:100%;
    color:white;    

    ul { 

        display:flex;
        align-items:center;
        justify-content:space-evenly;
        height:20%;
        width:100%;

        li{
            list-style: none;
        }
        h3{
            
            a{
                font-size:2rem;
                cursor: pointer;
                
            }    
        }
    }


`;


export const Infos = styled.section`

    height:50%;
    width: 100%;
    background-color: green;
    margin-top: 3rem;
    display:flex;
    justify-items: center;
    align-items: center;
    /* flex-wrap: wrap; */
    overflow: hidden;
    

    &::after{
        content:'<';
        position:absolute;
        font-size:5rem ;
        top:45%;
        left: 2rem;
        z-index: 2;
    }
    &::before{

        content:'>';
        position:absolute;
        font-size:5rem ;
        top:45%;
        right: 2rem;
        z-index: 2;
    }

    div {
        height:90%;
        min-width:25%;
        background-color:red;
        margin:2rem;
        display:flex;
        align-items:center;
        flex-direction: column;
        flex: 0 0 25%;

        position: relative;
        left: 6% ;

        h3{
            font-size: 2rem;
            padding:1rem;
        }
        p{
            padding:.8rem;
        }
        button{
            padding:.5rem 1rem;
            margin-top: 1rem;
        }
        
    }

    @media (min-width: 768px){

    li{
            font-size: 2.3rem;
            padding: 0 1rem;
        }
    }


`