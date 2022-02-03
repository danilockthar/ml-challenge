import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../SearchBar';

const Wrapper = styled.div`
    width:100vw;
    height:50px;
    background-color: #faf159;
    display:grid;
    grid-template-columns:auto 1fr;
    align-items:center;
    box-sizing:border-box;
    padding:0 1em;
    & .logo-img{
        justify-self:end;
    }
    @media (min-width: 768px) {
        padding:0 9em;
    }
`

const LogoWrapper = styled.div`
    display:grid;
    padding:0 1em 0  0;
    @media (min-width: 768px) {
    }
`

const Index = () => {
    return (
        <Wrapper>
            <Link to={"/"}>
                <LogoWrapper>
                    <img className='logo-img' src="/Logo_ML.png" alt='Logo de MercadoLibre' />
                </LogoWrapper>
            </Link>
            <SearchBar />
        </Wrapper>
    )
};

export default Index;