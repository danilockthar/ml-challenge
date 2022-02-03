import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import getItemsSearch from '../../services/getSearchItems';
import Spinner from '../ui/Spinner'
import ItemSearch from './ItemSearch';

const Wrapper = styled.div`
    display:grid;
    width:100vw;
    box-sizing:border-box;
    @media (min-width: 768px) {
        padding:0 9em;
    }
`

const Index = () => {

    let [searchParams] = useSearchParams();
    let searchQuery = searchParams.get("search");
    const [items, setItems] = React.useState<Array<any> | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (searchQuery) {
            setIsLoading(true)
            getItemsSearch(searchQuery).then(response => {
                if (!response.isError) {
                    setItems(response.data)
                    setIsLoading(false)
                }
            })
        }
    }, [searchQuery])

    return (
        <Wrapper>
            <p></p>
            {isLoading && <Spinner />}
            {items && items.length > 0 ? items.map((item) => {
                return (
                    <ItemSearch
                        key={item.id}
                        config={item}
                    />
                )
            }) : items && items.length === 0 ? (
                <p> No results</p>
            ) : null}
        </Wrapper>
    )
};

export default Index;
