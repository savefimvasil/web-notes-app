<template>
	<div class="notes-app">
		<h2 class="app-header">{{headerTitle}}</h2>
		<NoteEditor />
		<NotesGrid />
	</div>
</template>

<script>

import NoteEditor from './components/NoteEditor.vue';
import NotesGrid from './components/NotesGrid.vue';

export default {
  name: 'NotesApp',

  components: {
    NoteEditor,
    NotesGrid
  },

  data() {
    return {
      headerTitle: 'NotesApp',
    };
  },

  mounted() {
    this.$store.dispatch('getNotes')
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-weight: 300;
  background-color: #eaeaea;
}

.notes-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}

.app-header {
  text-align: center;
  font-weight: 500;
  color: grey;
  text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
}
</style>
