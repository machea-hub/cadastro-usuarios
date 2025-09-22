import styled from "styled-components";

export const Container = styled.div`
    background: #181f36;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    min-height: 100vh;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 30px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;                
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 380px;
    gap: 10px;

    h3{
        color: #fff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p{
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5;
    }
`

export const AvatarUser = styled.img`
    height: 80px
`