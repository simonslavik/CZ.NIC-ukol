<script setup>
import '@/assets/cards.css'

defineProps({ events: Array })
</script>

<template>
  <v-card variant="outlined" class="mb-4 section-card">
    <v-card-title class="section-header">Events:</v-card-title>
    <v-card-text class="pa-4 pt-2">
      <v-row v-for="(ev, i) in events" :key="i" no-gutters class="mb-1 align-center">
        <v-col cols="4" sm="3" class="font-weight-bold text-body-2">{{ ev.label }}</v-col>
        <v-col cols="4" sm="4" class="text-body-2">{{ ev.date }}</v-col>
        <v-col v-if="ev.registrar" cols="4" sm="5" class="text-body-2">
          <span class="font-weight-bold mr-4">Registrar:</span>
          <a href="#" class="handle-link">{{ ev.registrar }}</a>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
