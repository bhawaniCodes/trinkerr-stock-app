import React from "react";
import {
    MainStockCard,
    GridCard,
    NSESpan,
    NameSpan,
    PriceSpan,
    DiscountSpan,
    RemoveButtom,
} from "./Styled/StockCardStyle";
import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineDelete,
} from "react-icons/ai";


export const StockCard = ({ el, handleRemove }) => {
    const name = el[0].split(":")[0];
    const [, todayStockPrice, yesterdayStockPrice] = el;
    console.log(
        "todayStockPrice, yesterdayStockPrice:",
        name,
        todayStockPrice,
        yesterdayStockPrice
    );
    let positive = todayStockPrice > yesterdayStockPrice ? true : false;
    const percentage = (
        (todayStockPrice - yesterdayStockPrice) /
        yesterdayStockPrice
    ).toFixed(4);
    return (
        <MainStockCard>
            <GridCard>
                <NameSpan positiveValue={positive}>{name}</NameSpan>
                <PriceSpan positiveValue={positive}>
                    {todayStockPrice}
                </PriceSpan>
                <NSESpan>NSE</NSESpan>
                <RemoveButtom onClick={() => handleRemove(name)}>
                    <AiOutlineDelete />
                </RemoveButtom>
                <DiscountSpan positiveValue={positive}>
                    <span>
                        {positive ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </span>
                    <span>{percentage}%</span>
                </DiscountSpan>
            </GridCard>
        </MainStockCard>
    );
};
