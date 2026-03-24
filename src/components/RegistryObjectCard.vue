<script setup>
import '@/assets/cards.css'

defineProps({
  title: String,
  handle: String,
  registrar: String,
  rows: Array,
})
</script>

<template>
  <v-card variant="outlined" class="mb-4 section-card">
    <v-card-title class="section-header">{{ title }}:</v-card-title>
    <v-card-text class="pa-4 pt-2">
      <v-row no-gutters class="mb-1 align-center">
        <v-col cols="5" class="font-weight-bold text-body-2 pl-4">Handle:</v-col>
        <v-col><a href="#" class="handle-link">{{ handle }}</a></v-col>
      </v-row>
      <v-row no-gutters class="mb-1 align-center">
        <v-col cols="5" class="font-weight-bold text-body-2 pl-4">Registrar:</v-col>
        <v-col><a href="#" class="handle-link">{{ registrar }}</a></v-col>
      </v-row>
      <v-row v-for="row in rows" :key="row.label" no-gutters class="mb-1 align-start">
        <v-col cols="5" class="font-weight-bold text-body-2 pl-4">{{ row.label }}:</v-col>
        <v-col class="text-body-2" style="white-space:pre-wrap; word-break:break-all">
          <div v-for="(val, j) in row.values" :key="j">{{ val }}</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
