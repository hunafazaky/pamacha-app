<template>
  <v-sheet
    rounded="lg"
    :width="size.numbers * 1 + size.units"
    class="overflow-hidden mb-2"
    :style="{
      'padding-top': size.numbers * (19 / 13) + size.units,
      position: 'relative',
    }"
  >
    <v-card
      rounded="lg"
      style="inset: 0; position: absolute"
      class="card"
      elevation="2"
      height="100%"
      width="100%"
      dark
    >
      <v-img
        height="100%"
        :src="post.image_cover"
        gradient="to top, rgba(12.9, 12.9, 12.9, .25), rgba(12.9, 12.9, 12.9, 1)"
      >
        <!-- <v-card-actions v-if="miniVariant === true" class="ma-0 pa-0 mx-4 mt-2">
          <v-icon
            :class="post.type === 'Fiksi' ? 'purple--text' : 'error--text'"
            small
            left
          >
            mdi-pound-box
          </v-icon>
          <span class="overline text-truncate" v-text="post.type"></span>
        </v-card-actions> -->
        <v-card-actions
          v-if="miniVariant === false"
          class="d-flex align-center pa-4"
        >
          <nuxt-link
            :to="`/user/${writer.account.username}`"
            class="text-decoration-none white--text text-truncate"
          >
            <v-avatar class="mr-1" color="white" size="28">
              <v-img :src="writer.profile.image_profile"></v-img>
            </v-avatar>
            <span
              class="font-weight-bold text-truncate"
              v-text="writer.profile.name"
            ></span>
          </nuxt-link>
          <v-spacer></v-spacer>
          <v-icon
            :class="post.type === 'Fiksi' ? 'purple--text' : 'error--text'"
          >
            mdi-pound-box
          </v-icon>
        </v-card-actions>
        <v-card-text
          class="title text-capitalize"
          :class="miniVariant === true ? 'caption' : ''"
          v-text="
            post.title.length > wordLimit.title
              ? post.title.slice(0, wordLimit.title) + '...'
              : post.title
          "
        ></v-card-text>
        <v-card-text
          v-if="miniVariant === false"
          class="text-caption"
          v-html="
            post.text.length > wordLimit.text
              ? post.text.slice(0, wordLimit.text) + '...'
              : post.text
          "
        >
        </v-card-text>
        <v-card-actions>
          <div class="absolute bottom" v-if="miniVariant === true">
            <v-btn icon class="mb-1" color="primary">
              <v-icon> mdi-text-box-check </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mb-1"
              color="success"
              nuxt
              :to="`/post/${post.id}/read`"
            >
              <v-icon> mdi-text-box-search </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mb-1"
              color="warning"
              nuxt
              :to="`/post/${post.id}/edit`"
            >
              <v-icon> mdi-text-box-edit </v-icon>
            </v-btn>
            <v-btn icon class="mb-1" color="error" @click="removePost(post)">
              <v-icon> mdi-text-box-remove </v-icon>
            </v-btn>
          </div>
          <div class="mx-2 absolute bottom" v-else>
            <v-btn small color="primary">
              <v-icon left> mdi-text-box-check </v-icon>
              simpan
            </v-btn>
            <v-btn small color="success" nuxt :to="`/post/${post.id}/read`">
              <v-icon left> mdi-text-box-search </v-icon>
              lanjut baca
            </v-btn>
          </div>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
    wordLimit: Object,
    miniVariant: Boolean,
    size: {
      type: Object,
      default() {
        return {
          numbers: 100,
          units: '%',
        }
      },
    },
  },
  data: () => ({}),
  computed: {
    writer() {
      return this.$store.state.users.data.find(
        (user) => user.id === this.post.writer_id
      )
    },
  },
  methods: {
    removePost(post) {
      this.$store.commit('posts/remove', post)
    },
  },
}
</script>
