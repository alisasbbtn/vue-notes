<template>
  <v-row>
    <v-col>
      <v-card outlined>
        <CardTask v-if="item.type === 'task'" :task="item" :cardId="cardId" />
        <CardNote v-else-if="item.type === 'note'" />
        <CardLink v-else-if="item.type === 'link'" />
        <CardImage v-else-if="item.type === 'image'" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CardTask from './items/CardTask'
import CardNote from './items/CardNote'
import CardLink from './items/CardLink'
import CardImage from './items/CardImage'

export default {
  props: ['item', 'cardId'],
  components: {
    CardTask,
    CardNote,
    CardLink,
    CardImage
  }
}
</script>
