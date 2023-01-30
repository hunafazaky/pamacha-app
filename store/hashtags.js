export const state = () => ({
  data: [
    {
      id: 1,
      name:'Teknologi',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 2,
      name:'Sains',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 3,
      name:'Sejarah',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 4,
      name:'Ekonomi',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 5,
      name:'Sosial',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 6,
      name:'Budaya',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 7,
      name:'Agama',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 8,
      name:'Politik',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 9,
      name:'Olahraga',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 10,
      name:'Aksi',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 11,
      name:'Romansa',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 12,
      name:'Fiksi Ilmiah',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 13,
      name:'Fantasi',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 14,
      name:'Horor',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    },
    {
      id: 15,
      name:  'Drama',
      created_at: '21 Desember 2012',
      updated_at: '21 Desember 2012',
    }
  ],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
