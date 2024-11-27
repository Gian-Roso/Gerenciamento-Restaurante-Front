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
            <v-radio label="Pix" value="pix" class="campo-checkbox"></v-radio>
            <v-radio label="Cartão" value="cartao" class="campo-checkbox"></v-radio>
            <v-radio label="Dinheiro" value="dinheiro" class="campo-checkbox"></v-radio>
          </v-radio-group>
        </div>
      </div>
  
      <!-- Exibição do valor total calculado -->
      <div class="valor-total">
        <p><strong>Total do Pedido:</strong> R$ {{ calcularTotal }}</p>
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
            :error-messages="cardNumberErrorMessages"
            @blur="validateCardNumber"
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
            :error-messages="expiryDateErrorMessages"
            @blur="validateExpiryDate"
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
            :error-messages="cvvErrorMessages"
            @blur="validateCvv"
            placeholder="Digite o CVV"
            :style="{ backgroundColor: inputBgColor, color: inputTextColor }"
          ></v-text-field>
        </div>
      </div>
  
      <!-- Botões -->
      <div class="botoes-container">
        <v-btn to="/" @click="handleCancel">Cancelar</v-btn>
        <!-- Desabilitar o botão se houver campos faltando -->
        <v-btn :disabled="!isFormValid" @click="handleProceed">Prosseguir</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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

// Erro de validação (vazio inicialmente)
const nameErrorMessages = ref([]);
const phoneErrorMessages = ref([]);
const emailErrorMessages = ref([]);
const addressErrorMessages = ref([]);
const cardNumberErrorMessages = ref([]);
const expiryDateErrorMessages = ref([]);
const cvvErrorMessages = ref([]);

// Definindo a variável de total calculado (com base no cálculo do cardápio)
// Aqui você vai importar ou conectar com o cálculo real feito no cardápio.
const calcularTotal = computed(() => {
  // Supondo que o valor total seja vindo de uma lógica externa (do componente de cardápio)
  // Exemplo: O total pode vir de um `store` ou de outro componente
  return 150.00; // Este valor seria dinamicamente calculado no seu código
});

// Função de navegação
const router = useRouter();

// Função de validação do formulário
const isFormValid = computed(() => {
  return name.value && phone.value && email.value && address.value && paymentMethods.value.selected && (
    paymentMethods.value.selected !== 'cartao' ||
    (cardDetails.value.number && cardDetails.value.expiryDate && cardDetails.value.cvv)
  );
});

const handleProceed = () => {
  if (isFormValid.value) {
    // Verifica a forma de pagamento selecionada e faz o redirecionamento adequado
    if (paymentMethods.value.selected === 'pix') {
      router.push('/QRcode'); // Redireciona para o QR Code caso Pix
    } else {
      router.push('/pedidoFinalizado'); // Redireciona para Pedido Finalizado para Cartão ou Dinheiro
    }
  }
};

// Função de cancelamento
const handleCancel = () => {
  // Adicione aqui a lógica de cancelamento, se necessário
  console.log('Cancelado');
};

// Funções de validação (adapte conforme necessário)
const validateName = () => {
  nameErrorMessages.value = name.value.length < 3 ? ['Nome muito curto'] : [];
};
const validatePhone = () => {
  phoneErrorMessages.value = phone.value.length < 10 ? ['Telefone inválido'] : [];
};
const validateEmail = () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  emailErrorMessages.value = !emailPattern.test(email.value) ? ['Email inválido'] : [];
};
const validateAddress = () => {
  addressErrorMessages.value = address.value.length < 5 ? ['Endereço inválido'] : [];
};

// Validações dos campos do cartão
const validateCardNumber = () => {
  cardNumberErrorMessages.value = cardDetails.value.number.length !== 16 ? ['Número de cartão inválido'] : [];
};
const validateExpiryDate = () => {
  const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  expiryDateErrorMessages.value = !expiryPattern.test(cardDetails.value.expiryDate) ? ['Data inválida (MM/AA)'] : [];
};
const validateCvv = () => {
  cvvErrorMessages.value = cardDetails.value.cvv.length !== 3 ? ['CVV inválido'] : [];
};
</script>

<style scoped lang="sass">
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

  .total-valores 
    font-size: 1.6rem
    font-weight: bold
    color: #ff5722
  .valor-total
    margin-top: 1rem
    font-size: 1.4rem
    color: #333

</style>
