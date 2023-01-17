<template>
  <v-card rounded="lg" fixed dark>
    <v-card-title>Pembatas Buku</v-card-title>
    <v-card-text class="caption text-center secondary--text"
      >Belum ada buku yang dibaca</v-card-text
    >
    <v-divider></v-divider>
    <v-card-title>Rekomendasi Penulis</v-card-title>
    <v-card-text>
      <div class="mb-2 d-flex align-center">
        <v-avatar color="secondary" size="30" class="ma-2">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
        <span class="font-weight-bold">Hunafa Zaky</span>
        <v-spacer></v-spacer>
        <v-btn text plain x-small> ikuti </v-btn>
      </div>
      <div class="mb-2 d-flex align-center">
        <v-avatar color="secondary" size="30" class="ma-2">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
        <span class="font-weight-bold">Hunafa Zaky</span>
        <v-spacer></v-spacer>
        <v-btn text plain x-small> ikuti </v-btn>
      </div>
      <div class="mb-2 d-flex align-center">
        <v-avatar color="secondary" size="30" class="ma-2">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
        <span class="font-weight-bold">Hunafa Zaky</span>
        <v-spacer></v-spacer>
        <v-btn text plain x-small> ikuti </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ActionCard',
  props: [],
  data: () => ({
    title: 'Ano hi mita hana no namae wo bokutachi wa mada shiranai',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium nisi tempora iure rerum, facilis saepe pariatur fugiat quas explicabo autem id eveniet distinctio porro quos eius, natus aspernatur dolore, repellendus laboriosam molestiae ipsum aut accusamus. Pariatur, necessitatibus et. Sequi ullam neque facere maiores? Nemo, corrupti ipsum sapiente ad reprehenderit placeat nobis similique modi, eaque distinctio repudiandae! Dolorem maxime neque vero iste suscipit animi deleniti, deserunt facilis hic, architecto assumenda nulla aut ipsam, qui perferendis ut praesentium amet? Porro, cupiditate voluptate deserunt aut assumenda quo aliquam quasi reprehenderit eius est beatae excepturi eum corporis odio dignissimos modi id vitae veritatis.',
  }),
}
</script>

<!-- v-if="i < 5"
  :key="i"
  :style="`left: ${i * 25}px;`"
  :to="'/user/' + userByID(reader.user_id).account.username" -->
