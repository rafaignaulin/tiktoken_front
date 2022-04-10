import styled from 'styled-components';


export const Container = styled.div`

  background: var(--white);
  height: 6.5rem;

  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  border-bottom: 1px solid var(--gray-100);
  
  h1 {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);
  }
  
  .textfield {
    flex:1;
    margin-left: 45%;
    margin-right: 1%;
  }

  span {
    display:block;
    margin-left: auto;
    text-transform: capitalize;
    font-size: 20px;
    padding: 0.5rem;
  }
    
  
`;
