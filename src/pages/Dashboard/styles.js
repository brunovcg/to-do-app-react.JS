import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 38px;
`

export const InputContainer = styled.form`
    flex:1;
    margin-top: 32px;
    padding: 0 38px;
    section{
        display: flex;
        > div{
            max-width:80%;
            flex:1;
            margin-right:16px;
        }

        button {
            max-width: 260px;
            height: 60px;
            margin: 0;
        }
    }
`

export const TasksContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        margin-top: 16px;
        margin-right: 32px;
    }

`

export const MyLogout = styled.button`
width: 100px;
height: 30px;
margin: 16px;
background-color: var(--white);
color: var(--orange);
font-weight: bold;
border: 1px solid var(--orange);
border-radius: 8px;
:hover {
    background-color: var(--orange);
    color: var(--white);
}

`