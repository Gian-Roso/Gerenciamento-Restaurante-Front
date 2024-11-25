import { getCardapio } from '@/services/cardapioService';
import axios from 'axios';

const url = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL: url,
});

export const getCardapio = async (cardapio) => {
    try {
        const response = await axiosInstance.get(`/Cardapio`, { params: cardapio });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o cardápio:", error);
        throw error;
    }
};

