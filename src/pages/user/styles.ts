import styled from "styled-components";
import { MenuGroup } from "@atlaskit/menu";

export const Menu = styled(MenuGroup)`
    background-color: var(--gray-50);
    border-radius: 1rem;
    margin: 1rem;
`;

    export const Principal = styled.div`
    
    background-color:var(--gray-100);
    margin: 3rem;
    border-radius: 1rem;
    
    display: flex;
    align-items:center;
    justify-content: space-around;
    `;
    
    export const Configurations = styled.div`
    width:70%;

    background-color: var(--white);
    margin: 1rem;
    padding: 1rem;
    border-radius:1rem;

    h2{
        padding: 1rem;
        border-bottom: 1px solid var(--gray-100)
    }
    
    `
    export const ConfigUser = styled.div`
    background-color: var(--gray-100);
    width: 70%;
    margin: 2rem;
    padding:1rem;
    
    border-radius:1rem;

    `
    export const UserInfo = styled.div`
    margin: 0 0 0 2rem ;
        display: flex;
        align-items:center;
        h3 {
            margin-left: 2rem;
        }
    `
    export const Box = styled.div`
        display:flex;
        flex-direction:column;

        background-color: var(--gray-50);
        margin: 1rem;
        padding:1rem;

        h3, span {
            padding: 0 0 1rem 1rem;
        }

        border-radius:1rem;
    `

export const Field = styled.div`
        display:flex;
        flex-direction: column;
        position:relative;
        Button{
            position: absolute;
            width: 100%;
            height: 4rem;
            border-radius: 0.5rem;
        }
        `;