export const state = () => ({
  counter: 0,
  worksData: null,
  usersData: null,
  workData: null,
  myData: null,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  setWorks(state, data) {
    state.worksData = data
  },
  setUsers(state, data) {
    state.usersData = data
  },
  setWork(state, data) {
    state.workData = data
  },
  setMe(state, data) {
    state.myData = data
  },
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
  increment(context) {
    context.commit('increment')
  },
  decrement(context) {
    context.commit('decrement')
  },
  fetchWorks({ commit }) {
    // Lakukan panggilan API di sini, misalnya dengan axios
    this.$axios.get('/works')
      .then(response => {
        commit('setWorks', response.data)
      })
      .catch(error => {
        console.error('Error fetching data from API:', error)
      })
  },
  fetchUsers({ commit }) {
    // Lakukan panggilan API di sini, misalnya dengan axios
    this.$axios.get('/users')
      .then(response => {
        commit('setUsers', response.data)
      })
      .catch(error => {
        console.error('Error fetching data from API:', error)
      })
  },
  fetchWorkById({ commit }, id) {
    // Lakukan panggilan API di sini, misalnya dengan axios
    this.$axios.get('/works/' + id)
      .then(response => {
        commit('setWork', response.data)
      })
      .catch(error => {
        console.error('Error fetching data from API:', error)
      })
  },
  fetchUserById({ commit }, id) {
    // Lakukan panggilan API di sini, misalnya dengan axios
    this.$axios.get('/users/' + id)
      .then(response => {
        commit('setUser', response.data)
      })
      .catch(error => {
        console.error('Error fetching data from API:', error)
      })
  },
  auth({ commit }, params) {
    // Lakukan panggilan API di sini, misalnya dengan axios
    this.$axios.get(`/users?username=${params.username}&password=${params.password}`)
      .then(response => {
        commit('setMe', response.data)
      })
      .catch(error => {
        console.error('Error fetching data from API:', error)
      })
  },
  regis({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/users', {username:data.username, pen_name:data.username, password:data.password} )
        .then(response => {
          console.log('Response: ', response.data)
          resolve(response.data)
        })
        .catch(error => {
          console.error('Error: ', error)
          reject(error)
        })
    })
  },
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/users/login', {username:data.username, password:data.password} )
        .then(response => {
          // Lakukan sesuatu jika POST berhasil, jika diperlukan
          commit('setMe', response.data)
          resolve(response.data)
        })
        .catch(error => {
          console.error('Error: ', error)
          reject(error)
        })
    })
  },
}

export const getters = {
  getCounter(state) {
    return state.counter
  },
  works(state) {
    return state.worksData
  },
  users(state) {
    return state.usersData
  },
  work(state) {
    return state.workData
  },
  me(state) {
    return state.myData
  }
}