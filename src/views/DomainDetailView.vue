<script setup>
import { ref, computed, onMounted } from 'vue'
import { formatDate } from '@/utils/date'
import AuthInfoCard from '@/components/AuthInfoCard.vue'
import EventsCard from '@/components/EventsCard.vue'
import StateFlagsCard from '@/components/StateFlagsCard.vue'
import DomainSidebar from '@/components/DomainSidebar.vue'

const domain = ref(null)
const loading = ref(true)
const error = ref(null)
const verbose = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('/domain-detail.json')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    domain.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})

const events = computed(() => {
  if (!domain.value) return []
  const { registered, updated, transferred, unregistered } = domain.value.events
  const rows = []
  if (registered)  rows.push({ label: 'Create date:',   date: formatDate(registered.timestamp),  registrar: registered.registrar_handle })
  if (updated)     rows.push({ label: 'Update date:',   date: formatDate(updated.timestamp),     registrar: updated.registrar_handle })
  if (transferred) rows.push({ label: 'Transfer date:', date: formatDate(transferred.timestamp), registrar: transferred.registrar_handle })
  rows.push({ label: 'Delete date:', date: unregistered ? formatDate(unregistered.timestamp) : '', registrar: unregistered?.registrar_handle })
  return rows
})

const nssetRows = computed(() =>
  domain.value
    ? [{ label: 'DNS', values: domain.value.nsset.dns.map(d => `${d.name} (${d.ip_address})`) }]
    : []
)

const keysetRows = computed(() =>
  domain.value ? [{ label: 'DNS keys', values: domain.value.keyset.dns_keys }] : []
)
</script>

<template>
  <v-container fluid class="pa-6">
    <div v-if="loading" class="d-flex justify-center pa-12">
      <v-progress-circular indeterminate color="#F5B800" size="48" />
    </div>

    <v-alert v-else-if="error" type="error" class="mb-4">
      Failed to load domain data: {{ error }}
    </v-alert>

    <template v-else>
      <h1 class="text-h5 font-weight-bold mb-4">{{ domain.fqdn }}</h1>

      <div class="d-flex align-center mb-6">
        <v-switch v-model="verbose" hide-details density="compact" color="#4CAF50"
          style="flex: 0 0 auto" class="mr-2" />
        <span class="text-body-2 text-grey-darken-1">Verbose view</span>
      </div>

      <v-row>
        <v-col cols="12" lg="8">
          <AuthInfoCard :expires-at="domain.expires_at" :auth-info="domain.auth_info" />
          <EventsCard :events="events" />
          <StateFlagsCard :state-flags="domain.state_flags" :verbose="verbose" />

          <div class="d-block d-lg-none">
            <DomainSidebar :domain="domain" :verbose="verbose"
              :nsset-rows="nssetRows" :keyset-rows="keysetRows" />
          </div>
        </v-col>

        <v-col cols="4" class="d-none d-lg-block">
          <DomainSidebar :domain="domain" :verbose="verbose"
            :nsset-rows="nssetRows" :keyset-rows="keysetRows" />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
