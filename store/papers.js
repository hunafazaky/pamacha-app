export const state = () => ({
  data: [
    {
      id: 1,
      image_cover: 'https://picsum.photos/510/300?random',
      title: 'Ini adalah Hari yang Cerah, Bukan???',
      text: 'Jenis huruf serbaguna akan berisi sejumlah bobot dan gaya font yang berbeda seperti tebal, tebal miring, semi-tebal, Reguler, Reguler-miring, Ringan, Ringan-miring, dll. Font yang bervariasi dalam berat dan gaya akan berguna saat Anda membutuhkan caption, pull-quotes, atau sub-head yang memerlukan bobot atau penekanan berbeda agar menonjol dari teks sekitarnya. Ini lebih baik daripada menggunakan sejumlah bentuk dengan tipe berbeda yang akan menyebabkan inkonsistensi. Sebaiknya gunakan satu atau dua jenis font, tetapi variasikan bobot dan gaya font jika diperlukan. Font serbaguna juga akan mendukung True Small Caps (Huruf kapital yang biasanya mendekati tinggi huruf kecil, dan untuk beberapa font, bisa lebih tinggi) yang dirancang untuk mempertahankan bobot yang sama dengan huruf lainnya dan memiliki rasio aspek yang lebih luas untuk lebih mudah dibaca.',
      type: 'Non-Fiksi',
      hashtag_list: [1, 2, 3, 4, 5],
      writer_id: 1,
      reader_list: [1, 2, 3, 4, 5],
      favorite: 20,
      bookshelf: 21,
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
  ],
})

export const mutations = {
  add(state, writing) {
    state.data.push({
      writing,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
