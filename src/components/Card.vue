<template>
  <v-card :width="350">
    <v-card-title class="headline">Card Title</v-card-title>

    <!-- Add Item buttons -->
    <v-card-actions class="py-0">
      <v-row justify="space-around">
        <v-btn icon color="grey lighten-1">
          <v-icon>mdi-check</v-icon>
        </v-btn>

        <v-btn icon color="grey lighten-1">
          <v-icon>mdi-note</v-icon>
        </v-btn>

        <v-btn icon color="grey lighten-1">
          <v-icon>mdi-link</v-icon>
        </v-btn>

        <v-btn icon color="grey lighten-1">
          <v-icon>mdi-image</v-icon>
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
  }
}
</script>

<style scoped>
.v-checkbox--custom >>> .v-input--selection-controls__input {
  height: 22px;
}
</style>
