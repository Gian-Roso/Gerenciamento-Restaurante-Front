import axios from 'axios';

const url = 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: url,
});

export const getCardapio = async (cardapio) => {
  try{
  const response = await axiosInstance.get(`/Cardapio`, { params: cardapio });
  return response.data;
} catch (error) {
  console.error("Erro ao buscar o cardápio:", error);
  throw error; 
  }
};

export const postCardapio = async (cardapio) => {
  const response = await axiosInstance.post(`/Cardapio`, cardapio);
  return response.data;
};

export const putCardapio = async (id, cardapio) => {
  const response = await axiosInstance.put(`/Cardapio/${id}`, cardapio);
  return response.data;
};

export const deleteCardapio = async (id) => {
  const response = await axiosInstance.delete(`/Cardapio/${id}`);
  return response.data;
};
