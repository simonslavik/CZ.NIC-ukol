# Ferda — Domain Registry Admin Panel

A Vue 3 single-page application that displays domain registration details
fetched from a JSON endpoint. Built with Vuetify for the UI.

## Prerequisites

- Node.js 20.19+ or 22.12+

## Setup

```sh
npm install
```

## Development

```sh
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Tests

```sh
npm test
```

## Project structure

```
src/
  main.js              – app entry point
  App.vue              – root layout (app bar + drawer + router view)
  plugins/vuetify.js   – Vuetify setup & theme
  router/index.js      – routes (/ redirects to /registry)
  utils/date.js        – shared date formatting
  views/
    DomainDetailView   – main page, fetches domain-detail.json
  components/
    AppBar             – top navigation bar with user menu
    AppDrawer          – side navigation
    AuthInfoCard       – auth info reveal + expiration
    EventsCard         – registration event timeline
    StateFlagsCard     – compact / verbose state flags
    ContactCard        – owner or admin contact card
    AdminContactsCard  – admin contacts list (compact) or cards (verbose)
    RegistryObjectCard – NSSet / KeySet display
    DomainSidebar      – right-column cards (owner, contacts, nsset, keyset)
public/
  domain-detail.json   – sample domain data
```
# CZ.NIC-ukol

