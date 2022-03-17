import styled from 'styled-components';

const Grid = styled.div`
  background-color: orange;
display: grid;
grid-template-columns: 1fr;
max-width: 90vw;
width: 100%;
margin: 0 auto;

/* img {
    width: 50%;
} */
main {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    
}
`;

export default Grid;