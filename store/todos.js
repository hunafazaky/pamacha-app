export const state = () => ({
  list: [
    {
      done: true,
      text: 'Makan',
    },
    {
      done: false,
      text: 'Minum',
    },
    {
      done: false,
      text: 'Berdiri',
    },
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
