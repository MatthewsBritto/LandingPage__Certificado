import styled from 'styled-components';

export const HeroContainer = styled.div`

    background:linear-gradient(145deg, #2f73ca 0%,#030242 100%);   
    
    width: 100%;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    /* 
    ${(props) => props.mudacor && css`
        background-color:blue;
        
    `} */

    .logo{
        width:300px
    }
    
    div {

        display:flex;
        flex-direction:column;
        align-items:center;

        width: 100%;
        //height:50%;
        margin: 0 auto;
        text-align: center;
        /* padding-top: 10rem; */
        justify-content:center;
        
        
        h3{
            padding: 0rem .6rem;
            color:#fff;
            font-size:2rem;
            line-height:4rem;
            grid-area: h3;
        }
        
        img{
            max-width: 75%;
            padding: 1.5rem 0;
            grid-area:img;
        }

        button{
           
            padding: 1.2rem 2rem;
            letter-spacing: .1rem;
            font-size: 1rem;
            font-weight:bold;
            text-transform: capitalize;
            grid-area:btn;
            margin-top:2rem;
            background: #02b0f9;
            color: white;
            border:none;
            border-radius: 10px;
        }
    }
  
    @media (min-width: 768px){




        div {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows:80% 20%;
        grid-column-gap:2rem;
        justify-items:center;
        align-items:center;
        grid-template-areas: "h3 img" "btn img";

        padding:5rem 1.2rem;

        img {
            max-width: 100%;
            height:100%;
            
        }

        button{
            width:60%;
            margin-top:0;
        }

    }

}

@media (min-width: 1024px){
    div {

        padding:9rem 4rem;

        img{
            
        }

        h3{
            font-size:2.2rem;
            line-height:4.3rem;
            max-width: 60%;
            text-align:center;
        }
        button{
            width:40%;
            margin-top:1.5rem;
        }
    }   
}
`;
