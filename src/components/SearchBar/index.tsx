import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../context/GlobalContext';

const Index = () => {

    const { searchValue, setSearchValue } = useGlobalState()
    let navigate = useNavigate();

    const inputOnChange = ({ target: { value } }) => {
        setSearchValue(value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchProduct();
        }
    }

    const searchProduct = () => {
        if (searchValue.length > 0) navigate(`/items?search=${searchValue}`)
    }

    return (
        <Bar>
            <input className='input-search' placeholder='Nunca dejes de buscar' value={searchValue} onKeyDown={handleKeyDown} onChange={inputOnChange} />
            <div className='wrapper-icon' onClick={searchProduct}>
                <img src="/ic_Search.png" className='search-icon' alt='Icono de lupa' />
            </div>
        </Bar>
    )
};

export default Index;


const Bar = styled.div`
    width:100%;
    height:35px;
    background-color:white;
    position:relative;
    display:grid;
    grid-template-columns: 1fr 35px;
    align-items:center;
    & .input-search {
        font-family:Proxima Nova;
        padding:0 10px;
        color:#333333;
        font-size:18px;
        height:100%;
        background-color:none;
        outline:none;
        border:none;
    }
    & .wrapper-icon{
        box-sizing: border-box;
        height:100%;
        display:grid;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        background-color:#8080801c;
        & .search-icon{
            
        }
    }
    
`