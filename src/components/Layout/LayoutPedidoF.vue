<template>
    <div class="quadrado">
      <!-- Ícone de confirmação -->
      <div class="confirmacao">
        <span class="check-icon">✔️</span>
      </div>
  
      <!-- Mensagem de confirmação -->
      <div class="mensagem">
        <h2 class="campo-titulo">Seu pedido foi finalizado!</h2>
        <p>O seu pedido chegará em torno de 40 minutos.</p>
        <p>Obrigado por comprar conosco! Abaixo estão os detalhes do seu pedido:</p>
      </div>
  
      <!-- Dados do pedido (exemplo de uma nota) -->
      <div class="detalhes-pedido">
        <p><strong>Pedido #:</strong> 12345</p>
        <p><strong>Data:</strong> 27/11/2024</p>
        <p><strong>Nome do Cliente:</strong> João Silva</p>
        <p><strong>Endereço de Entrega:</strong> Rua das Flores, 123, Bairro Jardim</p>
        <p><strong>Itens:</strong></p>
        <ul>
          <li>1x Pizza de Calabresa - R$ 40,00</li>
          <li>2x Coca-Cola Lata - R$ 10,00</li>
        </ul>
        <p><strong>Total:</strong> R$ 50,00</p>
      </div>
    </div>
  </template>
  
  <script setup>
 
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
  
    .confirmacao
      display: flex
      justify-content: center
      align-items: center
      margin-bottom: 20px
  
    .check-icon
      font-size: 60px
      color: green
  
    .campo-titulo
      text-align: center
      font-size: 28px
      font-weight: bold
      color: #000
      margin-bottom: 20px
  
    .mensagem
      color: black
      text-align: center
      margin-bottom: 20px
  
    .detalhes-pedido
      color: black
      text-align: left
      width: 100%
      max-width: 500px
      background-color: #fff
      padding: 20px
      border-radius: 8px
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5)
  
    .detalhes-pedido p, .detalhes-pedido ul
      margin: 10px 0
      font-size: 16px
  
    .detalhes-pedido ul
      padding-left: 20px
  
    .detalhes-pedido li
      list-style: disc
  </style>
    