# Nuxt Reading App

Aplikasi web `Nuxt.js` untuk membaca dan menulis karya berbasis komunitas.
Proyek ini menggunakan `Nuxt 2`, `Vuetify`, `Vuex`, dan integrasi `Firebase` untuk otentikasi, penyimpanan, dan pengelolaan data.

## Fitur Utama

- Halaman `Explore` untuk menemukan karya terbaru dan rekomendasi.
- Halaman `Bookshelf` untuk melihat karya yang menjadi koleksi pengguna.
- Halaman `Write` untuk membuat, menyimpan, dan mengedit karya menggunakan editor rich-text `Tiptap`.
- Profil pengguna untuk melihat karya dan informasi penulis.
- Halaman baca detail karya dengan rating, hashtag, dan interaksi pembaca.
- Filter hashtag untuk memudahkan pencarian topik dan kategori karya.
- Integrasi `Firebase` untuk autentikasi dan penyimpanan data.

## Struktur Proyek

- `pages/` - halaman aplikasi utama seperti `home`, `explore`, `bookshelf`, `write`, dan rute dinamis untuk `user` dan `work`.
- `components/` - komponen UI umum seperti `TiptapEditor`, `Hashtags`, `WorkCard`, dan komponen dialog/loading.
- `store/` - manajemen state aplikasi dengan Vuex untuk pengguna, karya, dan data hashtag.
- `nuxt.config.js` - konfigurasi Nuxt, Firebase, Axios, dan Vuetify.

## Teknologi

- `nuxt` (Nuxt 2)
- `vuetify`
- `@nuxtjs/firebase`
- `firebase`
- `@nuxtjs/axios`
- `@tiptap/vue-2`
- `@tiptap/starter-kit`
- `vuelidate`
- `vuex`

## Instalasi

1. Pasang dependensi:

```bash
pnpm install
```

2. Jalankan pengembangan lokal:

```bash
pnpm dev
```

3. Buka aplikasi di browser:

```
http://localhost:3000
```

## Konfigurasi

- `ssr` dinonaktifkan (`ssr: false`) dan target build adalah `static`.
- `firebase` dikonfigurasi di `nuxt.config.js` dengan `auth` dan `storage` diaktifkan.
- `axios` menggunakan `baseURL` default `http://localhost:8080/api`.

## Catatan

- Untuk deployment, pastikan konfigurasi Firebase dan endpoint API disesuaikan.
- Proyek ini dapat berkembang menjadi platform baca-tulis dengan fitur komunitas tambahan seperti komentar, like, dan rekomendasi.

## Lisensi

MIT
