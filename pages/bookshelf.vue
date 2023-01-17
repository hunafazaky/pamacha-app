<template>
  <v-row justify="start" class="px-4">
    <v-col class="pa-1" cols="12">
      <v-slide-group
        active-class="primary"
        prev-icon="mdi-arrow-left-bold-box"
        next-icon="mdi-arrow-right-bold-box"
        show-arrows
      >
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="mx-2"
            height="210"
            width="148"
            @click="toggle"
          >
            <v-scale-transition>
              <WorkPreview
                :wordLimit="{ title: 100, text: 0 }"
                :miniVariant="true"
              />
            </v-scale-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<script>
import WorkPreview from '../components/WorkPreview.vue'
import Hashtags from '../components/Hashtags.vue'

export default {
  name: 'Bookshelf',
  data: () => ({
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium nisi tempora iure rerum, facilis saepe pariatur fugiat quas explicabo autem id eveniet distinctio porro quos eius, natus aspernatur dolore, repellendus laboriosam molestiae ipsum aut accusamus. Pariatur, necessitatibus et. Sequi ullam neque facere maiores? Nemo, corrupti ipsum sapiente ad reprehenderit placeat nobis similique modi, eaque distinctio repudiandae! Dolorem maxime neque vero iste suscipit animi deleniti, deserunt facilis hic, architecto assumenda nulla aut ipsam, qui perferendis ut praesentium amet? Porro, cupiditate voluptate deserunt aut assumenda quo aliquam quasi reprehenderit eius est beatae excepturi eum corporis odio dignissimos modi id vitae veritatis.',
  }),
}
</script>
