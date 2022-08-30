<template>
    <main>
        <ul id="movie-card-container" v-for="(response, index) in foundFilm" :key="index">
            <li>Titolo: {{ response.title }}</li>
            <li>Titolo Originale: {{ response.original_title }}</li>
            <li>Lingua: {{ response.original_language }}</li>
            <li>Voto: {{ response.vote_average }}</li>
        </ul>
    </main>
</template>

<script>

    export default {
        name:'appMain',
        props: {
            foundFilm: Array,
        },
        data() {
            return {

            }
        }
    }
    
</script>

<style lang="scss">

</style>