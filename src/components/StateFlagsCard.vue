<script setup>
import { computed } from 'vue'
import '@/assets/cards.css'

const props = defineProps({
  stateFlags: Object,
  verbose: Boolean,
})

const active = computed(() => props.stateFlags.flags.filter(f => f.active))

const grouped = computed(() => {
  const { groups, flags } = props.stateFlags
  const used = new Set(groups.flat())
  const cols = groups.map(names =>
    names.map(n => flags.find(f => f.name === n)).filter(Boolean)
  )
  // everything not in a named group goes into the last column
  cols.push(flags.filter(f => !used.has(f.name)))
  return cols
})

const icon = f => f.active ? 'mdi-check-circle' : 'mdi-close-circle'
const color = f => f.active ? '#4CAF50' : '#F44336'
</script>

<template>
  <v-card variant="outlined" class="mb-4 section-card">
    <v-card-title class="section-header">State flags:</v-card-title>
    <v-card-text class="pa-4 pt-2">

      <div v-if="!verbose">
        <div v-for="f in active" :key="f.name" class="d-flex align-center mb-1" style="min-height:28px">
          <v-icon color="#4CAF50" size="18" class="mr-2">mdi-check-circle</v-icon>
          <span class="text-body-2" style="color:#4CAF50">{{ f.description }}</span>
        </div>
      </div>

      <v-row v-else>
        <v-col v-for="(col, i) in grouped" :key="i" cols="12" md="4">
          <div v-for="f in col" :key="f.name" class="d-flex align-center mb-1" style="min-height:28px">
            <v-icon :color="color(f)" size="18" class="mr-2 flex-shrink-0">{{ icon(f) }}</v-icon>
            <span class="text-body-2" :style="{ color: color(f) }">{{ f.description }}</span>
          </div>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>
