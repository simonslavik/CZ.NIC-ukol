<script setup>
import '@/assets/cards.css'
import ContactCard from './ContactCard.vue'

defineProps({
  contacts: Array,
  verbose: Boolean,
})
</script>

<template>
  <v-card v-if="!verbose" variant="outlined" class="mb-4 section-card">
    <v-card-title class="section-header">Administrative contacts:</v-card-title>
    <v-card-text class="pa-4 pt-2">
      <v-row v-for="c in contacts" :key="c.handle" no-gutters class="mb-1 align-center">
        <v-col cols="5" class="font-weight-bold text-body-2 pl-4">{{ c.name }}:</v-col>
        <v-col><a href="#" class="handle-link">{{ c.handle }}</a></v-col>
      </v-row>
    </v-card-text>
  </v-card>

  <template v-else>
    <ContactCard
      v-for="c in contacts" :key="c.handle"
      label="Administrative contact"
      :contact="c"
      show-details
    />
  </template>
</template>
