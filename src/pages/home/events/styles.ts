import styled from 'styled-components';

export const Main = styled.div`
    height: 46rem;
    border-radius: 20px;
    margin: 3rem 23rem;

    background: var(--gray-100);

`;

export const Title = styled.div`
    padding: 1rem;
    background: var(--white);
    border-radius: 1rem 1rem 0 0;
    text-align: center;

`;
export const Principal = styled.div`
    height: 90%;
    display: flex;
    flex-direction: row;
`;
export const Description = styled.div`
    background: var(--gray-500);
    border-radius: 0 0 0 1rem;
    width: 40%;
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    
    color: var(--white);
    
    p {
        margin-top: 1rem;
        max-width: 90%;
        white-space: wrap;
        overflow: hidden;
        text-overflow: string;
        text-align: justify;
    }

    span{
        display: inline-block;
        margin-top: 0.875rem;
    }

    img {
        object-fit: cover;
        width: 90%;
        height: 50%;
        border-radius: 0.875rem;
    }

`;
export const Tickets = styled.div`
    width: 90%;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    justify-content: space-around;
`;

export const TicketType = styled.div`
    background: var(--gray-50);
    border-radius: 1rem;
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    margin-top: 2rem;
`;

export const QuantityTicket = styled.div`
    
`;

export const TicketTotal = styled.div`
    padding: 1rem;
    display: flex;
    align-items: space-between;
`;
