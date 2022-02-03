import axios from "axios";

const getItemsSearch = async (query) => {
    try {
        const response = await axios.get(`http://localhost:9000/api/items?q=${query}`);
        return {
            data: response.data.items,
            isError: false,
            err: null
        }
    } catch (error) {
        return {
            data: [],
            isError: true,
            err: error
        }
    }
}

export default getItemsSearch;