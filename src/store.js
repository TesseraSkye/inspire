import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import todoSorter from './store-utils/todoSorter.js'

Vue.use(BootstrapVue)
Vue.use(Vuex)
require('bootstrap')

const _api = Axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/',
  timeout: 5000
});

export default new Vuex.Store({
  modules: {
    todoSorter
  },
  state: {
    imageData: {},
    weatherData: {},
    quoteData: {},
    username: "",
    dateData: {},
    todoList: [],
    lastTodoSort: {},
    lastTodoSearch: {}

  },
  mutations: {
    imageData(state, data) {
      state.imageData = data
    },
    weatherData(state, data) {
      state.weatherData = data
    },
    quoteData(state, data) {
      state.quoteData = data
    },
    username(state, data) {
      state.username = data
    },
    dateData(state, data) {
      state.dateData = data
    },
    //
    todoList(state, data) {
      state.todoList = data
    },
    lastTodoSort(state, data) {
      state.lastTodoSort = data
    },
    lastTodoSearch(state, data) {
      state.lastTodoSearch = data
    }
  },
  actions: {
    getData({ dispatch }) {
      dispatch('getImageData')
      dispatch('getQuoteData')
      dispatch('getWeatherData')
      dispatch('getTodos')
    },
    getImageData({ commit }) {
      _api.get('images')
        .then(res => {
          commit('imageData', res.data)
        })
        .catch(err => {
          if (err.toString().includes("timeout")) {
            //
          } else { console.error(err) }
        })
    },
    getQuoteData({ commit }) {
      _api.get("quotes")
        .then(res => {
          commit("quoteData", res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getWeatherData({ commit }) {
      _api.get("weather")
        .then(res => {
          commit("weatherData", res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getLocalName({ commit, dispatch }) {
      setTimeout(() => {
        dispatch("getTodos");
      }, 1000);
      let un = localStorage["inspUser"]
      commit("username", un)
    },
    initDate({ commit }) {
      let _Date = new Date();
      commit("dateData", _Date)
    },
    //TODOS
    getTodos({ commit }) {
      let user = this.state.username
      _api.get(user + "/todos")
        .then(res => {
          commit("todoList", res.data.data)
        })
    },
    getTodoByID({ commit }, id) {
      let user = this.state.username
      _api.get(user + "/todos/" + id)
        .then(res => {
          commit("lastTodoSearch", res.data.data)
        })
    },
    // /////BREAK REFERENCE!
    // sortTodos({ dispatch }, sortMethod) {
    //   let todoListData = this.state.todoList
    //   let data = dispatch('newTodoSort', [todoListData, sortMethod])
    //   console.log({ data })
    //   return data
    // },
    postTodo({ dispatch }, desc) {
      let user = this.state.username
      setTimeout(() => {
        dispatch("getTodos");
      }, 1000);
      _api.post(user + "/todos", {
        description: desc
      })
        .catch(err => {
          console.error(err)
        })
    },
    deleteTodo({ dispatch }, id) {
      let user = this.state.username
      setTimeout(() => {
        dispatch("getTodos");
      }, 1000);
      _api.delete(user + "/todos/" + id)
        .catch(err => {
          console.error(err)
        })
    },
    toggleTodoState({ dispatch }, id) {
      let user = this.state.username
      dispatch("getTodoByID", id)
      setTimeout(() => {
        _api.put(user + "/todos/" + id, { completed: !this.state.lastTodoSearch.completed })
          .then(res => {
          })
          .catch(err => {
            console.error(err)
          })
      }, 500)
    }
  }
})
