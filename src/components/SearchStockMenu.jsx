import React from "react";
import {
    MainStockCard,
    GridCard,
    NSESpan,
    NameSpan,
    PriceSpan,
    DiscountSpan,
    AddButton,
    RemoveButtom,
} from "./Styled/SearchStockMenuStyle";
import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineDelete,
} from "react-icons/ai";

export const SearchStockMenu = ({ el, handleAdd, handleRemove }) => {
    const name = el[0].split(":")[0];
    const [, todayStockPrice, yesterdayStockPrice] = el;
    let positive = todayStockPrice > yesterdayStockPrice ? true : false;
    const percentage = (
        (todayStockPrice - yesterdayStockPrice) /
        yesterdayStockPrice
    ).toFixed(4);
    return (
        <>
            <MainStockCard>
                <GridCard>
                    <NameSpan positiveValue={positive}>{name}</NameSpan>
                    <PriceSpan positiveValue={positive}>
                        {todayStockPrice}
                    </PriceSpan>
                    <NSESpan>NSE</NSESpan>
                    {el[3] === undefined ? (
                        <AddButton onClick={() => handleAdd(name)}>+</AddButton>
                    ) : (
                        <RemoveButtom onClick={() => handleRemove(name)}>
                            <AiOutlineDelete />
                        </RemoveButtom>
                    )}

                    <DiscountSpan positiveValue={positive}>
                        <span>
                            {positive ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </span>
                        <span>{percentage}%</span>
                    </DiscountSpan>
                </GridCard>
            </MainStockCard>
        </>
    );
};
