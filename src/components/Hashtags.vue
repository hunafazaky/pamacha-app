<template>
  <v-slide-group
    v-model="isActived"
    active-class="secondary"
    prev-icon="mdi-arrow-left-bold-box"
    next-icon="mdi-arrow-right-bold-box"
    show-arrows
  >
    <v-slide-item
      v-for="category in categories"
      :key="category.id"
      v-slot="{ active, toggle }"
      :value="category.name"
    >
      <v-btn
        class="mx-1 my-1 rounded-lg"
        :input-value="active"
        :dark="active"
        outlined
        depressed
        small
        @click="toggle"
        v-text="category.name"
      ></v-btn>
    </v-slide-item>
  </v-slide-group>
</template>

<script setup lang="ts">
import { categories } from "@/utils/constants";
import { ref } from "vue";

const isActived = ref(null);
// const 


// export default {
//   name: 'Hashtags',
//   props: [],
//   data: () => ({
//     isActived: null
//   }),
//   computed: {
//     hashtags() {
//       return this.$store.state.hashtags.data
//     },
//   },
//   methods: {
//     sendHashtag(data) {
//       this.$emit('category-actived', data);
//     }
//   },
//   watch: {
//     isActived(newValue, oldValue) {
//       // Di sini Anda dapat menjalankan metode atau tindakan yang Anda inginkan
//       // console.log('Nilai berubah dari', oldValue, 'ke', newValue);
//       // console.log();
//       this.sendHashtag(newValue);
//     }
//   },
// }
</script>
