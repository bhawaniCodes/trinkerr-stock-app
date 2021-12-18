import styled from "styled-components";
const MainContainer = styled.div`
    width: 55%;
    margin: auto;
    border: 3px solid #f3f3f3;
    min-height: 90vh;
`;
const SearchContainer = styled.div`
    margin: auto;
    height: 8rem;
    display: flex;
    border-bottom: ${(props) => props.displaySearchList ? "none" : "3px solid #f3f3f3"};
`;

const SearchInputAboveDiv = styled.div`
    margin: auto;
    border: 3px solid #d9d9d9;
    width: 90%;
    height: 4.5em;
    padding: 0.3em;
    display: flex;

    input {
        border: none;
        outline: none;
        width: 90%;
        height: 100%;
        font-size: 29px;
        color: #000000;
        padding-left: 1rem;

        &::placeholder {
            color: black;
        }
    }
    & > :nth-child(2) {
        font-size: 40px;
        display: inline-block;
        margin-top: 0.5rem;
        color: #242424;
        /* display: none; */
    }
`;

const UserNameDivMain = styled.div`
    height: 8em;
    border-bottom: 3px solid #f3f3f3;
`;

const UserNameDiv = styled.div`
    margin: auto;
    padding: 0.7em 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 35px;
    font-weight: 700;

    & > :nth-child(2) {
        & > :nth-child(1) {
            margin-right: 1em;
        }
        & > :nth-child(2) {
            color: #E7592E;
            margin-right: 1em;
        }
    }
`;

const FooterDiv = styled.span`
    width: 55%;
    margin:auto;
    margin-bottom: 0px;
    bottom: 0;
    height: 4em;
    background: gray;
    display: flex;
    justify-content: space-between;
    

    & > :nth-child(1) {
        width
    }
`;

export {
    MainContainer,
    SearchContainer,
    SearchInputAboveDiv,
    UserNameDiv,
    UserNameDivMain,
    FooterDiv,
};
