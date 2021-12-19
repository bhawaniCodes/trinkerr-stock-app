import styled from "styled-components";

const MainStockCard = styled.div`
    height: 6em;
    width: 95%;
    margin: auto;
    z-index: 1;
    :hover {
        background: #fafafa;
    }
`;
const AddButton = styled.button`
    width: 4rem;
    height: 3.5rem;
    z-index: 2;
    right: 10rem;
    position: absolute;
    background: #ffffff;
    color: #777777;
    font-size: 40px;
    font-weight: 0;
    border: 1px solid #dbdbdb;
    display: none;
    border: 4px;

    :hover {
        background: #e5fbf8;
    }
`;

const RemoveButtom = styled.button`
    width: 4rem;
    height: 3.5rem;
    z-index: 2;
    right: 10rem;
    position: absolute;
    background: #ffffff;
    color: #ff0000;
    font-size: 40px;
    font-weight: 0;
    border: 1px solid #dbdbdb;
    display: none;
    border: 4px;
    padding-top: 0.5rem;

    :hover {
        background: #fff2f2;
    }
`;
const GridCard = styled.div`
    position: relative;
    height: 6em;
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #f3f3f3;

    :hover>:nth-child(4) {
        display: block;
        cursor: pointer;
    }
`;
const NSESpan = styled.span`
    height: 2em;
    width: 2.5em;
    padding: 0.3em;
    background: #fafafa;
    font-size: 22px;
    font-weight: 500;
    color: #898989;
    border-radius: 5px;
`;
const NameSpan = styled.span`
    font-size: 22px;
    font-weight: 700;
    color: ${(props) => (props.positiveValue ? "#35C7C3" : "#E7592E")};
`;
const PriceSpan = styled.span`
    font-size: 22px;
    font-weight: 700;
    text-align: right;
    color: ${(props) => (props.positiveValue ? "#35C7C3" : "#E7592E")};
`;
const DiscountSpan = styled.span`
    font-size: 22px;
    text-align: right;

    & > :nth-child(1) {
        padding-right: 0.2em;

        & > :nth-child(1) {
            padding-top: 0.2em;
            color: ${(props) => (props.positiveValue ? "#35C7C3" : "#E7592E")};
        }
    }
`;

export {
    MainStockCard,
    GridCard,
    NSESpan,
    NameSpan,
    PriceSpan,
    DiscountSpan,
    AddButton,
    RemoveButtom,
};
