import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-wrap: wrap;
 /*  background-color: ${({theme})=>theme.bg}; */



  @media only screen and (min-width: ${({theme})=>theme.grid.desktop.ipad}){
  
   /*  background-color: ${({theme})=>theme.bg2}; */
    display: grid;
    grid-template-columns: repeat(3, .3fr);
    grid-template-areas: ${({theme})=>theme.grid.desktop.gridArea};
   
}
`;
