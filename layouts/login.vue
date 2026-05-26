<template>
  <v-app dark>
    <v-main class="login-page">
      <v-container>
        <Nuxt />
      </v-container>
      <p class="caption text-center">
        <a
          class="text-decoration-none text--secondary"
          href="https://pngtree.com/so/people"
          >source: pngtree.com</a
        >
      </p>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LoginLayout",
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .login-page {
    background-image: url(/login-image.webp);
    background-size: cover;
    background-position: center;
  }
}
</style>
