import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

interface Props {
    config: {
        id: string;
        picture?: string;
        title?: string;
        price?: {
            currency: string;
            amount: string | number;
            decimals: string | null | number;
        };
        city?: string;
        condition?: string;
        address?: string;
        free_shipping: boolean;
    }
}

const ItemSearch: React.FC<Props> = (props) => {
    const { picture, address, price, title, id, free_shipping } = props.config;
    let navigate = useNavigate();

    const currencyFormat = new Intl.NumberFormat('en-US');

    const goToProduct = () => {
        navigate(`/items/${id}`)
    }
    return (
        <Wrapper onClick={goToProduct}>
            <Picture src={picture} title={title} />
            <WrapperInfo>
                <h4 className='price-tag'>
                    $ {currencyFormat.format(Number(price?.amount))}
                    {free_shipping && <img
                        className='free-shipping-img'
                        src="/assets/free_shipping.png"
                        alt="Free shipping"
                        title='Envío gratis'
                    />}
                </h4>
                <p className='title-tag'> {title} </p>
            </WrapperInfo>
            <WrapperStateName>
                <p className='city-product'> {address} </p>
            </WrapperStateName>
        </Wrapper>
    )
};

export default ItemSearch;

const Wrapper = styled.div`
    font-family:'Proxima Nova';
    display:grid;
    grid-template-columns:auto 1fr 160px;
    width:100%;
    background-color:#FFFFFF;
    box-sizing:border-box;
    border-bottom:1px solid #EEEEEE;
    cursor:pointer;
    @media (min-width: 768px) {
        padding: 16px;
    }
    
`
const Picture = styled.img`
    width:180px;
    height:180px;
    border-radius:4px;
`
const WrapperStateName = styled.div`
    padding: 0 16px;
    width:auto;
    display:grid;

    justify-content:left;
    & .city-product{
        font-size:12;
        color:#999999;
    }
`
const WrapperInfo = styled.div`
    padding:16px;
    & .price-tag{
        margin: 0 0 20px 0;
        font-size:24px;
        color:#333333;
        font-weight:normal;
    }
    & .title-tag{
        margin:0;
        font-size:18px;
        color:#666666;
    }
    & .free-shipping-img{
        padding: 0 6px;
        width:16px;
    }
`