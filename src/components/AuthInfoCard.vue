<script setup>
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import '@/assets/cards.css'

defineProps({
  expiresAt: String,
  authInfo: String,
})

const revealed = ref(false)
</script>

<template>
  <v-card variant="outlined" class="mb-4 section-card">
    <v-card-text class="pa-4">
      <v-row no-gutters class="mb-2 align-center">
        <v-col cols="4" sm="3" class="font-weight-bold text-body-2">AuthInfo:</v-col>
        <v-col>
          <v-btn v-if="!revealed" size="small" color="#2196F3" variant="flat"
            class="text-white text-none" @click="revealed = true">SHOW</v-btn>
          <span v-else class="text-body-2">{{ authInfo }}</span>
        </v-col>
      </v-row>
      <v-row no-gutters class="align-center">
        <v-col cols="4" sm="3" class="font-weight-bold text-body-2">Expires at:</v-col>
        <v-col class="text-body-2">{{ formatDate(expiresAt) }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
