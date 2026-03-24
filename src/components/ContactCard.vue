<script setup>
import '@/assets/cards.css'

defineProps({
  label: String,
  contact: Object,
  showDetails: Boolean,
})

const publishedColor = flag => flag ? '#4CAF50' : '#F44336'
const publishedIcon = flag => flag ? 'mdi-check-circle' : 'mdi-close-circle'
</script>

<template>
  <v-card variant="outlined" class="mb-4 section-card">
    <v-card-title class="section-header">{{ label }}:</v-card-title>
    <v-card-text class="pa-4 pt-2">
      <v-row no-gutters class="mb-1 align-center">
        <v-col cols="5" class="font-weight-bold text-body-2 pl-4">Handle:</v-col>
        <v-col><a href="#" class="handle-link">{{ contact.handle }}</a></v-col>
      </v-row>

      <template v-if="showDetails">
        <v-row no-gutters class="mb-1 align-center">
          <v-col cols="5" class="text-body-2 pl-4">
            <v-icon :color="publishedColor(contact.publish.organization)" size="16" class="mr-1 publish-icon">
              {{ publishedIcon(contact.publish.organization) }}
            </v-icon>
            <span class="font-weight-bold">Organization:</span>
          </v-col>
          <v-col class="text-body-2">{{ contact.organization }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-1 align-center">
          <v-col cols="5" class="text-body-2 pl-4">
            <v-icon :color="publishedColor(contact.publish.name)" size="16" class="mr-1 publish-icon">
              {{ publishedIcon(contact.publish.name) }}
            </v-icon>
            <span class="font-weight-bold">Name:</span>
          </v-col>
          <v-col class="text-body-2">{{ contact.name }}</v-col>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>
