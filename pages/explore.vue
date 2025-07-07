<template>
  <div>
    <LoadingPage :loading="loading.page"/>
    <v-row :justify="works?.length > 0 ? 'start' : 'center'">
      <v-col>
        <!-- <p class="overline text-center text-secondary ma-4" v-if="foryou?.length > 0">Rekomendasi</p> -->
        <v-row class="mt-0">
          <Hashtags @hashtag-actived="hashtagActived"/>
        </v-row>
        <!-- {{ foryou }} -->
        <!-- <p class="overline text-center text-secondary ma-4" v-if="foryou?.length > 0">Paling Baru</p> -->
        <v-row class="mt-4">
          <LoadingComponent v-if="loading.work" :loading="loading.work" />
          <template v-if="!loading.work">
            <template v-if="works?.length > 0">
              <v-col
                v-for="work in works"
                :key="work.id"
                class="px-1 py-0"
                cols="3"
              >
                <WorkCard
                  :work="{ ...work, id: work._id }"
                  :wordLimit="{ title: 100, text: 0 }"
                  :miniVariant="false"
                  :mutation="false"
                  @remove-work="deleteWork"
                />
              </v-col>
              <v-col
                class="px-1 py-0"
                cols="4"
              >
                <!-- <button @click="loadMore" :disabled="loading.work || works.length >= total">
                  {{ loading.work ? 'Loading...' : (works.length >= total ? 'No more works' : 'Load More') }}
                </button> -->
                <div v-if="loading.work" class="loading-indicator">
                  Loading more works...
                </div>
              </v-col>
            </template>
            <template v-else>
              <p class="overline text-center text-secondary ma-4">Memuat...</p>
            </template>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WorkCard from '../components/WorkCard.vue'
import Hashtags from '../components/Hashtags.vue'
import LoadingComponent from '../components/LoadingComponent.vue'
import LoadingPage from '../components/LoadingPage.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Explore',
  data: () => ({
    loading: {
      // foryou: true,
      work: true,
      user: true,
      page: false
    },
    works: [],         // Simpan semua artikel gabungan di sini
    page: 1,
    limit: 12,
    total: 0,
    category:''
  }),
  computed: {
    // counter() {
    //   return this.$store.getters.getCounter
    // },
    me() {
      if (this.$store.getters['me']) {
        this.loading.user = false
        return this.$store.getters['me']
      } else {
        this.$router.push('/');
        return []; 
      }
    },
    // works() {
    //   if (this.$store.getters['works']) {
    //     this.loading.work = false
    //     return this.$store.getters['works']
    //   }
    // },
    foryou() {
      if (this.$store.getters['foryou']) {
        this.loading.work = false
        return this.$store.getters['foryou']
      }
    }
  },
  methods: {
    hashtagActived(data) {
      this.category = data;
      this.page = 1        // reset ke halaman pertama
      this.works = []      // kosongkan data lama
      this.fetchWorks()  
    },
    // async fetchWorks() {
    //   this.loading.work = true
    //   try {
    //     const res = await this.$store.dispatch('getWorks', {
    //       page: this.page,
    //       limit: this.limit
    //     })

    //     this.works.push(...res.works) // Gabungkan data lama + baru
    //     this.total = res.total

    //   } catch (error) {
    //     console.error('Gagal memuat works:', error)
    //   }

    //   this.loading.work = false
    // },

    // async loadMore() {
    //   if (this.works.length >= this.total) return // Sudah semua
    //   this.page += 1
    //   await this.fetchWorks()
    // },
    // incrementCounter() {
    //   this.$store.dispatch('increment')
    // },
    // decrementCounter() {
    //   this.$store.dispatch('decrement')
    // },
    getWorks() {
      this.loading.work = true
      this.$store.dispatch('getWorks')
    },
    getForYou() {
      this.loading.work = true
      this.$store.dispatch('getForYou')
    },
    getUserById() {
      this.$store.dispatch('getUserById', this.me.id)
    },
    deleteWork(id) {
      if (window.confirm("Apakah anda ingin menghapus karya tulis ini??")) {
        this.$store.dispatch('deleteWork', id)
          .then(() => {
            this.getWorks()
            this.getUserById()
          })
      }
    },
    // readWork(work) {
    //   this.$store.dispatch('updateReadList', work._id)
    //   this.$store.dispatch('updateReaders', work)
    // },
    // addTodo(e) {
    //   console.log(e.target.value)
    //   console.log(this.todos)
    //   this.$store.commit('todos/add', e.target.value)
    //   e.target.value = ''
    // },
    // ...mapMutations({
    //   toggle: 'todos/toggle',
    // }),
    handleScroll() {
      const scrollBottom = window.innerHeight + window.scrollY
      const fullHeight = document.documentElement.offsetHeight

      if (scrollBottom >= fullHeight - 100 && !this.loading.work && this.works.length < this.total) {
        this.loadMore()
      }
    },

    async loadMore() {
      this.page += 1
      await this.fetchWorks()
    },

    async fetchWorks() {
      this.loading.work = true

      try {
        const res = await this.$store.dispatch('getWorks', {
          page: this.page,
          limit: this.limit,
          category: this.category
        })

        if (res && Array.isArray(res.works)) {
          this.works.push(...res.works)
          this.total = res.total || 0
        }

      } catch (error) {
        console.error('Gagal memuat works:', error)
      }

      this.loading.work = false
    }
  },
  components: {
    WorkCard,
    Hashtags,
    LoadingComponent,
    LoadingPage,
  },
  mounted() {
    this.getWorks()
    this.getForYou()
    this.getUserById()
    this.fetchWorks()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    // agar tidak memory leak
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
