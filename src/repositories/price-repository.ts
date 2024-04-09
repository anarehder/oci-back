import axios from "axios";

export async function getPriceRepository() {
    const response = await axios.get('https://apexapps.oracle.com/pls/apex/cetools/api/v1/products/');
    return response.data;
}