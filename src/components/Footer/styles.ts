import styled from 'styled-components';


export const Container = styled.div`

  background: var(--gray-100);
  height: 4rem;

  display: flex;
  flex-direction:row;
  align-items: center;
  padding 2rem 4rem;

  border-top: 1px solid var(--gray-100);
  
  h2 {
      font-size: 1rem;
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);
  }
  
  .contato{
      flex-direction:column;
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
    font-size: 1rem;
    padding: 0.5rem;
  }
    
  
`;
