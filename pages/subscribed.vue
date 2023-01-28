<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="8" lg="9">
      <v-card class="mb-2" rounded="lg" outlined>
        <v-card-title>Hunafa Zaky</v-card-title>
        <v-card-text>
          <v-slide-group
            active-class="primary"
            prev-icon="mdi-arrow-left-bold-box"
            next-icon="mdi-arrow-right-bold-box"
            show-arrows
          >
            <v-slide-item v-for="paper in papers" :key="paper.id">
              <PaperPreview
                class="mx-2"
                :paper="paper"
                :wordLimit="{ title: 100, text: 0 }"
                :miniVariant="true"
                :size="{ numbers: 150, units: 'px' }"
              />
            </v-slide-item>
          </v-slide-group>
        </v-card-text>
      </v-card>
      <v-card class="mb-2" rounded="lg" outlined>
        <v-card-title>Hunafa Zaky</v-card-title>
        <v-card-text>
          <v-slide-group
            active-class="primary"
            prev-icon="mdi-arrow-left-bold-box"
            next-icon="mdi-arrow-right-bold-box"
            show-arrows
          >
            <v-slide-item v-for="paper in papers" :key="paper.id">
              <PaperPreview
                class="mx-2"
                :paper="paper"
                :wordLimit="{ title: 100, text: 0 }"
                :miniVariant="true"
                :size="{ numbers: 150, units: 'px' }"
              />
            </v-slide-item>
          </v-slide-group>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" md="4" lg="3">
      <SideCard :subscribed="true" />
    </v-col>
  </v-row>
</template>

<script>
import PaperPreview from '../components/PaperPreview.vue'
import SideCard from '../components/SideCard.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Favorite',
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
  components: { PaperPreview },
}
</script>
