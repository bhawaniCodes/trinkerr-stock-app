import React, { useState, useCallback, useEffect } from 'react';
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
import { StockCard } from './StockCard';
import debounce from 'lodash.debounce';
import data from '../Static/data';
import { SearchStockMenu } from './SearchStockMenu';


export const StockMain = () => { 
    const [searchInput, setSearchInput] = useState('');
    const [actualSearch, setActualSearch] = useState('');
    const [displaySearchList, setDisplaySearchList] = useState(false);
    const [searchArrData, setSearchArrData] = useState([]);
    const [displayArrData, setDisplayArrData] = useState([]);

    
    // Search & get Data with debouncing
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        fnDebounce(e.target.value);
    };

    const fnDebounce = useCallback(
        debounce((txt) => setActualSearch(txt), 500), []
    );

    useEffect(() => {
        getDataFromJson();
    }, [actualSearch])

    const getDataFromJson = () => { 
        let res = data.filter(
            (el) =>
                actualSearch.length > 2 ? 
                el[0]
                    .split(":")[0]
                    .toLowerCase()
                    .startsWith(actualSearch.toLowerCase()) : null
        );
        setSearchArrData(res);
        if (res.length > 0) setDisplaySearchList(true);
        else setDisplaySearchList(false);
    }

    // To Add the data
    const handleAdd = (name) => { 
        let addData = searchArrData?.filter((el) => el[0].split(":")[0] === name);
        setDisplayArrData([...displayArrData, ...addData]);
        alert('Stock detail added to list');
    }

    // To Remove the data
    const handleRemove = (name) => { 
        let addData = displayArrData?.filter(
            (el) => el[0].split(":")[0] !== name
        );
        setDisplayArrData(addData);
        alert("Stock detail removed from list");
    }

    // To remove search list
    const removeSearchList = () => { 
        setSearchInput('');
        setActualSearch('');
        setSearchArrData([]);
        setDisplaySearchList(false);
    }
    


    return (
        <>
            <MainContainer>
                <div>
                    <SearchContainer displaySearchList={displaySearchList}>
                        <SearchInputAboveDiv>
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
                            <SearchStockMenu el={el} handleAdd={handleAdd} />
                        ))}

                    {!displaySearchList && (
                        <div>
                            <UserNameDivMain>
                                <UserNameDiv>
                                    <div>Bhawani Shankar</div>
                                    <div>
                                        <AiOutlineEdit />
                                        <AiOutlineDelete />
                                    </div>
                                </UserNameDiv>
                            </UserNameDivMain>
                            {displayArrData.length > 0 &&
                                displayArrData?.map((el) => (
                                    <StockCard
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
}