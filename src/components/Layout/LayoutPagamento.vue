<template>
    <div class="quadrado">
      <h2 class="titulo-pagamento">Preencha os dados</h2>
      <div class="container-formulario">
        <div class="linha">
          <!-- Campos do formulário (nome, telefone, email, etc.) -->
          <div class="item-input">
            <label for="name" class="campo-label">Nome:</label>
            <v-text-field
              id="name"
              v-model="name"
              outlined
              class="campo-input"
              :error-messages="nameErrorMessages"
              @blur="validateName"
              :placeholder="'Digite aqui'"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
          <div class="item-input">
            <label for="phone" class="campo-label">Telefone:</label>
            <v-text-field
              id="phone"
              v-model="phone"
              outlined
              class="campo-input"
              :error-messages="phoneErrorMessages"
              @blur="validatePhone"
              :placeholder="'Digite aqui'"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
          <div class="item-input">
            <label for="email" class="campo-label">E-mail:</label>
            <v-text-field
              id="email"
              v-model="email"
              outlined
              class="campo-input"
              :error-messages="emailErrorMessages"
              @blur="validateEmail"
              :placeholder="'Digite aqui'"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
          <div class="item-input">
            <label for="address" class="campo-label">Endereço:</label>
            <v-text-field
              id="address"
              v-model="address"
              outlined
              class="campo-input"
              :error-messages="addressErrorMessages"
              @blur="validateAddress"
              :placeholder="'Digite aqui'"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
        </div>
  
        <!-- Checkbox de forma de pagamento (lado a lado) -->
        <div class="item-checkbox">
          <label class="campo-label">Forma de pagamento:</label>
          <div class="checkbox-container">
            <v-radio-group v-model="paymentMethods.selected" row>
              <v-radio
                label="Pix"
                value="pix"
                class="campo-checkbox"
              ></v-radio>
              <v-radio
                label="Cartão"
                value="cartao"
                class="campo-checkbox"
              ></v-radio>
              <v-radio
                label="Dinheiro"
                value="dinheiro"
                class="campo-checkbox"
              ></v-radio>
            </v-radio-group>
          </div>
        </div>
  
        <!-- Campos para dados do cartão (aparecem quando a opção Cartão é selecionada) -->
        <div v-if="paymentMethods.selected === 'cartao'">
          <div class="item-input">
            <label for="cardNumber" class="campo-label">Número do Cartão:</label>
            <v-text-field
              id="cardNumber"
              v-model="cardDetails.number"
              outlined
              class="campo-input"
              placeholder="Digite o número do cartão"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
          <div class="item-input">
            <label for="expiryDate" class="campo-label">Data de Validade:</label>
            <v-text-field
              id="expiryDate"
              v-model="cardDetails.expiryDate"
              outlined
              class="campo-input"
              placeholder="MM/AA"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
          <div class="item-input">
            <label for="cvv" class="campo-label">CVV:</label>
            <v-text-field
              id="cvv"
              v-model="cardDetails.cvv"
              outlined
              class="campo-input"
              placeholder="Digite o CVV"
              :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
            ></v-text-field>
          </div>
        </div>
  
        <!-- Botões -->
        <div class="botoes-container">
          <v-btn to="/" @click="handleCancel">Cancelar</v-btn>
          <v-btn @click="handleProceed">Prosseguir</v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Dados do formulário
  const name = ref('');
  const phone = ref('');
  const email = ref('');
  const address = ref('');
  const paymentMethods = ref({
    selected: null // Valor único representando a forma de pagamento selecionada
  });
  const cardDetails = ref({
    number: '',
    expiryDate: '',
    cvv: ''
  });
  
  // Função de navegação
  const router = useRouter();
  
  const handleProceed = () => {
    // Verifica a forma de pagamento selecionada e faz o redirecionamento adequado
    if (paymentMethods.value.selected === 'pix') {
      router.push('/QRcode'); // Redireciona para o QR Code caso Pix
    } else {
      router.push('/pedidoFinalizado'); // Redireciona para Pedido Finalizado para Cartão ou Dinheiro
    }
  };
  
  // Função de cancelamento
  const handleCancel = () => {
    // Adicione aqui a lógica de cancelamento, se necessário
    console.log('Cancelado');
  };
  
  // Funções de validação (adapte conforme necessário)
  const validateName = () => { /* Validação do nome */ };
  const validatePhone = () => { /* Validação do telefone */ };
  const validateEmail = () => { /* Validação do email */ };
  const validateAddress = () => { /* Validação do endereço */ };
  </script>
  
  <style scoped lang="sass">
  /* Seus estilos aqui */
  
  .quadrado
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    margin: 20px auto
    padding: 20px
    max-width: 1200px
    width: 100%
    height: auto
    background-color: #f0f0f0
    box-shadow: 2px 4px 10px rgba(0,0,0,0.2)
    position: relative
    border-radius: 6px
  
  .titulo-pagamento
    color: black
  
  .campo-label
    color: black
  
  .container-formulario
    display: flex
    flex-direction: column
    gap: 10px
    width: 50%
    padding: 10px
    box-sizing: border-box
  
  .linha
    display: flex
    flex-direction: column
    gap: 10px
    justify-content: flex-start
    align-items: flex-start
    flex-wrap: wrap
  
  .item-input
    flex: 1
    min-width: 250px
    width: 100%
  
  .campo-input, .descri-input
    width: 100%
    font-size: 14px
    border-radius: 4px
    border: 1px solid #ccc
    padding: 10px
    transition: border-color 0.3s ease, box-shadow 0.3s ease
    background-color: #fafafa
    color: #2a3d73
  
  .item-checkbox
    display: flex
    flex-direction: column
    gap: 5px
    margin-top: 20px
  
  .checkbox-container
    display: flex
    gap: 10px
    flex-wrap: wrap
  
  .campo-checkbox
    background-color: transparent
    color: #2a3d73
    font-size: 14px
  
  .botoes-container
    display: flex
    gap: 10px
    margin-top: 20px
    justify-content: flex-start
    width: 100%
  </style>
  