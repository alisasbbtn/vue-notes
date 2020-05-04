<template>
  <v-app>
    <v-app-bar app color="dark" dark></v-app-bar>

    <v-content>
      <Cards />
    </v-content>
  </v-app>
</template>

<script>
import Cards from './components/Cards'

export default {
  name: 'App',
  components: {
    Cards
  }
}
</script>
