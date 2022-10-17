import styled from 'styled-components';

export const ListIdContainer = styled.ul`

  width:100%;
            display: flex;
            align-items: center;
            justify-content:center;
            margin-left: .3rem;


            li{
                height: 1.5rem;
                width:1.3rem;
                border:2px solid black;
                border-radius: 50%;
                list-style:none;
                margin-right: .8rem;
            }
            li.active{
                background-color:#2f73ca;
            }
`;
