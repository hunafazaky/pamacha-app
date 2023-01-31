<template>
  <v-row :justify="posts.length > 0 ? 'start' : 'center'" class="px-4 py-1">
    <template v-if="posts.length > 0">
      <v-col
        v-for="post in posts"
        :key="post.id"
        class="px-1 py-0"
        cols="4"
        sm="4"
        md="3"
        xl="2"
      >
        <PostCard
          :post="post"
          :wordLimit="{ title: 100, text: 0 }"
          :miniVariant="true"
        />
      </v-col>
    </template>
    <template v-else>
      <p class="overline text-center text-secondary ma-4">Kosong</p>
    </template>
  </v-row>
</template>

<script>
import PostCard from '../components/PostCard.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Bookshelf',
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
