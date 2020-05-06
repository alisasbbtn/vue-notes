<template>
  <v-row
    class="mx-0"
    @mouseenter="showActions = true"
    @mouseleave="showActions = false"
  >
    <v-col cols="1" class="pa-0">
      <v-checkbox
        dense
        hide-details
        :value="task.isCompleted"
        :color="task.isCompleted ? 'grey' : 'primary'"
        :disabled="editing"
        @change="toggleTask"
        class="ma-4 pb-1"
      ></v-checkbox>
    </v-col>

    <v-col cols="8" class="pa-0 ml-5" align-self="center">
      <v-card-text
        v-if="!editing"
        :class="taskClasses"
        @click="editing = true"
        class="pa-0 font-weight-light"
        >{{ task.content || 'Empty task' }}</v-card-text
      >

      <v-text-field
        v-if="!task.isCompleted && editing"
        hide-details
        autofocus
        :value="task.content"
        @blur="changeTask"
        class="mt-0 pa-0 font-weight-light subtitle-2 v-text-field--custom"
        placeholder="What do you need to do?"
      ></v-text-field>
    </v-col>

    <v-col cols="1">
      <v-btn icon v-if="showActions" @click="deleteTask">
        <v-icon small>mdi-delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['task', 'cardId'],
  data() {
    return {
      editing: false,
      showActions: false
    }
  },
  computed: {
    taskClasses() {
      return {
        'task-completed': this.task.content.length && this.task.isCompleted,
        'grey--text': !this.task.content.length || this.task.isCompleted
      }
    }
  },
  methods: {
    toggleTask() {
      this.$store.dispatch('updateTask', {
        cardId: this.cardId,
        taskId: this.task.id,
        task: {
          isCompleted: !this.task.isCompleted
        }
      })
    },
    changeTask(e) {
      let value = e.target.value

      this.$store.dispatch('updateTask', {
        cardId: this.cardId,
        taskId: this.task.id,
        task: {
          content: value
        }
      })
      this.editing = false
    },
    deleteTask() {
      if (confirm('Are you sure?')) {
        this.$store.dispatch('deleteTask', {
          cardId: this.cardId,
          taskId: this.task.id
        })
      }
    }
  }
}
</script>

<style scoped>
.task-completed {
  text-decoration: line-through;
}
.v-text-field--custom >>> .v-text-field__slot input {
  letter-spacing: 0.1px;
}
</style>
