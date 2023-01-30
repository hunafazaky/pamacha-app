<template>
  <v-row justify="space-between">
    <v-dialog v-model="showZoomContainer" max-width="380px">
      <v-sheet
        @click="showZoomContainer = false"
        outlined
        rounded="lg"
        width="100%"
        class="overflow-hidden zoom-out-pointer"
        :style="{
          'padding-top': 100 * (19 / 13) + '%',
          position: 'relative',
        }"
      >
        <v-img
          style="inset: 0; position: absolute"
          height="100%"
          cover
          :src="paper.image_cover"
        ></v-img>
      </v-sheet>
    </v-dialog>
    <v-col class="my-5" cols="12" md="7">
      <h1
        class="headline font-weight-medium text--secondary"
        v-text="paper.title"
      ></h1>
      <p class="subtitle-1 my-5" v-html="paper.text"></p>
    </v-col>
    <v-col class="my-5" cols="12" md="3">
      <v-sheet
        @click.stop="showZoomContainer = true"
        outlined
        rounded="lg"
        width="100%"
        class="overflow-hidden zoom-in-pointer"
        :style="{
          'padding-top': 100 * (19 / 13) + '%',
          position: 'relative',
        }"
      >
        <v-img
          style="inset: 0; position: absolute"
          height="100%"
          cover
          :src="paper.image_cover"
        ></v-img>
      </v-sheet>
      <div class="my-5">
        <p class="caption font-weight-bold my-0">Penulis :</p>
        <!-- <v-icon small left> mdi-account-circle </v-icon> -->
        <nuxt-link to="/home" class="text-decoration-none">
          <div 
            class="caption text-truncate text-capitalize font-weight-medium" 
            v-text="writer(paper.writer_id).profile.name"></div>
        </nuxt-link>
      </div>
      <div class="my-5">
        <p class="caption font-weight-bold my-0">Tipe :</p>
        <v-icon
          class="mx-0"
          :class="paper.type === 'Fiksi' ? 'purple--text' : 'error--text'"
          left
        >
          mdi-pound-box
        </v-icon>
        <span class="overline text-truncate" v-text="paper.type"></span>
      </div>
      <div class="my-5">
        <p class="caption font-weight-bold my-0">Tagar :</p>
        <v-chip-group column class="mb-4">
          <v-chip
            label
            small
            color="grey darken-4"
            class="font-weight-medium white--text"
            v-for="hashtag in paper.hashtags"
            :key="hashtag"
          >
            <v-icon small left>mdi-pound</v-icon>
            <span class="text-capitalize" v-text="hashtag"></span>
          </v-chip>
        </v-chip-group>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'default',
  data: () => ({
    showZoomContainer: false,
  }),
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 220
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 600
        case 'xl':
          return 800
      }
    },
    paper() {
      return this.$store.state.papers.data.find(paper => paper.id == this.$route.params.paper);
    },
  },
  methods: {
    hashtag(id) {
      return this.$store.state.hashtags.data.find(hashtag => hashtag.id == id);;
    },
    writer(id) {
      return this.$store.state.users.data.find(user => user.id == id);;
    },
  },
  components: {},
}
</script>
