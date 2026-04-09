<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { DarkMode } from './stores/theme.js'
import './style.css'

const darkModeStore = DarkMode()

onMounted(() => {
  darkModeStore.initializeDarkMode()
})
</script>

<template>
  <div :class="darkModeStore.themeClass">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>