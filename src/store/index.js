import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  getters: {
    cards: state => state.cards
  },
  mutations: {
    initCards(state, cards) {
      state.cards = cards
    },
    renameCard(state, payload) {
      state.cards.find(card => card.id === payload.cardId).name = payload.name
    },
    updateTask(state, payload) {
      let card = state.cards.find(card => card.id === payload.cardId)
      let task = card.items.find(item => item.id === payload.taskId)
      Object.keys(payload.task).forEach(key => {
        task[key] = payload.task[key]
      })
    },
    deleteTask(state, payload) {
      let card = state.cards.find(card => card.id === payload.cardId)
      let taskIndex = card.items.findIndex(item => item.id === payload.taskId)
      Vue.delete(card.items, taskIndex)
    }
  },
  actions: {
    setCards({ commit }, cards) {
      commit('initCards', cards)
    },
    renameCard({ commit }, payload) {
      commit('renameCard', payload)
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload)
    },
    deleteTask({ commit }, payload) {
      commit('deleteTask', payload)
    }
  }
})
