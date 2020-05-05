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
    }
  },
  actions: {
    setCards({ commit }, cards) {
      commit('initCards', cards)
    },
    renameCard({ commit }, payload) {
      commit('renameCard', payload)
    }
  }
})
