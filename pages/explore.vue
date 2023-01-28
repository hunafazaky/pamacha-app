<template>
  <v-row justify="start" class="px-4">
    <v-col class="pa-1" cols="12">
      <Hashtags />
    </v-col>
    <template v-for="paper in papers">
      <v-col :key="paper.id" class="px-1 py-0" cols="4" sm="4" md="3" xl="2">
        <PaperPreview
          :paper="paper"
          :wordLimit="{ title: 100, text: 0 }"
          :miniVariant="true"
        />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import PaperPreview from '../components/PaperPreview.vue'
import Hashtags from '../components/Hashtags.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Explore',
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
