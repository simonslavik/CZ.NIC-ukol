<script setup>
import ContactCard from './ContactCard.vue'
import AdminContactsCard from './AdminContactsCard.vue'
import RegistryObjectCard from './RegistryObjectCard.vue'

defineProps({
  domain: Object,
  verbose: Boolean,
  nssetRows: Array,
  keysetRows: Array,
})
</script>

<template>
  <ContactCard label="Owner" :contact="domain.owner" show-details />
  <AdminContactsCard :contacts="domain.administrative_contacts" :verbose="verbose" />
  <RegistryObjectCard title="NSSet" :handle="domain.nsset.handle"
    :registrar="domain.nsset.registrar" :rows="nssetRows" />
  <RegistryObjectCard title="KeySet" :handle="domain.keyset.handle"
    :registrar="domain.keyset.registrar" :rows="keysetRows" />
</template>
