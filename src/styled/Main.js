import styled from "styled-components";

export const Main = styled.main`
/*   background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-wrap: wrap; */



  @media only screen and (min-width: ${({theme})=>theme.dekstop}){
  
    background-color: red;
    display: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
`;
