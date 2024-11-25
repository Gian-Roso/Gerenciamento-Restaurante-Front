<template>
    <v-toolbar
      height="60"
      app
      density="comfortable"
      :elevation="4"
      class="custom-toolbar"
    >
    </v-toolbar>

  </template>
  
  <script setup>
    
  </script>
  
  <style scoped lang="sass">
  .custom-toolbar
    background: linear-gradient(90deg, rgba(50,10,25,5) 0%, rgba(100,5,30,1) 35%, rgba(50,10,25,5) 100%)
    color: white
    transition: 0.3s ease-in-out
  
  .v-toolbar__title,
  .toolbar-title
    font-size: 16px
    font-weight: bold
    margin-right: -900px 
  
    
  </style>
  