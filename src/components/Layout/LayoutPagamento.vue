<template>
    <div class="quadrado">
        <h2 class="titulo-pagamento">preencha os dados</h2>
        <div class="linha">
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
          </div>
    </div>
</template>

<script setup>
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
    gap: 10px
    justify-content: space-between
    align-items: center
    flex-wrap: wrap

.item-input
    flex: 1
    min-width: 250px

.campo-input, .descri-input
    width: 50%
    font-size: 10px
    border-radius: 4px
    border: 1px solid #ccc
    padding: 5px
    transition: border-color 0.3s ease, box-shadow 0.3s ease
    background-color: #fafafa
    color: #2a3d73
</style>