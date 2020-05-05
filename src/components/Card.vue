<template>
  <v-card :width="350">
    <!-- Card title -->
    <v-card-title
      v-if="!editing"
      @click="editing = true"
      class="headline pb-1"
      >{{ card.title }}</v-card-title
    >

    <v-text-field
      hide-details
      autofocus
      v-if="editing"
      v-model="card.title"
      :rules="[value => !!value]"
      @blur="editing = !card.title"
      class="headline pa-4 ma-0 pb-1"
      placeholder="Card title"
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
      <CardItem :type="'to-do'"></CardItem>
      <CardItem :type="'image'"></CardItem>
      <CardItem :type="'link'"></CardItem>
      <CardItem :type="'note'"></CardItem>
    </v-container>
  </v-card>
</template>

<script>
import CardItem from './CardItem'

export default {
  components: {
    CardItem
  },
  data() {
    return {
      card: {
        title: 'Card title'
      },
      editing: false
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
