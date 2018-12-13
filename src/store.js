import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },

  getters: {
    sortedNotes: state => state.notes.sort((a, b) => b.messageID - a.messageID),
  },

  mutations: {
    set: (state, items) => {
      state.notes = items
    },
    push: (state, item) => {
      state.notes = [...state.notes, item]
    },
    delete: (state, id) => {
      state.notes = state.notes.filter(i => i.messageID !== id)
    },
  },

  actions: {
    getNotes({ commit }) {
      axios('https://apeps.kiev.ua/api/getMessages')
        .then(response => {
          commit('set', response.data)
        })
        .catch(error => {
          console.log(error);
        });
    },

    addNote({ commit }, note) {
      axios({
        method: 'post',
        url: 'https://apeps.kiev.ua/api/addMessage',
        data: new URLSearchParams(note)
      })
        .then(response => {
          if (response.data) {
            note.messageID = response.data;
            commit('push', note);
          }
        })
        .catch(function(error) {
          console.log(error)
        });
    },

    deleteNote({ commit }, id) {
      axios({
        method: 'post',
        url: 'https://apeps.kiev.ua/api/deleteMessage',
        data: new URLSearchParams({ messageID: id })
      })
        .then(response => {
          commit('delete', id);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
