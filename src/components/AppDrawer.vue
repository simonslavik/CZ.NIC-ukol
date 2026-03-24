<script setup>
const drawer = defineModel({ type: Boolean })
</script>

<template>
  <v-navigation-drawer v-model="drawer" width="200">
    <div class="pa-3 text-caption text-grey-darken-1 font-weight-medium">APPLICATIONS</div>
    <v-list density="compact" nav>
      <v-list-item
        to="/registry"
        prepend-icon="mdi-earth"
        title="Registry"
        color="#E88A2A"
        rounded="xl"
      />
    </v-list>
  </v-navigation-drawer>
</template>
