import React, { useState, useCallback, useEffect } from "react";
import uuid from "react-uuid";
import {
    MainContainer,
    SearchContainer,
    SearchInputAboveDiv,
    UserNameDiv,
    UserNameDivMain,
    FooterDiv,
} from "./Styled/StockMainStyled";
import {
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineFolderAdd,
    AiOutlineClose,
} from "react-icons/ai";
import { StockCard } from "./StockCard";
import debounce from "lodash.debounce";
import data from "../Static/data";
import { SearchStockMenu } from "./SearchStockMenu";

export const StockMain = () => {
    const [searchInput, setSearchInput] = useState("");
    const [actualSearch, setActualSearch] = useState("");
    const [displaySearchList, setDisplaySearchList] = useState(false);
    const [searchArrData, setSearchArrData] = useState([]);
    const [displayArrData, setDisplayArrData] = useState([]);
    const [sortName, setSortName] = useState("");

    // Search & get Data with debouncing
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        fnDebounce(e.target.value);
    };

    const fnDebounce = useCallback(
        debounce((txt) => setActualSearch(txt), 500),
        []
    );

    useEffect(() => {
        getDataFromJson();
    }, [actualSearch]);

    const getDataFromJson = () => {
        let res = data.filter((el) =>
            actualSearch.length > 2
                ? el[0]
                      .split(":")[0]
                      .toLowerCase()
                      .startsWith(actualSearch.toLowerCase())
                : null
        );
        setSearchArrData(res);
        if (res.length > 0) setDisplaySearchList(true);
        else setDisplaySearchList(false);
    };

    // To Add the data
    const handleAdd = (name) => {
        let addData = searchArrData?.filter(
            (el) => el[0].split(":")[0] === name
        );
        addData[0][3] = true;
        setDisplayArrData([...displayArrData, ...addData]);
        alert("Stock detail added to list");
    };

    // To Remove the data
    const handleRemove = (name) => {

        let addData = [];
        for (let i = 0; i < displayArrData.length; i++) {
            if (displayArrData[i][0].split(":")[0] === name) {
                displayArrData[i].pop();
                addData.push(displayArrData[i]);
            } else {
                addData.push(displayArrData[i]);
            }
        }
        setDisplayArrData(addData);

        let updatedData = addData?.filter((el) => el[0].split(":")[0] !== name);
        setDisplayArrData(updatedData);
    };

    // To Remove all the data
    const handleRemoveAll = () => {
        if (displayArrData.length > 0) {
            if (
                window.confirm(
                    "Are you sure, Do you want to remove all stock details"
                )
            ) {
                 let addData = [];
                 for (let i = 0; i < displayArrData.length; i++) {
                     if (displayArrData[i].length > 3) {
                         displayArrData[i].pop();
                         addData.push(displayArrData[i]);
                     } else {
                         addData.push(displayArrData[i]);
                     }
                 }
                 setDisplayArrData(addData);
                setDisplayArrData([]);
            }
        } else {
            alert("Please add stock first");
        }
    };

    // To remove search list
    const removeSearchList = () => {
        setSearchInput("");
        setActualSearch("");
        setSearchArrData([]);
        setDisplaySearchList(false);
    };

    // To sort data
    const handleSort = (e) => {
        setSortName(e.target.value);
        if (e.target.value === "name") {
            let sortData = displayArrData.sort();
            setDisplayArrData(sortData);
        } else if (e.target.value === "currentPrice") {
            let sortData = displayArrData.sort((a, b) => a[1] - b[1]);
            setDisplayArrData(sortData);
        }
    };

    return (
        <>
            <MainContainer>
                <div>
                    <SearchContainer displaySearchList={displaySearchList}>
                        <SearchInputAboveDiv
                            style={{
                                border:
                                    searchInput === ""
                                        ? "3px solid #f3f3f3"
                                        : "3px solid #3fa9ff",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search stocks..."
                                value={searchInput}
                                onChange={handleSearch}
                            />
                            {searchInput && (
                                <AiOutlineClose onClick={removeSearchList} />
                            )}
                        </SearchInputAboveDiv>
                    </SearchContainer>
                    {displaySearchList &&
                        searchArrData?.map((el) => (
                            <SearchStockMenu
                                key={uuid()}
                                el={el}
                                handleAdd={handleAdd}
                                handleRemove={handleRemove}
                            />
                        ))}

                    {!displaySearchList && (
                        <div>
                            <UserNameDivMain>
                                <UserNameDiv>
                                    <div>Bhawani Shankar</div>
                                    <div>
                                        <select
                                            required
                                            name="Sort"
                                            onChange={handleSort}
                                        >
                                            <option disabled selected>
                                                Sort By
                                            </option>
                                            <option value="name">Name</option>
                                            <option value="currentPrice">
                                                Current Price
                                            </option>
                                        </select>
                                        <AiOutlineDelete
                                            style={{ cursor: "pointer" }}
                                            onClick={handleRemoveAll}
                                        />
                                    </div>
                                </UserNameDiv>
                            </UserNameDivMain>
                            {displayArrData.length > 0 &&
                                displayArrData?.map((el) => (
                                    <StockCard
                                        key={uuid()}
                                        el={el}
                                        handleRemove={handleRemove}
                                    />
                                ))}
                        </div>
                    )}
                </div>
            </MainContainer>
            <FooterDiv>
                <div>1</div>
                <div>
                    <span>
                        <AiOutlineFolderAdd />
                    </span>
                    <span>Create</span>
                </div>
            </FooterDiv>
        </>
    );
};
