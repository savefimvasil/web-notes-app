<template>
	<div class="note" :style="{'background-color': note.bgColor}">
		<span class="delete-note" @click="deleteNote(note.messageID)">x</span>
		<span v-html="note.text"></span>
	</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['note'],
  methods: {
    deleteNote(id) {
      this.$store.dispatch('deleteNote',	id)
    }
  }
};
</script>

<style>
a:hover {
  cursor: pointer;
  color: blue;
} 

.note {
  width: 200px;
  height: auto;
  float: left;
  background-color: yellow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s;
  word-wrap: break-word;
  position: relative;
}

.note:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.delete-note {
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.note:hover .delete-note {
  display: block;
}
</style>
