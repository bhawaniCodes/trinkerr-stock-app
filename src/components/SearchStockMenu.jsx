import React from "react";
import {
    MainStockCard,
    GridCard,
    NSESpan,
    NameSpan,
    PriceSpan,
    DiscountSpan,
    AddButton,
} from "./Styled/SearchStockMenuStyle";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const SearchStockMenu = ({ el, handleAdd }) => {
    const name = el[0].split(":")[0];
    const [, todayStockPrice, yesterdayStockPrice] = el;
    let positive = todayStockPrice > yesterdayStockPrice ? true : false;
    const percentage = (
        ((todayStockPrice - yesterdayStockPrice) /
        yesterdayStockPrice)
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
                    <AddButton onClick={() => handleAdd(name)}> + </AddButton>
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
