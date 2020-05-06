<template>
  <v-card :width="350">
    <!-- Card title -->
    <v-card-title
      v-if="!editing"
      @click="editing = true"
      class="headline pb-1"
      :class="{ 'grey--text text--lighten--1': !card.name.length }"
      >{{ card.name || 'Card Name' }}</v-card-title
    >

    <v-text-field
      hide-details
      autofocus
      v-if="editing"
      :value="card.name"
      @blur="renameCard"
      class="headline pa-4 ma-0 pb-1"
      placeholder="Card Name"
    ></v-text-field>

    <!-- Adding items buttons -->
    <v-card-actions class="pb-0">
      <v-row justify="space-around">
        <v-btn icon color="grey lighten-1">
          <v-icon small>mdi-check</v-icon>
        </v-btn>

        <v-btn icon color="grey lighten-1">
          <v-icon small>mdi-note</v-icon>
        </v-btn>

        <v-btn icon color="grey lighten-1">
          <v-icon small>mdi-link</v-icon>
        </v-btn>

        <v-btn icon color="grey lighten-1">
          <v-icon small>mdi-image</v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>

    <v-container>
      <CardItem
        v-for="(item, index) in card.items"
        :key="index"
        :item="item"
        :cardId="card.id"
      />
    </v-container>
  </v-card>
</template>

<script>
import CardItem from './CardItem'

export default {
  props: ['card'],
  components: {
    CardItem
  },
  data() {
    return {
      editing: false
    }
  },
  methods: {
    renameCard(e) {
      let value = e.target.value

      this.$store.dispatch('renameCard', {
        cardId: this.card.id,
        name: value
      })
      this.editing = false
    }
  }
}
</script>

<style scoped>
.v-checkbox--custom >>> .v-input--selection-controls__input {
  height: 22px;
}
.v-card__title:hover {
  cursor: text;
}
</style>
