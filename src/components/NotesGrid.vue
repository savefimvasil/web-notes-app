<template>
	<div class="notes-grid" ref="grid">
		<NoteItem
			v-for="note in notes"
			:key="note.id"
			:note="note"
		/>
	</div>
</template>

<script>
import Masonry from 'masonry-layout';
import NoteItem from './NoteItem';

export default {
  components: {
    NoteItem
  },

  computed: {
    notes() {
      const sortedNotes = this.$store.getters.sortedNotes;
      const result = sortedNotes.map(i => {
        const words = i.text.split(' ')

        const wordsWithTags = words.map(item => {
          if (item.includes('#')) {
            return `<a href="${item}">${item}</a>`
          }
          return item
        })
        return {
          ...i,
          text: wordsWithTags.join(' ')
        }
      })
      return result.filter(i => i.text.includes(this.$route.hash));
    }
  },

  methods: {
    chooseTag() {
      console.log('choose tag')
    },
  },

  mounted() {
    const grid = this.$refs.grid;
    this.msnry = new Masonry(grid, {
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true
    });
  },

  updated() {
    this.msnry.reloadItems();
    this.msnry.layout();
  }
};
</script>

<style>
.notes-grid {
  margin: 0 auto;
}
</style>
