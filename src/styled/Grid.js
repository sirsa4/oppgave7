import styled from 'styled-components';

const Grid = styled.div`

display: grid;
grid-template-columns: 1fr;
grid-template-rows: .1fr .1fr 2fr .11fr;
grid-template-areas: ${({theme})=>theme.grid.mobil.gridArea};
gap: .5rem;
max-width: 90vw;
width: 100%;
margin: 0 auto;

/* background-image: url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
        background-repeat: no-repeat;
        background-size: cover; */


@media only screen and (min-width: ${({theme})=>theme.grid.desktop.ipad}){
  
  
 
}

`;

export default Grid;