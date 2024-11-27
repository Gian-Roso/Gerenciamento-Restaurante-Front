import { getCardapio } from '@/services/cardapioService';
import axios from 'axios';

const url = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL: url,
});

export const getCardapio = async (cardapio) => {
    try {
        const response = await axiosInstance.get(`/cardapio`, { params: cardapio });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o cardápio:", error);
        throw error;
    }
};

