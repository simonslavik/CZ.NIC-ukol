<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle-drawer'])
const showMenu = ref(false)
</script>

<template>
  <v-app-bar color="#F5B800" flat density="comfortable">
    <v-app-bar-nav-icon variant="text" color="white" @click="emit('toggle-drawer')" />
    <v-toolbar-title class="title">Ferda</v-toolbar-title>

    <v-spacer />

    <v-menu v-model="showMenu" :close-on-content-click="false" location="bottom end">
      <template #activator="{ props }">
        <v-btn v-bind="props" variant="text" color="white" class="text-none">
          <v-icon start>mdi-account-circle</v-icon>
          <span class="text-uppercase font-weight-bold">Jan Musílek</span>
        </v-btn>
      </template>

      <v-card min-width="220">
        <v-card-text class="d-flex align-center pa-4">
          <v-icon size="40" color="grey" class="mr-3">mdi-account-circle</v-icon>
          <div>
            <div class="font-weight-bold">Jan Musílek</div>
            <div class="text-grey text-body-2">admin</div>
          </div>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn variant="text" prepend-icon="mdi-logout" block>Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.title { color: white; font-weight: 700; font-size: 1.3rem; }
</style>
