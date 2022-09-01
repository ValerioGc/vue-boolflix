<template>
    <!-- Film -->
    <div v-if="type == 'movie'">
        <span>
            <span class="inf">Titolo:</span>
            <p v-if="response[indx].name !== ''">{{ response[indx].title }}</p>
            <p v-else class="alert-not-found">Titolo non trovato</p>
        </span>
        <span>
            <span class="inf">Titolo Originale:</span>
            <p v-if="response[indx].name !== ''">{{ response[indx].original_title }}</p>
            <p v-else class="alert-not-found">Titolo Originale non trovato</p>
        </span>
    </div>
    <!-- Serie TV -->
    <div v-else>
        <span>
            <span class="inf">Titolo:</span>
            <p v-if="response[indx].name !== ''">{{ response[indx].name }}</p>
            <p v-else class="alert-not-found">Titolo non trovato</p>
        </span>
        <span>
            <span class="inf">Titolo Originale:</span>
            <p v-if="response[indx].name !== ''">{{ response[indx].original_name }}</p>
            <p v-else class="alert-not-found">Titolo Originale non trovato</p>
        </span>
    </div>
</template>

<script>

    export default {
        name:'titleCard',
        props: {
            response: Array,
            indx: Number,
            type: String,
        }
    }

</script>

<style lang="scss"></style>