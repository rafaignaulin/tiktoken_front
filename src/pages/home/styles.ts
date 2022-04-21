import styled from 'styled-components';

export const Events = styled.div`
    padding: 5rem;

    h1 {
        font-size: 3rem;
        color: var(--gray-600);
        font-family: Lexend, sans-serif;
        margin-bottom: 4rem;
        
        padding-bottom:1rem;
        border-bottom: 1px solid var(--gray-500);
    }

    `;
export const TrendingEvents = styled.div`
    ul{
        margin: 1rem 5rem;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }

    li{
        background: var(--white);
        border: 1px solid var(--gray-100);

        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        
        img {
            object-fit: auto;
            max-width: 100%;
            height: 50%;
            border-radius:1rem;
            radius:1.5rem;
            padding:0.2rem;
        }
        a{  
            margin: 2rem 0 0 2rem;
            color: var(--gray-600);
            font-family: Lexend, sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            text-decoration: none;
            &:hover{
            text-decoration: underline;
            }
        }
        }
    }
`;

export const EventDetails = styled.div `
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
        margin-right: rem;  
    }

    `;
export const DateBox = styled.div`
    width:6rem;
    height:6rem;

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
        margin-top: 0.5rem;
        font-size: 1rem;
        color: var(--gray-500);
    }
`;