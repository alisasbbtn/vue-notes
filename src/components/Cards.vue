<template>
  <v-container>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index">
        <Card :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  computed: {
    cards() {
      return this.$store.getters.cards
    }
  }
}
</script>
