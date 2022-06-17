import styled from 'styled-components';

export const EventDetails = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: space-between;
margin-left: 1rem;
padding: 1.25rem;

p {
    font-size: 1rem;
    margin-top: 0.5rem;
    max-width: 80%;
    white-space: wrap;
    overflow: hidden;
    text-overflow: string;
    text-align: justify;
}

span{
    display: inline-block;
    margin-top: 0.875rem;
    font-size: 1rem;
    margin-right: 1rem;  
}

`;
export const DateBox = styled.div`
width:6rem;
height:7rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

background-color: var(--gray-100);
border: 1px solid var(--gray-500);
border-radius: 1rem;
padding: 1rem;

strong{ 
    color: var(--gray-800);
    font-family: Lexend, sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25rem;
    padding:0.2rem;

}

span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--gray-500);
}
`;
