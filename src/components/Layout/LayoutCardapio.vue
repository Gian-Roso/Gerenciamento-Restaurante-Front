<template>
    <div class="quadrado">
      <h2 class="campo-titulo">Cardápio</h2>
      <div class="container-cardapio">
        <div class="linha">
          <!-- Coluna 1 -->
          <div class="coluna">
            <!-- Pratos -->
            <div class="item-input">
              <label class="campo-label">Pratos:</label>
              <v-list
                outlined
                class="cardapio-input"
                :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
              >
                <v-list-item-group active-class="active-item">
                  <v-list-item class="linhas-itens" v-for="(item, index) in pratos" :key="index">
                    <v-list-item-content>
                      <v-checkbox
                        :label="item"
                        :value="item"
                        v-model="cardapio"
                      ></v-checkbox>
                      <div class="d-flex justify-end">
                        <p v-if="pratosValor[index]" class="valores">{{ pratosValor[index] }}</p>
                      </div>
                      <p v-if="pratosD[index]" class="descricao">{{ pratosD[index] }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
  
            <!-- Sobremesas -->
            <div class="item-input">
              <label class="campo-label">Sobremesas:</label>
              <v-list
                outlined
                class="cardapio-input linhas-itens"
                
                :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
              >
                <v-list-item-group active-class="active-item">
                  <v-list-item class="linhas-itens" v-for="(item, index) in sobremesas" :key="index">
                    <v-list-item-content>
                      <v-checkbox
                        :label="item"
                        :value="item"
                        v-model="cardapio"
                      ></v-checkbox>
                      <div class="d-flex justify-end">
                        <p v-if="sobremesasValor[index]" class="valores">{{ sobremesasValor[index] }}</p>
                      </div>
                      <p v-if="sobremesasD[index]" class="descricao">{{ sobremesasD[index] }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
  
            <!-- Lanches -->
            <div class="item-input">
              <label class="campo-label">Lanches:</label>
              <v-list
                outlined
                class="cardapio-input"
                :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
              >
                <v-list-item-group active-class="active-item">
                  <v-list-item class="linhas-itens" v-for="(item, index) in lanches" :key="index">
                    <v-list-item-content>
                      <v-checkbox
                        :label="item"
                        :value="item"
                        v-model="cardapio"
                      ></v-checkbox>
                      <div class="d-flex justify-end">
                        <p v-if="lanchesValor[index]" class="valores">{{ lanchesValor[index] }}</p>
                      </div>
                      <p v-if="lanchesD[index]" class="descricao">{{ lanchesD[index] }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </div>
  
          <!-- Coluna 2 -->
          <div class="coluna">
            <!-- Bebidas -->
            <div class="item-input">
              <label class="campo-label">Bebidas:</label>
              <v-list
                outlined
                class="cardapio-input"
                :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
              >
                <v-list-item-group active-class="active-item">
                  <v-list-item class="linhas-itens" v-for="(item, index) in bebidas" :key="index">
                    <v-list-item-content>
                      <v-checkbox
                        :label="item"
                        :value="item"
                        v-model="cardapio"
                      ></v-checkbox>
                      <div class="d-flex justify-end">
                        <p v-if="bebidasValor[index]" class="valores">{{ bebidasValor[index] }}</p>
                      </div>
                      <p v-if="bebidasD[index]" class="descricao">{{ bebidasD[index] }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
  
            <!-- Especiais -->
            <div class="item-input">
              <label class="campo-label">Especiais:</label>
              <v-list
                outlined
                class="cardapio-input"
                :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
              >
                <v-list-item-group active-class="active-item">
                  <v-list-item class="linhas-itens" v-for="(item, index) in especiais" :key="index">
                    <v-list-item-content>
                      <v-checkbox
                        :label="item"
                        :value="item"
                        v-model="cardapio"
                      ></v-checkbox>
                      <div class="d-flex justify-end">
                        <p v-if="especiaisValor[index]" class="valores">{{ especiaisValor[index] }}</p>
                      </div>
                      <p v-if="especiaisD[index]" class="descricao">{{ especiaisD[index] }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
  
            <!-- Drinks -->
            <div class="item-input">
              <label class="campo-label">Drinks:</label>
              <v-list
                outlined
                class="cardapio-input"
                :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
              >
                <v-list-item-group active-class="active-item">
                  <v-list-item class="linhas-itens" v-for="(item, index) in drinks" :key="index">
                    <v-list-item-content>
                      <v-checkbox
                        :label="item"
                        :value="item"
                        v-model="cardapio"
                      ></v-checkbox>
                      <div class="d-flex justify-end">
                        <p v-if="drinksValor[index]" class="valores">{{ drinksValor[index] }}</p>
                      </div>
                      <p v-if="drinksD[index]" class="descricao">{{ drinksD[index] }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            
          </div>
        </div>
      </div>
      <div class="d-flex justify-end">
        <router-link to="/pagamento" class="router-link">
          <v-btn class="botao_prosseguir">Prosseguir</v-btn>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  import { getCardapio } from '@/services/cardapioService';

  


  
  const cardapio = ref([]);
  const inputBgColor = '#fff';
  const inputTextColor = '#000';
  </script>
  
  <style scoped lang="sass">
  .quadrado 
    display: center
    flex-direction: column
    justify-content: center
    align-items: center
    margin: 20px auto
    padding: 20px
    max-width: 1200px
    width: 100%
    height: auto
    background-color: #f0f0f0
    box-shadow: 2px 4px 10px rgba(0,0,0,0.2)
    position: relative
    border-radius: 6px
  
  .campo-titulo
    text-align: center
    font-size: 28px
    font-weight: bold
    color: #000
    margin-bottom: 20px
  
  .campo-label
    color: black
    font-weight: bold
    font-size: 18px
    margin-bottom: 5px
  
  .container-cardapio
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: 40px
    width: 100%
    padding: 20px
    box-sizing: border-box
  
  .linha
    display: flex
    justify-content: space-between
    width: 100%
  
  .coluna
    display: flex
    flex-direction: column
    gap: 30px
    flex: 1
  
  .item-input
    max-width: 300px
    width: 100%
  
  .cardapio-input
    border: 1px solid #ccc
    padding: 10px
    border-radius: 8px
  
  .active-item
    background-color: #f5f5f5 !important

 
  .linhas-itens
    border-bottom: 1px solid #000
    &:last-child
      border-bottom: none

  .botao_prosseguir
    
    background-color: #ccc 
    box-shadow: 1px 2px 10px rgba(0,0,0,0.5)
    color: black

    &:hover
      background-color: rgba(100,5,30,1)
      color: white
      box-shadow: 2px 4px 10px rgba(100,5,50,1)
      transform: translate(10px)
  
  .valores
    font-size: 20px
    padding: 5px
    
  </style>
  