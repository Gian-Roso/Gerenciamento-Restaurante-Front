// src/stores/cardapioStore.js
import { defineStore } from "pinia";

export const useCardapioStore = defineStore("cardapioStore", {
  state: () => ({
    itensSelecionados: [],
  }),
  actions: {
    adicionarItens(itens) {
      this.itensSelecionados = itens; // Atualiza os itens selecionados
    },
    limparItens() {
      this.itensSelecionados = []; // Limpa os itens
    },
  },
});
