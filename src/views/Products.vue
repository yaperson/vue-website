<script>
import card from '@/components/card.vue'
import notes from '@/services/notes.js'

export default {
    name: 'Products',
    components: {
        card: card,
        notes: null
    },
    data() {
        return {
            cardIsOpen: null,
        }
    },
    async mounted() {
        this.notes = await notes.getNotes()
        // this.notes = JSON.parse(this.notes)
        console.log(this.notes)
    }
}
</script>

<template>
    <h1>Products</h1>

    <h2>Notes from API</h2>
    <div class="notes__container">
        <div class="card" v-for="note in this.notes" :key="note.noteTitle">
            <span class="card__title" v-on:click="cardIsOpen =! cardIsOpen">{{ note.noteTitle }}</span>
            <card v-if="cardIsOpen">
                <span>{{ note.noteContent }}</span>
            </card>
        </div>
    </div>

</template>

<style>
.product__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card {
    min-width: 300px;
    background-color: ghostwhite;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: solid 2px;
    display: flex;
    user-select: none;
    justify-content: space-between;
}

.card button {
    border: none;
    background-color: transparent;
    color: rgb(4, 118, 194);
    font-size: medium;
    transition: 0.2s;
}

.card button:hover {
    transition: 0.2s;
    cursor: pointer;
    box-shadow: 0 1px 0 0;
}

form {
    display: flex;
    flex-direction: column;
}

form input,
textarea {
    margin: 5px;
    border: none;
    box-shadow: 0px 0 0 2px black;
    padding: 10px;
    border-radius: 5px;
}

form button {
    border: none;
    background-color: #32a3ff;
    border-radius: 5px;
    color: white;
    width: 130px;
    height: 30px;
    margin: 5px;
}
</style>