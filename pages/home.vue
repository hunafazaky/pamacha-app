<template>
  <v-row justify="center">
    <v-col cols="10" sm="6" md="5">
      <template v-if="posts.length > 0">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          class="mx-auto"
          :post="post"
          :wordLimit="{ title: 150, text: 400 }"
          :miniVariant="false"
        />
      </template>
      <template v-else>
        <p class="overline text-center text-secondary ma-4">Kosong</p>
      </template>
    </v-col>
    <v-col cols="10" sm="6" md="5">
      <SideCard :bookmark="true" :recommend="true" />
    </v-col>
  </v-row>
</template>

<script>
import PostCard from '../components/PostCard.vue'
import SideCard from '../components/SideCard.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data: () => ({}),
  computed: {
    posts() {
      return this.$store.state.posts.data
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
  components: {
    PostCard,
  },
}
</script>
