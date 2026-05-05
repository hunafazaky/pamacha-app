<template>
  <div>
    <LoadingPage :loading="loading" />
    <h1 class="text-center ma-4">Reading App</h1>
    <v-row justify="center" align="center">
      <v-col md="6" lg="5" v-if="!mobile">
        <!-- <v-img src="/login-image.png" width="100%"></v-img> -->
      </v-col>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="mb-2" shaped outlined elevation="5">
          <v-card-title v-text="formType"></v-card-title>
          <v-card-text>
            <v-text-field
              dense
              v-model="newAccount.username"
              label="Username"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              dense
              v-model="newAccount.password"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="mx-2">
            <v-btn
              v-if="formType == 'Sign Up'"
              small
              color="success"
              @click="signUpAccount"
            >
              Sign Up
            </v-btn>
            <v-btn
              v-if="formType == 'Sign In'"
              small
              color="primary"
              @click="signInAccount"
            >
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-alert
          class="mb-0"
          type="info"
          transition="slide-y-transition"
          :value="signUpAttempt || signInAttempt"
        >
          {{ message }}
        </v-alert>
        <span v-if="formType == 'Sign Up'" class="caption text--secondary"
          >Sudah punya akun?
          <span class="text-decoration-none" @click.prevent="formType = 'Sign In'"
            >Sign In</span
          >
        </span>
        <span v-if="formType == 'Sign In'" class="caption text--secondary"
          >Belum punya akun?
          <span
            class="text-decoration-none success--text"
            @click.prevent="formType = 'Sign Up'"
            >Sign Up</span
          >
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
/* .card {
  opacity: 90% !important;
} */
</style>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { storeToRefs } from 'pinia'
import { useAccountStore } from '@/stores/useAccountStore'

const { mobile } = useDisplay();
const accountStore = useAccountStore();
const { accounts } = storeToRefs(accountStore);
const { signUpAccount, signInAccount, updateAccount } = accountStore;

interface Account {
  username: string,
  password: string
}

const newAccount = ref<Account>({ username: '', password: '' });
const signInAttempt = ref<boolean>(false);
const signUpAttempt = ref<boolean>(false);
const formType = ref<string>("Sign In");
const message = ref<string>("");
const loading = ref<boolean>(false);


// const login = () => {
//   loading.value = true;
//   $store
//   .dispatch('login', user.value)
//   .then((data) => {
//     // loading.value = false;
//     if (data.id) {
//       message.value = 'Login Berhasil!!';
//       signInAttempt.value = true;
//       $router.value.push('/home');
//     } else {
//       message.value = 'Error: ' + data.message;
//       signInAttempt.value = true;
//       loading.value = false;
//     };
//   })
//   .catch((err) => {
//     alert(err)
//     loading.value = false;
//   });
// },
// const regis = () => {
//   signUpAttempt.value = true;
//   loading.value = true;
//   $store
//   .dispatch('regis', account.value)
//   .then((data: any) => {
//     loading.value = false;
//     if (data.id) {
//       message.value = 'Registrasi Berhasil!!';
//       login.value();
//     } else message.value = 'Error: ' + data.message;
//   })
//   .catch((err: any) => alert(err));
// },
// import LoadingComponent from '../components/LoadingComponent.vue'
// import LoadingPage from '../components/LoadingPage.vue'

// export default {
//   layout: 'login',
//   data: () => ({
//     user: {
//         username: null,
//         password: null,
//     },
//     signInAttempt: false,
//     signUpAttempt: false,
//     formType: 'Registrasi',
//     message: '',
//     loading: false,
//   }),
//   components: {
//     LoadingComponent,
//     LoadingPage,
//   },
//   computed: {
//     height() {
//       switch (this.$vuetify.breakpoint.name) {
//         case 'xs':
//           return 220
//         case 'sm':
//           return 400
//         case 'md':
//           return 500
//         case 'lg':
//           return 600
//         case 'xl':
//           return 800
//       }
//     },
//   },

//   methods: {
//     openLoginForm() {
//       this.formType = 'Login'
//     },
//     openRegisForm() {
//       this.formType = 'Registrasi'
//     },
//     login() {
//       this.loading = true;
//       this.$store
//       .dispatch('login', this.user)
//       .then((data) => {
//         // this.loading = false;
//         if (data.id) {
//           this.message = 'Login Berhasil!!';
//           this.signInAttempt = true;
//           this.$router.push('/home');
//         } else {
//           this.message = 'Error: ' + data.message;
//           this.signInAttempt = true;
//           this.loading = false;
//         };
//       })
//       .catch((err) => {
//         alert(err)
//         this.loading = false;
//       });
//     },
//     regis() {
//       this.signUpAttempt = true;
//       this.loading = true;
//       this.$store
//       .dispatch('regis', this.user)
//       .then((data) => {
//         this.loading = false;
//         if (data.id) {
//           this.message = 'Registrasi Berhasil!!';
//           this.login();
//         } else this.message = 'Error: ' + data.message;
//       })
//       .catch((err) => alert(err));
//     },
//   },
// }
</script>
