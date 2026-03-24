<script setup>
import { ref } from 'vue'
import AppBar from '@/components/AppBar.vue'
import AppDrawer from '@/components/AppDrawer.vue'

const drawer = ref(true)
</script>

<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer" />
    <AppDrawer v-model="drawer" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  background: #fafafa;
}
</style>
