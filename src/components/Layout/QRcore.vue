<template>
    <div class="quadrado">
      <!-- A tag img será usada para exibir o QR code gerado -->
      <img v-if="qrCodeUrl" :src="qrCodeUrl" alt="QR Code" class="qr-code"/>

      <router-link to="/pedidoFinalizado" class="router-link">
          <v-btn class="botao_prosseguir">Prosseguir</v-btn>
        </router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import QRCode from 'qrcode';
  
  const qrCodeUrl = ref('');
  
  onMounted(() => {
    // Gerar o QR Code com a mensagem "Pagamento Finalizado"
    QRCode.toDataURL('Pagamento Finalizado', { width: 256, margin: 2 }, function (err, url) {
      if (err) throw err;
      qrCodeUrl.value = url;
    });
  });
  </script>
  
  <style scoped lang="sass">
  .quadrado 
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin: 20px auto
    padding: 20px
    max-width: 1200px
    width: 100%
    height: auto
    background-color: #eaeaea
    box-shadow: 2px 4px 10px rgba(0,0,0,0.3)
    position: relative
    border-radius: 6px
  
  .qr-code
    max-width: 300px
    width: 100%
    height: auto
    margin: 0 auto

  .botao_prosseguir
    margin: 30px
    background-color: blacked 
    box-shadow: 1px 2px 10px rgba(0,0,0,0.5)
    color: white

    &:hover
      background-color: rgba(100,5,30,1)
      color: white
      box-shadow: 2px 4px 10px rgba(100,5,50,1)
      transform: translate(10px)
  </style>
  