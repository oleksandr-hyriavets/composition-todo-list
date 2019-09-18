<template>
  <div>
    <AInput v-model="state.newNote" />
    <button @click="addNote">Add</button>

    <hr />

    <ItemList>
      <SimpleNote
        v-for="(note, index) in state.allNotes"
        :key="index"
        :content="note.content"
        @delete="deleteNote(note.id)"
      />
    </ItemList>
  </div>
</template>

<script lang='ts'>
import { createComponent, reactive, onMounted } from '@vue/composition-api'

import { AInput } from '@/components/shared/AInput'
import { ItemList } from '@/components/shared/ItemList'
import { SimpleNote } from '@/components/Notes/SimpleNote'

import { LocalStorageService } from '@/services/LocalStorageService'

import { Note } from '@/types/Note'

const localStorageService = new LocalStorageService(window.localStorage)

async function getAllNotes(): Promise<Note[]> {
  const allNotes = (await localStorageService.get('notes')) as Note[]

  return allNotes || []
}

function useNotes() {
  const state = reactive({
    newNote: '',
    allNotes: [] as Note[]
  })

  async function addNote() {
    if (state.newNote === '') return

    const newNote: Note = {
      id: Math.round(Math.random() * 10000),
      content: state.newNote,
      createdAt: new Date(),
      important: false,
      rejected: false
    }

    const newAllNotes = [...state.allNotes, newNote]

    try {
      await localStorageService.set('notes', newAllNotes)

      state.allNotes = newAllNotes
      state.newNote = ''
    } catch (err) {
      console.error(err)
    }
  }

  async function deleteNote(noteId: number) {
    const newAllNotes = state.allNotes.filter(note => note.id !== noteId)

    try {
      await localStorageService.set('notes', newAllNotes)

      state.allNotes = newAllNotes
    } catch (err) {
      console.error(err)
    }
  }

  onMounted(async () => {
    try {
      state.allNotes = await getAllNotes()
    } catch (err) {
      console.error(err)
    }
  })

  return {
    state,
    addNote,
    deleteNote
  }
}

export default createComponent({
  components: {
    AInput,
    ItemList,
    SimpleNote
  },
  setup() {
    return {
      ...useNotes()
    }
  }
})
</script>
