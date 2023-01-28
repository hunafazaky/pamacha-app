<template>
  <v-row justify="center">
    <v-col cols="10" sm="6" md="5">
      <template v-for="paper in papers">
        <PaperPreview
          :key="paper.id"
          class="mx-auto"
          :paper="paper"
          :wordLimit="{ title: 150, text: 400 }"
          :miniVariant="false"
        />
      </template>
    </v-col>
    <v-col cols="10" sm="6" md="5">
      <SideCard :bookmark="true" :recommend="true" />
    </v-col>
  </v-row>
</template>

<script>
import PaperPreview from '../components/PaperPreview.vue'
import SideCard from '../components/SideCard.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data: () => ({}),
  computed: {
    papers() {
      return this.$store.state.papers.data
    },
  },
  methods: {
    addTodo(e) {
      console.log(e.target.value)
      console.log(this.todos)
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
}
</script>

<!-- <v-card-title>
  <v-btn class="pa-4 ma-4" nuxt fab>
    <v-img
      class="rounded-circle"
      cover
      aspect-ratio="1"
      src="/icon.png"
    ></v-img>
  </v-btn>
  <span class="font-weight-medium headline">Hunafa Zaky</span>
</v-card-title> -->
