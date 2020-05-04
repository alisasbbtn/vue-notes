<template>
  <v-row>
    <v-col>
      <v-card outlined>
        <CardToDo v-if="type === 'to-do'" />
        <CardNote v-else-if="type === 'note'" />
        <CardLink v-else-if="type === 'link'" />
        <CardImage v-else-if="type === 'image'" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CardToDo from './items/CardToDo'
import CardNote from './items/CardNote'
import CardLink from './items/CardLink'
import CardImage from './items/CardImage'

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: function(value) {
        return ['to-do', 'note', 'link', 'image'].indexOf(value) !== -1
      }
    }
  },
  components: {
    CardToDo,
    CardNote,
    CardLink,
    CardImage
  }
}
</script>
