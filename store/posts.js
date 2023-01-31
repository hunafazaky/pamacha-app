export const state = () => ({
  data: [
    {
      id: 1,
      image_cover: 'https://picsum.photos/400/640?random',
      title: 'Ini adalah Hari yang Cerah, Bukan???',
      text: 'Jenis huruf serbaguna akan berisi sejumlah bobot dan gaya font yang berbeda seperti tebal, tebal miring, semi-tebal, Reguler, Reguler-miring, Ringan, Ringan-miring, dll. Font yang bervariasi dalam berat dan gaya akan berguna saat Anda membutuhkan caption, pull-quotes, atau sub-head yang memerlukan bobot atau penekanan berbeda agar menonjol dari teks sekitarnya. Ini lebih baik daripada menggunakan sejumlah bentuk dengan tipe berbeda yang akan menyebabkan inkonsistensi. Sebaiknya gunakan satu atau dua jenis font, tetapi variasikan bobot dan gaya font jika diperlukan. Font serbaguna juga akan mendukung True Small Caps (Huruf kapital yang biasanya mendekati tinggi huruf kecil, dan untuk beberapa font, bisa lebih tinggi) yang dirancang untuk mempertahankan bobot yang sama dengan huruf lainnya dan memiliki rasio aspek yang lebih luas untuk lebih mudah dibaca.',
      type: 'Non-Fiksi',
      hashtags: ['Olahraga', 'Aksi', 'Romansa'],
      writer_id: 1,
      reader_id: [1, 2, 3, 4, 5],
      favorite_count: 20,
      bookshelf_count: 21,
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
  ],
})

export const mutations = {
  add(state, post) {
    state.data.push(post)
  },
  edit(state, post) {
    const index = state.data.findIndex((object) => {
      return object.id === post.id
    })
    state.data[index] = post
  },
  remove(state, post) {
    state.data.splice(state.data.indexOf(post), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
