import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner'
import getItemDetail from '../../services/getItemDetail';
import { useGlobalState } from '../../context/GlobalContext';

const Index = () => {

    let { id } = useParams();
    const { setSearchValue } = useGlobalState();
    const [item, setItem] = React.useState<Record<string, any>>({});
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const currencyFormat = new Intl.NumberFormat('en-US');

    React.useEffect(() => {
        setSearchValue('')
    }, [])

    React.useEffect(() => {
        if (id) {
            setIsLoading(true)
            getItemDetail(id).then(response => {
                if (!response.isError) {
                    setItem(response.data)
                    setIsLoading(false)
                }
            })
        }
    }, [id])

    return (
        <Wrapper>
            <p></p>
            {isLoading && <Spinner />}
            {item.id && (
                <ItemWrapper>
                    <div>
                        <img className='img-product' src={item.picture} />
                    </div>
                    <div className='item-info-wrapper'>
                        <Typo size={14} color="#999999" spacing={16}> {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos </Typo>
                        <Typo size={24} color="#333333" spacing={32}>{item.title} </Typo>
                        <div className='price-wrapper'>
                            <h3 className='price-item'>$ <span>{currencyFormat.format(Number(item.price?.amount))}</span>  </h3>
                            <LittleDecimal> {item.price.decimals ?? '00'} </LittleDecimal>
                        </div>
                        <BuyButton className='buy-button'> Comprar</BuyButton>
                    </div>
                    <div>
                        <h2> Descripción del producto</h2>
                        {item.description}
                    </div>
                </ItemWrapper>
            )}
        </Wrapper>
    )
};

export default Index;

const Wrapper = styled.div`
    display:grid;
    width:100vw;
    box-sizing:border-box;
    font-family:Proxima-Nova;
    @media (min-width: 768px) {
        padding:0 9em;
    }
`

const ItemWrapper = styled.div`
    font-family:'Proxima Nova';
    display:grid;
    grid-template-columns:680px 1fr;
    width:100%;
    background-color:#FFFFFF;
    box-sizing:border-box;
    border-bottom:1px solid #EEEEEE;
    @media (min-width: 768px) {
        padding: 32px;
    }
    & .img-product{
        width:500px;
    }
    & .item-info-wrapper{
        padding:16px;
    }
    & .price-item{
        width:min-content;
        font-size:36px;
        color:#333333;
        margin:0 0 32px 0;
        font-weight:300;
        display:contents;
        & span{
            display:inline-block;
        }
    }
    & .price-wrapper{
        margin: 0 0 32px 0;
        display:grid;
        grid-template-columns:min-content min-content 20px;
    }
`

const BuyButton = styled.button`
    padding: 10px 75px;
    background-color: #3483FA;
    font-size:15px;
    font-weight:600;
    border-radius:4px;
    color:white;
    border:none;
    cursor:pointer;
`
const Typo = styled.p`
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    margin:0 0 ${props => props.spacing}px 0;
`

const LittleDecimal = styled.p`
margin: 5px 0 0 1px;

`