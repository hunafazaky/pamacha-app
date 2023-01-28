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
        :src="paper.image_cover"
        gradient="to top, rgba(12.9, 12.9, 12.9, .25), rgba(12.9, 12.9, 12.9, 1)"
      >
        <v-card-actions v-if="miniVariant === true" class="ma-0 pa-0 mx-4 mt-2">
          <v-icon
            :class="type === 'fiksi' ? 'purple--text' : 'error--text'"
            small
            left
          >
            mdi-pound-box
          </v-icon>
          <span class="overline text-truncate" v-text="paper.type"></span>
        </v-card-actions>
        <v-card-actions v-else class="d-flex align-center">
          <v-avatar color="secondary" size="30" class="ma-2">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>
          <span
            class="font-weight-bold text-truncate"
            v-text="user.profile.name"
          ></span>
          <v-spacer></v-spacer>
          <v-icon class="error--text ma-2"> mdi-pound-box </v-icon>
        </v-card-actions>
        <v-card-text
          class="title text-capitalize"
          :class="miniVariant === true ? 'caption font-weight-bold' : ''"
          v-text="
            paper.title.length > wordLimit.title
              ? paper.title.slice(0, wordLimit.title) + '...'
              : paper.title
          "
        ></v-card-text>
        <v-card-text
          v-if="miniVariant === false"
          class="text-caption"
          v-text="
            paper.text.length > wordLimit.text
              ? paper.text.slice(0, wordLimit.text) + '...'
              : paper.text
          "
        >
        </v-card-text>
        <v-card-actions>
          <div class="mx-2 absolute bottom" v-if="miniVariant === true">
            <v-btn fab small color="primary">
              <v-icon small> mdi-bookmark-plus </v-icon>
            </v-btn>
            <v-btn fab small color="success" nuxt to="/read">
              <v-icon small> mdi-book-open </v-icon>
            </v-btn>
          </div>
          <div class="mx-2 absolute bottom" v-else>
            <v-btn small color="primary">
              <v-icon left>mdi-bookmark-plus</v-icon>
              simpan
            </v-btn>
            <v-btn small color="success" nuxt to="/read">
              <v-icon left>mdi-book-open</v-icon>
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
  name: 'PaperPreview',
  props: {
    paper: Object,
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
  data: () => ({
    title: 'Ano hi mita hana no namae wo bokutachi wa mada shiranai',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium nisi tempora iure rerum, facilis saepe pariatur fugiat quas explicabo autem id eveniet distinctio porro quos eius, natus aspernatur dolore, repellendus laboriosam molestiae ipsum aut accusamus. Pariatur, necessitatibus et. Sequi ullam neque facere maiores? Nemo, corrupti ipsum sapiente ad reprehenderit placeat nobis similique modi, eaque distinctio repudiandae! Dolorem maxime neque vero iste suscipit animi deleniti, deserunt facilis hic, architecto assumenda nulla aut ipsam, qui perferendis ut praesentium amet? Porro, cupiditate voluptate deserunt aut assumenda quo aliquam quasi reprehenderit eius est beatae excepturi eum corporis odio dignissimos modi id vitae veritatis.',
    type: 'Non-Fiksi',
  }),
  computed: {
    user() {
      return this.$store.state.users.data.filter(
        (user) => user.id === this.paper.writer_id
      )[0]
    },
  },
}
</script>
<!-- v-if="i < 5"
  :key="i"
  :style="`left: ${i * 25}px;`"
  :to="'/user/' + userByID(reader.user_id).account.username" -->
