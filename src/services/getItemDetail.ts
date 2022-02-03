import axios from "axios";

const getItemDetail = async (id) => {
    try {
        const response = await axios.get(`http://localhost:9000/api/items/${id}`);
        return {
            data: response.data.item,
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

export default getItemDetail;